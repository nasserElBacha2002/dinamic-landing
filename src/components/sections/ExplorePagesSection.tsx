import { Box, Container, SimpleGrid, Stack, Text, Anchor, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import { routesForHomeExplore } from '@/routes';
import { contentMaxWidth } from '@/theme/theme';

export function ExplorePagesSection() {
  const items = routesForHomeExplore();

  return (
    <Box component="section" id="explorar" py={{ base: '3rem', md: '4rem' }} className="ds-bg-page" aria-labelledby="explore-heading">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <Stack gap="xl">
          <Stack gap="sm" maw={rem(720)}>
            <Text tt="uppercase" size="xs" fw={800} c="brand.6" style={{ letterSpacing: '0.28em' }}>
              Explorar
            </Text>
            <Text
              id="explore-heading"
              component="h2"
              fz={{ base: rem(28), md: rem(36) }}
              fw={800}
              c="gray.9"
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              Servicios, industrias y recursos
            </Text>
            <Text c="dimmed" fw={500} lh={1.7}>
              Páginas prioritarias sobre inventarios físicos, depósitos, retail y recursos operativos.
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
