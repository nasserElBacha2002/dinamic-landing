import { SITE_ORIGIN } from '@/routes';

/**
 * Organization JSON-LD from facts already present on the public site
 * (AboutSection, ContactSection, Footer). Do not invent social profiles or ratings.
 */
export function buildOrganizationJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dinamic Systems S.A.',
    url: `${SITE_ORIGIN}/`,
    logo: `${SITE_ORIGIN}/logo.png`,
    description:
      'Empresa argentina especializada en servicios profesionales de control de inventarios físicos para retail, logística y distribución.',
    email: 'info@dinamicsystems.com',
    telephone: '+54-11-4426-3813',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Rivadavia 4975',
      addressLocality: 'Ciudad Autónoma de Buenos Aires',
      addressCountry: 'AR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Argentina',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@dinamicsystems.com',
        telephone: '+54-11-4426-3813',
        availableLanguage: ['Spanish'],
      },
    ],
  };
}
