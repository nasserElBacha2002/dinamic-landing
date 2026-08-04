import { Box, Container, Group, SimpleGrid, Text, rem } from '@mantine/core';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { MotionSection } from '@/components/animations/MotionSection';
import { MotionStagger } from '@/components/animations/MotionStagger';
import { motionDuration } from '@/components/animations/variants';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { contentMaxWidth } from '@/theme/theme';

export function ServicesMapSection() {
  return (
    <Box component="section" id="servicios" py={{ base: '4rem', md: '6rem' }} className="ds-bg-services">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionSection>
          <Group justify="space-between" align="flex-end" gap="md" mb={{ base: 'xl', md: '3rem' }} wrap="wrap">
            <Box maw={rem(900)}>
              <MotionFadeIn direction="none" duration={motionDuration.base}>
                <Text tt="uppercase" size="xs" fw={800} c="brand.6" mb="sm" style={{ letterSpacing: '0.22em' }}>
                  Servicios principales
                </Text>
                <Text
                  component="h2"
                  fz={{ base: rem(32), sm: rem(40) }}
                  fw={800}
                  c="gray.9"
                  lh={1.1}
                  style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
                >
                  Inventarios físicos y modalidades de control
                </Text>
              </MotionFadeIn>
              <Text mt="md" fz="lg" c="dimmed" fw={500} maw={rem(720)} display={{ base: 'block', md: 'none' }}>
                Adaptamos la metodología al tipo de operación, volumen, ubicaciones y necesidad de control de cada
                empresa.
              </Text>
            </Box>
            <Group gap="xs" visibleFrom="md">
              <Box w={10} h={10} bg="brand.6" style={{ borderRadius: 999 }} />
              <Box w={10} h={10} bg="cyan.3" style={{ borderRadius: 999 }} />
              <Box w={10} h={10} bg="cyan.5" style={{ borderRadius: 999 }} />
            </Group>
          </Group>
          <Text mb={{ base: 'xl', md: '3rem' }} fz="lg" c="dimmed" fw={500} maw={rem(720)} visibleFrom="md">
            Adaptamos la metodología al tipo de operación, volumen, ubicaciones y necesidad de control de cada empresa.
          </Text>

          <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg">
            <MotionStagger staggerDelay={0.09}>
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </MotionStagger>
          </SimpleGrid>
        </MotionSection>
      </Container>
    </Box>
  );
}
