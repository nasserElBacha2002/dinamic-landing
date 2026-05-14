import { Anchor, Burger, Drawer, Group, Stack, rem } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';
import { BrandButton } from '@/components/ui/BrandButton';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { appHeaderHeightPx, contentMaxWidth } from '@/theme/theme';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes Somos', href: '#quienes-somos' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Clientes', href: '#clientes' },
] as const;

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const isLg = useMediaQuery('(min-width: 62em)');
  const reduced = usePrefersReducedMotion();

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
        <Anchor href="#inicio" underline="never" className="ds-focus-ring" style={{ borderRadius: rem(8) }}>
          <BrandLogo heightPx={72} maxWidthPx={520} />
        </Anchor>

        {isLg ? (
          <Group gap="lg" visibleFrom="lg">
            {links.map((l) => (
              <Anchor
                key={l.href}
                href={l.href}
                fz="sm"
                fw={l.href === '#inicio' ? 800 : 600}
                c={l.href === '#inicio' ? 'brand.6' : 'dimmed'}
                underline="never"
                className="ds-focus-ring ds-nav-link"
                style={{ borderRadius: rem(4), padding: `${rem(4)} ${rem(6)}` }}
              >
                {l.label}
              </Anchor>
            ))}
          </Group>
        ) : null}

        <Group gap="sm">
          <BrandButton
            component="a"
            href="#contacto"
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
          {links.map((l) => (
            <Anchor key={l.href} href={l.href} fw={700} onClick={close} className="ds-footer-link">
              {l.label}
            </Anchor>
          ))}
          <BrandButton component="a" href="#contacto" fullWidth onClick={close} className="ds-header-cta">
            Contacto
          </BrandButton>
        </Stack>
      </Drawer>
    </motion.header>
  );
}
