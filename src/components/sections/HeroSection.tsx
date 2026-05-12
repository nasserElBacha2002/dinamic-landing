import { Box, Container, Grid, Group, Text, rem } from '@mantine/core';
import {
  IconChartArcs,
  IconCircleCheck,
  IconMapPin,
  IconReportAnalytics,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import heroWarehouseUrl from '@/assets/images/hero-warehouse.svg?url';
import { BrandButton } from '@/components/ui/BrandButton';
import { MetricCard } from '@/components/ui/MetricCard';
import { wideMaxWidth } from '@/theme/theme';

const metrics = [
  { title: 'Precisión operativa', icon: IconCircleCheck, accent: 'brand' as const },
  { title: 'Trazabilidad digital', icon: IconChartArcs, accent: 'cyan' as const },
  { title: 'Control por ubicación', icon: IconMapPin, accent: 'brand' as const },
  { title: 'Reportes auditables', icon: IconReportAnalytics, accent: 'cyan' as const },
];

export function HeroSection() {
  return (
    <Box
      component="section"
      id="inicio"
      pos="relative"
      pt={rem(80)}
      style={{ minHeight: 'min(92vh, 900px)', display: 'flex', alignItems: 'center' }}
    >
      <Box pos="absolute" inset={0} aria-hidden>
        <Box
          component="img"
          src={heroWarehouseUrl}
          alt=""
          w="100%"
          h="100%"
          style={{ objectFit: 'cover' }}
        />
        {/* TODO: swap hero-warehouse.svg for a licensed warehouse photo (e.g. hero-warehouse.webp) in src/assets/images/ */}
        <Box pos="absolute" inset={0} className="ds-hero-gradient" />
      </Box>

      <Container size="xl" w="100%" py={{ base: '3rem', md: '5rem' }} pos="relative" style={{ zIndex: 1 }} maw={wideMaxWidth}>
        <Grid gutter={{ base: 'lg', lg: '3rem' }} align="center">
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <Group gap="sm" mb="xl">
                <Box w={32} h={3} bg="brand.6" style={{ borderRadius: 2 }} />
                <Text tt="uppercase" fw={800} size="sm" c="dimmed" style={{ letterSpacing: '0.2em' }}>
                  Control de inventarios físicos
                </Text>
              </Group>
              <Text
                component="h1"
                fz={{ base: rem(40), sm: rem(52), md: rem(64) }}
                fw={800}
                lh={1.05}
                c="gray.9"
                mb="xl"
                style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', letterSpacing: '-0.03em' }}
              >
                Expertos en{' '}
                <Text
                  component="span"
                  inherit
                  c="brand.6"
                  style={{ fontStyle: 'italic' }}
                >
                  inventarios físicos
                </Text>
              </Text>
              <Text fz={{ base: 'md', md: 'xl' }} c="dimmed" maw={rem(640)} fw={500} lh={1.7} mb="xl">
                Brindamos servicios profesionales de control de inventarios físicos para empresas de retail,
                logística y distribución, combinando metodología operativa, trazabilidad y herramientas digitales
                adaptadas a cada operación.
              </Text>
              <Group gap="lg" wrap="wrap">
                <BrandButton component="a" href="#contacto" size="lg" h={rem(56)} px="xl" fz="lg">
                  Solicitar reunión
                </BrandButton>
                <BrandButton
                  component="a"
                  href="#soluciones"
                  variant="outline"
                  color="cyan"
                  size="lg"
                  h={rem(56)}
                  px="xl"
                  fz="lg"
                >
                  Ver soluciones
                </BrandButton>
              </Group>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Grid gutter="md">
              {metrics.map((m, i) => (
                <Grid.Col key={m.title} span={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.08 * i }}
                  >
                    <MetricCard {...m} />
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
