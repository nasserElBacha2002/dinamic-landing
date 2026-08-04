import { Box, Container, Stack, Text, rem } from '@mantine/core';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { motionDuration } from '@/components/animations/variants';
import type { FaqItem } from '@/content/types';
import { contentMaxWidth } from '@/theme/theme';
import classes from '@/components/sections/FaqSection.module.css';

type FaqSectionProps = {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  id?: string;
};

export function FaqSection({
  items,
  eyebrow = 'Preguntas frecuentes',
  title = 'Respuestas sobre inventarios físicos',
  subtitle = 'Orientación práctica para empresas que necesitan evaluar un inventario en depósitos, retail u operaciones logísticas.',
  id = 'faq',
}: FaqSectionProps) {
  return (
    <Box component="section" id={id} py={{ base: '4rem', md: '6rem' }} className="ds-bg-page" aria-labelledby={`${id}-heading`}>
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionFadeIn direction="none" duration={motionDuration.section}>
          <Stack gap="sm" maw={rem(820)} mb={{ base: 'xl', md: '3rem' }}>
            <Text tt="uppercase" size="xs" fw={800} c="brand.6" style={{ letterSpacing: '0.22em' }}>
              {eyebrow}
            </Text>
            <Text
              id={`${id}-heading`}
              component="h2"
              fz={{ base: rem(32), sm: rem(40) }}
              fw={800}
              c="gray.9"
              lh={1.1}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              {title}
            </Text>
            <Text c="dimmed" fw={500} lh={1.7}>
              {subtitle}
            </Text>
          </Stack>
        </MotionFadeIn>

        <Stack gap="md" component="div">
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
      </Container>
    </Box>
  );
}
