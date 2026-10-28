import { Box, Container, Stack, rem } from '@mantine/core';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ContentSections } from '@/components/page/ContentSections';
import { InteriorHero } from '@/components/page/InteriorHero';
import { PageCta } from '@/components/page/PageCta';
import { RelatedLinks } from '@/components/page/RelatedLinks';
import type { HubPageContent } from '@/content/types';
import type { PublishedRoute } from '@/routes';
import { childRoutesForGroup } from '@/routes';
import { SeoHead } from '@/seo/SeoHead';
import { buildUiBreadcrumbs, toPageSeo } from '@/seo/pageSeo';
import { contentMaxWidth } from '@/theme/theme';

type HubPageTemplateProps = {
  route: PublishedRoute;
  content: HubPageContent;
};

const listingTitleByGroup: Record<HubPageContent['group'], string> = {
  servicios: 'Servicios',
  industrias: 'Industrias',
  recursos: 'Guías',
  'buenas-practicas': 'Buenas prácticas',
  innovacion: 'Innovación',
  investigacion: 'Investigación',
};

function toListingLink(child: PublishedRoute) {
  return {
    label:
      child.breadcrumbLabels[child.breadcrumbLabels.length - 1] ??
      child.navigation?.label ??
      child.seo.title,
    to: child.loc,
    description: child.seo.description,
  };
}

export function HubPageTemplate({ route, content }: HubPageTemplateProps) {
  const seo = toPageSeo(route, content);
  const crumbs = buildUiBreadcrumbs(route);
  const children = childRoutesForGroup(content.group);
  const grouped = content.childGroups?.length
    ? content.childGroups
        .map((group) => ({
          id: group.id,
          title: group.title,
          links: group.routeIds
            .map((id) => children.find((child) => child.id === id))
            .filter((child): child is PublishedRoute => Boolean(child))
            .map(toListingLink),
        }))
        .filter((group) => group.links.length > 0)
    : [];
  const usedIds = new Set(content.childGroups?.flatMap((group) => group.routeIds) ?? []);
  const leftover = children.filter((child) => !usedIds.has(child.id)).map(toListingLink);
  const listingSections =
    grouped.length > 0
      ? [
          ...grouped,
          ...(leftover.length ? [{ id: 'otras', title: 'Otras páginas', links: leftover }] : []),
        ]
      : children.length
        ? [{ id: 'listado', title: listingTitleByGroup[content.group], links: children.map(toListingLink) }]
        : [];

  return (
    <>
      <SeoHead seo={seo} />
      <Breadcrumbs items={crumbs} />
      <InteriorHero eyebrow={content.eyebrow} title={content.h1} summary={content.summary} />
      <Box component="div" py={{ base: 'xl', md: '3rem' }} className="ds-bg-page">
        <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
          <Stack gap={rem(48)}>
            {content.sections.length ? <ContentSections sections={content.sections} /> : null}
            {listingSections.map((section) => (
              <RelatedLinks
                key={section.id}
                headingId={`hub-group-${section.id}`}
                title={section.title}
                links={section.links}
              />
            ))}
          </Stack>
        </Container>
      </Box>
      <PageCta cta={content.cta} />
    </>
  );
}
