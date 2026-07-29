import { Anchor, Stack, Text, rem } from '@mantine/core';
import { Link } from 'react-router-dom';
import type { RelatedLink } from '@/content/types';

type RelatedLinksProps = {
  title?: string;
  links: RelatedLink[];
};

function toRouterPath(to: string): string {
  if (to.startsWith('/#')) return to;
  if (to !== '/' && to.endsWith('/')) return to.slice(0, -1);
  return to;
}

export function RelatedLinks({ title = 'También puede interesarte', links }: RelatedLinksProps) {
  return (
    <Stack gap="lg" component="section" aria-labelledby="related-heading">
      <Text
        id="related-heading"
        component="h2"
        fz={{ base: rem(24), md: rem(28) }}
        fw={800}
        c="gray.9"
        style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
      >
        {title}
      </Text>
      <Stack gap="md">
        {links.map((link) => {
          const isHash = link.to.includes('#');
          return (
            <Stack key={link.to + link.label} gap={4}>
              {isHash ? (
                <Anchor href={link.to} fw={800} c="brand.6" underline="hover" className="ds-focus-ring">
                  {link.label}
                </Anchor>
              ) : (
                <Anchor
                  component={Link}
                  to={toRouterPath(link.to)}
                  fw={800}
                  c="brand.6"
                  underline="hover"
                  className="ds-focus-ring"
                >
                  {link.label}
                </Anchor>
              )}
              {link.description ? (
                <Text c="dimmed" fw={500} fz="sm">
                  {link.description}
                </Text>
              ) : null}
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
