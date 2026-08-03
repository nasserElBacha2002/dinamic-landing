import { Box, Container, Grid, Group, Text, rem } from '@mantine/core';
import {
  IconChartArcs,
  IconMapPin,
  IconRefresh,
  IconReportAnalytics,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/images/hero.png';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';
import { BrandButton } from '@/components/ui/BrandButton';
import { MetricCard } from '@/components/ui/MetricCard';
import { wideMaxWidth, appHeaderHeightPx } from '@/theme/theme';
import heroClasses from '@/components/sections/HeroSection.module.css';

const metrics = [
  { title: 'Control por ubicación', icon: IconMapPin, accent: 'brand' as const },
  { title: 'Reconteos', icon: IconRefresh, accent: 'cyan' as const },
  { title: 'Trazabilidad de capturas', icon: IconChartArcs, accent: 'brand' as const },
  { title: 'Reportes por sector', icon: IconReportAnalytics, accent: 'cyan' as const },
];

export function HeroSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <Box
      component="section"
      id="inicio"
      className={heroClasses.heroRoot}
      pt={rem(appHeaderHeightPx)}
    >
      <Box className={heroClasses.heroBackground} aria-hidden>
        <motion.div
          className={heroClasses.heroImageMotion}
          initial={reduced ? false : { scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: reduced ? 0.15 : 1.05, ease: motionEaseOut }}
          style={{ willChange: reduced ? undefined : 'transform' }}
        >
          <img src={heroImage} alt="" className={heroClasses.heroImg} draggable={false} />
        </motion.div>
      </Box>
      <Box className={heroClasses.heroOverlay} aria-hidden />

      <Container
        className={heroClasses.heroContent}
        size="xl"
        w="100%"
        py={{ base: '3rem', md: '5rem' }}
        maw={wideMaxWidth}
        px={{ base: 'md', md: 'xl' }}
      >
        <Grid gutter={{ base: 'lg', lg: '3rem' }} align="center">
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <MotionFadeIn trigger="mount" delay={0} duration={motionDuration.base}>
              <Group gap="sm" mb="xl">
                <Box w={32} h={3} bg="brand.6" style={{ borderRadius: 2 }} />
                <Text tt="uppercase" fw={800} size="sm" c="dimmed" style={{ letterSpacing: '0.2em' }}>
                  Inventarios físicos para empresas en Argentina
                </Text>
              </Group>
            </MotionFadeIn>
            <MotionFadeIn trigger="mount" delay={0.12} duration={motionDuration.section}>
              <Text
                component="h1"
                fz={{ base: rem(36), sm: rem(48), md: rem(58) }}
                fw={800}
                lh={1.08}
                c="gray.9"
                mb="xl"
                style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', letterSpacing: '-0.03em' }}
              >
                Inventarios físicos para depósitos, retail y operaciones logísticas
              </Text>
            </MotionFadeIn>
            <MotionFadeIn trigger="mount" delay={0.24} duration={motionDuration.base}>
              <Text fz={{ base: 'md', md: 'xl' }} c="dimmed" maw={rem(640)} fw={500} lh={1.7} mb="xl">
                Dinamic Systems es una empresa argentina especializada en la planificación y ejecución de inventarios
                físicos. Realizamos conteos de mercadería, control por ubicación, reconteos y revisión de diferencias en
                depósitos, centros de distribución, locales y operaciones logísticas.
              </Text>
            </MotionFadeIn>
            <MotionFadeIn trigger="mount" delay={0.36} duration={motionDuration.base}>
              <Group gap="lg" wrap="wrap">
                <BrandButton
                  component="a"
                  href="#contacto"
                  size="lg"
                  h={rem(56)}
                  px="xl"
                  fz="lg"
                  className="ds-header-cta"
                >
                  Solicitar evaluación de inventario
                </BrandButton>
                <BrandButton
                  component="a"
                  href="#servicios"
                  variant="outline"
                  color="cyan"
                  size="lg"
                  h={rem(56)}
                  px="xl"
                  fz="lg"
                  className="ds-focus-ring"
                  style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                >
                  Conocer nuestros servicios
                </BrandButton>
              </Group>
            </MotionFadeIn>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Box className={heroClasses.heroMetricsShell}>
              <Grid gutter={{ base: 'sm', md: 'md' }}>
                {metrics.map((m, index) => {
                  const step = reduced ? 0.02 : 0.08;
                  return (
                    <Grid.Col key={m.title} span={6}>
                      <motion.div
                        initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.12 }}
                        transition={{
                          duration: reduced ? 0.15 : motionDuration.base,
                          delay: index * step,
                          ease: motionEaseOut,
                        }}
                        style={{ height: '100%', width: '100%', minWidth: 0 }}
                      >
                        <MetricCard {...m} surface="hero" />
                      </motion.div>
                    </Grid.Col>
                  );
                })}
              </Grid>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
