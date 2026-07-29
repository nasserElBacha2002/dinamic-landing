import type { InteriorPageContent, ResourcePageContent } from '@/content/types';
import { absoluteUrl, type PublishedRoute } from '@/routes';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildJsonLdGraph,
  buildServiceJsonLd,
} from '@/seo/schemas';
import { buildOrganizationJsonLd, buildOrganizationReferenceNode } from '@/seo/organizationJsonLd';
import type { PageSeo } from '@/seo/types';

export type UiBreadcrumb = {
  label: string;
  /** Omit `to` for the current page or for group labels without a hub page */
  to?: string;
};

/** Visible trail: Inicio > Group > Page (group is text-only until hub pages exist). */
export function buildUiBreadcrumbs(route: PublishedRoute): UiBreadcrumb[] {
  if (route.pageType === 'home') return [{ label: 'Inicio' }];
  const items: UiBreadcrumb[] = [{ label: 'Inicio', to: '/' }];
  route.breadcrumbLabels.forEach((label, index) => {
    const isLast = index === route.breadcrumbLabels.length - 1;
    items.push(isLast ? { label } : { label });
  });
  return items;
}

/** JSON-LD crumbs: only real URLs (Inicio + página actual). */
export function buildSchemaBreadcrumbs(route: PublishedRoute) {
  return [
    { name: 'Inicio', item: absoluteUrl('/') },
    {
      name: route.breadcrumbLabels[route.breadcrumbLabels.length - 1] ?? route.seo.title,
      item: absoluteUrl(route.loc),
    },
  ];
}

export function buildJsonLdForRoute(
  route: PublishedRoute,
  content?: InteriorPageContent,
): Record<string, unknown> | Record<string, unknown>[] {
  if (route.pageType === 'home') {
    return buildOrganizationJsonLd();
  }

  const pageUrl = absoluteUrl(route.loc);
  const nodes: Record<string, unknown>[] = [
    buildOrganizationReferenceNode(),
    buildBreadcrumbJsonLd(buildSchemaBreadcrumbs(route)),
  ];

  if (route.pageType === 'service' && content) {
    nodes.push(
      buildServiceJsonLd({
        name: content.h1,
        description: content.summary,
        url: pageUrl,
      }),
    );
  }

  if (route.pageType === 'resource' && content?.kind === 'resource') {
    const resource = content as ResourcePageContent;
    nodes.push(
      buildArticleJsonLd({
        headline: resource.h1,
        description: resource.summary,
        url: pageUrl,
        datePublished: resource.datePublished,
        dateModified: resource.dateModified,
        authorName: resource.authorName,
      }),
    );
  }

  if (route.pageType === 'case-study' && content?.kind === 'case-study') {
    nodes.push(
      buildArticleJsonLd({
        headline: content.h1,
        description: content.summary,
        url: pageUrl,
        datePublished: content.datePublished,
        dateModified: content.dateModified,
        authorName: content.authorName,
      }),
    );
  }

  return buildJsonLdGraph(nodes);
}

export function toPageSeo(route: PublishedRoute, content?: InteriorPageContent): PageSeo {
  return {
    title: route.seo.title,
    description: route.seo.description,
    canonicalPath: route.loc,
    ogType: route.seo.ogType,
    robots: route.seo.robots,
    ogImage: route.seo.ogImage,
    jsonLd: buildJsonLdForRoute(route, content),
  };
}
