/**
 * Validates internal link graph: published paths, relatedLinks/CTAs, and inbound coverage.
 */
import { load } from 'cheerio';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { interiorContentByRouteId } from '../src/content/registry.ts';
import {
  publishedRoutes,
  routesForHomeExplore,
  type PublishedRoute,
} from '../src/routes.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(path.resolve(__dirname, '..'), 'dist');

function fail(message: string): never {
  console.error(`[validate:links] FAIL: ${message}`);
  process.exit(1);
}

function ok(message: string): void {
  console.log(`[validate:links] OK: ${message}`);
}

function normalizePath(to: string): string | null {
  if (to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('http')) return null;
  if (to.startsWith('#')) return null; // same-page hash
  if (to.startsWith('/#')) return '/';
  if (to === '/') return '/';
  return to.endsWith('/') && to !== '/' ? to.slice(0, -1) : to;
}

const routes = publishedRoutes as readonly PublishedRoute[];
const publishedPaths = new Set(routes.map((r) => r.path));
const inbound = new Map<string, Set<string>>();
for (const p of publishedPaths) inbound.set(p, new Set());

function addEdge(from: string, toRaw: string): void {
  const to = normalizePath(toRaw);
  if (to === null) return;
  if (!publishedPaths.has(to)) {
    fail(`${from}: broken internal link ${toRaw} (normalized ${to})`);
  }
  inbound.get(to)?.add(from);
}

function distPathForLoc(loc: string): string {
  if (loc === '/') return path.join(distDir, 'index.html');
  const rel = loc.replace(/^\//, '').replace(/\/$/, '');
  return path.join(distDir, rel, 'index.html');
}

async function main(): Promise<void> {
  for (const [routeId, content] of Object.entries(interiorContentByRouteId)) {
    for (const link of content.relatedLinks) {
      addEdge(routeId, link.to);
    }
    addEdge(routeId, content.cta.primaryTo);
    if (content.cta.secondaryTo) addEdge(routeId, content.cta.secondaryTo);
  }

  for (const route of routesForHomeExplore()) {
    addEdge('home', route.path);
  }

  for (const route of routes) {
    const html = await fs.readFile(distPathForLoc(route.loc), 'utf-8');
    const $ = load(html);
    $('#root a[href]').each((_, el) => {
      const href = $(el).attr('href');
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
      addEdge(route.id, href);
    });
  }

  const homeMust = routes.filter(
    (r) => Boolean(r.navigation?.showOnHome) || (r.pageType === 'service' && Boolean(r.navigation?.showInHeader)),
  );
  for (const route of homeMust) {
    const fromHome = inbound.get(route.path);
    if (!fromHome?.has('home')) {
      fail(`primary route ${route.path} must be linked from home`);
    }
  }

  for (const route of routes) {
    if (route.path === '/') continue;
    const sources = inbound.get(route.path);
    if (!sources || sources.size === 0) {
      fail(`orphan indexable route with no inbound internal links: ${route.path}`);
    }
  }

  ok(`checked content CTAs/relatedLinks for ${Object.keys(interiorContentByRouteId).length} pages`);
  ok(`${publishedPaths.size} published paths; inbound graph has no orphans`);
  console.log('[validate:links] all checks passed');
}

main().catch((err: unknown) => {
  console.error('[validate:links] error', err);
  process.exit(1);
});
