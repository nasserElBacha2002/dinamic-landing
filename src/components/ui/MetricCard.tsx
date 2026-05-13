import { Box, Card, rem, Text, ThemeIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import type { TablerIcon } from '@tabler/icons-react';
import { motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';

interface MetricCardProps {
  title: string;
  icon: TablerIcon;
  accent: 'brand' | 'cyan';
}

export function MetricCard({ title, icon: Icon, accent }: MetricCardProps) {
  const color = accent === 'brand' ? 'brand' : 'cyan';
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      whileHover={reduced ? undefined : { y: -5 }}
      transition={{ duration: motionDuration.fast, ease: motionEaseOut }}
      style={{ height: '100%', width: '100%', minWidth: 0 }}
    >
      <Card
        padding="xl"
        radius="3rem"
        shadow="sm"
        withBorder
        w="100%"
        bg={accent === 'cyan' ? 'cyan.1' : 'gray.0'}
        style={{ height: '100%', minWidth: 0 }}
      >
        <ThemeIcon
          size={56}
          radius="xl"
          variant="light"
          color={color}
          mb="lg"
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
