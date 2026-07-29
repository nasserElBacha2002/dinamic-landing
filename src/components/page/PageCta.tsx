import { Box, Container, Group, Stack, Text, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import { BrandButton } from '@/components/ui/BrandButton';
import type { CallToAction } from '@/content/types';
import { trackEvent } from '@/lib/analytics/events';
import { contentMaxWidth } from '@/theme/theme';

type PageCtaProps = {
  cta: CallToAction;
};

function toRouterPath(to: string): string {
  if (to.startsWith('/#')) return to;
  if (to !== '/' && to.endsWith('/')) return to.slice(0, -1);
  return to;
}

export function PageCta({ cta }: PageCtaProps) {
  const onPrimary = () => {
    trackEvent('service_cta_clicked', { label: cta.primaryLabel, to: cta.primaryTo });
  };

  return (
    <Box
      component="section"
      py={{ base: 'xl', md: '3rem' }}
      style={{ background: '#ffffff', borderTop: '1px solid #e8eaed' }}
      aria-labelledby="page-cta-heading"
    >
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <Stack gap="md" maw={rem(720)}>
          <Text
            id="page-cta-heading"
            component="h2"
            fz={{ base: rem(26), md: rem(32) }}
            fw={800}
            c="gray.9"
            style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
          >
            {cta.title}
          </Text>
          <Text c="dimmed" fw={500} lh={1.7}>
            {cta.description}
          </Text>
          <Group gap="md" mt="sm">
            {cta.primaryTo.includes('#') ? (
              <BrandButton component="a" href={cta.primaryTo} size="md" className="ds-header-cta" onClick={onPrimary}>
                {cta.primaryLabel}
              </BrandButton>
            ) : (
              <BrandButton
                component={Link}
                to={toRouterPath(cta.primaryTo)}
                size="md"
                className="ds-header-cta"
                onClick={onPrimary}
              >
                {cta.primaryLabel}
              </BrandButton>
            )}
            {cta.secondaryLabel && cta.secondaryTo ? (
              cta.secondaryTo.includes('#') ? (
                <BrandButton component="a" href={cta.secondaryTo} variant="outline" color="cyan" size="md">
                  {cta.secondaryLabel}
                </BrandButton>
              ) : (
                <BrandButton
                  component={Link}
                  to={toRouterPath(cta.secondaryTo)}
                  variant="outline"
                  color="cyan"
                  size="md"
                >
                  {cta.secondaryLabel}
                </BrandButton>
              )
            ) : null}
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
