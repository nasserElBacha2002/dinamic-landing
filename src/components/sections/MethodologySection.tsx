import { Box, Card, Container, SimpleGrid, Text, rem } from '@mantine/core';
import { motion } from 'framer-motion';
import { methodologySteps } from '@/data/methodology';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentMaxWidth } from '@/theme/theme';

export function MethodologySection() {
  return (
    <Box component="section" id="metodologia" py={{ base: '4rem', md: '6rem' }} bg="gray.0">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <SectionHeader
          align="center"
          eyebrow="Proceso de trabajo"
          title="Metodología de Implementación"
          subtitle="Cada inventario se planifica, ejecuta y valida bajo una metodología estructurada, orientada a precisión, trazabilidad y cumplimiento."
        />

        <Box pos="relative">
          <Box
            visibleFrom="lg"
            pos="absolute"
            top="42%"
            left="6%"
            right="6%"
            h={2}
            bg="gray.3"
            style={{ transform: 'translateY(-50%)', zIndex: 0 }}
          />

          <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 'lg', lg: 'xl' }} pos="relative" style={{ zIndex: 1 }}>
            {methodologySteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.06 * idx }}
              >
                <Card
                  p={{ base: 'lg', md: 'xl' }}
                  radius="2.5rem"
                  withBorder
                  mt={{ lg: step.highlight ? rem(48) : 0 }}
                  style={{
                    minHeight: rem(300),
                    transform: 'translateZ(0)',
                    transition: 'transform 200ms ease, border-color 200ms ease',
                    borderColor: step.highlight ? 'color-mix(in srgb, var(--mantine-color-brand-6) 35%, transparent)' : undefined,
                  }}
                  styles={{
                    root: {
                      '&:hover': { transform: 'translateY(-8px)' },
                    },
                  }}
                >
                  <Box
                    w={rem(80)}
                    h={rem(80)}
                    mx="auto"
                    mb="lg"
                    style={{
                      borderRadius: rem(22),
                      display: 'grid',
                      placeItems: 'center',
                      background: step.highlight ? 'var(--mantine-color-brand-6)' : 'var(--mantine-color-gray-0)',
                      border: step.highlight ? 'none' : `2px solid color-mix(in srgb, var(--mantine-color-gray-4) 35%, transparent)`,
                      boxShadow: step.highlight ? '0 18px 40px color-mix(in srgb, var(--mantine-color-brand-6) 30%, transparent)' : 'inset 0 1px 0 rgba(255,255,255,0.65)',
                    }}
                  >
                    <Text fz="1.75rem" fw={900} c={step.highlight ? 'white' : 'brand.7'}>
                      {step.id}
                    </Text>
                  </Box>
                  <Text fw={800} fz="lg" ta="center" mb="sm" c="gray.9">
                    {step.title}
                  </Text>
                  <Text fz="sm" c="dimmed" ta="center" fw={500} lh={1.65}>
                    {step.description}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
