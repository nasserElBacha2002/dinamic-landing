import { Box, Container, SimpleGrid } from '@mantine/core';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { MotionStagger } from '@/components/animations/MotionStagger';
import { motionDuration } from '@/components/animations/variants';
import { clients } from '@/data/clients';
import { LogoCard } from '@/components/ui/LogoCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentMaxWidth } from '@/theme/theme';

export function ClientsSection() {
  return (
    <Box component="section" id="clientes" py={{ base: '4rem', md: '6rem' }} className="ds-bg-clients">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionFadeIn direction="none" duration={motionDuration.base}>
          <SectionHeader
            align="center"
            title="Empresas que confían en nosotros"
            subtitle="Empresas de retail, logística, distribución, indumentaria, farmacias y consumo masivo confían en Dinamic Systems para optimizar sus procesos de inventario."
          />
        </MotionFadeIn>

        <SimpleGrid cols={{ base: 2, sm: 3, lg: 5 }} spacing={{ base: 'md', md: 'lg' }} mt={{ base: 'xl', md: '3rem' }}>
          <MotionStagger staggerDelay={0.06}>
            {clients.map((c) => (
              <LogoCard key={c.name} client={c} />
            ))}
          </MotionStagger>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
