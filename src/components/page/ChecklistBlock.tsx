import { Button, Group, Stack, Text, rem } from '@mantine/core';
import type { ChecklistGroup } from '@/content/types';

type ChecklistBlockProps = {
  groups: readonly ChecklistGroup[];
};

export function ChecklistBlock({ groups }: ChecklistBlockProps) {
  return (
    <Stack gap="lg" component="section" id="checklist" aria-labelledby="checklist-heading" className="ds-checklist">
      <Group justify="space-between" align="flex-end" wrap="wrap" gap="md">
        <Text
          id="checklist-heading"
          component="h2"
          fz={{ base: rem(24), md: rem(28) }}
          fw={800}
          c="gray.9"
          style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
        >
          Checklist operativo
        </Text>
        <Button
          type="button"
          variant="light"
          color="brand"
          className="ds-no-print ds-focus-ring"
          onClick={() => window.print()}
        >
          Imprimir checklist
        </Button>
      </Group>
      {groups.map((group) => (
        <Stack key={group.id} gap="sm" id={`checklist-${group.id}`}>
          <Text component="h3" fw={800} c="gray.9" fz="lg">
            {group.title}
          </Text>
          <ul className="ds-checklist-list">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Stack>
      ))}
    </Stack>
  );
}
