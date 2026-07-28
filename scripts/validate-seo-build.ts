/**
 * Structural SEO/SSG validation for the production dist/ output.
 * Uses cheerio (DOM parse) — not brittle substring-only checks.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'cheerio';
import { homeSeo } from '../src/seo/types.ts';
import { absoluteUrl } from '../src/routes.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

function fail(message: string): never {
  console.error(`[validate:seo-build] FAIL: ${message}`);
  process.exit(1);
}

function ok(message: string): void {
  console.log(`[validate:seo-build] OK: ${message}`);
}

async function assertFile(rel: string): Promise<void> {
  try {
    await fs.access(path.join(distDir, rel));
    ok(`exists ${rel}`);
  } catch {
    fail(`missing ${rel}`);
  }
}

async function main(): Promise<void> {
  await assertFile('index.html');
  await assertFile('robots.txt');
  await assertFile('sitemap.xml');
  await assertFile('favicon.svg');
  await assertFile('logo.png');

  const html = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
  const $ = load(html);

  const title = $('head title').first().text().trim();
  if (!title) fail('missing <title>');
  if (title !== homeSeo.title) fail(`title mismatch: got "${title}"`);
  ok(`title: ${title}`);

  const description = $('head meta[name="description"]').attr('content')?.trim();
  if (!description) fail('missing meta description');
  if (description !== homeSeo.description) fail('description mismatch');
  ok('meta description');

  const canonical = $('head link[rel="canonical"]').attr('href')?.trim();
  if (canonical !== absoluteUrl('/')) fail(`canonical expected ${absoluteUrl('/')}, got ${canonical}`);
  ok(`canonical: ${canonical}`);

  const ogTitle = $('head meta[property="og:title"]').attr('content');
  const ogDesc = $('head meta[property="og:description"]').attr('content');
  const ogUrl = $('head meta[property="og:url"]').attr('content');
  if (!ogTitle || !ogDesc || !ogUrl) fail('incomplete Open Graph tags');
  ok('Open Graph basic tags');

  const twCard = $('head meta[name="twitter:card"]').attr('content');
  if (!twCard) fail('missing twitter:card');
  ok('Twitter card');

  const jsonLdScripts = $('script[type="application/ld+json"]')
    .toArray()
    .map((el) => $(el).text());
  if (jsonLdScripts.length === 0) fail('missing JSON-LD');

  let foundOrg = false;
  for (const raw of jsonLdScripts) {
    let data: unknown;
    try {
      data = JSON.parse(raw);
    } catch {
      fail('JSON-LD is not valid JSON');
    }
    const nodes = Array.isArray(data) ? data : [data];
    for (const node of nodes) {
      if (
        node &&
        typeof node === 'object' &&
        '@type' in node &&
        (node as { '@type': string })['@type'] === 'Organization'
      ) {
        foundOrg = true;
        const org = node as { name?: string; url?: string };
        if (!org.name || !org.url) fail('Organization JSON-LD missing name/url');
      }
    }
  }
  if (!foundOrg) fail('Organization JSON-LD not found');
  ok('Organization JSON-LD');

  const root = $('#root');
  if (root.length !== 1) fail('#root missing');
  const rootHtml = root.html()?.trim() ?? '';
  if (rootHtml.length < 200) fail('#root has no meaningful prerendered HTML');
  ok(`#root prerendered (${rootHtml.length} chars)`);

  const h1s = root.find('h1');
  if (h1s.length !== 1) fail(`expected exactly 1 H1 inside #root, found ${h1s.length}`);
  const h1Text = h1s.first().text().replace(/\s+/g, ' ').trim();
  if (!h1Text) fail('H1 is empty');
  ok(`H1: ${h1Text}`);

  const bodyText = root.text().replace(/\s+/g, ' ');
  if (!/Dinamic Systems/i.test(bodyText)) fail('visible text missing "Dinamic Systems"');
  if (!/empresa argentina/i.test(bodyText) && !/inventarios físicos/i.test(bodyText)) {
    fail('visible descriptive copy about the company/services missing');
  }
  ok('visible company/services copy in #root');

  if (rootHtml.includes('/src/assets/')) {
    fail('#root still references /src/assets/ (manifest rewrite failed)');
  }
  if (!rootHtml.includes('/assets/')) {
    fail('#root missing hashed /assets/ image URLs');
  }
  ok('asset URLs rewritten to /assets/*');

  const faviconHref = $('link[rel="icon"]').first().attr('href');
  if (!faviconHref) fail('favicon link missing');
  const faviconFile = faviconHref.replace(/^\//, '');
  await assertFile(faviconFile);

  const sitemap = await fs.readFile(path.join(distDir, 'sitemap.xml'), 'utf-8');
  const sm = load(sitemap, { xml: true });
  const locs = sm('urlset > url > loc')
    .toArray()
    .map((el) => sm(el).text().trim());
  if (locs.length !== 1 || locs[0] !== absoluteUrl('/')) {
    fail(`sitemap should only list ${absoluteUrl('/')}, got ${JSON.stringify(locs)}`);
  }
  ok('sitemap.xml lists only home');

  const robots = await fs.readFile(path.join(distDir, 'robots.txt'), 'utf-8');
  if (!/Sitemap:\s*https:\/\/dinamicsystems\.com\/sitemap\.xml/i.test(robots)) {
    fail('robots.txt missing Sitemap line');
  }
  ok('robots.txt');

  console.log('[validate:seo-build] all checks passed');
}

main().catch((err) => {
  console.error('[validate:seo-build] error', err);
  process.exit(1);
});
