import { Box, Card, Container, SimpleGrid, Text, rem } from '@mantine/core';
import { motion } from 'framer-motion';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { MotionSection } from '@/components/animations/MotionSection';
import { lineReveal, motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';
import methodologyClasses from '@/components/sections/MethodologySection.module.css';
import { methodologySteps } from '@/data/methodology';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentMaxWidth } from '@/theme/theme';

export function MethodologySection() {
  const reduced = usePrefersReducedMotion();

  return (
    <Box component="section" id="metodologia" py={{ base: '4rem', md: '6rem' }} className="ds-bg-methodology">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionFadeIn direction="none" duration={motionDuration.section}>
          <SectionHeader
            align="center"
            eyebrow="Proceso de trabajo"
            title="Cómo se realiza el inventario"
            subtitle="Cada inventario se planifica, ejecuta y valida con una metodología orientada a cobertura, trazabilidad de capturas y cumplimiento de los objetivos acordados."
          />
        </MotionFadeIn>

        <MotionSection style={{ marginTop: rem(32) }}>
          <Box pos="relative">
            <Box visibleFrom="lg" pos="absolute" top="42%" left="4%" right="4%" h={2} style={{ transform: 'translateY(-50%)', zIndex: 0, overflow: 'hidden' }}>
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
                    background: 'var(--mantine-color-gray-3)',
                  }}
                />
              ) : (
                <Box h={2} w="100%" bg="gray.3" />
              )}
            </Box>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }} spacing={{ base: 'lg', lg: 'md' }} pos="relative" style={{ zIndex: 1 }}>
              {methodologySteps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={
                    reduced
                      ? false
                      : {
                          opacity: 0,
                          y: idx % 2 === 0 ? 22 : -16,
                          scale: 0.988,
                        }
                  }
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: motionDuration.section,
                    delay: reduced ? 0 : 0.08 + idx * 0.08,
                    ease: motionEaseOut,
                  }}
                >
                  <Card
                    p={{ base: 'lg', md: 'lg' }}
                    radius="2.5rem"
                    withBorder
                    mt={{ lg: step.highlight ? rem(36) : 0 }}
                    classNames={{ root: methodologyClasses.card }}
                    data-highlight={step.highlight ? 'true' : undefined}
                    style={{ minHeight: rem(280) }}
                  >
                    <Box
                      className={`${methodologyClasses.badge} ${step.highlight ? methodologyClasses.badgeHighlight : ''}`}
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
                        boxShadow: step.highlight
                          ? '0 18px 40px color-mix(in srgb, var(--mantine-color-brand-6) 30%, transparent)'
                          : 'inset 0 1px 0 rgba(255,255,255,0.65)',
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
        </MotionSection>
      </Container>
    </Box>
  );
}
