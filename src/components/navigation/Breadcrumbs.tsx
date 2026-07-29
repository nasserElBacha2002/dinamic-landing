import { Anchor, Box, Text, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import type { UiBreadcrumb } from '@/seo/pageSeo';
import { contentMaxWidth } from '@/theme/theme';

type BreadcrumbsProps = {
  items: UiBreadcrumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Box
      component="nav"
      aria-label="Miga de pan"
      mb="lg"
      maw={contentMaxWidth}
      mx="auto"
      px={{ base: 'md', md: 'xl' }}
      pt={{ base: 'md', md: 'lg' }}
    >
      <Box
        component="ol"
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          gap: rem(6),
          alignItems: 'center',
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Box component="li" key={`${item.label}-${index}`} style={{ display: 'inline-flex', alignItems: 'center', gap: rem(6) }}>
              {index > 0 ? (
                <Text span c="dimmed" fz="sm" aria-hidden>
                  /
                </Text>
              ) : null}
              {item.to && !isLast ? (
                <Anchor component={Link} to={item.to} fz="sm" fw={600} c="dimmed" underline="hover" className="ds-focus-ring">
                  {item.label}
                </Anchor>
              ) : (
                <Text span fz="sm" fw={isLast ? 700 : 600} c={isLast ? 'gray.9' : 'dimmed'} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </Text>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
