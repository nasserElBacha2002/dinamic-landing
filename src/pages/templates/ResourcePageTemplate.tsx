import { Box, Container, Stack, Text, rem } from '@mantine/core';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ContentSections } from '@/components/page/ContentSections';
import { InteriorHero } from '@/components/page/InteriorHero';
import { PageCta } from '@/components/page/PageCta';
import { RelatedLinks } from '@/components/page/RelatedLinks';
import { StepsList } from '@/components/page/StepsList';
import type { ResourcePageContent } from '@/content/types';
import type { PublishedRoute } from '@/routes';
import { SeoHead } from '@/seo/SeoHead';
import { buildUiBreadcrumbs, toPageSeo } from '@/seo/pageSeo';
import { contentMaxWidth } from '@/theme/theme';

type ResourcePageTemplateProps = {
  route: PublishedRoute;
  content: ResourcePageContent;
};

export function ResourcePageTemplate({ route, content }: ResourcePageTemplateProps) {
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
            <Text c="dimmed" fz="sm" fw={600}>
              Publicado por {content.authorName} · Publicado {content.datePublished}
              {content.dateModified !== content.datePublished
                ? ` · Actualizado ${content.dateModified}`
                : null}
            </Text>
            <ContentSections sections={content.sections} />
            {content.steps?.length ? <StepsList title="Pasos resumidos" steps={content.steps} /> : null}
            <RelatedLinks links={content.relatedLinks} />
          </Stack>
        </Container>
      </Box>
      <PageCta cta={content.cta} />
    </>
  );
}
