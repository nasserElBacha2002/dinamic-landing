# Validación Fase 4 — consolidación final SEO/GEO

**Fecha:** 2026-10-28  

## 1. Estado final

```
PHASE_4_CODE_COMPLETE
READY_FOR_FINAL_DEPLOY
DEPLOY_NOT_EXECUTED
SEARCH_CONSOLE_PENDING_OWNER_DNS_VERIFICATION
CLOUDFLARE_MAPPED_NOT_EXECUTED
```

Fase 1 producción sigue `PRODUCTION_VALIDATION_PENDING` (los 301 no se afirman live hasta el upload).

No se subió `dist/` a Hostinger. No se modificó DNS. No se envió sitemap. No se tocó Cloudflare.

---

## 2. Corrección investigación

`/investigacion/` **ya no es indexable**.

| URL | Resultado |
|-----|-----------|
| `/investigacion/` | Fuera de `publishedRoutes`. Fuera del sitemap. No hay CollectionPage. No hay `dist/investigacion/index.html`. Footer no enlaza el hub. Playwright ≥400. |
| `/investigacion/metodologia-inventarios/` | Sigue publicada. Canonical propio. Article + FAQ. Breadcrumb `Inicio → Metodología de inventarios` (sin hub). |

Infraestructura lista para reactivar el hub: `HUB_PATH_BY_GROUP.investigacion`, `FUTURE_HUB_GROUPS = ['investigacion']`, contenido en `src/content/hubs/investigacion.ts` (no registrado). Criterio de reactivación: ≥2 hijas indexables con evidencia (estudios, benchmarks, casos, datasets). No se inventó contenido para justificar el hub.

`research.dinamicsystems.com` (mapa externo) apunta a **metodología**, no al hub.

---

## 3. Canibalización final

Ningún MERGE/STOP nuevo. Drones se **KEEP** con tres intenciones distintas (verificado en title, H1, summary, secciones y links). Playwright cubre los tres H1.

| Cluster | URLs | Decisión |
|---------|------|----------|
| Drones | servicio / recurso how-to / innovación integración | KEEP |
| IA vs visión | `/innovacion/inteligencia-artificial-inventarios/` vs `/innovacion/vision-artificial/` | KEEP |
| Tecnología aplicada vs manual/tecnológico | pilar de capas vs medios de captura | KEEP |
| Metodología vs planificación | ciclo del dato vs diseño del operativo | KEEP |
| Resultados auditables vs metodología | rastro del dato vs ciclo completo | KEEP |
| Etiquetas vs posiciones | identificación ítem/ubicación vs control espacial del conteo | KEEP |
| Tiempo real vs sin detener | significado de “en vivo” vs operar con el depósito activo | KEEP |
| Costo vs cotización | variables de precio vs datos para pedir cotización | KEEP |
| Diagnóstico vs reducción de diferencias | por qué no coincide vs cómo prevenir | KEEP |

Vigilancia post-deploy del cluster drones: `docs/seo-geo-post-deploy-monitoring.md`.

---

## 4. URLs indexables finales

**42** (43 de Fase 3 menos el hub `/investigacion/`).

Resumen:

- 1 home
- 5 hubs: `/servicios/`, `/industrias/`, `/recursos/`, `/buenas-practicas/`, `/innovacion/`
- 4 servicios
- 3 industrias
- 13 recursos
- 8 buenas prácticas
- 7 innovación
- 1 metodología (`/investigacion/metodologia-inventarios/`)

Titles 42 únicos. H1 interiores 41 únicos. Ninguna fuente 301. Ningún REMOVE. Canonical self, HTTPS, trailing slash, hostname `dinamicsystems.com`.

---

## 5. Redirects internos

33 reglas exactas en `public/.htaccess` + `INTERNAL_REDIRECTS` (`src/seo/phase1InternalRedirects.ts`).

- Fase 1: 7 (sin cambio de destinos).
- Fase 4: 26 slugs de `dinamicsystems.com` cuyo destino ya existe.

Un salto. Destino canónico con trailing slash. Match `path` \| `path/` \| `path.html`. Sin cadenas. Sin prefix. No redirigen a `/` salvo que el CSV lo justifique (ninguna de estas 33). Mismo-path KEEP (`equipos-inventario-depositos-grandes`, `inventario-adaptado-cliente-proveedor`, `inventarios-fisicos-tiempo-real`) **sin** 301.

Vite preview no aplica `.htaccess`; la validez es estática + matcher + fuentes no prerenderizadas (≥400).

---

## 6. External consolidation

Archivo: `docs/seo-geo-external-consolidation-map.csv`. **No ejecutado.**

| Decisión | Cantidad | Notas |
|----------|----------|-------|
| REDIRECT_301 | mayoría de subdominios y Pages con equivalente | `safe_to_execute=no` |
| CANONICAL_TEMPORARY | 0 | Los 9 subdominios **no resuelven DNS** (curl 2026-10-28). No hay documento live al que poner canonical hoy. |
| KEEP_EXTERNAL | 0 | Ningún host externo tiene intención distinta documentada. |
| REMOVE_AFTER_REDIRECT | doorways/noticias/hubs falsos | p.ej. `nueva-generacion-inventarios`, `noticias-recursos`, landings brand |

Subdominios revisados (todos `DNS_UNRESOLVED`): research, futuro-inventarios, ia-inventarios, inventarios-depositos, nueva-generacion-inventarios, empresas-inventarios, quienes-somos, tecnologia-inventarios, elegir-empresa-inventarios.

Pages/Workers: `UNCONFIRMED_NOT_ASSUMED_FROM_FILESYSTEM`. No se asume live por existir en disco.

Noindex no se usa como mecanismo de migración.

---

## 7. Sitemap final

**42 URLs.** Generado desde `getSitemapLocs()`. Sin `/investigacion/`. Con metodología. Sin fuentes 301.

---

## 8. Internal linking

`validate:links`: **42 paths, 0 huérfanos.** 0 enlaces a redirect. 0 enlaces al hub `/investigacion/`. Related 2–5, trailing slash, no a 301.

Metodología recibe inbound desde planificación, IA y tiempo real (entre otros). Footer no apunta al hub.

---

## 9. Schemas

Por tipo, sin cambios de contrato:

- Home: Organization + WebSite + WebPage + Service + FAQPage
- Servicio: Organization ref + BreadcrumbList + Service + FAQPage si hay FAQ
- Recurso/artículo: Organization ref + BreadcrumbList + Article + FAQPage si hay FAQ
- Hub publicado: Organization ref + BreadcrumbList + CollectionPage + ItemList (hijas reales)
- **No hay schema para `/investigacion/`** (no se prerendera)
- FAQPage 1:1 con `#faq` visible; páginas sin FAQ no emiten FAQPage
- BreadcrumbList de metodología: Inicio + página actual (sin crumb de hub)

Claims: no hay “somos los mejores”, “número 1”, “garantizamos”, “100%”, rankings ni “metodología patentada” como afirmación. Las menciones a patente/garantía son **negaciones** explícitas.

---

## 10. Tests

Ejecutados en esta corrida:

```
npm run build:validated
  tsc OK
  prerender 42 + 404 + sitemap + .htaccess
  validate:seo-build all checks passed
    unique titles (42) / H1s (41)
    5 hubs indexables (servicios, industrias, recursos, BP, innovación)
    /investigacion/ unpublished
    FAQPage 1:1
    sitemap 42
    33 exact 301s (7+26); no prefix; no chains
  validate:links 42 paths, 0 huérfanos

npx playwright test
  15 passed (29.9s)
```

Home/header intactos. Innovación no está en el header. Investigación no está en header ni footer. Cloudflare no aparece en `.htaccess`.

---

## 11. Deploy

`NOT_EXECUTED`

Plan: `docs/seo-geo-final-deploy-plan.md`. Esperar code review antes del upload.

---

## 12. Search Console

`PENDING_OWNER_DNS_VERIFICATION`

Checklist (cuando exista TXT en GoDaddy): verificar dominio → enviar sitemap → inspeccionar `/`, `/servicios/`, `/recursos/`, `/buenas-practicas/`, `/innovacion/`, `/investigacion/metodologia-inventarios/` → no pedir indexación de `/investigacion/`.

---

## 13. Cloudflare

`MAPPED_NOT_EXECUTED`

No es obligatorio borrar Cloudflare. Objetivo: un solo documento equivalente indexable. Mapa listo; ejecución posterior al deploy de Dinamic.

---

## 14. Git

Working tree **sin commit** (no solicitado). Diff completo: `git diff`.

### `git status --short`

```
 M docs/seo-geo-phase2-validation.md
 M docs/seo-geo-url-map.csv
 M public/.htaccess
 M scripts/validate-links.ts
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
 M src/seo/phase1InternalRedirects.ts
 M tests/ssg-smoke.spec.ts
?? docs/seo-geo-external-consolidation-map.csv
?? docs/seo-geo-final-deploy-plan.md
?? docs/seo-geo-phase3-precheck.md
?? docs/seo-geo-phase3-validation.md
?? docs/seo-geo-phase4-validation.md
?? docs/seo-geo-post-deploy-monitoring.md
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
 29 files changed, 724 insertions(+), 206 deletions(-)
```

El stat no incluye untracked (Fases 3–4: contenido, precheck/validation, mapa externo, plan de deploy).
