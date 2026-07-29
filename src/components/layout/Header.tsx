import { Anchor, Burger, Drawer, Group, Menu, Stack, Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';
import { BrandButton } from '@/components/ui/BrandButton';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { routesInGroup } from '@/routes';
import { appHeaderHeightPx, contentMaxWidth } from '@/theme/theme';

const primaryLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Quiénes Somos', to: '/#quienes-somos' },
] as const;

function NavAnchor({
  to,
  label,
  active,
  onNavigate,
}: {
  to: string;
  label: string;
  active?: boolean;
  onNavigate?: () => void;
}) {
  const shared = {
    onClick: onNavigate,
    fz: 'sm' as const,
    fw: (active ? 800 : 600) as 800 | 600,
    c: (active ? 'brand.6' : 'dimmed') as 'brand.6' | 'dimmed',
    underline: 'never' as const,
    className: 'ds-focus-ring ds-nav-link',
    style: { borderRadius: rem(4), padding: `${rem(4)} ${rem(6)}` },
  };

  if (to.includes('#')) {
    return (
      <Anchor component="a" href={to} {...shared}>
        {label}
      </Anchor>
    );
  }

  return (
    <Anchor component={Link} to={to} {...shared}>
      {label}
    </Anchor>
  );
}

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const reduced = usePrefersReducedMotion();
  const location = useLocation();
  const services = routesInGroup('servicios', { header: true });
  const industries = routesInGroup('industrias', { header: true });
  const resources = routesInGroup('recursos', { header: true });
  const onHome = location.pathname === '/';

  return (
    <motion.header
      initial={reduced ? false : { y: -12, opacity: 0.96 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduced ? 0.15 : 0.55, ease: motionEaseOut }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: rem(appHeaderHeightPx),
        zIndex: 100,
        background: '#ffffff',
        borderBottom: '1px solid #e8eaed',
        boxShadow: '0 1px 3px rgba(2, 6, 23, 0.06)',
      }}
    >
      <Group
        h="100%"
        px={{ base: 'md', md: 'xl' }}
        justify="space-between"
        align="center"
        maw={contentMaxWidth}
        mx="auto"
        w="100%"
      >
        <Anchor component={Link} to="/" underline="never" className="ds-focus-ring" style={{ borderRadius: rem(8) }}>
          <BrandLogo heightPx={72} maxWidthPx={520} />
        </Anchor>

        <Group gap="md" visibleFrom="lg">
          {primaryLinks.map((l) => (
            <NavAnchor key={l.to} to={l.to} label={l.label} active={l.to === '/' && onHome} />
          ))}

          <Menu trigger="click-hover" openDelay={80} closeDelay={120} withinPortal>
            <Menu.Target>
              <Anchor
                component="button"
                type="button"
                fz="sm"
                fw={location.pathname.startsWith('/servicios') ? 800 : 600}
                c={location.pathname.startsWith('/servicios') ? 'brand.6' : 'dimmed'}
                underline="never"
                className="ds-focus-ring ds-nav-link"
                style={{
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  borderRadius: rem(4),
                  padding: `${rem(4)} ${rem(6)}`,
                }}
              >
                Servicios <IconChevronDown size={14} aria-hidden />
              </Anchor>
            </Menu.Target>
            <Menu.Dropdown>
              {services.map((r) => (
                <Menu.Item key={r.id} component={Link} to={r.path}>
                  {r.navigation?.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>

          <Menu trigger="click-hover" openDelay={80} closeDelay={120} withinPortal>
            <Menu.Target>
              <Anchor
                component="button"
                type="button"
                fz="sm"
                fw={location.pathname.startsWith('/industrias') ? 800 : 600}
                c={location.pathname.startsWith('/industrias') ? 'brand.6' : 'dimmed'}
                underline="never"
                className="ds-focus-ring ds-nav-link"
                style={{
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  borderRadius: rem(4),
                  padding: `${rem(4)} ${rem(6)}`,
                }}
              >
                Industrias <IconChevronDown size={14} aria-hidden />
              </Anchor>
            </Menu.Target>
            <Menu.Dropdown>
              {industries.map((r) => (
                <Menu.Item key={r.id} component={Link} to={r.path}>
                  {r.navigation?.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>

          {resources.length > 0 ? (
            <Menu trigger="click-hover" openDelay={80} closeDelay={120} withinPortal>
              <Menu.Target>
                <Anchor
                  component="button"
                  type="button"
                  fz="sm"
                  fw={location.pathname.startsWith('/recursos') ? 800 : 600}
                  c={location.pathname.startsWith('/recursos') ? 'brand.6' : 'dimmed'}
                  underline="never"
                  className="ds-focus-ring ds-nav-link"
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    borderRadius: rem(4),
                    padding: `${rem(4)} ${rem(6)}`,
                  }}
                >
                  Recursos <IconChevronDown size={14} aria-hidden />
                </Anchor>
              </Menu.Target>
              <Menu.Dropdown>
                {resources.map((r) => (
                  <Menu.Item key={r.id} component={Link} to={r.path}>
                    {r.navigation?.label}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          ) : null}
        </Group>

        <Group gap="sm">
          <BrandButton
            component="a"
            href="/#contacto"
            visibleFrom="lg"
            size="md"
            px="xl"
            radius="xl"
            className="ds-focus-ring ds-header-cta"
          >
            Contacto
          </BrandButton>
          <Burger opened={opened} onClick={toggle} hiddenFrom="lg" aria-label="Abrir menú" />
        </Group>
      </Group>

      <Drawer opened={opened} onClose={close} position="right" title="Menú" padding="md" size="sm">
        <Stack gap="md">
          {primaryLinks.map((l) => (
            <NavAnchor key={l.to} to={l.to} label={l.label} onNavigate={close} />
          ))}
          <Text tt="uppercase" size="xs" fw={800} c="dimmed" style={{ letterSpacing: '0.18em' }}>
            Servicios
          </Text>
          {services.map((r) => (
            <NavAnchor key={r.id} to={r.path} label={r.navigation?.label ?? r.id} onNavigate={close} />
          ))}
          <Text tt="uppercase" size="xs" fw={800} c="dimmed" style={{ letterSpacing: '0.18em' }}>
            Industrias
          </Text>
          {industries.map((r) => (
            <NavAnchor key={r.id} to={r.path} label={r.navigation?.label ?? r.id} onNavigate={close} />
          ))}
          {resources.length > 0 ? (
            <>
              <Text tt="uppercase" size="xs" fw={800} c="dimmed" style={{ letterSpacing: '0.18em' }}>
                Recursos
              </Text>
              {resources.map((r) => (
                <NavAnchor key={r.id} to={r.path} label={r.navigation?.label ?? r.id} onNavigate={close} />
              ))}
            </>
          ) : null}
          <BrandButton component="a" href="/#contacto" fullWidth onClick={close} className="ds-header-cta">
            Contacto
          </BrandButton>
        </Stack>
      </Drawer>
    </motion.header>
  );
}
