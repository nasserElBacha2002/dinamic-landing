/**
 * Deterministic SSG prerender via Vite SSR (`renderToString`).
 *
 * Head tags come from `serializePageHead` (same PageSeo source as SeoHead).
 * Body comes from React SSR. No Puppeteer / Chromium.
 *
 * Future routes: add to `publishedRoutes` and implement the page component;
 * this script already loops published routes into `dist/<path>/index.html`.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer, type ViteDevServer } from 'vite';
import { getSitemapLocs, publishedRoutes } from '../src/routes.ts';
import { buildOrganizationJsonLd } from '../src/seo/organizationJsonLd.ts';
import { serializePageHead } from '../src/seo/serializePageHead.ts';
import { homeSeo } from '../src/seo/types.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

type ViteManifestEntry = {
  file: string;
  src?: string;
};

type ViteManifest = Record<string, ViteManifestEntry>;

async function loadClientManifest(): Promise<ViteManifest> {
  const candidates = [
    path.join(distDir, '.vite', 'manifest.json'),
    path.join(distDir, 'manifest.json'),
  ];
  for (const candidate of candidates) {
    try {
      const raw = await fs.readFile(candidate, 'utf-8');
      return JSON.parse(raw) as ViteManifest;
    } catch {
      // try next
    }
  }
  throw new Error('prerender: Vite client manifest.json not found (enable build.manifest)');
}

/**
 * Vite SSR emits `/src/assets/...` URLs; the client bundle uses hashed `/assets/...`.
 * Rewrite using the client manifest so Hostinger + hydration stay consistent.
 */
function rewriteSrcAssetUrls(html: string, manifest: ViteManifest): string {
  const bySrc = new Map<string, string>();
  for (const entry of Object.values(manifest)) {
    if (entry.src?.startsWith('src/assets/') && entry.file) {
      bySrc.set(`/${entry.src}`, `/${entry.file}`);
    }
  }

  return html.replace(/\/src\/assets\/[^"'\s>]+/g, (match) => {
    const mapped = bySrc.get(match);
    if (!mapped) {
      throw new Error(`prerender: no manifest mapping for ${match}`);
    }
    return mapped;
  });
}


function seoForRoute(pathPattern: string) {
  if (pathPattern === '/') {
    return { ...homeSeo, jsonLd: buildOrganizationJsonLd() };
  }
  throw new Error(`prerender: no SEO config for unpublished/unknown route ${pathPattern}`);
}

function applyPrerender(template: string, appHtml: string, headHtml: string): string {
  let html = template;

  html = html.replace(/<html\b[^>]*>/i, '<html lang="es">');

  // Drop the Vite shell placeholder title; real tags come from serializePageHead.
  html = html.replace(/<title>[\s\S]*?<\/title>/i, '');

  html = html.replace(/<\/head>/i, `    ${headHtml}\n  </head>`);

  if (!html.includes('id="root"')) {
    throw new Error('prerender: dist/index.html missing #root');
  }

  html = html.replace(/<div id="root">[\s\S]*?<\/div>/i, `<div id="root">${appHtml}</div>`);

  return html;
}

async function writeSitemap(): Promise<void> {
  const locs = getSitemapLocs();
  const body = locs
    .map(
      (loc) => `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
  await fs.writeFile(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
}

async function resolveOutFile(loc: string): Promise<string> {
  if (loc === '/') return path.join(distDir, 'index.html');
  const rel = loc.replace(/^\//, '').replace(/\/$/, '');
  const dir = path.join(distDir, rel);
  await fs.mkdir(dir, { recursive: true });
  return path.join(dir, 'index.html');
}

async function prerender(): Promise<void> {
  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');

  let vite: ViteDevServer | undefined;
  try {
    vite = await createServer({
      root,
      mode: 'production',
      server: { middlewareMode: true },
      appType: 'custom',
      define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
      },
    });

    const mod = (await vite.ssrLoadModule('/src/entry-server.tsx')) as RenderModule;
    const manifest = await loadClientManifest();

    for (const route of publishedRoutes) {
      let appHtml = mod.render(route.path);
      appHtml = rewriteSrcAssetUrls(appHtml, manifest);
      if (!appHtml.includes('<h1') && !/Expertos/i.test(appHtml)) {
        throw new Error(`prerender: empty/incomplete HTML for ${route.path}`);
      }
      if (appHtml.includes('/src/assets/')) {
        throw new Error('prerender: unresolved /src/assets/ URLs remain in HTML');
      }
      const headHtml = serializePageHead(seoForRoute(route.path));
      const page = applyPrerender(template, appHtml, headHtml);
      const outFile = await resolveOutFile(route.loc);
      await fs.writeFile(outFile, page, 'utf-8');
      console.log(`[prerender] wrote ${path.relative(root, outFile)}`);
    }

    await writeSitemap();
    console.log('[prerender] wrote dist/sitemap.xml');
  } finally {
    await vite?.close();
  }
}

prerender().catch((err) => {
  console.error('[prerender] failed', err);
  process.exit(1);
});
