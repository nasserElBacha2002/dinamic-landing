import { Box, Container, Stack, Text, rem } from '@mantine/core';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { motionDuration } from '@/components/animations/variants';
import { BrandButton } from '@/components/ui/BrandButton';
import { contentMaxWidth } from '@/theme/theme';

export function CtaSection() {
  return (
    <Box component="section" pt={{ base: '4rem', md: '6rem' }} bg="#020617">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth} pb={{ base: '4rem', md: '5rem' }}>
        <Stack align="center" ta="center" gap="xl">
          <MotionFadeIn direction="up" duration={motionDuration.section}>
            <Text
              component="h2"
              fz={{ base: rem(36), md: rem(52) }}
              fw={800}
              c="white"
              lh={1.08}
              maw={rem(980)}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              Optimizá el control de inventarios de tu operación
            </Text>
          </MotionFadeIn>
          <MotionFadeIn direction="up" duration={motionDuration.base} delay={0.1}>
            <Text fz={{ base: 'md', md: 'xl' }} c="gray.4" maw={rem(900)} fw={500} lh={1.75}>
              Coordinemos una reunión para analizar tus procesos actuales, necesidades operativas y oportunidades de mejora.
            </Text>
          </MotionFadeIn>
          <MotionFadeIn direction="up" duration={motionDuration.base} delay={0.22}>
            <BrandButton
              component="a"
              href="#contacto"
              size="xl"
              h={rem(64)}
              px={rem(40)}
              tt="uppercase"
              fz="sm"
              className="ds-focus-ring ds-header-cta"
              style={{ letterSpacing: '0.18em' }}
            >
              Agendar reunión
            </BrandButton>
          </MotionFadeIn>
        </Stack>
      </Container>
    </Box>
  );
}
