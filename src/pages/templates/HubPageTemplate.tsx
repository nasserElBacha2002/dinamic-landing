import { Box, Container, Stack, rem } from '@mantine/core';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ContentSections } from '@/components/page/ContentSections';
import { InteriorHero } from '@/components/page/InteriorHero';
import { PageCta } from '@/components/page/PageCta';
import { RelatedLinks } from '@/components/page/RelatedLinks';
import type { HubPageContent } from '@/content/types';
import type { PublishedRoute } from '@/routes';
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

export function HubPageTemplate({ route, content }: HubPageTemplateProps) {
  const seo = toPageSeo(route, content);
  const crumbs = buildUiBreadcrumbs(route);

  return (
    <>
      <SeoHead seo={seo} />
      <Breadcrumbs items={crumbs} />
      <InteriorHero eyebrow={content.eyebrow} title={content.h1} summary={content.summary} />
      <Box component="div" py={{ base: 'xl', md: '3rem' }} className="ds-bg-page">
        <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
          <Stack gap={rem(48)}>
            {content.sections.length ? <ContentSections sections={content.sections} /> : null}
            <RelatedLinks title={listingTitleByGroup[content.group]} links={content.relatedLinks} />
          </Stack>
        </Container>
      </Box>
      <PageCta cta={content.cta} />
    </>
  );
}
