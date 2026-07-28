/** Canonical site origin (no trailing slash). */
export const SITE_ORIGIN = 'https://dinamicsystems.com';

export type PublishedRoute = {
  /** React Router path pattern */
  path: string;
  /** Absolute path for canonical / sitemap (leading slash, trailing slash for dirs) */
  loc: string;
  /** Only published routes are prerendered and listed in the sitemap */
  published: true;
};

/**
 * Central route registry.
 * Future multipage URLs will be added here with `published: true` when implemented.
 * Do not add unpublished stubs as public routes.
 */
export const publishedRoutes: readonly PublishedRoute[] = [
  { path: '/', loc: '/', published: true },
] as const;

export function absoluteUrl(loc: string): string {
  if (loc === '/') return `${SITE_ORIGIN}/`;
  const normalized = loc.startsWith('/') ? loc : `/${loc}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function getSitemapLocs(): string[] {
  return publishedRoutes.map((r) => absoluteUrl(r.loc));
}
