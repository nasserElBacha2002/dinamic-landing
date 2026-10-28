# Validación Fase 1 — consolidación comercial

**Estado código:** `PHASE_1_CODE_COMPLETE`  
**Estado producción:** `PHASE_1_PROD_PENDING`  
**Redirects 301:** `PENDING_PRODUCTION_VALIDATION`  
**Search Console:** `SEARCH_CONSOLE_PENDING_OWNER_DNS_VERIFICATION`  
**Fecha:** 2026-10-28  

Fase 1 **no** está validada en Hostinger. Los 301 no se afirman live. Eso no bloquea implementación de código de Fase 2, pero el estado de producción de Fase 1 permanece pendiente hasta el próximo upload.

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

Hoy en Hostinger esos paths son 404. Vite preview no aplica `.htaccess`; la validación de reglas es estática (match exacto, destino en sitemap, fuente fuera del sitemap, sin chains, sin `pages.dev`/`workers.dev`). **No afirmar que los 301 funcionan live hasta deploy real.**

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
  validate:seo-build all checks passed
    FAQPage 1:1 en 7 landings + home
    commercial FAQ uniqueness: 19 questions
    phase1 7 exact 301s; 3 variants; no prefix; no chains
    sitemap 15
  validate:links 15 paths, 0 huérfanos

npx playwright test
  12 passed (25.1s)
```

Playwright cubre: landings 200 + 1 H1 + canonical; header comercial; home sin GEO nuevo; hubs Fase 0; futuros no publicados; fuentes de redirect no prerenderizadas; FAQ visible y específica en drones, cíclicos y auditoría.

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

## Final code hardening

Revisión posterior a `PHASE_1_CODE_COMPLETE`, **sin deploy** y **sin ampliar alcance**.

### Redirects exactos

Las 7 reglas en `public/.htaccess` ya no usan `(\.html)?/?$` (capturaba prefijos y `path.html/`). Cada regla es:

```
RewriteRule ^(slug|slug/|slug\.html)$ DESTINO [R=301,L]
```

Variantes aceptadas: `path`, `path/`, `path.html`. Un salto 301 al destino canónico con trailing slash. No SPA fallback. No query/path extra. No captura `/inventarios-depositos-algo`.

Fuente de verdad en código: `src/seo/phase1InternalRedirects.ts` (`phase1RewritePattern`, `matchPhase1Redirect`, `apacheRewriteRule`). `scripts/validate-seo-build.ts` exige que `.htaccess` coincida con esas reglas y prueba positivos/negativos.

**Estado:** `PENDING_PRODUCTION_VALIDATION`. LiteSpeed/Hostinger aún no tiene este `.htaccess` hasta el próximo upload.

### FAQ revisadas (7 landings)

Se eliminaron preguntas genéricas (`¿Trabajan en Argentina?`, `¿Cómo se solicita una evaluación?`, `¿Hace falta una URL aparte?`, “qué incluye” clonado, “Por qué elegir Dinamic”). Cada FAQ es de la intención de la página:

| URL | Preguntas (resumen) |
|-----|---------------------|
| Inventarios físicos | qué incluye el servicio; tipos de operación; qué recibe al cierre |
| Drones | condiciones de uso en depósito; si reemplaza el conteo físico; integración de capturas |
| Cíclicos | si reemplaza al general; qué se cuenta por ciclo; interrupción operativa |
| Auditoría | diferencia vs conteo completo; muestreo; evidencia |
| Depósitos / CD | por qué se cuenta por ubicación; CD vs depósito de reserva; drones en altura |
| Retail | zonas de sucursal; consolidación multi-local |
| Operadores | stock de distintos clientes; acuerdos previos |

### Schema FAQPage

- Sólo se emite si `content.faq` tiene ítems.
- `ResourcePageTemplate` ahora renderiza `PageFaq` cuando hay FAQ (las guías actuales no tienen, no cambia HTML).
- `@id` = `{canonical}#faq`.
- Validación 1:1: mismas preguntas y respuestas, mismo orden, visibles en `#faq`. Sin preguntas ocultas.
- Preguntas de las 7 landings no se repiten entre páginas.

### Related links

2–5 por página, trailing slash, no apuntan a fuentes 301, conjuntos no clonados entre las 7.

### Tests agregados

- Matcher de redirects: 3 variantes → destino; prefijo/extra/`html/`/query-path no capturan.
- FAQPage 1:1 en todas las páginas con FAQ.
- Unicidad de preguntas y related links comerciales.
- Playwright: FAQ visible en drones/cíclicos/auditoría; fuentes 301 y `inventarios-depositos-algo` no prerenderizadas.

### Estado production pending

```
PHASE_1_CODE_COMPLETE
PHASE_1_PROD_PENDING
PENDING_PRODUCTION_VALIDATION   (7 redirects)
SEARCH_CONSOLE_PENDING_OWNER_DNS_VERIFICATION
```

No se tocó Cloudflare, GSC, home ni header. No se inició Fase 3.

---

## Scope

| Restricción | Cumplido |
|-------------|----------|
| No se implementó Fase 2 en este endurecimiento | Sí |
| No se publicaron artículos GEO nuevos | Sí |
| No se tocaron Cloudflare Pages/Workers | Sí |
| No se apagaron hosts | Sí |
| No se modificó home / hero / clientes / contacto / ExplorePagesSection | Sí |
| No se modificó header | Sí |
| Footer Fase 0 | Sí |
| Sitemap solo canónicas | Sí |

---

## Git (working tree, sin commit)

Snapshot al cierre del endurecimiento de código (antes de Fase 2). Diff completo: `git diff`.

### Endurecimiento — `git diff --stat` (vs working tree de Fase 1)

```
 docs/seo-geo-phase1-validation.md                  |  75 ++++++++++-
 public/.htaccess                                   |  17 +--
 scripts/validate-seo-build.ts                      | 142 ++++++++++++++++++---
 src/components/page/PageFaq.tsx                    |   2 +-
 src/content/industries/depositosCentrosDistribucion.ts | 12 +-
 src/content/industries/operadoresLogisticosIndustria.ts | 23 ++--
 src/content/industries/retailCadenasSucursales.ts  |   8 +-
 src/content/services/auditoriaDeInventarios.ts     |  17 +--
 src/content/services/inventariosCiclicos.ts        |  18 +--
 src/content/services/inventariosConDrones.ts       |  12 +-
 src/content/services/inventariosFisicos.ts         |  17 +--
 src/pages/templates/ResourcePageTemplate.tsx       |   2 +
 src/seo/phase1InternalRedirects.ts                 |  27 ++++
 tests/ssg-smoke.spec.ts                            |  32 +++++
 14 files changed, 314 insertions(+), 90 deletions(-)
```

No deploy. No commit (no solicitado). El árbol también conserva archivos de Fase 0/1 aún untracked.
