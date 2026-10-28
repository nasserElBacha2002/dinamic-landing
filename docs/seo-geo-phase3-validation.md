# Validación Fase 3 — innovación, investigación, long-tail

**Estado código:** `PHASE_3_CODE_COMPLETE`  
**Deploy:** `DEPLOY_DEFERRED_UNTIL_PHASE_4`  
**Fase 1:** `PRODUCTION_VALIDATION_PENDING`  
**Search Console:** `PENDING_OWNER_DNS_VERIFICATION`  
**Cloudflare:** `UNCHANGED`  
**Fecha:** 2026-10-28  

NO deploy. NO Hostinger. NO DNS. NO GSC. NO Cloudflare. NO Fase 4 automática. Esperar code review.

---

## Fase 2 hardening

Ver `docs/seo-geo-phase2-validation.md` § Final editorial hardening.

- FAQ opcional: las 13 P1 pasaron de 3 preguntas típicas a 1–2 que no replican el cuerpo.
- Respuesta directa de “cuánto tarda” alineada al brief.
- Hub `/recursos/` agrupado (preparación, diferencias, costos/tiempos, contratación, tecnología).
- Hub `/buenas-practicas/` agrupado (planificación / ejecución / control y cierre) al sumar las 4 hijas de esta fase.

---

## Páginas Fase 3

| URL | Intención | Fuente | MERGE | Rewrite | Schema | Links |
|-----|-----------|--------|-------|---------|--------|-------|
| `/innovacion/tecnologia-aplicada-inventarios/` | Pilar de capas técnicas | `tecnologia-inventarios.html` | tech Cloudflare / con-tecnología (copy, no 301) | total | Article | IA, visión, offline, inventarios físicos |
| `/innovacion/inteligencia-artificial-inventarios/` | IA ≠ visión ≠ OCR | IA HTML + `preview.html` | subdominio IA (no 301) | total | Article + FAQ | visión, drones, metodología |
| `/innovacion/drones-inventarios/` | Integración técnica, no servicio ni how-to | serie 05 + futuro-drones | — | total | Article + FAQ | servicio drones, recurso how-to, visión |
| `/innovacion/vision-artificial/` | Imagen → lectura → validación humana | Cloudflare visión | — | total | Article + FAQ | IA, drones, tecnología aplicada |
| `/innovacion/etiquetas-inteligentes/` | ID ítem/ubicación (código, etiqueta, QR) | serie 04 | — | total | Article (sin FAQ) | posiciones, tecnología, duplicados |
| `/innovacion/tecnologia-movil-offline/` | Captura sin red y sync posterior | serie 03 | serie 13 | total | Article + FAQ | tecnología, tiempo real, físicos |
| `/innovacion/inventarios-fisicos-tiempo-real/` | Definir “tiempo real” sin sync instantánea | serie 02 | — | total | Article + FAQ | offline, metodología, sin detener |
| `/investigacion/metodologia-inventarios/` | Ciclo completo del dato | metodología Cloudflare + serie 04 | — | total | Article + FAQ | planificación, reconteos, posiciones, resultados auditables |
| `/buenas-practicas/planificacion-inventario/` | Diseño del operativo ≠ preparar depósito | serie 01 | — | total | Article + FAQ | preparar depósito, metodología, físicos |
| `/buenas-practicas/equipos-inventario-depositos-grandes/` | Dotación/supervisión, sin ratios | serie 05 | — | total | Article (sin FAQ) | planificación, físicos, depósitos |
| `/buenas-practicas/evitar-duplicados-cantidades/` | Doble conteo y cantidad mal capturada | serie 07 | — | total | Article (sin FAQ) | posiciones, diferencias, reconteos |
| `/buenas-practicas/inventario-adaptado-cliente-proveedor/` | Reglas escritas de adaptación | serie 12 | — | total | Article (sin FAQ) | comunicación, planificación, operadores |

---

## URLs descartadas

Ningún STOP. Drones innovación se **KEEP** con sección “qué no es esta página” (servicio vs recurso vs innovación).

No se publicaron: benchmarks, %, casos, datasets, “metodología patentada”, RFID no documentado.

---

## Hubs

| Hub | Antes | Después |
|-----|-------|---------|
| `/recursos/` | lista plana 13 | 5 grupos semánticos; 13 hijas |
| `/buenas-practicas/` | 4 hijas | 8 hijas en planificación / ejecución / control y cierre |
| `/innovacion/` | 404 | CollectionPage, 7 hijas, no header, footer discreto |
| `/investigacion/` | 404 | CollectionPage, 1 hija real (metodología), no header, footer discreto |

ItemList = solo URLs publicadas. Canonical propio. Sitemap local.

---

## Canibalización

Revisado contra las 29 URLs previas y entre las nuevas. Pares críticos (drones×3, IA vs visión, tecnología vs manual, metodología vs planificación, auditables vs metodología, etiquetas vs posiciones, tiempo real vs sin detener) quedan con intención distinta. Titles 43 únicos, H1 interiores 42 únicos.

---

## Sitemap local

**43 URLs.** Trailing slash, hostname canónico. Fuentes 301 Fase 1 no incluidas.

15 Fase 0 + 13 P1 + hub BP + 4 BP nuevas + hub innovación + 7 innovación + hub investigación + metodología = 43.

---

## Internal linking

- Tecnología aplicada → IA, visión, offline, físicos
- IA → visión, drones, metodología
- Drones innovación → servicio, how-to, visión
- Metodología → planificación, reconteos, posiciones, resultados auditables
- Duplicados → posiciones, diferencias, reconteos

`validate:links`: 43 paths, 0 huérfanos. Related 2–5, canónicos, no a redirects.

---

## Tests

```
npm run build:validated
  tsc OK
  prerender 43 + 404 + sitemap + .htaccess
  validate:seo-build all checks passed
    unique titles (43) / H1s (42)
    6 hubs (servicios, industrias, recursos, BP, innovación, investigación)
    FAQPage 1:1 sólo donde hay FAQ visible
    sitemap 43
    phase1 7 exact 301s (código)
  validate:links 43 paths, 0 huérfanos

npx playwright test
  14 passed (27.8s)
```

Home/header comerciales. Innovación e investigación **no** están en el header. Cloudflare no aparece en `.htaccess`.

---

## Estado producción

`DEPLOY_DEFERRED_UNTIL_PHASE_4`

No se subió `dist/` a Hostinger. No se validó producción. No se modificó DNS. No se reenvió sitemap.

## Fase 1

`PRODUCTION_VALIDATION_PENDING`

## Search Console

`PENDING_OWNER_DNS_VERIFICATION`

## Cloudflare

`UNCHANGED`

---

## Git (working tree, sin commit)

Diff completo: `git diff`. No commit (no solicitado).

### `git status --short`

```
 M docs/seo-geo-phase2-validation.md
 M scripts/validate-seo-build.ts
 M src/App.tsx
 M src/components/layout/Footer.tsx
 M src/components/page/RelatedLinks.tsx
 M src/content/hubs/buenasPracticas.ts
 M src/content/hubs/recursos.ts
 M src/content/practices/comunicacionClienteInventario.ts
 M src/content/practices/controlPosicionesPasillos.ts
 M src/content/practices/reconteosInteligentes.ts
 M src/content/practices/resultadosAuditables.ts
 M src/content/registry.ts
 M src/content/resources/comoElegirEmpresaInventarios.ts
 M src/content/resources/comoReducirDiferenciasDeStock.ts
 M src/content/resources/cotizarInventarioFisico.ts
 M src/content/resources/cuantoCuestaUnInventarioFisico.ts
 M src/content/resources/cuantoTardaUnInventarioFisico.ts
 M src/content/resources/inventarioInternoVsTercerizado.ts
 M src/content/resources/inventarioManualVsTecnologico.ts
 M src/content/resources/inventariosSinDetenerOperacion.ts
 M src/content/resources/porQueNoCoincideElStock.ts
 M src/content/types.ts
 M src/pages/templates/HubPageTemplate.tsx
 M src/routes.ts
 M tests/ssg-smoke.spec.ts
?? docs/seo-geo-phase3-precheck.md
?? docs/seo-geo-phase3-validation.md
?? src/content/hubs/innovacion.ts
?? src/content/hubs/investigacion.ts
?? src/content/innovation/
?? src/content/practices/equiposDepositosGrandes.ts
?? src/content/practices/evitarDuplicadosCantidades.ts
?? src/content/practices/inventarioAdaptadoCliente.ts
?? src/content/practices/planificacionInventario.ts
?? src/content/research/
```

### `git diff --stat`

```
 25 files changed, 485 insertions(+), 182 deletions(-)
```

El stat no incluye untracked (contenido Fase 3, precheck/validation).
