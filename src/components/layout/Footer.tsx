import { Anchor, Box, Container, Divider, Grid, Stack, Text, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MotionSection } from '@/components/animations/MotionSection';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { routesInGroup } from '@/routes';
import { contentMaxWidth } from '@/theme/theme';

const supportLinks = [
  { label: 'Metodología', to: '/#metodologia' },
  { label: 'Contacto', to: '/#contacto' },
  { label: 'Clientes', to: '/#clientes' },
] as const;

export function Footer() {
  const services = routesInGroup('servicios', { footer: true });
  const industries = routesInGroup('industrias', { footer: true });
  const resources = routesInGroup('recursos', { footer: true });

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
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="lg">
                <Anchor component={Link} to="/" underline="never" className="ds-focus-ring">
                  <BrandLogo heightPx={44} maxWidthPx={280} />
                </Anchor>
                <Text c="dimmed" maw={rem(360)} fw={500}>
                  Servicios profesionales de control de inventarios físicos e integración tecnológica orientada a
                  precisión, trazabilidad y cumplimiento operativo.
                </Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Grid gutter="xl">
                <Grid.Col span={{ base: 12, xs: 4 }}>
                  <Stack gap="md">
                    <Text tt="uppercase" size="xs" fw={800} c="dimmed" style={{ letterSpacing: '0.28em' }}>
                      Servicios
                    </Text>
                    <Stack gap="sm">
                      {services.map((r) => (
                        <Anchor
                          key={r.id}
                          component={Link}
                          to={r.path}
                          fw={700}
                          c="gray.9"
                          underline="hover"
                          className="ds-focus-ring ds-footer-link"
                          style={{ borderRadius: rem(4) }}
                        >
                          {r.navigation?.label}
                        </Anchor>
                      ))}
                    </Stack>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }}>
                  <Stack gap="md">
                    <Text tt="uppercase" size="xs" fw={800} c="dimmed" style={{ letterSpacing: '0.28em' }}>
                      Industrias y recursos
                    </Text>
                    <Stack gap="sm">
                      {[...industries, ...resources].map((r) => (
                        <Anchor
                          key={r.id}
                          component={Link}
                          to={r.path}
                          fw={700}
                          c="gray.9"
                          underline="hover"
                          className="ds-focus-ring ds-footer-link"
                          style={{ borderRadius: rem(4) }}
                        >
                          {r.navigation?.label}
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
                        <Anchor
                          key={l.to}
                          href={l.to}
                          fw={700}
                          c="gray.9"
                          underline="hover"
                          className="ds-focus-ring ds-footer-link"
                          style={{ borderRadius: rem(4) }}
                        >
                          {l.label}
                        </Anchor>
                      ))}
                      <Anchor
                        href="mailto:info@dinamicsystems.com"
                        fw={700}
                        c="gray.9"
                        underline="hover"
                        className="ds-focus-ring ds-footer-link"
                        style={{ borderRadius: rem(4) }}
                      >
                        info@dinamicsystems.com
                      </Anchor>
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
