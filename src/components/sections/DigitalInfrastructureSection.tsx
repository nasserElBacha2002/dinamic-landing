import {
  Box,
  Container,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { lineReveal, motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';
import flowClasses from '@/components/sections/DigitalInfrastructureSection.module.css';
import { digitalFlowSteps } from '@/data/digitalFlow';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentMaxWidth } from '@/theme/theme';

const dashboardRows = [
  { left: 'Avance de inventario', right: 'Validación de datos' },
  { left: 'Ubicaciones relevadas', right: 'Reportes generados' },
] as const;

const footerChips = ['Trazabilidad por sector', 'Diferencias detectadas'] as const;

const barHeights = [32, 58, 44, 78, 52] as const;

const FLOW_PULSE_MS = 1100;

export function DigitalInfrastructureSection() {
  const reduced = usePrefersReducedMotion();
  const isLg = useMediaQuery('(min-width: 75em)');
  const flowRef = useRef<HTMLDivElement>(null);
  const flowInView = useInView(flowRef, { amount: 0.14, margin: '0px 0px -12% 0px' });
  const [pulseIndex, setPulseIndex] = useState(0);

  const pulseEnabled = Boolean(isLg && flowInView && !reduced);

  useEffect(() => {
    if (!pulseEnabled) {
      setPulseIndex(0);
      return;
    }
    setPulseIndex(0);
    const id = window.setInterval(() => {
      setPulseIndex((j) => (j + 1) % digitalFlowSteps.length);
    }, FLOW_PULSE_MS);
    return () => window.clearInterval(id);
  }, [pulseEnabled]);

  return (
    <Box component="section" id="tecnologia" py={{ base: '4rem', md: '6rem' }} className="ds-bg-digital" style={{ overflow: 'hidden' }}>
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionFadeIn direction="none" duration={motionDuration.section}>
          <SectionHeader
            align="center"
            title="Infraestructura digital de precisión"
            subtitle="Nuestro ecosistema tecnológico propio garantiza la integridad del dato desde la captura hasta su reporte final."
          />
        </MotionFadeIn>

        <Box ref={flowRef} pos="relative" mb={{ base: 'xl', md: '4rem' }}>
          <Box pos="absolute" top={44} left={0} right={0} display={{ base: 'none', lg: 'block' }} style={{ height: rem(2), overflow: 'hidden' }}>
            {!reduced ? (
              <motion.div
                variants={lineReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{
                  height: rem(2),
                  width: '100%',
                  transformOrigin: 'left center',
                }}
                className="ds-flow-line"
              />
            ) : (
              <Box className="ds-flow-line" h={2} />
            )}
          </Box>
          {pulseEnabled ? (
            <Box
              className={flowClasses.flowTraveler}
              style={{
                left: `calc(${((pulseIndex + 0.5) / digitalFlowSteps.length) * 100}%)`,
                top: rem(48),
              }}
              aria-hidden
            />
          ) : null}
          <SimpleGrid cols={{ base: 2, md: 3, lg: 5 }} spacing={{ base: 'lg', lg: 'md' }}>
            {digitalFlowSteps.map((step, i) => (
              <motion.div
                key={step.key}
                initial={reduced ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: motionDuration.base,
                  delay: reduced ? 0 : 0.1 * i,
                  ease: motionEaseOut,
                }}
              >
                <Stack align="center" ta="center" gap="sm">
                  <Box
                    className={flowClasses.nodeWrap}
                    data-active={pulseEnabled && pulseIndex === i ? 'true' : undefined}
                    data-accent={step.accent}
                  >
                    <ThemeIcon
                      size={96}
                      radius="xl"
                      variant="white"
                      color={step.accent === 'brand' ? 'brand' : 'cyan'}
                      style={{
                        boxShadow: 'var(--mantine-shadow-md)',
                        border: '2px solid transparent',
                      }}
                    >
                      <step.icon stroke={1.25} style={{ width: rem(36), height: rem(36) }} />
                    </ThemeIcon>
                  </Box>
                  <Text tt="uppercase" fw={800} size="sm" c="gray.9" style={{ letterSpacing: '0.16em' }}>
                    {step.label}
                  </Text>
                  <Text fz="xs" c="dimmed" fw={600} px="xs" maw={rem(200)}>
                    {step.description}
                  </Text>
                </Stack>
              </motion.div>
            ))}
          </SimpleGrid>
        </Box>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: motionDuration.section, ease: motionEaseOut }}
          >
            <Paper
              radius="3rem"
              p={{ base: 'lg', md: 'xl' }}
              bg="#020617"
              c="gray.2"
              pos="relative"
              style={{ overflow: 'hidden', boxShadow: '0 30px 80px rgba(2, 6, 23, 0.35)' }}
            >
              <Box
                pos="absolute"
                top={0}
                right={0}
                w="55%"
                h="100%"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(0,218,243,0.16), transparent 65%)',
                  pointerEvents: 'none',
                }}
              />

              <Grid gutter="xl" pos="relative" style={{ zIndex: 1 }}>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                  <Stack gap="lg">
                    <motion.div
                      initial={reduced ? false : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: motionDuration.fast, delay: reduced ? 0 : 0.15 }}
                    >
                      <Group gap="xs">
                        <Box w={8} h={8} bg="cyan.5" style={{ borderRadius: 999, boxShadow: '0 0 0 6px rgba(0,218,243,0.15)' }} />
                        <Text tt="uppercase" size="xs" fw={800} c="cyan.4" style={{ letterSpacing: '0.22em' }}>
                          Panel central de control
                        </Text>
                      </Group>
                    </motion.div>
                    <Text component="h3" fz={{ base: rem(26), md: rem(32) }} fw={800} c="white" lh={1.15} style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
                      Visibilidad operativa del inventario en tiempo real
                    </Text>
                    <Text c="gray.4" fw={500} lh={1.7}>
                      Monitoreo de avance, cobertura por sector y trazabilidad de capturas. Reportes orientados a auditoría y
                      decisiones operativas, sin métricas promocionales no sustentadas.
                    </Text>
                    <SimpleGrid cols={2} spacing="md">
                      {dashboardRows.map((row, ri) => (
                        <motion.div
                          key={row.left}
                          initial={reduced ? false : { opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.35 }}
                          transition={{ duration: motionDuration.fast, delay: reduced ? 0 : 0.22 + ri * 0.06 }}
                        >
                          <Paper p="lg" radius="xl" bg="rgba(255,255,255,0.05)" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                            <Text fz="xs" fw={800} tt="uppercase" c="cyan.3" lh={1.35}>
                              {row.left}
                            </Text>
                            <Text mt="xs" fz={10} tt="uppercase" fw={800} c="gray.5" style={{ letterSpacing: '0.18em' }}>
                              {row.right}
                            </Text>
                          </Paper>
                        </motion.div>
                      ))}
                    </SimpleGrid>
                  </Stack>
                </Grid.Col>

                <Grid.Col span={{ base: 12, lg: 6 }}>
                  <Paper
                    radius="2rem"
                    p="lg"
                    bg="#0a0f1a"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <motion.div
                      initial={reduced ? false : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: motionDuration.fast }}
                    >
                      <Group justify="space-between" mb="lg">
                        <Group gap={6}>
                          <Box w={10} h={10} bg="red.6" style={{ borderRadius: 999, opacity: 0.35 }} />
                          <Box w={10} h={10} bg="yellow.5" style={{ borderRadius: 999, opacity: 0.35 }} />
                          <Box w={10} h={10} bg="teal.5" style={{ borderRadius: 999, opacity: 0.35 }} />
                        </Group>
                        <Text fz={10} ff="monospace" c="cyan.4" tt="uppercase" style={{ letterSpacing: '0.18em' }}>
                          system_live: active
                        </Text>
                      </Group>
                    </motion.div>

                    <Group align="flex-end" gap="xs" h={rem(140)} mt="md">
                      {barHeights.map((h, idx) => (
                        <motion.div
                          key={`bar-${idx}`}
                          initial={reduced ? false : { scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true, amount: 0.45 }}
                          transition={{
                            duration: motionDuration.slow,
                            delay: reduced ? 0 : 0.12 + idx * 0.07,
                            ease: motionEaseOut,
                          }}
                          style={{
                            flex: 1,
                            height: `${h}%`,
                            borderTopLeftRadius: rem(10),
                            borderTopRightRadius: rem(10),
                            transformOrigin: 'bottom center',
                            background:
                              idx % 2 === 0
                                ? 'color-mix(in srgb, var(--mantine-color-brand-6) 35%, transparent)'
                                : 'color-mix(in srgb, var(--mantine-color-cyan-5) 45%, transparent)',
                          }}
                        />
                      ))}
                    </Group>

                    <motion.div
                      initial={reduced ? false : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: motionDuration.fast, delay: reduced ? 0 : 0.45 }}
                    >
                      <Group justify="space-between" mt="md">
                        {footerChips.map((t) => (
                          <Text key={t} fz={9} tt="uppercase" fw={800} c={t.includes('Diferencias') ? 'cyan.4' : 'gray.5'} style={{ letterSpacing: '0.14em' }}>
                            {t}
                          </Text>
                        ))}
                      </Group>
                    </motion.div>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Paper>
          </motion.div>
      </Container>
    </Box>
  );
}
