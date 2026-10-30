/**
 * Structural SEO/SSG validation for multipage production dist/.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'cheerio';
import { interiorContentByRouteId } from '../src/content/registry.ts';
import type { HubPageContent } from '../src/content/types.ts';
import {
  absoluteUrl,
  childRoutesForGroup,
  FUTURE_HUB_GROUPS,
  getPublishedHubForGroup,
  getSitemapLocs,
  HUB_PATH_BY_GROUP,
  publishedRoutes,
  routesForHomeExplore,
  type PublishedRoute,
} from '../src/routes.ts';
import { PAGE_JSON_LD_SCRIPT_ID } from '../src/seo/jsonLd.ts';
import {
  apacheRewriteRule,
  INTERNAL_REDIRECTS,
  matchInternalRedirect,
  PHASE1_INTERNAL_REDIRECTS,
} from '../src/seo/phase1InternalRedirects.ts';
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
  for (const value of Object.values(obj)) {
    if (value && typeof value === 'object') collectTypes(value, types);
  }
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
    const faqTypes = content?.faq?.length ? ['FAQPage'] : [];
    const schemaTypes =
      route.pageType === 'home'
        ? ['Organization', 'WebSite', 'WebPage', 'Service', 'FAQPage']
        : route.pageType === 'service'
          ? ['Organization', 'BreadcrumbList', 'Service', ...faqTypes]
          : route.pageType === 'resource'
            ? ['Organization', 'BreadcrumbList', 'Article', ...faqTypes]
            : route.pageType === 'hub'
              ? ['Organization', 'BreadcrumbList', 'CollectionPage', 'ItemList']
              : ['Organization', 'BreadcrumbList', ...faqTypes];

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
          : [content?.h1 ?? '', content?.faq?.[0]?.question ?? ''].filter(Boolean),
      mustIncludeHrefs:
        route.pageType === 'home'
          ? routesForHomeExplore().map((r) => r.path)
          : content?.relatedLinks.map((l) => l.to),
    });

    if (route.pageType === 'hub' && content?.kind === 'hub') {
      const hub = content as HubPageContent;
      const children = childRoutesForGroup(hub.group);
      if (children.length < 2) {
        fail(`${route.id}: hub must list at least 2 indexable children (got ${children.length})`);
      }
      if (hub.childGroups?.length) {
        const known = new Set(children.map((c) => c.id));
        for (const group of hub.childGroups) {
          for (const id of group.routeIds) {
            if (!known.has(id)) fail(`${route.id}: childGroup "${group.id}" references unknown route ${id}`);
          }
        }
      }
      const html = await fs.readFile(file, 'utf-8');
      for (const child of children) {
        if (!html.includes(`href="${child.loc}"`)) {
          fail(`${route.id}: missing canonical child link ${child.loc}`);
        }
      }
      ok(`${route.id}: hub lists ${children.length} children`);
    }

    if (route.pageType !== 'home' && route.pageType !== 'hub') {
      const hub = route.navigation?.group ? getPublishedHubForGroup(route.navigation.group) : undefined;
      if (hub) {
        const childHtml = await fs.readFile(file, 'utf-8');
        if (!childHtml.includes(`href="${hub.loc}"`)) {
          fail(`${route.id}: breadcrumb/internal hub link must use canonical ${hub.loc}`);
        }
      }
    }

    const pageHtml = await fs.readFile(file, 'utf-8');
    const $page = load(pageHtml);
    const rawLd = $page(`script#${PAGE_JSON_LD_SCRIPT_ID}[type="application/ld+json"]`).text();
    const data = JSON.parse(rawLd) as { '@graph'?: unknown[]; '@type'?: string };
    const graph = data['@graph'] ?? (data['@type'] ? [data] : []);
    const faqNode = graph.find(
      (n) => typeof n === 'object' && n && (n as { '@type'?: string })['@type'] === 'FAQPage',
    ) as
      | { '@id'?: string; mainEntity?: Array<{ name?: string; acceptedAnswer?: { text?: string } }> }
      | undefined;
    const visibleFaq = content?.faq ?? (route.pageType === 'home' ? undefined : undefined);
    if (route.pageType === 'home') {
      if (!faqNode?.mainEntity?.length) fail('home: FAQPage mainEntity empty');
      for (const q of faqNode.mainEntity) {
        const name = q.name ?? '';
        const answer = q.acceptedAnswer?.text ?? '';
        if (!name || !$page('#root').text().includes(name)) fail(`home: FAQ question missing in HTML: ${name}`);
        if (!answer || !$page('#root').text().includes(answer)) fail(`home: FAQ answer missing in HTML: ${name}`);
      }
      if (/AggregateRating|Review/.test(rawLd)) fail('home: forbidden Review/AggregateRating in JSON-LD');
      ok('home: FAQPage matches visible FAQ HTML');
    } else if (visibleFaq?.length) {
      const expectedId = `${absoluteUrl(route.loc)}#faq`;
      if (faqNode?.['@id'] !== expectedId) {
        fail(`${route.id}: FAQPage @id expected ${expectedId}, got ${faqNode?.['@id'] ?? '(missing)'}`);
      }
      if ((faqNode.mainEntity ?? []).length !== visibleFaq.length) {
        fail(
          `${route.id}: FAQPage has ${(faqNode.mainEntity ?? []).length} questions, visible FAQ has ${visibleFaq.length}`,
        );
      }
      const $faq = $page('#faq');
      if (!$faq.length) fail(`${route.id}: visible FAQ section #faq missing`);
      visibleFaq.forEach((item, index) => {
        const entity = faqNode.mainEntity?.[index];
        if (entity?.name !== item.question) {
          fail(`${route.id}: FAQ schema Q${index + 1} mismatch: "${entity?.name}" vs "${item.question}"`);
        }
        if (entity?.acceptedAnswer?.text !== item.answer) {
          fail(`${route.id}: FAQ schema A${index + 1} mismatch for "${item.question}"`);
        }
        if (!$faq.text().includes(item.question)) {
          fail(`${route.id}: FAQ question not visible: ${item.question}`);
        }
        if (!$faq.text().includes(item.answer)) {
          fail(`${route.id}: FAQ answer not visible: ${item.question}`);
        }
      });
      ok(`${route.id}: FAQPage matches visible FAQ 1:1`);
    } else if (faqNode) {
      fail(`${route.id}: FAQPage schema present without visible FAQ`);
    }

    if (content?.relatedLinks && route.pageType !== 'hub') {
      const links = content.relatedLinks;
      if (links.length < 2 || links.length > 5) {
        fail(`${route.id}: relatedLinks must be 2–5 (got ${links.length})`);
      }
      const redirectSources = new Set(INTERNAL_REDIRECTS.map((r) => `/${r.from}`));
      const seenTo = new Set<string>();
      for (const link of links) {
        if (seenTo.has(link.to)) fail(`${route.id}: duplicate related link ${link.to}`);
        seenTo.add(link.to);
        if (link.to.startsWith('/#') || link.to.startsWith('#') || link.to.startsWith('http')) continue;
        if (!link.to.startsWith('/') || !link.to.endsWith('/')) {
          fail(`${route.id}: related link must be canonical with trailing slash: ${link.to}`);
        }
        const noSlash = link.to.replace(/\/$/, '').replace(/^\//, '');
        if (redirectSources.has(link.to.replace(/\/$/, '')) || redirectSources.has(`/${noSlash}`)) {
          fail(`${route.id}: related link points at redirect source ${link.to}`);
        }
      }
    }
  }

  const commercialFaqIds = [
    'service-inventarios-fisicos',
    'service-inventarios-drones',
    'service-inventarios-ciclicos',
    'service-auditoria-inventarios',
    'industry-depositos',
    'industry-retail',
    'industry-operadores-logisticos',
  ];
  const commercialQuestions = new Map<string, string>();
  const commercialRelatedSignatures = new Map<string, string>();
  for (const id of commercialFaqIds) {
    const content = interiorContentByRouteId[id];
    if (!content?.faq?.length) fail(`${id}: commercial landing must have visible FAQ`);
    for (const item of content.faq) {
      const prior = commercialQuestions.get(item.question);
      if (prior) fail(`repeated FAQ question on ${id} and ${prior}: ${item.question}`);
      commercialQuestions.set(item.question, id);
      if (/por qué elegir dinamic|mejores|líderes|únicos/i.test(`${item.question} ${item.answer}`)) {
        fail(`${id}: generic/sales FAQ copy: ${item.question}`);
      }
    }
    const sig = content.relatedLinks.map((l) => l.to).join('|');
    const priorSig = [...commercialRelatedSignatures.entries()].find(([, value]) => value === sig);
    if (priorSig) fail(`${id}: relatedLinks cloned from ${priorSig[0]}`);
    commercialRelatedSignatures.set(id, sig);
  }
  ok(`commercial FAQ uniqueness: ${commercialQuestions.size} questions across ${commercialFaqIds.length} landings`);

  const h1ByPage = new Map<string, string>();
  const titleByPage = new Map<string, string>();
  for (const route of publishedRoutes as readonly PublishedRoute[]) {
    const title = route.seo.title.trim().toLowerCase();
    const priorTitle = titleByPage.get(title);
    if (priorTitle) fail(`duplicate title between ${route.id} and ${priorTitle}: ${route.seo.title}`);
    titleByPage.set(title, route.id);
    const h1 = (interiorContentByRouteId[route.id]?.h1 ?? (route.pageType === 'home' ? 'home' : '')).trim().toLowerCase();
    if (h1 && h1 !== 'home') {
      const priorH1 = h1ByPage.get(h1);
      if (priorH1) fail(`duplicate H1 between ${route.id} and ${priorH1}: ${h1}`);
      h1ByPage.set(h1, route.id);
    }
  }
  ok(`unique titles (${titleByPage.size}) and H1s (${h1ByPage.size})`);

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
  if (locs.some((l) => !l.endsWith('/'))) {
    fail(`sitemap loc missing trailing slash: ${locs.filter((l) => !l.endsWith('/')).join(', ')}`);
  }
  for (const group of FUTURE_HUB_GROUPS) {
    const futureLoc = absoluteUrl(HUB_PATH_BY_GROUP[group].loc);
    if (locs.includes(futureLoc)) fail(`sitemap must not include unpublished hub ${futureLoc}`);
  }
  const indexableHubs = (publishedRoutes as readonly PublishedRoute[]).filter(
    (r) => r.pageType === 'hub' && r.indexable !== false,
  );
  const expectedHubGroups = [
    'servicios',
    'industrias',
    'recursos',
    'buenas-practicas',
    'innovacion',
  ] as const;
  if (indexableHubs.length !== expectedHubGroups.length) {
    fail(`expected ${expectedHubGroups.length} indexable hubs, got ${indexableHubs.length}`);
  }
  for (const group of expectedHubGroups) {
    if (!getPublishedHubForGroup(group)) fail(`missing published hub for ${group}`);
  }
  if (getPublishedHubForGroup('investigacion')) {
    fail('hub /investigacion/ must stay unpublished until it has ≥2 indexable children');
  }
  const investigacionHubFile = path.join(distDir, 'investigacion', 'index.html');
  try {
    await fs.access(investigacionHubFile);
    fail('dist must not prerender indexable /investigacion/ hub');
  } catch {
    ok('unpublished /investigacion/ hub (metodología remains)');
  }
  await assertFile(
    path.join(distDir, 'investigacion', 'metodologia-inventarios', 'index.html'),
    'investigacion/metodologia-inventarios/index.html',
  );
  if (locs.includes(absoluteUrl('/investigacion/'))) {
    fail('sitemap must not include unpublished hub /investigacion/');
  }
  if (!locs.includes(absoluteUrl('/investigacion/metodologia-inventarios/'))) {
    fail('sitemap missing /investigacion/metodologia-inventarios/');
  }
  for (const hub of indexableHubs) {
    if (!locs.includes(absoluteUrl(hub.loc))) fail(`sitemap missing hub ${hub.loc}`);
  }
  ok(`sitemap.xml has exactly ${expected.length} published URLs`);

  await assertFile('.htaccess');
  const htaccess = await fs.readFile(path.join(distDir, '.htaccess'), 'utf-8');
  if (/pages\.dev|workers\.dev/i.test(htaccess)) {
    fail('.htaccess must not redirect Cloudflare Pages/Workers hosts');
  }
  if (!/Options -MultiViews -Indexes/.test(htaccess)) {
    fail('.htaccess must keep site-wide -Indexes');
  }
  if (!/RewriteRule \^a\(\$\|\/\) - \[L\]/.test(htaccess)) {
    fail('.htaccess must pass through legacy /a without SEO 301s');
  }
  const aIndex = path.join(distDir, 'a', 'index.html');
  try {
    await fs.access(aIndex);
    fail('dist must not prerender /a/index.html (would hide the Hostinger directory)');
  } catch {
    ok('no prerendered /a/index.html');
  }
  await assertFile(path.join(distDir, 'a', '.htaccess'), 'a/.htaccess');
  const aHtaccess = await fs.readFile(path.join(distDir, 'a', '.htaccess'), 'utf-8');
  if (!aHtaccess.includes('Options +Indexes')) {
    fail('a/.htaccess must enable Indexes for the legacy Hostinger directory');
  }
  if (locs.some((l) => l === absoluteUrl('/a/') || l === absoluteUrl('/a'))) {
    fail('sitemap must not include legacy /a');
  }
  ok('legacy /a stays listable and out of the sitemap');
  const publishedAbs = new Set(getSitemapLocs());
  const redirectSources = new Set(INTERNAL_REDIRECTS.map((r) => r.from));
  for (const rule of INTERNAL_REDIRECTS) {
    const needle = apacheRewriteRule(rule.from, rule.to);
    if (!htaccess.includes(needle)) fail(`missing exact 301 rule: ${needle}`);
    const destAbs = absoluteUrl(rule.to);
    if (!publishedAbs.has(destAbs)) fail(`redirect ${rule.from} target ${rule.to} is not a sitemap URL`);
    if (locs.some((l) => l === absoluteUrl(`/${rule.from}/`) || l === absoluteUrl(`/${rule.from}`))) {
      fail(`sitemap must not include redirect source ${rule.from}`);
    }
    const destKey = rule.to.replace(/^\//, '').replace(/\/$/, '');
    if (redirectSources.has(destKey)) fail(`redirect chain ${rule.from} → ${rule.to}`);
    if (!rule.to.endsWith('/')) fail(`redirect target missing trailing slash: ${rule.to}`);

    const positives = [`/${rule.from}`, `/${rule.from}/`, `/${rule.from}.html`, `/${rule.from}?utm=1`];
    for (const candidate of positives) {
      const dest = matchInternalRedirect(candidate);
      if (dest !== rule.to) {
        fail(`redirect matcher: ${candidate} expected ${rule.to}, got ${dest ?? '(none)'}`);
      }
    }
    const negatives = [
      `/${rule.from}-algo`,
      `/${rule.from}/extra`,
      `/${rule.from}.html/`,
      `/${rule.from}.htm`,
      `/prefijo-${rule.from}`,
      `/x/${rule.from}`,
    ];
    for (const candidate of negatives) {
      const dest = matchInternalRedirect(candidate);
      if (dest === rule.to) fail(`redirect matcher captured prefix/extra path: ${candidate}`);
    }
  }
  if (matchInternalRedirect('/inventarios-depositos-algo')) {
    fail('redirect matcher must not capture /inventarios-depositos-algo');
  }
  if (matchInternalRedirect('/a') || matchInternalRedirect('/a/')) {
    fail('legacy /a must not be treated as an internal SEO 301');
  }
  ok(
    `internal ${INTERNAL_REDIRECTS.length} exact 301s (${PHASE1_INTERNAL_REDIRECTS.length} fase1 + ${INTERNAL_REDIRECTS.length - PHASE1_INTERNAL_REDIRECTS.length} fase4); 3 variants; no prefix; no chains`,
  );


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
