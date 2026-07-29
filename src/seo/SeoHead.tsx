import { useEffect } from 'react';
import { PAGE_JSON_LD_SCRIPT_ID, serializeJsonLd } from '@/seo/jsonLd';
import type { PageSeo } from '@/seo/types';
import { defaultOgImage, resolveCanonical } from '@/seo/types';

/**
 * Client-side document head sync (runs after mount).
 * Initial HTML head is injected at prerender time via `serializePageHead`.
 */
export function SeoHead({ seo }: { seo: PageSeo }) {
  useEffect(() => {
    document.title = seo.title;
    document.documentElement.lang = 'es';

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'robots', seo.robots ?? 'index, follow');
    upsertLink('canonical', resolveCanonical(seo.canonicalPath));

    const ogImage = seo.ogImage ?? defaultOgImage;
    const canonical = resolveCanonical(seo.canonicalPath);
    upsertMeta('property', 'og:type', seo.ogType ?? 'website');
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:locale', 'es_AR');
    upsertMeta('property', 'og:site_name', 'Dinamic Systems');

    upsertMeta('name', 'twitter:card', 'summary');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', ogImage);

    if (seo.jsonLd) {
      upsertJsonLd(seo.jsonLd);
    }
  }, [seo]);

  return null;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  const selector = `meta[${attr}="${CSS.escape(key)}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector(`link[rel="${CSS.escape(rel)}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function upsertJsonLd(data: Record<string, unknown> | Record<string, unknown>[]): void {
  let el = document.getElementById(PAGE_JSON_LD_SCRIPT_ID) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = PAGE_JSON_LD_SCRIPT_ID;
    document.head.appendChild(el);
  }
  el.textContent = serializeJsonLd(data);
}
