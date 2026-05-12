import { Box, Container, Paper, SimpleGrid, Stack, Text, rem } from '@mantine/core';
import { IconRoute, IconSettingsAutomation, IconUserCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentMaxWidth } from '@/theme/theme';

const pillars = [
  {
    title: 'Precisión operativa',
    body: 'Eliminamos discrepancias mediante procesos de auditoría rigurosos y doble verificación.',
    icon: IconUserCheck,
    ring: 'brand' as const,
  },
  {
    title: 'Trazabilidad',
    body: 'Seguimiento digital de cada captura para auditorías posteriores y trazabilidad total.',
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
  return (
    <Box component="section" py={{ base: '4rem', md: '6rem' }} bg="gray.0" style={{ overflow: 'hidden' }}>
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <SectionHeader
          align="center"
          eyebrow="Metodología propia"
          title="Nuestro sistema de valor"
          subtitle="Cada operación se estructura para asegurar exactitud, seguimiento y cumplimiento de los objetivos del cliente."
        />

        <Box pos="relative" mt={{ base: 'xl', md: '3rem' }}>
          <Box
            visibleFrom="lg"
            pos="absolute"
            top="38%"
            left={0}
            right={0}
            h={2}
            className="ds-hub-line"
            style={{ transform: 'translateY(-50%)' }}
          />

          <Stack gap="xl" align="center">
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 'lg', md: 'xl', lg: '3rem' }} w="100%" style={{ position: 'relative', zIndex: 1 }}>
              {pillars.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.06 * idx }}
                  style={{ height: '100%' }}
                >
                  <Stack align="center" ta="center" gap="md" h="100%">
                    <Box pos="relative" w={rem(160)} h={rem(160)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box
                        pos="absolute"
                        inset={rem(14)}
                        style={{
                          borderRadius: 999,
                          border: `2px dashed color-mix(in srgb, var(--mantine-color-${p.ring === 'brand' ? 'brand' : 'cyan'}-5) 55%, transparent)`,
                          animation: idx % 2 === 0 ? 'ds-spin 14s linear infinite' : 'ds-spin-reverse 14s linear infinite',
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
                </motion.div>
              ))}
            </SimpleGrid>

            <Box
              pos="relative"
              w={{ base: '100%', md: rem(360) }}
              style={{
                marginTop: rem(8),
              }}
            >
              <Box
                hiddenFrom="md"
                h={rem(40)}
                w={2}
                mx="auto"
                mb="sm"
                bg="gray.3"
                style={{ borderRadius: 2 }}
              />
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
          </Stack>
        </Box>
        <style>{`
          @keyframes ds-spin { to { transform: rotate(360deg); } }
          @keyframes ds-spin-reverse { to { transform: rotate(-360deg); } }
        `}</style>
      </Container>
    </Box>
  );
}
