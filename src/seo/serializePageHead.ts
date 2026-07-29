import type { PageSeo } from '@/seo/types';
import { PAGE_JSON_LD_SCRIPT_ID, serializeJsonLd } from '@/seo/jsonLd';
import { defaultOgImage, resolveCanonical } from '@/seo/types';

/**
 * Serialize page SEO into HTML head fragments for the prerender step.
 * Single source of truth with `PageSeo` / `SeoHead`.
 */
export function serializePageHead(seo: PageSeo): string {
  const canonical = resolveCanonical(seo.canonicalPath);
  const ogImage = seo.ogImage ?? defaultOgImage;
  const robots = seo.robots ?? 'index, follow';
  const ogType = seo.ogType ?? 'website';

  const lines = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`,
    `<meta name="robots" content="${escapeAttr(robots)}" />`,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
    `<meta property="og:type" content="${escapeAttr(ogType)}" />`,
    `<meta property="og:title" content="${escapeAttr(seo.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(seo.description)}" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:image" content="${escapeAttr(ogImage)}" />`,
    `<meta property="og:locale" content="es_AR" />`,
    `<meta property="og:site_name" content="Dinamic Systems" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(ogImage)}" />`,
  ];

  if (seo.jsonLd) {
    lines.push(
      `<script type="application/ld+json" id="${PAGE_JSON_LD_SCRIPT_ID}">${serializeJsonLd(seo.jsonLd)}</script>`,
    );
  }

  return lines.join('\n    ');
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(value: string): string {
  return escapeHtml(value).replace(/"/g, '&quot;');
}
