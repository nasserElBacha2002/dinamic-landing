import { Stack, Text, rem } from '@mantine/core';
import type { ContentSection } from '@/content/types';

type ContentSectionsProps = {
  sections: ContentSection[];
};

export function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <Stack gap="xl" component="div">
      {sections.map((section) => (
        <Stack key={section.id} gap="md" id={section.id} component="section" aria-labelledby={`${section.id}-heading`}>
          <Text
            id={`${section.id}-heading`}
            component="h2"
            fz={{ base: rem(24), md: rem(28) }}
            fw={800}
            c="gray.9"
            style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
          >
            {section.heading}
          </Text>
          {section.body.map((paragraph) => (
            <Text key={paragraph.slice(0, 24)} c="dimmed" fw={500} lh={1.75} fz="md">
              {paragraph}
            </Text>
          ))}
        </Stack>
      ))}
    </Stack>
  );
}
