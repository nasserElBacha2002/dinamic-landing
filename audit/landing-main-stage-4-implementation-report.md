# Etapa 4 — Implementation report (GEO / FAQ / Schema)

**Fecha:** 2026-08-03  
**Commit:** `703592c` — `feat(seo): add homepage FAQ and structured data graph`

## Resumen
FAQ visible (9 Q&A) + `@graph` home: Organization, WebSite, WebPage, Service, FAQPage. Validación: FAQ schema ≡ HTML.

## Archivos
- `src/content/home/faq.ts`
- `src/components/sections/FaqSection.tsx` (+ css)
- `src/pages/HomePage.tsx`
- `src/seo/pageSeo.ts`, `schemas.ts`, `organizationJsonLd.ts`
- `scripts/validate-seo-build.ts`

## IDs estables
- `#organization` `#website` `#webpage` `#service` `#faq`

## Service home
Nombre: «Inventarios físicos para empresas»  
Descripción alineada a About/hero.

## FAQPage
Espejo exacto de `homeFaqItems`. Sin rich-results guarantee.

## Prohibido
Sin Review / AggregateRating.

## Estado
**COMPLETE**
