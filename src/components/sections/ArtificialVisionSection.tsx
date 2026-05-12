import { Box, Container, Grid, Group, Paper, Stack, Text, ThemeIcon, rem } from '@mantine/core';
import { IconArrowRight, IconCamera, IconCircleCheck, IconEye, IconPackage } from '@tabler/icons-react';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import aiVisionUrl from '@/assets/images/ai-vision-mock.svg?url';

const steps = [
  { label: 'Pallet', icon: IconPackage, tone: 'brand' as const },
  { label: 'Captura', icon: IconCamera, tone: 'cyan' as const },
  { label: 'Detección', icon: IconEye, tone: 'brand' as const },
  { label: 'Evidencia', icon: IconCircleCheck, tone: 'cyan' as const, filled: true },
];

export function ArtificialVisionSection() {
  return (
    <Box component="section" py={{ base: '4rem', md: '6rem' }} bg="white">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={rem(1280)}>
        <Grid gutter={{ base: 'xl', lg: '4rem' }} align="center">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
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

              <Paper mt="xl" p="lg" radius="2rem" withBorder bg="gray.0">
                <Group justify="center" align="center" gap="xs" wrap="wrap">
                  {steps.map((s, idx) => (
                    <Fragment key={s.label}>
                      <Stack gap={6} align="center" miw={rem(76)}>
                        <ThemeIcon
                          radius="md"
                          size={48}
                          color={s.tone === 'brand' ? 'brand' : 'cyan'}
                          variant={s.filled ? 'filled' : 'white'}
                          style={{
                            border: s.filled
                              ? undefined
                              : `1px solid color-mix(in srgb, var(--mantine-color-${s.tone === 'brand' ? 'brand' : 'cyan'}-6) 25%, transparent)`,
                            boxShadow: 'var(--mantine-shadow-sm)',
                          }}
                        >
                          <s.icon stroke={1.25} style={{ width: rem(22), height: rem(22) }} />
                        </ThemeIcon>
                        <Text tt="uppercase" fz={9} fw={800} c={s.tone === 'brand' ? 'brand.7' : 'cyan.6'} style={{ letterSpacing: '0.12em' }}>
                          {s.label}
                        </Text>
                      </Stack>
                      {idx < steps.length - 1 ? <IconArrowRight size={18} color="var(--mantine-color-gray-4)" aria-hidden /> : null}
                    </Fragment>
                  ))}
                </Group>
              </Paper>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Box pos="relative" style={{ borderRadius: rem(48), overflow: 'hidden', boxShadow: '0 30px 80px rgba(2, 6, 23, 0.12)' }}>
              <Box
                component="img"
                src={aiVisionUrl}
                alt="Representación de panel y evidencia visual para validación de inventario"
                w="100%"
                style={{ display: 'block' }}
              />
              {/* TODO: replace ai-vision-mock.svg with a licensed operations/dashboard image if required */}
              <Paper
                pos="absolute"
                bottom={rem(24)}
                left={rem(24)}
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
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
