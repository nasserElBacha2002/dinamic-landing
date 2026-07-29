import { Box, Container, Stack, Text, rem, List } from '@mantine/core';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ContentSections } from '@/components/page/ContentSections';
import { InteriorHero } from '@/components/page/InteriorHero';
import { PageCta } from '@/components/page/PageCta';
import { RelatedLinks } from '@/components/page/RelatedLinks';
import type { CaseStudyPageContent } from '@/content/types';
import type { PublishedRoute } from '@/routes';
import { SeoHead } from '@/seo/SeoHead';
import { buildUiBreadcrumbs, toPageSeo } from '@/seo/pageSeo';
import { contentMaxWidth } from '@/theme/theme';

type CaseStudyPageTemplateProps = {
  route: PublishedRoute;
  content: CaseStudyPageContent;
};

export function CaseStudyPageTemplate({ route, content }: CaseStudyPageTemplateProps) {
  const seo = toPageSeo(route, content);
  const crumbs = buildUiBreadcrumbs(route);
  const verifiedEvidence = content.evidence.filter((e) => e.verified);

  return (
    <>
      <SeoHead seo={seo} />
      <Breadcrumbs items={crumbs} />
      <InteriorHero eyebrow={content.eyebrow ?? 'Caso'} title={content.h1} summary={content.summary} />
      <Box component="div" py={{ base: 'xl', md: '3rem' }} className="ds-bg-page">
        <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
          <Stack gap={rem(40)}>
            <Text c="dimmed" fz="sm" fw={600}>
              Publicado por {content.authorName} · {content.datePublished}
              {content.dateModified !== content.datePublished ? ` · Actualizado ${content.dateModified}` : null}
            </Text>
            <Text fw={700} c="gray.9">
              Sector: {content.sector} · {content.clientLabel}
            </Text>
            <Stack gap="sm">
              <Text component="h2" fz={rem(24)} fw={800} c="gray.9">
                Problema
              </Text>
              {content.problem.map((p) => (
                <Text key={p.slice(0, 24)} c="dimmed" fw={500} lh={1.7}>
                  {p}
                </Text>
              ))}
            </Stack>
            <Stack gap="sm">
              <Text component="h2" fz={rem(24)} fw={800} c="gray.9">
                Enfoque
              </Text>
              {content.approach.map((p) => (
                <Text key={p.slice(0, 24)} c="dimmed" fw={500} lh={1.7}>
                  {p}
                </Text>
              ))}
            </Stack>
            <ContentSections sections={content.sections} />
            {verifiedEvidence.length ? (
              <Stack gap="sm">
                <Text component="h2" fz={rem(24)} fw={800} c="gray.9">
                  Evidencia verificada
                </Text>
                <List>
                  {verifiedEvidence.map((e) => (
                    <List.Item key={e.label}>
                      <Text span fw={700}>
                        {e.label}:
                      </Text>{' '}
                      {e.value}
                    </List.Item>
                  ))}
                </List>
              </Stack>
            ) : null}
            <Stack gap="sm">
              <Text component="h2" fz={rem(24)} fw={800} c="gray.9">
                Resultados
              </Text>
              {content.outcomes.map((p) => (
                <Text key={p.slice(0, 24)} c="dimmed" fw={500} lh={1.7}>
                  {p}
                </Text>
              ))}
            </Stack>
            {content.testimonial?.authorized ? (
              <Box component="blockquote" style={{ borderLeft: '3px solid var(--mantine-color-brand-6)', paddingLeft: rem(16) }}>
                <Text fs="italic" c="gray.9" fw={500} lh={1.7}>
                  “{content.testimonial.quote}”
                </Text>
                <Text mt="sm" fz="sm" c="dimmed" fw={600}>
                  — {content.testimonial.attribution}
                </Text>
              </Box>
            ) : null}
            <RelatedLinks links={content.relatedLinks} />
          </Stack>
        </Container>
      </Box>
      <PageCta cta={content.cta} />
    </>
  );
}
