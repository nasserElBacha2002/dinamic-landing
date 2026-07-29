import { Stack, Text, rem, Group, ThemeIcon } from '@mantine/core';
import type { Step } from '@/content/types';

type StepsListProps = {
  title?: string;
  steps: Step[];
};

export function StepsList({ title = 'Cómo trabajamos', steps }: StepsListProps) {
  return (
    <Stack gap="lg" component="section" aria-labelledby="steps-heading">
      <Text
        id="steps-heading"
        component="h2"
        fz={{ base: rem(24), md: rem(28) }}
        fw={800}
        c="gray.9"
        style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
      >
        {title}
      </Text>
      <Stack gap="md">
        {steps.map((step, index) => (
          <Group key={step.title} align="flex-start" wrap="nowrap" gap="md">
            <ThemeIcon size={36} radius="md" variant="light" color="brand" aria-hidden>
              <Text fw={800} fz="sm">
                {String(index + 1).padStart(2, '0')}
              </Text>
            </ThemeIcon>
            <Stack gap={4}>
              <Text fw={800} c="gray.9">
                {step.title}
              </Text>
              <Text c="dimmed" fw={500} lh={1.6}>
                {step.description}
              </Text>
            </Stack>
          </Group>
        ))}
      </Stack>
    </Stack>
  );
}
