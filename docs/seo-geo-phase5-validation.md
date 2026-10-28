# Validación Fase 5 — expansión de autoridad SEO/GEO

**Fecha:** 2026-10-28  

## 1. Estado

```
PHASE_5_CODE_COMPLETE
DEPLOY_PENDING_USER_APPROVAL
SEARCH_CONSOLE_VERIFIED
SITEMAP_ACTIVE
CLOUDFLARE_UNCHANGED
```

Precheck: `docs/seo-geo-phase5-precheck.md`. No deploy. No Cloudflare. Home/header intactos. No Fase 6.

---

## 2. URLs propuestas

| Propuesta | Decisión |
|-----------|----------|
| `/recursos/checklist-inventario-fisico/` | KEEP |
| `/recursos/como-calcular-personal-inventario/` | KEEP |
| `/buenas-practicas/control-stock-en-movimiento/` | KEEP |
| `/buenas-practicas/trazabilidad-conteo-reconteo/` | KEEP |
| `/innovacion/ocr-inventarios/` | KEEP |
| `/herramientas/estimador-inventario/` | STOP |
| Widget estimador en la página de personal | STOP |
| Activar `/investigacion/` | STOP (sigue 1 hija) |

---

## 3. URLs finalmente creadas

| URL | Intención | Contenido | Schema | Links |
|-----|-----------|-----------|--------|-------|
| `/recursos/checklist-inventario-fisico/` | Lista de control usable | Antes / durante / después + bloque imprimible | Article + FAQ 1 | preparar depósito, planificación, metodología, físicos |
| `/recursos/como-calcular-personal-inventario/` | Estimar dotación sin ratio | Variables, fórmula conceptual, escenarios, límites | Article + FAQ 1 | equipos grandes, cuánto tarda, planificación, cotizar |
| `/buenas-practicas/control-stock-en-movimiento/` | Cómo tratar el stock que se mueve | Tipos de movimiento, freeze, timestamps, conciliación | Article + FAQ 1 | sin detener, posiciones, diferencias, planificación |
| `/buenas-practicas/trazabilidad-conteo-reconteo/` | Lineage entre versiones del dato | Campos v1, motivo, v2, resolución; no pisar | Article + FAQ 1 | reconteos, auditables, reducir diferencias |
| `/innovacion/ocr-inventarios/` | OCR ≠ IA ≠ visión ≠ inventario | Qué lee, fallas, confianza, fallback humano | Article + FAQ 1 | visión, IA, tecnología aplicada, etiquetas |

Imprimible: misma URL, `#checklist` + botón `Imprimir checklist` (`window.print()`). Sin PDF ni URL extra.

---

## 4. Canibalización

| Cluster | Resultado |
|---------|-----------|
| Checklist vs preparar / planificación / metodología | KEEP: lista de control vs acondicionar vs diseñar vs ciclo del dato |
| Personal vs equipos / tarda / cotizar | KEEP: estimación de nómina vs supervisión vs calendario vs datos de propuesta |
| Stock en movimiento vs sin detener | KEEP: cómo controlar el ítem que se mueve vs si el modo activo es viable |
| Trazabilidad vs reconteos vs auditables | KEEP: puente entre versiones vs disparo vs cualidad del rastro |
| OCR vs IA vs visión vs tecnología aplicada | KEEP: lectura de caracteres vs juicio vs pipeline de imagen vs mapa de capas |

Ningún MERGE/STOP sobre las 5 KEEP.

---

## 5. Autoría

Byline de artículos: **«Contenido técnico de Dinamic Systems»** + fecha de publicación (y «Actualizado» sólo si `dateModified` ≠ `datePublished`).

Schema Article: `author` = Organization (`Dinamic Systems`, `@id` de Organization). Sin personas, cargos ni certificaciones inventadas.

---

## 6. Herramienta

**Descartada** como URL y como widget. Sin ritmos verificables, cualquier cifra se leería como cotización. La estimación queda en prosa extraíble en `/recursos/como-calcular-personal-inventario/`.

---

## 7. Hubs

| Hub | Cambio |
|-----|--------|
| `/recursos/` | 15 hijas. Checklist en preparación; calcular personal en costos/tiempos |
| `/buenas-practicas/` | 10 hijas. Stock en movimiento en ejecución; trazabilidad en control y cierre |
| `/innovacion/` | 8 hijas. OCR en captura e identificación |
| `/investigacion/` | Sigue sin publicarse |

Header/home: sin cambios.

---

## 8. Sitemap

**47 URLs** (42 + 5 KEEP). HTTPS, trailing slash, hostname canónico. Sin `/investigacion/` hub. Sin `/herramientas/estimador-inventario/`.

---

## 9. Internal linking

`validate:links`: **47 paths, 0 huérfanos.** Related 2–5. Sin links a 301.

Inbound añadido desde: visión, tecnología aplicada, IA, etiquetas → OCR; reconteos y auditables → trazabilidad; sin detener → stock en movimiento; planificación, preparar depósito, metodología → checklist; equipos, cuánto tarda, cotizar → calcular personal.

---

## 10. Tests

Ejecutados en esta corrida:

```
npm run build:validated
  tsc OK
  prerender 47 + 404 + sitemap + .htaccess
  validate:seo-build all checks passed
    unique titles (47) / H1s (46)
    5 hubs indexables
    /investigacion/ unpublished
    FAQPage 1:1
    sitemap 47
  validate:links 47 paths, 0 huérfanos

npx playwright test
  16 passed (31.2s)
```

Home/header comerciales. Innovación/Investigación/Recursos/BP fuera del header.

---

## 11. Producción

`DEPLOY_PENDING_USER_APPROVAL`

No se subió `dist/`. No se reenvió sitemap. Search Console no se usa como evidencia de estas URLs nuevas.

---

## 12. Git

Working tree **sin commit** (no solicitado). Diff completo: `git diff`.

### `git status --short`

```
 M src/App.tsx
 M src/content/hubs/buenasPracticas.ts
 M src/content/hubs/innovacion.ts
 M src/content/hubs/recursos.ts
 M src/content/innovation/etiquetasInteligentes.ts
 M src/content/innovation/inteligenciaArtificial.ts
 M src/content/innovation/tecnologiaAplicada.ts
 M src/content/innovation/visionArtificial.ts
 M src/content/practices/equiposDepositosGrandes.ts
 M src/content/practices/planificacionInventario.ts
 M src/content/practices/reconteosInteligentes.ts
 M src/content/practices/resultadosAuditables.ts
 M src/content/registry.ts
 M src/content/research/metodologiaInventarios.ts
 M src/content/resources/comoPrepararDeposito.ts
 M src/content/resources/cotizarInventarioFisico.ts
 M src/content/resources/cuantoTardaUnInventarioFisico.ts
 M src/content/resources/inventariosSinDetenerOperacion.ts
 M src/content/types.ts
 M src/pages/templates/ResourcePageTemplate.tsx
 M src/routes.ts
 M src/styles/globals.css
 M tests/ssg-smoke.spec.ts
?? docs/seo-geo-phase5-precheck.md
?? docs/seo-geo-phase5-validation.md
?? src/components/page/ChecklistBlock.tsx
?? src/content/innovation/ocrInventarios.ts
?? src/content/practices/controlStockEnMovimiento.ts
?? src/content/practices/trazabilidadConteoReconteo.ts
?? src/content/resources/checklistInventarioFisico.ts
?? src/content/resources/comoCalcularPersonalInventario.ts
```

### `git diff --stat`

```
 23 files changed, 246 insertions(+), 43 deletions(-)
```

El stat no incluye untracked.
