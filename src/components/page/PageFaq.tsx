import { Stack, Text, rem } from '@mantine/core';
import type { FaqItem } from '@/content/types';
import classes from '@/components/sections/FaqSection.module.css';

type PageFaqProps = {
  items: FaqItem[];
  title?: string;
};

export function PageFaq({ items, title = 'Preguntas frecuentes' }: PageFaqProps) {
  if (!items.length) return null;

  return (
    <Stack gap="md" component="section" aria-labelledby="page-faq-heading">
      <Text
        id="page-faq-heading"
        component="h2"
        fz={{ base: rem(24), md: rem(28) }}
        fw={800}
        c="gray.9"
        style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
      >
        {title}
      </Text>
      <Stack gap="md">
        {items.map((item) => (
          <details key={item.question} className={classes.item}>
            <summary className={`${classes.summary} ds-focus-ring`}>
              <Text component="span" fw={800} c="gray.9" fz={{ base: 'md', md: 'lg' }} lh={1.35}>
                {item.question}
              </Text>
            </summary>
            <Text className={classes.answer} c="dimmed" fw={500} lh={1.7} pt="sm" pb="md" px={{ base: 'md', md: 'lg' }}>
              {item.answer}
            </Text>
          </details>
        ))}
      </Stack>
    </Stack>
  );
}
