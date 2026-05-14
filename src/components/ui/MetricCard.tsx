import { Box, Card, rem, Text, ThemeIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import type { TablerIcon } from '@tabler/icons-react';
import { motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';

interface MetricCardProps {
  title: string;
  icon: TablerIcon;
  accent: 'brand' | 'cyan';
  /** Solid-style cards on hero photo (high legibility over busy warehouse). */
  surface?: 'default' | 'hero';
}

export function MetricCard({ title, icon: Icon, accent, surface = 'default' }: MetricCardProps) {
  const color = accent === 'brand' ? 'brand' : 'cyan';
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      whileHover={reduced ? undefined : { y: -5 }}
      transition={{ duration: motionDuration.fast, ease: motionEaseOut }}
      style={{ height: '100%', width: '100%', minWidth: 0 }}
    >
      <Card
        padding={surface === 'hero' ? 'lg' : 'xl'}
        radius={surface === 'hero' ? '2.25rem' : '3rem'}
        shadow="sm"
        withBorder={surface === 'default'}
        w="100%"
        bg={surface === 'hero' ? 'white' : accent === 'cyan' ? 'cyan.1' : 'gray.0'}
        style={
          surface === 'hero'
            ? {
                height: '100%',
                minWidth: 0,
                isolation: 'isolate',
                border: '1px solid #e2e8f0',
                boxShadow:
                  '0 1px 0 rgba(255, 255, 255, 1) inset, 0 10px 28px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(2, 6, 23, 0.04)',
              }
            : { height: '100%', minWidth: 0 }
        }
      >
        <ThemeIcon
          size={surface === 'hero' ? 52 : 56}
          radius="xl"
          variant="light"
          color={color}
          mb={surface === 'hero' ? 'md' : 'lg'}
        >
          <Icon style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
        </ThemeIcon>
        <Text fw={800} fz="lg" c="gray.9" mb="xs" style={{ wordBreak: 'break-word' }}>
          {title}
        </Text>
        <Box
          h={rem(6)}
          w={rem(48)}
          style={{
            borderRadius: rem(999),
            background: `var(--mantine-color-${color}-6)`,
          }}
        />
      </Card>
    </motion.div>
  );
}
