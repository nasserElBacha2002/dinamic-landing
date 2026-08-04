import { Anchor, Box, Container, SimpleGrid, Stack, Text, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconBuildingWarehouse, IconForklift, IconShoppingBag } from '@tabler/icons-react';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { MotionStagger } from '@/components/animations/MotionStagger';
import { motionDuration } from '@/components/animations/variants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentMaxWidth } from '@/theme/theme';

const industries = [
  {
    title: 'Depósitos y centros de distribución',
    description:
      'Inventarios organizados por racks, pallets, pasillos y posiciones, con control de movimientos durante el operativo.',
    to: '/industrias/depositos-centros-distribucion/',
    icon: IconBuildingWarehouse,
  },
  {
    title: 'Retail y cadenas de sucursales',
    description:
      'Conteos en salón, depósito interno y redes de locales, con consolidación de resultados por sucursal.',
    to: '/industrias/retail-cadenas-sucursales/',
    icon: IconShoppingBag,
  },
  {
    title: 'Operadores logísticos e industria',
    description:
      'Inventarios en operaciones con stock propio o de terceros, ubicaciones, pallets y trazabilidad documentada.',
    to: '/industrias/operadores-logisticos-industria/',
    icon: IconForklift,
  },
] as const;

export function IndustriesSection() {
  return (
    <Box component="section" id="sectores" py={{ base: '4rem', md: '6rem' }} className="ds-bg-page">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionFadeIn direction="none" duration={motionDuration.section}>
          <SectionHeader
            eyebrow="Sectores atendidos"
            title="Inventarios según el tipo de operación"
            subtitle="Presentamos el contexto de cada sector y derivamos al detalle operativo en las páginas especializadas."
          />
        </MotionFadeIn>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt={{ base: 'xl', md: '3rem' }}>
          <MotionStagger staggerDelay={0.08}>
            {industries.map((item) => (
              <Stack
                key={item.to}
                gap="md"
                p={{ base: 'lg', md: 'xl' }}
                style={{
                  borderRadius: '2rem',
                  border: '1px solid color-mix(in srgb, #c4c6cf 45%, transparent)',
                  background: 'color-mix(in srgb, var(--mantine-color-gray-0) 88%, white)',
                  height: '100%',
                }}
              >
                <item.icon
                  stroke={1.35}
                  style={{ width: rem(36), height: rem(36), color: 'var(--mantine-color-brand-6)' }}
                  aria-hidden
                />
                <Text fw={800} fz="xl" c="gray.9" lh={1.25}>
                  {item.title}
                </Text>
                <Text fz="sm" c="dimmed" fw={500} lh={1.65} style={{ flex: 1 }}>
                  {item.description}
                </Text>
                <Anchor
                  component={Link}
                  to={item.to}
                  fw={800}
                  c="brand.7"
                  underline="hover"
                  className="ds-focus-ring"
                  aria-label={`Ver inventarios para ${item.title}`}
                >
                  {item.title}
                </Anchor>
              </Stack>
            ))}
          </MotionStagger>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
