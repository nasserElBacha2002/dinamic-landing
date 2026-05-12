import { Box, Card, rem, Text, ThemeIcon } from '@mantine/core';
import type { TablerIcon } from '@tabler/icons-react';

interface MetricCardProps {
  title: string;
  icon: TablerIcon;
  accent: 'brand' | 'cyan';
}

export function MetricCard({ title, icon: Icon, accent }: MetricCardProps) {
  const color = accent === 'brand' ? 'brand' : 'cyan';
  return (
    <Card padding="xl" radius="3rem" shadow="sm" withBorder>
      <ThemeIcon
        size={56}
        radius="xl"
        variant="light"
        color={color}
        mb="lg"
      >
        <Icon style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
      </ThemeIcon>
      <Text fw={800} fz="lg" c="gray.9" mb="xs">
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
  );
}
