import { ORGANIZATION_ID } from '@/seo/organizationJsonLd';
import { defaultOgImage } from '@/seo/site';

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
}): Record<string, unknown> {
  return {
    '@type': 'Service',
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
