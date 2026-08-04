import { Anchor, Box, Container, Stack, Text, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { motionDuration } from '@/components/animations/variants';
import { contentMaxWidth } from '@/theme/theme';

export function StockDifferencesSection() {
  return (
    <Box
      component="section"
      id="diferencias"
      py={{ base: '4rem', md: '6rem' }}
      className="ds-bg-value"
      aria-labelledby="diferencias-heading"
    >
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionFadeIn direction="none" duration={motionDuration.section}>
          <Stack gap="lg" maw={rem(900)}>
            <Text tt="uppercase" size="xs" fw={800} c="brand.6" style={{ letterSpacing: '0.22em' }}>
              Conciliación operativa
            </Text>
            <Text
              id="diferencias-heading"
              component="h2"
              fz={{ base: rem(32), sm: rem(40) }}
              fw={800}
              c="gray.9"
              lh={1.1}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              Diferencias de stock: qué detectamos y cómo las validamos
            </Text>
            <Text fz={{ base: 'md', md: 'lg' }} c="dimmed" fw={500} lh={1.75}>
              Un inventario físico permite contrastar el stock del sistema con la mercadería en ubicación. Las diferencias
              pueden originarse en movimientos no registrados, productos mal ubicados, recepciones o devoluciones
              pendientes, o errores de conteo. Detectamos y validamos diferencias mediante conteos controlados, reconteos
              y trazabilidad operativa, sin asumir que el inventario corrige por sí solo la causa raíz.
            </Text>
            <Stack gap="sm">
              <Anchor
                component={Link}
                to="/servicios/auditoria-de-inventarios/"
                fw={700}
                c="gray.9"
                underline="hover"
                className="ds-focus-ring"
              >
                Auditoría de inventarios
              </Anchor>
              <Anchor
                component={Link}
                to="/servicios/inventarios-ciclicos/"
                fw={700}
                c="gray.9"
                underline="hover"
                className="ds-focus-ring"
              >
                Inventarios cíclicos
              </Anchor>
              <Anchor
                component={Link}
                to="/recursos/como-realizar-un-inventario-fisico/"
                fw={700}
                c="gray.9"
                underline="hover"
                className="ds-focus-ring"
              >
                Cómo realizar un inventario físico
              </Anchor>
            </Stack>
          </Stack>
        </MotionFadeIn>
      </Container>
    </Box>
  );
}
