import { Box, Group, Paper, Stack, Text, ThemeIcon } from '@mantine/core';
import type { ServiceItem } from '@/types/content';
import classes from '@/components/ui/ServiceCard.module.css';

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, bullets, accent, icon: Icon } = service;
  const color = accent === 'brand' ? 'brand' : 'cyan';

  return (
    <Paper
      data-accent={accent}
      p={{ base: 'lg', md: 'xl' }}
      radius="2.5rem"
      bg={accent === 'cyan' ? 'cyan.1' : 'gray.0'}
      withBorder
      classNames={{
        root: classes.card,
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
      }}
    >
      <ThemeIcon
        className={classes.iconWrap}
        size={56}
        radius="lg"
        variant="white"
        color={color}
        mb="xl"
      >
        <Icon stroke={1.35} style={{ width: 32, height: 32 }} />
      </ThemeIcon>
      <Text fw={800} fz="xl" c="gray.9" mb="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" fw={500} style={{ flex: 1 }} lh={1.65}>
        {description}
      </Text>
      <Stack gap="sm" mt="xl" pt="lg" style={{ borderTop: '1px solid var(--mantine-color-gray-3)' }}>
        {bullets.map((b) => (
          <Group key={b} gap="sm" wrap="nowrap">
            <Box
              w={8}
              h={8}
              style={{
                borderRadius: 999,
                background:
                  accent === 'brand'
                    ? 'var(--mantine-color-brand-6)'
                    : 'var(--mantine-color-cyan-5)',
              }}
            />
            <Text fz="xs" fw={800} tt="uppercase" c="gray.8">
              {b}
            </Text>
          </Group>
        ))}
      </Stack>
    </Paper>
  );
}
