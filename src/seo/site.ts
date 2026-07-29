/** Canonical site origin (no trailing slash). */
export const SITE_ORIGIN = 'https://dinamicsystems.com';

export const defaultOgImage = `${SITE_ORIGIN}/logo.png`;

export function absoluteUrl(loc: string): string {
  if (loc === '/') return `${SITE_ORIGIN}/`;
  const normalized = loc.startsWith('/') ? loc : `/${loc}`;
  return `${SITE_ORIGIN}${normalized}`;
}
