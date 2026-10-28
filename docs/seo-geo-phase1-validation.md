# Validación Fase 1 — consolidación comercial

**Estado:** `PHASE_1_CODE_COMPLETE`  
**Search Console:** `SEARCH_CONSOLE_PENDING_OWNER_DNS_VERIFICATION`  
**Fecha:** 2026-10-28  
**No avanzar a Fase 2.** Esperar code review.

---

## Resumen

Se enriquecieron las 7 landings comerciales live (servicio + industria) con copy verificable, FAQ visible y enlaces internos 2–5. Se añadieron **7 reglas 301** en `public/.htaccess` hacia destinos canónicos ya publicados. Sitemap sigue en **15 URLs**. Home y header no se tocaron. No hay artículos GEO nuevos. No hay redirects Cloudflare.

Los 301 viven en `.htaccess` del `dist/`. En producción aplican al **próximo upload** de Hostinger (Fase 0 ya está live; este paquete aún no se subió en esta corrida).

---

## Páginas modificadas

### `/servicios/inventarios-fisicos/`

- **Objetivo:** landing de servicio (qué ofrece, para quién, qué incluye, cómo se ejecuta, qué recibe el cliente, CTA).
- **Fuentes absorbidas:** `10-servicio-inventario-fisico-que-recibe-cliente.html` (entregables); contexto Argentina y tipos de operación de `inventarios-fisicos-argentina.html`.
- **Descartado:** plantilla de “compromiso” (15), rankings, % inventados.
- **SEO/GEO:** description actualizada; FAQ visible + FAQPage (`#faq` de la URL); related a depósitos, drones, cíclicos, auditoría.
- **Copy:** summary y secciones reordenadas a oferta/incluye/ejecución/entrega. H1 sin cambio.

### `/servicios/inventarios-con-drones/`

- **Objetivo:** modalidad comercial complementaria, no artículo de IA.
- **Fuentes:** `inventarios-con-drones-depositos.html` (condiciones, altura, integración).
- **Descartado:** OCR/visión/IA como eje de venta (Fase 3 / recurso KEEP).
- **SEO/GEO:** H1 `Inventarios con drones para depósitos`; description sin “visión artificial” como claim central; FAQ visible.
- **Copy:** condiciones de uso + integración al inventario físico.

### `/servicios/inventarios-ciclicos/`

- **Objetivo:** vender el servicio; la comparación queda en el recurso.
- **Fuentes MERGE de dominio principal:** ninguna.
- **SEO/GEO:** FAQ que apunta a `/recursos/inventario-general-vs-inventario-ciclico/`.
- **Copy:** primer bloque aclara servicio vs guía.

### `/servicios/auditoria-de-inventarios/`

- **Objetivo:** auditoría como servicio, no metodología BP.
- **Fuentes MERGE de dominio principal:** ninguna. Cloudflare no tocado.
- **Descartado:** artículos futuros de reconteos/resultados auditables/metodología.
- **SEO/GEO:** FAQ de diferencia vs inventario completo.

### `/industrias/depositos-centros-distribucion/`

- **Objetivo:** canónica de depósitos, CD y “empresa de inventarios para depósitos”. No se creó `/servicios/inventarios-depositos/`.
- **Fuentes:** `inventarios-depositos.html`, `inventarios-centros-distribucion-argentina.html`, `empresa-inventarios-depositos-argentina.html`.
- **SEO/GEO:** FAQ; related a operadores; description ajustada.
- **Copy:** racks/pallets/pasillos/piso y por qué no alcanza el total por SKU.

### `/industrias/retail-cadenas-sucursales/`

- KEEP. FAQ + description. Sin redirects nuevos.

### `/industrias/operadores-logisticos-industria/`

- KEEP. FAQ + summary. Cloudflare operadores no tocado.

---

## Redirects

Reglas en `public/.htaccess` (también `path/` y `path.html`). Un salto. Destino con `/`.

| old_url | new_url | status | reason |
|---------|---------|--------|--------|
| `/inventarios-fisicos-argentina` | `/servicios/inventarios-fisicos/` | 301 (código; live tras deploy) | CSV REDIRECT |
| `/inventarios-con-drones-depositos` | `/servicios/inventarios-con-drones/` | 301 | CSV MERGE |
| `/empresa-inventarios-depositos-argentina` | `/industrias/depositos-centros-distribucion/` | 301 | CSV REDIRECT |
| `/inventarios-depositos` | `/industrias/depositos-centros-distribucion/` | 301 | CSV REDIRECT |
| `/inventarios-centros-distribucion-argentina` | `/industrias/depositos-centros-distribucion/` | 301 | CSV REDIRECT |
| `/buenas-practicas/servicio-inventario-fisico-que-recibe-cliente` | `/servicios/inventarios-fisicos/` | 301 | CSV MERGE |
| `/buenas-practicas/compromiso-cumplimiento-inventario-confiable` | `/servicios/inventarios-fisicos/` | 301 | CSV REMOVE |

Hoy en Hostinger esos paths son 404. Vite preview no aplica `.htaccess`; la validación de reglas es estática (destino en sitemap, fuente fuera del sitemap, sin chains, sin `pages.dev`/`workers.dev`).

---

## Sitemap

Sigue con 15 locs, HTTPS, hostname canónico, trailing slash. Redirects **no** están.

```
https://dinamicsystems.com/
https://dinamicsystems.com/servicios/
https://dinamicsystems.com/servicios/inventarios-fisicos/
https://dinamicsystems.com/servicios/inventarios-con-drones/
https://dinamicsystems.com/servicios/inventarios-ciclicos/
https://dinamicsystems.com/servicios/auditoria-de-inventarios/
https://dinamicsystems.com/industrias/
https://dinamicsystems.com/industrias/depositos-centros-distribucion/
https://dinamicsystems.com/industrias/retail-cadenas-sucursales/
https://dinamicsystems.com/industrias/operadores-logisticos-industria/
https://dinamicsystems.com/recursos/
https://dinamicsystems.com/recursos/como-realizar-un-inventario-fisico/
https://dinamicsystems.com/recursos/como-preparar-un-deposito-para-un-inventario/
https://dinamicsystems.com/recursos/inventario-general-vs-inventario-ciclico/
https://dinamicsystems.com/recursos/como-funciona-un-inventario-con-drones/
```

---

## Canonicals

Self-referencing en las 15 publicadas (`https://dinamicsystems.com` + `loc`). Hubs de Fase 0 intactos. Hubs futuros no prerenderizados.

---

## Tests

```
npm run build:validated
  tsc OK
  prerender 15 + 404 + sitemap + .htaccess
  validate:seo-build all checks passed (incl. 7 301, sitemap 15, hubs)
  validate:links 15 paths, 0 huérfanos

npx playwright test
  11 passed (23.7s)
```

Playwright cubre: landings 200 + 1 H1 + canonical; header comercial; home sin GEO nuevo; hubs Fase 0; futuros no publicados; fuentes de redirect no prerenderizadas.

---

## Search Console pendiente

- Dominio pendiente de verificación DNS en **GoDaddy** (`ns75.domaincontrol.com`).
- GSC **no** se usó como evidencia en Fase 1.
- No se tomaron decisiones irreversibles sobre indexación real.
- No se apagaron hosts viejos.
- No se ejecutaron redirects externos (Pages/Workers/subdominios).
- Validación GSC queda a cargo del dueño (TXT `google-site-verification=…`).

Esto **no** marca Fase 1 como fallida.

---

## Scope

| Restricción | Cumplido |
|-------------|----------|
| No comenzó Fase 2 | Sí |
| No se publicaron artículos GEO nuevos | Sí |
| No se tocaron Cloudflare Pages/Workers | Sí |
| No se apagaron hosts | Sí |
| No se modificó home / hero / clientes / contacto / ExplorePagesSection | Sí |
| No se modificó header | Sí |
| Footer Fase 0 | Sí |
| Sitemap solo canónicas | Sí |

---

## Git (working tree, sin commit)

### `git status --short`

```
 M deploy/HOSTINGER_FRONTEND.md
 M deploy/MEASUREMENT_AND_INDEXING.md
 M scripts/prerender.ts
 M scripts/validate-seo-build.ts
 M src/App.tsx
 M src/components/layout/Footer.tsx
 M src/components/page/PageCta.tsx
 M src/components/page/RelatedLinks.tsx
 M src/content/industries/depositosCentrosDistribucion.ts
 M src/content/industries/operadoresLogisticosIndustria.ts
 M src/content/industries/retailCadenasSucursales.ts
 M src/content/registry.ts
 M src/content/services/auditoriaDeInventarios.ts
 M src/content/services/inventariosCiclicos.ts
 M src/content/services/inventariosConDrones.ts
 M src/content/services/inventariosFisicos.ts
 M src/content/types.ts
 M src/pages/interiorPages.tsx
 M src/pages/templates/IndustryPageTemplate.tsx
 M src/pages/templates/ServicePageTemplate.tsx
 M src/routes.ts
 M src/seo/pageSeo.ts
 M src/seo/schemas.ts
 M tests/ssg-smoke.spec.ts
?? docs/seo-geo-migration-plan.md
?? docs/seo-geo-phase0-production-validation.md
?? docs/seo-geo-phase0-validation.md
?? docs/seo-geo-phase1-precheck.md
?? docs/seo-geo-phase1-validation.md
?? docs/seo-geo-url-map.csv
?? public/.htaccess
?? src/components/page/PageFaq.tsx
?? src/content/hubs/
?? src/pages/templates/HubPageTemplate.tsx
?? src/seo/phase1InternalRedirects.ts
```

### `git diff --stat`

```
 24 files changed, 689 insertions(+), 130 deletions(-)
```

(El stat cubre también archivos de Fase 0 aún sin commit.) Diff completo: `git diff`.
