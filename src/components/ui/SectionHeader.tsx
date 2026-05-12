import { Box, rem, Text, type TextProps } from '@mantine/core';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleOrder?: 1 | 2 | 3;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  titleOrder = 2,
}: SectionHeaderProps) {
  const ta: TextProps['ta'] = align === 'center' ? 'center' : 'left';
  const mx = align === 'center' ? 'auto' : undefined;

  const TitleTag = titleOrder === 1 ? 'h1' : titleOrder === 2 ? 'h2' : 'h3';

  return (
    <Box mb={{ base: 'xl', md: '3rem' }}>
      {eyebrow ? (
        <Text
          tt="uppercase"
          fw={800}
          size="xs"
          c="brand.6"
          style={{ letterSpacing: '0.28em' }}
          ta={ta}
          mb="sm"
        >
          {eyebrow}
        </Text>
      ) : null}
      <Text
        component={TitleTag}
        fw={800}
        fz={{ base: rem(32), sm: rem(40) }}
        lh={1.15}
        c="gray.9"
        ta={ta}
        maw={align === 'center' ? rem(900) : undefined}
        mx={mx}
      >
        {title}
      </Text>
      {subtitle ? (
        <Text
          mt="md"
          fz="lg"
          fw={500}
          c="dimmed"
          maw={rem(720)}
          mx={mx}
          ta={ta}
        >
          {subtitle}
        </Text>
      ) : null}
    </Box>
  );
}
