import { Box, Container, Stack, rem } from '@mantine/core';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { BenefitsList } from '@/components/page/BenefitsList';
import { ContentSections } from '@/components/page/ContentSections';
import { InteriorHero } from '@/components/page/InteriorHero';
import { PageCta } from '@/components/page/PageCta';
import { RelatedLinks } from '@/components/page/RelatedLinks';
import { StepsList } from '@/components/page/StepsList';
import type { ServicePageContent } from '@/content/types';
import type { PublishedRoute } from '@/routes';
import { SeoHead } from '@/seo/SeoHead';
import { buildUiBreadcrumbs, toPageSeo } from '@/seo/pageSeo';
import { contentMaxWidth } from '@/theme/theme';

type ServicePageTemplateProps = {
  route: PublishedRoute;
  content: ServicePageContent;
};

export function ServicePageTemplate({ route, content }: ServicePageTemplateProps) {
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
            <ContentSections sections={content.sections} />
            {content.benefits?.length ? <BenefitsList benefits={content.benefits} /> : null}
            {content.steps?.length ? <StepsList steps={content.steps} /> : null}
            <RelatedLinks links={content.relatedLinks} />
          </Stack>
        </Container>
      </Box>
      <PageCta cta={content.cta} />
    </>
  );
}
