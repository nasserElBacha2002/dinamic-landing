/**
 * Structural SEO/SSG validation for multipage production dist/.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'cheerio';
import { interiorContentByRouteId } from '../src/content/registry.ts';
import { absoluteUrl, getSitemapLocs, publishedRoutes, routesForHomeExplore } from '../src/routes.ts';
import { PAGE_JSON_LD_SCRIPT_ID } from '../src/seo/jsonLd.ts';
import { defaultOgImage } from '../src/seo/types.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(path.resolve(__dirname, '..'), 'dist');

function fail(message: string): never {
  console.error(`[validate:seo-build] FAIL: ${message}`);
  process.exit(1);
}

function ok(message: string): void {
  console.log(`[validate:seo-build] OK: ${message}`);
}

function distPathForLoc(loc: string): string {
  if (loc === '/') return path.join(distDir, 'index.html');
  const rel = loc.replace(/^\//, '').replace(/\/$/, '');
  return path.join(distDir, rel, 'index.html');
}

async function assertFile(absOrRel: string, label?: string): Promise<void> {
  const full = path.isAbsolute(absOrRel) ? absOrRel : path.join(distDir, absOrRel);
  try {
    await fs.access(full);
    ok(`exists ${label ?? path.relative(distDir, full)}`);
  } catch {
    fail(`missing ${label ?? absOrRel}`);
  }
}

function collectTypes(node: unknown, types: Set<string>): void {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    node.forEach((n) => collectTypes(n, types));
    return;
  }
  const obj = node as Record<string, unknown>;
  if (typeof obj['@type'] === 'string') types.add(obj['@type']);
  if (Array.isArray(obj['@graph'])) collectTypes(obj['@graph'], types);
}

async function validateHtmlFile(
  filePath: string,
  opts: {
    title: string;
    description: string;
    canonical: string;
    robots: string;
    h1Includes: string;
    requireBreadcrumbs: boolean;
    schemaTypes: string[];
    requireJsonLd: boolean;
    mustIncludeText?: string[];
    mustIncludeHrefs?: string[];
  },
): Promise<void> {
  const html = await fs.readFile(filePath, 'utf-8');
  const $ = load(html);
  const label = path.relative(distDir, filePath);

  if (html.includes('/src/assets/')) fail(`${label}: still has /src/assets/`);

  const titles = $('head title');
  if (titles.length !== 1) fail(`${label}: expected 1 title, got ${titles.length}`);
  if (titles.first().text().trim() !== opts.title) fail(`${label}: title mismatch`);

  const descriptions = $('head meta[name="description"]');
  if (descriptions.length !== 1) fail(`${label}: expected 1 description`);
  if (descriptions.first().attr('content')?.trim() !== opts.description) fail(`${label}: description mismatch`);

  const canonicals = $('head link[rel="canonical"]');
  if (canonicals.length !== 1) fail(`${label}: expected 1 canonical`);
  if (canonicals.first().attr('href')?.trim() !== opts.canonical) fail(`${label}: canonical mismatch`);

  const robots = $('head meta[name="robots"]').attr('content')?.trim();
  if (robots !== opts.robots) fail(`${label}: robots expected ${opts.robots}, got ${robots}`);

  const ogImage = $('head meta[property="og:image"]').attr('content');
  if (!ogImage || ogImage !== defaultOgImage) fail(`${label}: og:image invalid`);
  if (!$('head meta[property="og:title"]').attr('content')) fail(`${label}: missing og:title`);

  const root = $('#root');
  if (root.length !== 1) fail(`${label}: #root missing`);
  const rootHtml = root.html()?.trim() ?? '';
  if (rootHtml.length < 100) fail(`${label}: #root too empty`);

  const h1s = root.find('h1');
  if (h1s.length !== 1) fail(`${label}: expected 1 H1, got ${h1s.length}`);
  const h1Text = h1s.first().text().replace(/\s+/g, ' ').trim();
  if (!h1Text.toLowerCase().includes(opts.h1Includes.toLowerCase())) {
    fail(`${label}: H1 missing expected text "${opts.h1Includes}" (got "${h1Text}")`);
  }

  if (opts.requireBreadcrumbs) {
    const nav = root.find('nav[aria-label="Miga de pan"]');
    if (nav.length !== 1) fail(`${label}: breadcrumbs nav missing`);
  }

  if (opts.requireJsonLd) {
    const rawLd = $(`script#${PAGE_JSON_LD_SCRIPT_ID}[type="application/ld+json"]`).text();
    if (!rawLd) fail(`${label}: missing #${PAGE_JSON_LD_SCRIPT_ID}`);
    if (rawLd.includes('<') && !rawLd.includes('\\u003c')) fail(`${label}: unsafe JSON-LD`);
    let data: unknown;
    try {
      data = JSON.parse(rawLd);
    } catch {
      fail(`${label}: JSON-LD not valid JSON`);
    }
    const types = new Set<string>();
    collectTypes(data, types);
    for (const t of opts.schemaTypes) {
      if (!types.has(t)) fail(`${label}: missing schema @type ${t} (found ${[...types].join(', ')})`);
    }
  }

  for (const text of opts.mustIncludeText ?? []) {
    if (text && !root.text().includes(text)) fail(`${label}: missing visible text "${text}"`);
  }

  for (const href of opts.mustIncludeHrefs ?? []) {
    const alt = href.endsWith('/') && href !== '/' ? href.slice(0, -1) : href;
    const found = rootHtml.includes(`href="${href}"`) || rootHtml.includes(`href="${alt}"`);
    if (!found) fail(`${label}: missing internal link ${href}`);
  }

  if (/lorem ipsum|TODO placeholder|próximamente contenido/i.test(root.text())) {
    fail(`${label}: looks like placeholder content`);
  }

  ok(`${label}: SEO + content`);
}

async function main(): Promise<void> {
  await assertFile('robots.txt');
  await assertFile('sitemap.xml');
  await assertFile('favicon.svg');
  await assertFile('logo.png');
  await assertFile('404.html');

  for (const route of publishedRoutes) {
    const file = distPathForLoc(route.loc);
    await assertFile(file, path.relative(distDir, file));
    const content = interiorContentByRouteId[route.id];
    const schemaTypes =
      route.pageType === 'home'
        ? ['Organization', 'WebSite', 'WebPage', 'Service', 'FAQPage']
        : route.pageType === 'service'
          ? ['Organization', 'BreadcrumbList', 'Service']
          : route.pageType === 'resource'
            ? ['Organization', 'BreadcrumbList', 'Article']
            : ['Organization', 'BreadcrumbList'];

    await validateHtmlFile(file, {
      title: route.seo.title,
      description: route.seo.description,
      canonical: absoluteUrl(route.loc),
      robots: route.seo.robots ?? 'index, follow',
      h1Includes:
        route.pageType === 'home' ? 'inventarios físicos' : (content?.h1 ?? route.seo.title.slice(0, 24)),
      requireBreadcrumbs: route.pageType !== 'home',
      schemaTypes,
      requireJsonLd: true,
      mustIncludeText:
        route.pageType === 'home'
          ? [
              'Dinamic Systems',
              'empresa argentina',
              '¿Dinamic Systems realiza inventarios en depósitos?',
              'Solicitá una evaluación para tu inventario',
            ]
          : [content?.h1 ?? ''],
      mustIncludeHrefs:
        route.pageType === 'home'
          ? routesForHomeExplore().map((r) => r.path)
          : content?.relatedLinks.map((l) => (l.to.includes('#') ? l.to : l.to.replace(/\/$/, '') || '/')),
    });

    if (route.pageType === 'home') {
      const homeHtml = await fs.readFile(file, 'utf-8');
      const $home = load(homeHtml);
      const rawLd = $home(`script#${PAGE_JSON_LD_SCRIPT_ID}[type="application/ld+json"]`).text();
      const data = JSON.parse(rawLd) as { '@graph'?: unknown[] };
      const faqNode = (data['@graph'] ?? []).find(
        (n) => typeof n === 'object' && n && (n as { '@type'?: string })['@type'] === 'FAQPage',
      ) as { mainEntity?: Array<{ name?: string; acceptedAnswer?: { text?: string } }> } | undefined;
      if (!faqNode?.mainEntity?.length) fail('home: FAQPage mainEntity empty');
      for (const q of faqNode.mainEntity) {
        const name = q.name ?? '';
        const answer = q.acceptedAnswer?.text ?? '';
        if (!name || !$home('#root').text().includes(name)) fail(`home: FAQ question missing in HTML: ${name}`);
        if (!answer || !$home('#root').text().includes(answer)) fail(`home: FAQ answer missing in HTML: ${name}`);
      }
      if (/AggregateRating|Review/.test(rawLd)) fail('home: forbidden Review/AggregateRating in JSON-LD');
      ok('home: FAQPage matches visible FAQ HTML');
    }  }

  await validateHtmlFile(path.join(distDir, '404.html'), {
    title: 'Página no encontrada | Dinamic Systems',
    description: 'La página solicitada no existe o fue movida. Volvé al inicio o explorá nuestros servicios.',
    canonical: absoluteUrl('/404'),
    robots: 'noindex, follow',
    h1Includes: 'No encontramos',
    requireBreadcrumbs: false,
    schemaTypes: [],
    requireJsonLd: false,
    mustIncludeHrefs: ['/', '/servicios/inventarios-fisicos'],
  });

  const sitemap = await fs.readFile(path.join(distDir, 'sitemap.xml'), 'utf-8');
  const sm = load(sitemap, { xml: true });
  const locs = sm('urlset > url > loc')
    .toArray()
    .map((el) => sm(el).text().trim())
    .sort();
  const expected = getSitemapLocs().slice().sort();
  if (locs.length !== expected.length || locs.some((l, i) => l !== expected[i])) {
    fail(`sitemap mismatch.\n expected: ${JSON.stringify(expected)}\n got: ${JSON.stringify(locs)}`);
  }
  if (locs.some((l) => l.includes('404'))) fail('sitemap must not include 404');
  if (expected.length !== 12) fail(`expected 12 published URLs in sitemap, got ${expected.length}`);
  ok(`sitemap.xml has exactly ${expected.length} published URLs`);

  try {
    await fs.access(path.join(distDir, 'informacion-de-privacidad'));
    fail('dist must not contain informacion-de-privacidad (unpublished legal draft)');
  } catch {
    ok('no unpublished legal privacy path in dist');
  }

  const sampleHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
  if (!sampleHtml.includes('name="twitter:card" content="summary"')) {
    fail('twitter:card should be summary until a dedicated OG image exists');
  }
  ok('twitter:card=summary');

  const robots = await fs.readFile(path.join(distDir, 'robots.txt'), 'utf-8');
  if (!/Sitemap:\s*https:\/\/dinamicsystems\.com\/sitemap\.xml/i.test(robots)) {
    fail('robots.txt missing Sitemap line');
  }
  ok('robots.txt');

  console.log('[validate:seo-build] all checks passed');
}

main().catch((err: unknown) => {
  console.error('[validate:seo-build] error', err);
  process.exit(1);
});
