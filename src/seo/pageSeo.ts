import type { HubPageContent, InteriorPageContent, ResourcePageContent } from '@/content/types';
import { homeFaqItems } from '@/content/home/faq';
import {
  absoluteUrl,
  childRoutesForGroup,
  getPublishedHubForGroup,
  type PublishedRoute,
} from '@/routes';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildFaqPageJsonLd,
  buildJsonLdGraph,
  buildServiceJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
  HOME_SERVICE_ID,
} from '@/seo/schemas';
import { buildOrganizationNode, buildOrganizationReferenceNode } from '@/seo/organizationJsonLd';
import type { PageSeo } from '@/seo/types';

export type UiBreadcrumb = {
  label: string;
  /** Omit `to` for the current page or for group labels without a hub page */
  to?: string;
};

/** Visible trail: Inicio > Hub (if published) > Page. */
export function buildUiBreadcrumbs(route: PublishedRoute): UiBreadcrumb[] {
  if (route.pageType === 'home') return [{ label: 'Inicio' }];
  const items: UiBreadcrumb[] = [{ label: 'Inicio', to: '/' }];
  if (route.pageType === 'hub') {
    items.push({ label: route.breadcrumbLabels[0] ?? route.navigation?.label ?? route.seo.title });
    return items;
  }
  const hub = route.navigation?.group ? getPublishedHubForGroup(route.navigation.group) : undefined;
  route.breadcrumbLabels.forEach((label, index) => {
    const isLast = index === route.breadcrumbLabels.length - 1;
    if (!isLast && index === 0 && hub) {
      items.push({ label, to: hub.loc });
      return;
    }
    items.push({ label });
  });
  return items;
}

/** JSON-LD crumbs: only real published URLs. */
export function buildSchemaBreadcrumbs(route: PublishedRoute) {
  const crumbs = [{ name: 'Inicio', item: absoluteUrl('/') }];
  if (route.pageType === 'hub') {
    crumbs.push({
      name: route.breadcrumbLabels[0] ?? route.seo.title,
      item: absoluteUrl(route.loc),
    });
    return crumbs;
  }
  const hub = route.navigation?.group ? getPublishedHubForGroup(route.navigation.group) : undefined;
  if (hub) {
    crumbs.push({
      name: hub.breadcrumbLabels[0] ?? hub.navigation?.label ?? hub.seo.title,
      item: absoluteUrl(hub.loc),
    });
  }
  crumbs.push({
    name: route.breadcrumbLabels[route.breadcrumbLabels.length - 1] ?? route.seo.title,
    item: absoluteUrl(route.loc),
  });
  return crumbs;
}

export function buildJsonLdForRoute(
  route: PublishedRoute,
  content?: InteriorPageContent,
): Record<string, unknown> | Record<string, unknown>[] {
  if (route.pageType === 'home') {
    const pageUrl = absoluteUrl('/');
    return buildJsonLdGraph([
      buildOrganizationNode(),
      buildWebSiteJsonLd(),
      buildWebPageJsonLd({
        name: route.seo.title,
        description: route.seo.description,
        url: pageUrl,
      }),
      buildServiceJsonLd({
        id: HOME_SERVICE_ID,
        name: 'Inventarios físicos para empresas',
        description:
          'Planificación y ejecución de inventarios físicos para depósitos, centros de distribución, retail y operaciones logísticas.',
        url: pageUrl,
      }),
      buildFaqPageJsonLd(homeFaqItems),
    ]);
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

  if (content?.faq?.length) {
    nodes.push(buildFaqPageJsonLd(content.faq, `${pageUrl}#faq`));
  }

  if (route.pageType === 'hub' && content?.kind === 'hub') {
    const hub = content as HubPageContent;
    const children = childRoutesForGroup(hub.group);
    if (children.length === 0) {
      throw new Error(`Hub "${route.id}" has no indexable children; do not publish an empty CollectionPage`);
    }
    nodes.push(
      buildCollectionPageJsonLd({
        name: hub.h1,
        description: hub.summary,
        url: pageUrl,
        hasPart: children.map((child) => ({
          name: child.navigation?.label ?? child.seo.title,
          url: absoluteUrl(child.loc),
        })),
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
