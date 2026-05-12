import { Anchor, Box, Container, Divider, Grid, Group, Stack, Text, rem } from '@mantine/core';
import { IconPackages } from '@tabler/icons-react';
import { MotionSection } from '@/components/animations/MotionSection';
import { contentMaxWidth } from '@/theme/theme';

const serviceLinks = [
  { label: 'Inventarios retail', href: '#soluciones' },
  { label: 'Auditoría de CD', href: '#soluciones' },
  { label: 'Mapeo de racks', href: '#soluciones' },
  { label: 'Drones (complementario)', href: '#tecnologia' },
] as const;

const supportLinks = [
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Clientes', href: '#clientes' },
] as const;

const legalLinks = [
  { label: 'Política de privacidad', href: '#' },
  { label: 'Términos y condiciones', href: '#' },
] as const;

export function Footer() {
  return (
    <Box component="footer" py={{ base: 'xl', md: '4rem' }} bg="white" style={{ borderTop: '1px solid color-mix(in srgb, #c4c6cf 35%, transparent)' }}>
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionSection>
          <Grid gutter="xl" align="flex-start">
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="lg">
                <Group gap="sm">
                  <Box
                    w={40}
                    h={40}
                    bg="brand.6"
                    style={{
                      borderRadius: rem(12),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 24px color-mix(in srgb, var(--mantine-color-brand-6) 28%, transparent)',
                    }}
                  >
                    <IconPackages size={22} color="white" stroke={1.5} aria-hidden />
                  </Box>
                  <Text fz="xl" fw={800} style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
                    Dinamic <Text span c="brand.6" inherit>Systems</Text>
                  </Text>
                </Group>
                <Text c="dimmed" maw={rem(360)} fw={500}>
                  Servicios profesionales de control de inventarios físicos e integración tecnológica orientada a precisión,
                  trazabilidad y cumplimiento operativo.
                </Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }}>
              <Grid gutter="xl">
                <Grid.Col span={{ base: 12, xs: 4 }}>
                  <Stack gap="md">
                    <Text tt="uppercase" size="xs" fw={800} c="dimmed" style={{ letterSpacing: '0.28em' }}>
                      Servicios
                    </Text>
                    <Stack gap="sm">
                      {serviceLinks.map((l) => (
                        <Anchor key={l.label} href={l.href} fw={700} c="gray.9" underline="hover" className="ds-focus-ring ds-footer-link" style={{ borderRadius: rem(4) }}>
                          {l.label}
                        </Anchor>
                      ))}
                    </Stack>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }}>
                  <Stack gap="md">
                    <Text tt="uppercase" size="xs" fw={800} c="dimmed" style={{ letterSpacing: '0.28em' }}>
                      Soporte
                    </Text>
                    <Stack gap="sm">
                      {supportLinks.map((l) => (
                        <Anchor key={l.label} href={l.href} fw={700} c="gray.9" underline="hover" className="ds-focus-ring ds-footer-link" style={{ borderRadius: rem(4) }}>
                          {l.label}
                        </Anchor>
                      ))}
                    </Stack>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }}>
                  <Stack gap="md">
                    <Text tt="uppercase" size="xs" fw={800} c="dimmed" style={{ letterSpacing: '0.28em' }}>
                      Legal
                    </Text>
                    <Stack gap="sm">
                      {legalLinks.map((l) => (
                        <Anchor key={l.label} href={l.href} fw={700} c="gray.9" underline="hover" className="ds-focus-ring ds-footer-link" style={{ borderRadius: rem(4) }}>
                          {l.label}
                        </Anchor>
                      ))}
                    </Stack>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>

          <Divider my="xl" />
          <Text fz="sm" c="dimmed" ta={{ base: 'left', sm: 'center' }}>
            © {new Date().getFullYear()} Dinamic Systems S.A. Todos los derechos reservados.
          </Text>
        </MotionSection>
      </Container>
    </Box>
  );
}
