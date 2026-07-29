import { SimpleGrid, Stack, Text, rem } from '@mantine/core';
import type { Benefit } from '@/content/types';

type BenefitsListProps = {
  title?: string;
  benefits: Benefit[];
};

export function BenefitsList({ title = 'Qué aporta el servicio', benefits }: BenefitsListProps) {
  return (
    <Stack gap="lg" component="section" aria-labelledby="benefits-heading">
      <Text
        id="benefits-heading"
        component="h2"
        fz={{ base: rem(24), md: rem(28) }}
        fw={800}
        c="gray.9"
        style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
      >
        {title}
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {benefits.map((b) => (
          <Stack key={b.title} gap="xs">
            <Text fw={800} c="gray.9">
              {b.title}
            </Text>
            <Text c="dimmed" fw={500} lh={1.6}>
              {b.description}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
