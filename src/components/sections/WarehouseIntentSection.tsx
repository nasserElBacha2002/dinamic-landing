import { Anchor, Box, Container, Stack, Text, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { motionDuration } from '@/components/animations/variants';
import { contentMaxWidth } from '@/theme/theme';

export function WarehouseIntentSection() {
  return (
    <Box
      component="section"
      id="depositos"
      py={{ base: '4rem', md: '6rem' }}
      className="ds-bg-about"
      style={{ borderBlock: '1px solid color-mix(in srgb, #c4c6cf 35%, transparent)' }}
      aria-labelledby="depositos-heading"
    >
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionFadeIn direction="none" duration={motionDuration.section}>
          <Stack gap="lg" maw={rem(860)}>
            <Text tt="uppercase" size="xs" fw={800} c="brand.6" style={{ letterSpacing: '0.22em' }}>
              Depósitos y mercadería almacenada
            </Text>
            <Text
              id="depositos-heading"
              component="h2"
              fz={{ base: rem(32), sm: rem(40) }}
              fw={800}
              c="gray.9"
              lh={1.1}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              Inventarios para depósitos con mercadería almacenada
            </Text>
            <Text fz={{ base: 'md', md: 'lg' }} c="dimmed" fw={500} lh={1.75}>
              Evaluamos inventarios totales o parciales para mercadería almacenada en racks, pallets, estanterías o
              posiciones de piso. La metodología se define según la cantidad de productos y ubicaciones, el tipo de
              almacenamiento y los movimientos que deben continuar durante el conteo.
            </Text>
            <Anchor
              component={Link}
              to="/industrias/depositos-centros-distribucion/"
              fw={800}
              fz="lg"
              c="brand.7"
              underline="hover"
              className="ds-focus-ring"
            >
              Inventarios para depósitos y centros de distribución
            </Anchor>
          </Stack>
        </MotionFadeIn>
      </Container>
    </Box>
  );
}
