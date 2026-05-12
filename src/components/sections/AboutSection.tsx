import { Box, Container, Grid, Paper, SimpleGrid, Text, rem } from '@mantine/core';
import { IconShieldCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import aboutTeamUrl from '@/assets/images/about-team.svg?url';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { MotionSection } from '@/components/animations/MotionSection';
import { motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentMaxWidth } from '@/theme/theme';

export function AboutSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <Box
      component="section"
      id="quienes-somos"
      py={{ base: '4rem', md: '6rem' }}
      bg="white"
      style={{ borderBlock: '1px solid color-mix(in srgb, #c4c6cf 35%, transparent)' }}
    >
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionSection>
          <Grid gutter={{ base: 'xl', lg: '4rem' }} align="center">
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <MotionFadeIn direction="left" duration={motionDuration.section}>
                <SectionHeader eyebrow="Sobre nosotros" title="Quiénes Somos" />
                <Text fz={{ base: 'lg', md: 'xl' }} fw={600} c="gray.9" lh={1.7} mb="md">
                  Dinamic Systems es una empresa argentina especializada en servicios profesionales de control de
                  inventarios físicos para empresas de retail, logística y distribución.
                </Text>
                <Text fz="lg" c="dimmed" lh={1.75} fw={500} mb="xl">
                  Acompañamos a organizaciones que necesitan exactitud, trazabilidad y control operativo real. Nuestra
                  metodología estructurada garantiza precisión, cumplimiento en tiempo y forma y resultados confiables.
                </Text>
                <SimpleGrid cols={2} spacing="xl" pt="xl" style={{ borderTop: '1px solid color-mix(in srgb, #c4c6cf 35%, transparent)' }}>
                  <Box>
                    <Text fz="2rem" fw={800} c="brand.6" lh={1}>
                      AR
                    </Text>
                    <Text tt="uppercase" size="xs" fw={800} c="dimmed" mt={4} style={{ letterSpacing: '0.18em' }}>
                      Sede central Argentina
                    </Text>
                  </Box>
                  <Box>
                    <Text fz="2rem" fw={800} c="cyan.5" lh={1}>
                      PRO
                    </Text>
                    <Text tt="uppercase" size="xs" fw={800} c="dimmed" mt={4} style={{ letterSpacing: '0.18em' }}>
                      Servicio profesional
                    </Text>
                  </Box>
                </SimpleGrid>
              </MotionFadeIn>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <MotionFadeIn direction="right" duration={motionDuration.section} delay={0.08}>
                <Box pos="relative">
                  <Box
                    component="img"
                    src={aboutTeamUrl}
                    alt="Operaciones y equipo Dinamic Systems"
                    style={{ width: '100%', borderRadius: rem(48), boxShadow: '0 24px 60px rgba(2, 6, 23, 0.12)' }}
                  />
                  <motion.div
                    initial={reduced ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: motionDuration.base, delay: 0.15, ease: motionEaseOut }}
                  >
                    <Paper
                      visibleFrom="md"
                      pos="absolute"
                      bottom={-40}
                      left={-40}
                      p="xl"
                      radius="2rem"
                      bg="brand.6"
                      c="white"
                      shadow="xl"
                      maw={rem(280)}
                    >
                      <IconShieldCheck size={40} stroke={1.25} aria-hidden />
                      <Text fz="xl" fw={800} mt="md" lh={1.2}>
                        Confianza operativa
                      </Text>
                    </Paper>
                  </motion.div>
                </Box>
              </MotionFadeIn>
            </Grid.Col>
          </Grid>
        </MotionSection>
      </Container>
    </Box>
  );
}
