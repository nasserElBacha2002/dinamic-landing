# Validación Fase 2 — contenido educativo P1

**Estado código:** `PHASE_2_CODE_COMPLETE`  
**Fase 1 producción:** `PHASE_1_PROD_PENDING` / redirects `PENDING_PRODUCTION_VALIDATION`  
**Search Console:** `SEARCH_CONSOLE_PENDING_OWNER_DNS_VERIFICATION`  
**Fecha:** 2026-10-28  

NO deploy. El endurecimiento editorial de esta fase convive en el árbol con Fase 3 (`docs/seo-geo-phase3-validation.md`).

---

## Final editorial hardening

Revisión crítica de las 13 P1 **después** de `PHASE_2_CODE_COMPLETE` original. Build/tests no se tomaron como prueba de calidad editorial.

### Páginas revisadas

Las 13 URLs P1. Se recortó filler, FAQs que repetían el cuerpo, y cierres intercambiables de “cómo lo usa Dinamic”.

### FAQ eliminadas / mantenidas

Regla nueva: FAQ opcional. Solo si agrega una distinción que el cuerpo no cubre.

| URL | Antes | Después | Motivo |
|-----|-------|---------|--------|
| por-qué no coincide | 3 | 2 | Se quitó “total por SKU” (ya está en causas) |
| cuánto tarda | 3 | 1 | Se quitó la pregunta que repetía “no hay duración universal” |
| interno vs tercerizado | 3 | 1 | Se dejó evidencia para un tercero |
| elegir empresa | 3 | 2 | Se quitó tecnología (cubre manual vs tecnológico) |
| cuánto cuesta | 3 | 1 | Se quitó “por qué no hay precio” (primer bloque) |
| cotizar | 3 | 1 | Se dejó que no reemplaza el formulario |
| sin detener | 3 | 1 | Definición de congelamiento lógico |
| reducir diferencias | 3 | 1 | “¿Más inventarios reducen?” |
| manual vs tecnológico | 3 | 1 | Precisión de lectores; visión se mueve a innovación |
| reconteos | 3 | 1 | Quién recontea |
| posiciones | 3 | 1 | Lote; se quitó “¿reemplaza depósitos?” (meta-SEO) |
| comunicación | 3 | 1 | Interlocutor en 3PL |
| resultados auditables | 3 | 1 | Auditable ≠ auditoría |

FAQPage desaparece solo si `content.faq` está vacío. Las 13 conservan al menos una pregunta útil.

### Contenido consolidado / duplicación

- Respuesta directa de “cuánto tarda” alineada al ejemplo del brief (no hay duración universal; depende de volumen, ubicaciones, preparación, personal y reconteo).
- Hub `/recursos/`: agrupación semántica (preparación, diferencias, costos/tiempos, contratación, tecnología). Sin páginas extra de categoría.
- Hub `/buenas-practicas/`: orden lógico control vs cierre (luego Fase 3 suma planificación/ejecución).

### Estado

Sigue `PHASE_2_CODE_COMPLETE`. Los cambios editoriales viven en el mismo árbol que Fase 3.

---

## Páginas publicadas

| URL | Intención | Fuentes | Rewrite | Links | Schema |
|-----|-----------|---------|---------|-------|--------|
| `/recursos/por-que-no-coincide-el-stock/` | Causas de desvío teórico vs físico | Cloudflare thin `por-que-stock-no-coincide` | total | reducir diferencias, reconteos, auditoría, inventarios físicos | Article + FAQPage |
| `/recursos/cuanto-tarda-un-inventario-fisico/` | Variables de duración, sin cifra universal | Cloudflare thin `cuanto-tarda` | total | físicos, preparar depósito, sin detener, cotizar | Article + FAQPage |
| `/recursos/inventario-interno-vs-tercerizado/` | Make-or-buy, sin ganador | `inventario-fisico-tercerizado-argentina.html` | total | elegir empresa, físicos, cotizar | Article + FAQPage |
| `/recursos/como-elegir-empresa-inventarios/` | Criterios de proveedor, no ranking | `como-elegir-empresa-inventarios-deposito.html` (+ criterios de MERGE P4, sin 301) | total | físicos, interno vs tercerizado, cotizar | Article + FAQPage |
| `/recursos/cuanto-cuesta-un-inventario-fisico/` | Variables de costo, sin precios | `cuanto-cuesta-inventario-deposito-argentina.html` | total | cotizar, cuánto tarda, físicos | Article + FAQPage |
| `/recursos/cotizar-inventario-fisico/` | Datos para cotizar; no reemplaza el formulario | `cotizar-inventario-fisico-cloudflare` | total | cuánto cuesta, físicos, elegir empresa | Article + FAQPage |
| `/recursos/inventarios-sin-detener-operacion/` | Contar con operación activa, con límites | `dinamic-inventarios-sin-detener-operacion-cloudflare` | total | cuánto tarda, cíclicos, físicos | Article + FAQPage |
| `/recursos/como-reducir-diferencias-de-stock/` | Prevención (distinto del diagnóstico) | `dinamic-reducir-diferencias-stock-cloudflare` | total | por-qué no coincide, reconteos, cíclicos | Article + FAQPage |
| `/recursos/inventario-manual-vs-tecnologico/` | Medios de captura, no magia tech | `inventario-manual-vs-tecnologico.html` | total | físicos, drones recurso, reconteos | Article + FAQPage |
| `/buenas-practicas/reconteos-inteligentes/` | Cuándo recontear; sin umbral universal | serie 08 | total | reducir diferencias, auditoría, resultados auditables | Article + FAQPage |
| `/buenas-practicas/control-posiciones-pasillos/` | Control posicional | serie 06 | total | por-qué no coincide, depósitos, reducir diferencias | Article + FAQPage |
| `/buenas-practicas/comunicacion-cliente-inventario/` | Comunicación operativa del conteo | serie 09 (+ 02 como material) | total | físicos, resultados auditables, preparar depósito | Article + FAQPage |
| `/buenas-practicas/resultados-auditables/` | Rastro que hace auditable un cierre | serie 11 | total | auditoría, reconteos, físicos | Article + FAQPage |

Precheck: `docs/seo-geo-phase2-precheck.md`. HTML GEO usado como fuente, no copiado.

---

## Canibalización

Revisado H1, title, summary e intención contra las 15 URLs previas y entre las 13 nuevas.

- Diagnóstico (`por-que-no-coincide`) ≠ prevención (`como-reducir-diferencias`).
- Duración ≠ costo ≠ datos de cotización.
- Interno vs tercerizado ≠ criterios de proveedor ≠ landing de servicio.
- Sin detener ≠ cíclicos (alcance vs recorte periódico).
- Manual vs tecnológico ≠ landing/recurso de drones.
- Reconteos ≠ auditoría (servicio) ≠ resultados auditables (cualidad del dato).
- Posiciones ≠ landing de depósitos.
- Comunicación ≠ copy comercial.

Validación estática: 29 titles únicos, 28 H1 interiores únicos. **STOP no aplicado.**

---

## Hub buenas prácticas

| | Antes | Después |
|--|-------|---------|
| `/buenas-practicas/` | 404, `FUTURE_HUB_GROUPS` | publicado, indexable, CollectionPage + ItemList, 4 hijas |
| Header | sin BP | sigue sin BP |
| Footer | sin BP | heading discreto al hub, sin listar hijas |
| Sitemap | ausente | `https://dinamicsystems.com/buenas-practicas/` |

Innovación e investigación siguen fuera.

---

## Sitemap

**29 URLs** (15 previas + 9 recursos P1 + hub BP + 4 prácticas). HTTPS, hostname canónico, trailing slash. Fuentes 301 de Fase 1 no están. `/innovacion/` e `/investigacion/` no están.

El listado de `/recursos/` sale de `childRoutesForGroup('recursos')` (13 hijas), no de un array clonado.

---

## Internal linking

Grafo resumido (2–5 por artículo; canónicos con `/`; no apuntan a redirects):

```
por-que-no-coincide → reducir-diferencias, reconteos, auditoría, inventarios-fisicos
cuanto-tarda → inventarios-fisicos, preparar-deposito, sin-detener, cotizar
interno-vs-tercerizado → elegir-empresa, inventarios-fisicos, cotizar
elegir-empresa → inventarios-fisicos, interno-vs-tercerizado, cotizar
cuanto-cuesta → cotizar, cuanto-tarda, inventarios-fisicos
cotizar → cuanto-cuesta, inventarios-fisicos, elegir-empresa
sin-detener → cuanto-tarda, ciclicos, inventarios-fisicos
reducir-diferencias → por-que-no-coincide, reconteos, ciclicos
manual-vs-tecnologico → inventarios-fisicos, como-funcionan-drones, reconteos
reconteos → reducir-diferencias, auditoría, resultados-auditables
posiciones → por-que-no-coincide, depositos, reducir-diferencias
comunicacion → inventarios-fisicos, resultados-auditables, preparar-deposito
resultados-auditables → auditoría, reconteos, inventarios-fisicos
```

Hubs listan hijas publicadas. `validate:links`: 29 paths, 0 huérfanos.

---

## Tests

```
npm run build:validated
  tsc OK
  prerender 29 + 404 + sitemap + .htaccess
  validate:seo-build all checks passed
    FAQPage 1:1 en landings + artículos P1
    unique titles (29) / H1s (28)
    4 hubs indexables (servicios, industrias, recursos, buenas-practicas)
    sitemap 29
    phase1 7 exact 301s (código; no live)
  validate:links 29 paths, 0 huérfanos

npx playwright test
  14 passed (27.9s)
```

Playwright: todas las locs del sitemap 200 + 1 H1 + canonical; header sin Recursos/BP; hub BP indexable; `/innovacion/` e `/investigacion/` ≥400; FAQ comercial específica; fuentes 301 no prerenderizadas; home/header comerciales.

---

## Search Console

`PENDING_OWNER_DNS_VERIFICATION`

No se usó GSC. No se apagó Cloudflare. No se redirigieron hosts externos.

---

## Fase 1

`PRODUCTION_VALIDATION_PENDING`

Los 7 301 siguen en `.htaccess` con match exacto (`path` | `path/` | `path.html`). No se revirtieron. No se afirma que estén live.

---

## Scope

| Restricción | Cumplido |
|-------------|----------|
| No Fase 3 | Sí |
| No Cloudflare | Sí |
| No apagado de hosts | Sí |
| No home redesign | Sí |
| No header expansion | Sí |
| No benchmarks/casos/precios inventados | Sí |
| No ranking de empresas | Sí |

---

## Git (working tree, sin commit)

Diff completo: `git diff`. No deploy. No commit (no solicitado).

### `git status --short` (Fase 2 + endurecimiento)

```
 M docs/seo-geo-phase1-validation.md
 M public/.htaccess
 M scripts/validate-seo-build.ts
 M src/App.tsx
 M src/components/layout/Footer.tsx
 M src/components/page/PageFaq.tsx
 M src/content/hubs/recursos.ts
 M src/content/industries/depositosCentrosDistribucion.ts
 M src/content/industries/operadoresLogisticosIndustria.ts
 M src/content/industries/retailCadenasSucursales.ts
 M src/content/registry.ts
 M src/content/services/auditoriaDeInventarios.ts
 M src/content/services/inventariosCiclicos.ts
 M src/content/services/inventariosConDrones.ts
 M src/content/services/inventariosFisicos.ts
 M src/pages/interiorPages.tsx
 M src/pages/templates/HubPageTemplate.tsx
 M src/pages/templates/ResourcePageTemplate.tsx
 M src/routes.ts
 M src/seo/phase1InternalRedirects.ts
 M tests/ssg-smoke.spec.ts
?? docs/seo-geo-phase2-precheck.md
?? docs/seo-geo-phase2-validation.md
?? src/content/hubs/buenasPracticas.ts
?? src/content/practices/
?? src/content/resources/comoElegirEmpresaInventarios.ts
?? src/content/resources/comoReducirDiferenciasDeStock.ts
?? src/content/resources/cotizarInventarioFisico.ts
?? src/content/resources/cuantoCuestaUnInventarioFisico.ts
?? src/content/resources/cuantoTardaUnInventarioFisico.ts
?? src/content/resources/inventarioInternoVsTercerizado.ts
?? src/content/resources/inventarioManualVsTecnologico.ts
?? src/content/resources/inventariosSinDetenerOperacion.ts
?? src/content/resources/porQueNoCoincideElStock.ts
```

### `git diff --stat`

```
 21 files changed, 763 insertions(+), 148 deletions(-)
```

El stat no incluye untracked (contenido P1, precheck/validation Fase 2).
