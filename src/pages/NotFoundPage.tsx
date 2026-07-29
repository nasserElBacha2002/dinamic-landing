import { Box, Container, Stack, Text, rem, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { BrandButton } from '@/components/ui/BrandButton';
import { SeoHead } from '@/seo/SeoHead';
import { defaultOgImage } from '@/seo/types';
import { appHeaderHeightPx, contentMaxWidth } from '@/theme/theme';

const notFoundSeo = {
  title: 'Página no encontrada | Dinamic Systems',
  description: 'La página solicitada no existe o fue movida. Volvé al inicio o explorá nuestros servicios.',
  canonicalPath: '/404',
  robots: 'noindex, follow',
  ogType: 'website' as const,
  ogImage: defaultOgImage,
};

export function NotFoundPage() {
  return (
    <>
      <SeoHead seo={notFoundSeo} />
      <Box
        component="div"
        pt={`calc(${rem(appHeaderHeightPx)} + ${rem(48)})`}
        pb={{ base: '4rem', md: '6rem' }}
        className="ds-bg-page"
      >
        <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
          <Stack gap="lg" maw={rem(640)}>
            <Text tt="uppercase" size="xs" fw={800} c="brand.6" style={{ letterSpacing: '0.28em' }}>
              Error 404
            </Text>
            <Text
              component="h1"
              fz={{ base: rem(32), md: rem(44) }}
              fw={800}
              c="gray.9"
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              No encontramos esta página
            </Text>
            <Text c="dimmed" fw={500} lh={1.7}>
              La URL puede estar incompleta o ya no estar disponible. Podés volver al inicio o consultar nuestros
              servicios de inventario.
            </Text>
            <Group gap="md" mt="sm">
              <BrandButton component={Link} to="/" className="ds-header-cta">
                Ir al inicio
              </BrandButton>
              <BrandButton component={Link} to="/servicios/inventarios-fisicos" variant="outline" color="cyan">
                Inventarios físicos
              </BrandButton>
              <BrandButton component={Link} to="/servicios/inventarios-con-drones" variant="outline" color="cyan">
                Inventarios con drones
              </BrandButton>
            </Group>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
