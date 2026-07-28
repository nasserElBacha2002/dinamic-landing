import { SITE_ORIGIN, absoluteUrl } from '@/routes';

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

export const defaultOgImage = `${SITE_ORIGIN}/logo.png`;

export const homeSeo: PageSeo = {
  title: 'Inventarios físicos y autónomos para empresas | Dinamic Systems',
  description:
    'Dinamic Systems realiza inventarios físicos y autónomos para empresas de retail, logística, depósitos e industria mediante equipos especializados, software de trazabilidad, visión artificial y drones.',
  canonicalPath: '/',
  ogType: 'website',
  robots: 'index, follow',
  ogImage: defaultOgImage,
};

export function resolveCanonical(canonicalPath: string): string {
  return absoluteUrl(canonicalPath);
}
