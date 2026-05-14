import { Anchor, Box, Container, Divider, Grid, Stack, Text, rem } from '@mantine/core';
import { MotionSection } from '@/components/animations/MotionSection';
import { BrandLogo } from '@/components/ui/BrandLogo';
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
    <Box
      component="footer"
      py={{ base: 'xl', md: '4rem' }}
      style={{
        background: '#ffffff',
        borderTop: '1px solid #e8eaed',
        boxShadow: '0 -1px 3px rgba(2, 6, 23, 0.04)',
      }}
    >
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionSection>
          <Grid gutter="xl" align="flex-start">
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="lg">
                <BrandLogo heightPx={44} maxWidthPx={280} />
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
