import { absoluteUrl, defaultOgImage } from '@/seo/site';

export type PageSeo = {
  title: string;
  description: string;
  /** Path for canonical (e.g. `/` or `/servicios/foo/`) */
  canonicalPath: string;
  ogType?: 'website' | 'article';
  robots?: string;
  /** Absolute image URL for OG/Twitter; defaults to site logo */
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export { defaultOgImage };

export function resolveCanonical(canonicalPath: string): string {
  return absoluteUrl(canonicalPath);
}
