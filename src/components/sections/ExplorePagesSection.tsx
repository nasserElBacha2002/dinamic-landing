import { Box, Container, SimpleGrid, Stack, Text, Anchor, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import { routesForHomeExplore, type PublishedRoute } from '@/routes';
import { contentMaxWidth } from '@/theme/theme';

/** Preferred home explore order (service → sectors → resources). */
const HOME_EXPLORE_ORDER = [
  'service-inventarios-fisicos',
  'industry-depositos',
  'industry-retail',
  'resource-preparar-deposito',
  'service-inventarios-ciclicos',
  'service-auditoria-inventarios',
  'resource-inventario-fisico',
  'resource-general-vs-ciclico',
] as const;

function sortHomeExplore(routes: PublishedRoute[]): PublishedRoute[] {
  const rank = new Map(HOME_EXPLORE_ORDER.map((id, index) => [id, index]));
  return [...routes].sort((a, b) => {
    const aRank = rank.get(a.id as (typeof HOME_EXPLORE_ORDER)[number]) ?? 100;
    const bRank = rank.get(b.id as (typeof HOME_EXPLORE_ORDER)[number]) ?? 100;
    return aRank - bRank;
  });
}

export function ExplorePagesSection() {
  const items = sortHomeExplore(routesForHomeExplore());

  return (
    <Box component="section" id="explorar" py={{ base: '3rem', md: '4rem' }} className="ds-bg-page" aria-labelledby="explore-heading">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <Stack gap="xl">
          <Stack gap="sm" maw={rem(720)}>
            <Text tt="uppercase" size="xs" fw={800} c="brand.6" style={{ letterSpacing: '0.28em' }}>
              Recursos y páginas relacionadas
            </Text>
            <Text
              id="explore-heading"
              component="h2"
              fz={{ base: rem(28), md: rem(36) }}
              fw={800}
              c="gray.9"
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              Seguí explorando inventarios físicos
            </Text>
            <Text c="dimmed" fw={500} lh={1.7}>
              Guías y páginas especializadas sobre inventarios físicos, depósitos, retail y control de stock.
            </Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {items.map((route) => (
              <Stack key={route.id} gap={6}>
                <Anchor
                  component={Link}
                  to={route.path}
                  fw={800}
                  c="gray.9"
                  underline="hover"
                  className="ds-focus-ring"
                >
                  {route.navigation?.label ?? route.seo.title}
                </Anchor>
                <Text fz="sm" c="dimmed" fw={500} lineClamp={3}>
                  {route.seo.description}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
