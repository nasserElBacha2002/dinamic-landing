import { ORGANIZATION_ID } from '@/seo/organizationJsonLd';
import { defaultOgImage, SITE_ORIGIN } from '@/seo/site';
import type { FaqItem } from '@/content/types';

export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
export const WEBPAGE_ID = `${SITE_ORIGIN}/#webpage`;
export const HOME_SERVICE_ID = `${SITE_ORIGIN}/#service`;
export const FAQ_ID = `${SITE_ORIGIN}/#faq`;

export type BreadcrumbCrumb = {
  name: string;
  item: string;
};

export function buildBreadcrumbJsonLd(crumbs: BreadcrumbCrumb[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function buildServiceJsonLd(input: {
  name: string;
  description: string;
  url: string;
  id?: string;
}): Record<string, unknown> {
  return {
    '@type': 'Service',
    ...(input.id ? { '@id': input.id } : {}),
    name: input.name,
    description: input.description,
    url: input.url,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: {
      '@type': 'Country',
      name: 'Argentina',
    },
  };
}

export function buildWebSiteJsonLd(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_ORIGIN}/`,
    name: 'Dinamic Systems',
    inLanguage: 'es-AR',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function buildWebPageJsonLd(input: {
  name: string;
  description: string;
  url: string;
}): Record<string, unknown> {
  return {
    '@type': 'WebPage',
    '@id': WEBPAGE_ID,
    url: input.url,
    name: input.name,
    description: input.description,
    inLanguage: 'es-AR',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    mainEntity: { '@id': HOME_SERVICE_ID },
  };
}

export function buildFaqPageJsonLd(items: FaqItem[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    '@id': FAQ_ID,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildArticleJsonLd(input: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}): Record<string, unknown> {
  return {
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: {
      '@type': 'Organization',
      name: input.authorName,
      '@id': ORGANIZATION_ID,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dinamic Systems',
      '@id': ORGANIZATION_ID,
      logo: {
        '@type': 'ImageObject',
        url: defaultOgImage,
      },
    },
  };
}

export function buildJsonLdGraph(nodes: Record<string, unknown>[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
