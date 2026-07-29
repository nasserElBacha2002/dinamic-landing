import { Box, Container, Text, rem } from '@mantine/core';
import { appHeaderHeightPx, contentMaxWidth } from '@/theme/theme';

type InteriorHeroProps = {
  eyebrow?: string;
  title: string;
  summary: string;
};

export function InteriorHero({ eyebrow, title, summary }: InteriorHeroProps) {
  return (
    <Box
      component="header"
      pt={`calc(${rem(appHeaderHeightPx)} + ${rem(24)})`}
      pb={{ base: 'xl', md: '3rem' }}
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        borderBottom: '1px solid #e8eaed',
      }}
    >
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        {eyebrow ? (
          <Text tt="uppercase" size="xs" fw={800} c="brand.6" mb="sm" style={{ letterSpacing: '0.28em' }}>
            {eyebrow}
          </Text>
        ) : null}
        <Text
          component="h1"
          fz={{ base: rem(32), sm: rem(40), md: rem(48) }}
          fw={800}
          lh={1.1}
          c="gray.9"
          maw={rem(900)}
          style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', letterSpacing: '-0.02em' }}
        >
          {title}
        </Text>
        <Text mt="lg" fz={{ base: 'md', md: 'lg' }} c="dimmed" fw={500} lh={1.7} maw={rem(720)}>
          {summary}
        </Text>
      </Container>
    </Box>
  );
}
