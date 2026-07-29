/**
 * Deterministic SSG prerender via Vite SSR (`renderToString`).
 * Generates one HTML file per entry in `publishedRoutes` plus `dist/404.html`.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer, type ViteDevServer } from 'vite';
import { interiorContentByRouteId } from '../src/content/registry.ts';
import { getSitemapLocs, publishedRoutes } from '../src/routes.ts';
import { toPageSeo } from '../src/seo/pageSeo.ts';
import { serializePageHead } from '../src/seo/serializePageHead.ts';
import { defaultOgImage } from '../src/seo/types.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

type RenderModule = {
  render: (url: string) => string;
};

type ViteManifestEntry = {
  file: string;
  src?: string;
};

type ViteManifest = Record<string, ViteManifestEntry>;

function assertRenderModule(mod: unknown): asserts mod is RenderModule {
  if (typeof mod !== 'object' || mod === null || typeof (mod as RenderModule).render !== 'function') {
    throw new Error(
      'prerender: SSR module must export render(url: string) => string (got invalid module from entry-server)',
    );
  }
}

async function loadClientManifest(): Promise<ViteManifest> {
  const candidates = [path.join(distDir, '.vite', 'manifest.json'), path.join(distDir, 'manifest.json')];
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

function applyPrerender(template: string, appHtml: string, headHtml: string): string {
  let html = template;
  html = html.replace(/<html\b[^>]*>/i, '<html lang="es">');
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
  const body = locs.map((loc) => `  <url>\n    <loc>${loc}</loc>\n  </url>`).join('\n');
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

async function writePage(mod: RenderModule, template: string, manifest: ViteManifest, urlPath: string, outFile: string, headHtml: string, expectH1Substring?: string) {
  const appHtmlRaw = mod.render(urlPath);
  if (typeof appHtmlRaw !== 'string') {
    throw new Error(`prerender: render(${urlPath}) must return a string`);
  }
  const appHtml = rewriteSrcAssetUrls(appHtmlRaw, manifest);
  if (!appHtml.includes('<h1')) {
    throw new Error(`prerender: missing H1 for ${urlPath}`);
  }
  if (expectH1Substring && !appHtml.includes(expectH1Substring)) {
    throw new Error(`prerender: H1/content mismatch for ${urlPath} (expected substring: ${expectH1Substring})`);
  }
  if (appHtml.includes('/src/assets/')) {
    throw new Error(`prerender: unresolved /src/assets/ URLs remain in ${urlPath}`);
  }
  const page = applyPrerender(template, appHtml, headHtml);
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, page, 'utf-8');
  console.log(`[prerender] wrote ${path.relative(root, outFile)}`);
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

    const loaded: unknown = await vite.ssrLoadModule('/src/entry-server.tsx');
    assertRenderModule(loaded);
    const mod: RenderModule = loaded;
    const manifest = await loadClientManifest();

    for (const route of publishedRoutes) {
      const content = interiorContentByRouteId[route.id];
      const seo = toPageSeo(route, content);
      const headHtml = serializePageHead(seo);
      const expect = route.pageType === 'home' ? 'Expertos' : content?.h1.slice(0, 24);
      await writePage(mod, template, manifest, route.path, await resolveOutFile(route.loc), headHtml, expect);
    }

    const notFoundHead = serializePageHead({
      title: 'Página no encontrada | Dinamic Systems',
      description: 'La página solicitada no existe o fue movida. Volvé al inicio o explorá nuestros servicios.',
      canonicalPath: '/404',
      robots: 'noindex, follow',
      ogType: 'website',
      ogImage: defaultOgImage,
    });
    await writePage(
      mod,
      template,
      manifest,
      '/__not_found_prerender__',
      path.join(distDir, '404.html'),
      notFoundHead,
      'No encontramos',
    );

    await writeSitemap();
    console.log('[prerender] wrote dist/sitemap.xml');
  } finally {
    await vite?.close();
  }
}

prerender().catch((err: unknown) => {
  console.error('[prerender] failed', err);
  process.exit(1);
});
