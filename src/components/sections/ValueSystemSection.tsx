import { Box, Container, Paper, SimpleGrid, Stack, Text, rem } from '@mantine/core';
import { IconRoute, IconSettingsAutomation, IconUserCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { MotionStagger } from '@/components/animations/MotionStagger';
import { lineReveal, motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentMaxWidth } from '@/theme/theme';

const pillars = [
  {
    title: 'Precisión operativa',
    body: 'Detectamos y validamos diferencias mediante conteos controlados, reconteos y trazabilidad operativa.',
    icon: IconUserCheck,
    ring: 'brand' as const,
  },
  {
    title: 'Trazabilidad',
    body: 'Seguimiento digital de cada captura para auditorías posteriores y trazabilidad por ubicación.',
    icon: IconRoute,
    ring: 'cyan' as const,
  },
  {
    title: 'Cumplimiento eficiente',
    body: 'Operación planificada para cumplir plazos, cobertura y estándares acordados con el cliente.',
    icon: IconSettingsAutomation,
    ring: 'brand' as const,
  },
];

export function ValueSystemSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <Box component="section" py={{ base: '4rem', md: '6rem' }} className="ds-bg-value" style={{ overflow: 'hidden' }}>
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionFadeIn direction="none" duration={motionDuration.section}>
          <SectionHeader
            align="center"
            eyebrow="Metodología propia"
            title="Nuestro sistema de valor"
            subtitle="Cada operación se estructura para orientar exactitud, seguimiento y cumplimiento de los objetivos acordados con el cliente."
          />
        </MotionFadeIn>

        <Box pos="relative" mt={{ base: 'xl', md: '3rem' }}>
          <Box visibleFrom="lg" pos="absolute" top="38%" left={0} right={0} style={{ transform: 'translateY(-50%)', zIndex: 0, height: rem(2) }}>
            {!reduced ? (
              <motion.div
                variants={lineReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                style={{
                  height: rem(2),
                  width: '100%',
                  transformOrigin: 'center center',
                }}
                className="ds-hub-line"
              />
            ) : (
              <Box className="ds-hub-line" h={2} w="100%" />
            )}
          </Box>

          <Stack gap="xl" align="center" pos="relative" style={{ zIndex: 1 }}>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 'lg', md: 'xl', lg: '3rem' }} w="100%">
              <MotionStagger staggerDelay={0.11} baseDelay={0.46}>
                {pillars.map((p, idx) => (
                  <Stack key={p.title} align="center" ta="center" gap="md" h="100%">
                    <Box pos="relative" w={rem(160)} h={rem(160)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box
                        pos="absolute"
                        inset={rem(14)}
                        className={idx % 2 === 0 ? 'ds-value-orbit' : 'ds-value-orbit-reverse'}
                        style={{
                          borderRadius: 999,
                          border: `2px dashed color-mix(in srgb, var(--mantine-color-${p.ring === 'brand' ? 'brand' : 'cyan'}-5) 55%, transparent)`,
                        }}
                      />
                      <Paper
                        w={rem(140)}
                        h={rem(140)}
                        radius="50%"
                        shadow="md"
                        withBorder
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: rem(4),
                          borderColor: 'var(--mantine-color-gray-0)',
                        }}
                      >
                        <p.icon
                          stroke={1.25}
                          style={{
                            width: rem(44),
                            height: rem(44),
                            color:
                              p.ring === 'brand'
                                ? 'var(--mantine-color-brand-6)'
                                : 'var(--mantine-color-cyan-5)',
                          }}
                        />
                      </Paper>
                    </Box>
                    <Text fw={800} fz="xl" c="gray.9">
                      {p.title}
                    </Text>
                    <Text c="dimmed" fz="sm" maw={rem(320)} lh={1.65} fw={500}>
                      {p.body}
                    </Text>
                  </Stack>
                ))}
              </MotionStagger>
            </SimpleGrid>

            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: motionDuration.slow, ease: motionEaseOut, delay: 0 }}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <Box pos="relative" w={{ base: '100%', md: rem(360) }} style={{ display: 'flex', justifyContent: 'center' }}>
                <Box hiddenFrom="md" h={rem(40)} w={2} mx="auto" mb="sm" bg="gray.3" style={{ borderRadius: 2 }} />
                <Paper
                  radius="50%"
                  w={{ base: rem(280), sm: rem(320) }}
                  h={{ base: rem(280), sm: rem(320) }}
                  mx="auto"
                  p="xl"
                  bg="brand.6"
                  c="white"
                  shadow="xl"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: '0 24px 60px color-mix(in srgb, var(--mantine-color-brand-6) 35%, transparent)',
                  }}
                >
                  <IconSettingsAutomation size={56} stroke={1.15} color="white" />
                  <Text tt="uppercase" size="xs" fw={800} mt="sm" style={{ letterSpacing: '0.22em' }} c="white">
                    Núcleo central
                  </Text>
                  <Text fw={800} fz="sm" mt={6}>
                    Control operativo real
                  </Text>
                </Paper>
              </Box>
            </motion.div>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
