import {
  Anchor,
  Box,
  Container,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconBarcode, IconDrone, IconEye } from '@tabler/icons-react';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { MotionStagger } from '@/components/animations/MotionStagger';
import { motionDuration } from '@/components/animations/variants';
import { digitalFlowSteps } from '@/data/digitalFlow';
import { contentMaxWidth } from '@/theme/theme';

const modalities = [
  {
    title: 'Captura digital',
    body: 'Registro del operativo con app móvil propia, observaciones y trazabilidad por sector o ubicación.',
    icon: IconBarcode,
    accent: 'brand' as const,
  },
  {
    title: 'Visión artificial',
    body: 'Apoyo opcional para evidencia visual y detección de elementos visibles en casos específicos.',
    icon: IconEye,
    accent: 'cyan' as const,
  },
  {
    title: 'Drones en altura',
    body: 'Modalidad complementaria para posiciones elevadas cuando etiquetas, pasillos y seguridad lo permiten.',
    icon: IconDrone,
    accent: 'brand' as const,
    to: '/servicios/inventarios-con-drones/',
    linkLabel: 'Inventarios con drones para depósitos',
  },
] as const;

export function TechnologyComplementSection() {
  return (
    <Box
      component="section"
      id="tecnologia"
      py={{ base: '4rem', md: '6rem' }}
      className="ds-bg-digital"
      aria-labelledby="tecnologia-heading"
    >
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionFadeIn direction="none" duration={motionDuration.section}>
          <Stack gap="lg" maw={rem(900)} mb={{ base: 'xl', md: '3rem' }}>
            <Text tt="uppercase" size="xs" fw={800} c="brand.6" style={{ letterSpacing: '0.22em' }}>
              Diferencial complementario
            </Text>
            <Text
              id="tecnologia-heading"
              component="h2"
              fz={{ base: rem(32), sm: rem(40) }}
              fw={800}
              c="gray.9"
              lh={1.1}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              Tecnología aplicada cuando aporta valor
            </Text>
            <Text fz={{ base: 'md', md: 'lg' }} c="dimmed" fw={500} lh={1.75}>
              La tecnología complementa el inventario físico mediante captura digital, lectura de códigos, evidencia
              visual y, cuando el entorno lo permite, apoyo con visión artificial o drones en altura. La modalidad se
              define según las etiquetas, las ubicaciones, los pasillos, la iluminación, la seguridad y la estructura del
              depósito. No todos los inventarios requieren drones ni automatización.
            </Text>
          </Stack>
        </MotionFadeIn>

        <SimpleGrid cols={{ base: 2, md: 3, lg: 5 }} spacing="md" mb={{ base: 'xl', md: '3rem' }}>
          {digitalFlowSteps.map((step) => (
            <Stack key={step.key} align="center" ta="center" gap="xs">
              <ThemeIcon
                size={64}
                radius="xl"
                variant="white"
                color={step.accent === 'brand' ? 'brand' : 'cyan'}
                style={{ boxShadow: 'var(--mantine-shadow-sm)' }}
              >
                <step.icon stroke={1.25} style={{ width: rem(28), height: rem(28) }} />
              </ThemeIcon>
              <Text tt="uppercase" fw={800} size="xs" c="gray.9" style={{ letterSpacing: '0.14em' }}>
                {step.label}
              </Text>
              <Text fz="xs" c="dimmed" fw={600} maw={rem(160)}>
                {step.description}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mb={{ base: 'xl', md: '3rem' }}>
          <MotionStagger staggerDelay={0.08}>
            {modalities.map((item) => (
              <Paper
                key={item.title}
                p="xl"
                radius="2rem"
                withBorder
                bg="gray.0"
                style={{ height: '100%' }}
              >
                <ThemeIcon
                  size={48}
                  radius="md"
                  variant="light"
                  color={item.accent === 'brand' ? 'brand' : 'cyan'}
                  mb="md"
                >
                  <item.icon stroke={1.35} />
                </ThemeIcon>
                <Text fw={800} fz="lg" c="gray.9" mb="sm">
                  {item.title}
                </Text>
                <Text fz="sm" c="dimmed" fw={500} lh={1.65} mb={'to' in item ? 'md' : 0}>
                  {item.body}
                </Text>
                {'to' in item && item.to ? (
                  <Anchor
                    component={Link}
                    to={item.to}
                    fw={700}
                    c="brand.7"
                    underline="hover"
                    className="ds-focus-ring"
                  >
                    {item.linkLabel}
                  </Anchor>
                ) : null}
              </Paper>
            ))}
          </MotionStagger>
        </SimpleGrid>

        <Text ta="center" c="dimmed" fw={500} fz="sm" maw={rem(720)} mx="auto">
          Nuestro ecosistema tecnológico permite registrar, validar y organizar la información del operativo. Integración
          o exportación de datos según el alcance del proyecto.
        </Text>
      </Container>
    </Box>
  );
}
