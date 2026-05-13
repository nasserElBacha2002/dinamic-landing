import { Box, Container, Grid, Paper, Text, rem } from '@mantine/core';
import { motion } from 'framer-motion';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';
import aiVisionUrl from '@/assets/images/ai-vision-mock.svg?url';

export function ArtificialVisionSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <Box component="section" py={{ base: '4rem', md: '6rem' }} className="ds-bg-vision">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={rem(1280)}>
        <Grid gutter={{ base: 'xl', lg: '4rem' }} align="center">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <MotionFadeIn direction="left" duration={motionDuration.section}>
              <Text
                component="span"
                display="inline-block"
                px="md"
                py={6}
                fz={10}
                fw={800}
                tt="uppercase"
                c="brand.7"
                bg="color-mix(in srgb, var(--mantine-color-brand-6) 12%, transparent)"
                style={{ borderRadius: rem(999), letterSpacing: '0.18em' }}
              >
                IA &amp; visión por computadora
              </Text>
              <Text
                component="h2"
                fz={{ base: rem(32), sm: rem(40) }}
                fw={800}
                c="gray.9"
                mt="lg"
                lh={1.1}
                style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
              >
                Visión artificial como soporte al inventario
              </Text>
              <Text fz={{ base: 'md', md: 'lg' }} c="dimmed" fw={500} lh={1.75} mt="lg">
                La visión artificial asiste el relevamiento en casos específicos, generando evidencia visual y apoyo para
                la validación del inventario mediante la detección de elementos visibles.
              </Text>
            </MotionFadeIn>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <motion.div
              initial={reduced ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: motionDuration.section, ease: motionEaseOut }}
            >
              <Box pos="relative" style={{ borderRadius: rem(48), overflow: 'hidden', boxShadow: '0 30px 80px rgba(2, 6, 23, 0.12)' }}>
                <Box
                  component="img"
                  src={aiVisionUrl}
                  alt="Representación de panel y evidencia visual para validación de inventario"
                  w="100%"
                  style={{ display: 'block' }}
                />
                {/* TODO: replace ai-vision-mock.svg with a licensed operations/dashboard image if required */}
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: motionDuration.base, delay: reduced ? 0 : 0.2, ease: motionEaseOut }}
                  style={{ position: 'absolute', bottom: rem(24), left: rem(24) }}
                >
                  <Paper
                    p="md"
                    radius="xl"
                    bg="rgba(255,255,255,0.92)"
                    style={{ border: '1px solid rgba(255,255,255,0.55)', backdropFilter: 'blur(8px)' }}
                  >
                    <Text fz={10} fw={800} tt="uppercase" c="brand.7" style={{ letterSpacing: '0.16em' }}>
                      Apoyo al conteo
                    </Text>
                    <Text fz="lg" fw={800} c="gray.9">
                      Validación visual
                    </Text>
                  </Paper>
                </motion.div>
              </Box>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
