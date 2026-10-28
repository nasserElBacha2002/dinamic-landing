# Validación Fase 0 — SEO/GEO Dinamic Systems

**Fecha:** 2026-10-28  
**Alcance:** Fase 0A–0D. Sin artículos GEO. Sin redirects Cloudflare. Sin cambios de home/header.  
**Estado:** lista para code review. No avanzar a Fase 1.

---

## Resumen

| Chequeo | Resultado |
|---------|-----------|
| Typecheck + prerender | OK |
| `validate:seo-build` | OK (15 URLs) |
| `validate:links` | OK (15 paths, 0 huérfanos) |
| Playwright SSG smoke | 9 passed |
| Sitemap local | XML válido, 15 locs, trailing slash |
| Hubs indexables | `/servicios/`, `/industrias/`, `/recursos/` |
| Hubs futuros | no prerenderizados, no sitemap |
| Header | sin ítems nuevos |
| Home | sin feed GEO |
| Páginas GEO | no migradas |

---

## Fase 0A — Sitemap de producción

### Root cause

El sitemap **existe** en Hostinger y es XML estático válido. No hay un generador PHP roto en el repo.

Lo que se observó:

| Cliente | URL | Status | Content-Type | Bytes |
|---------|-----|--------|--------------|-------|
| curl default | `https://dinamicsystems.com/sitemap.xml` | **200** | `application/xml` | 1277 |
| Mozilla/5.0 | idem | **200** | `application/xml` | 1277 |
| Googlebot desktop (`compatible; Googlebot/2.1`) | idem | **200** | `application/xml` | 1277 |
| Googlebot smartphone (Nexus 5X UA oficial) | idem | **403** | `text/html` | 787 |
| Bingbot | idem | **403** | `text/html` | 787 |
| GPTBot / AhrefsBot | idem | **200** | `application/xml` | 1277 |
| `www` + curl | `https://www.dinamicsystems.com/sitemap.xml` | **200** | `application/xml` | 1277 |
| `robots.txt` | | **200** | | |
| Home | | **200** | | |

El 403 es LiteSpeed/Hostinger (`server: LiteSpeed`, `platform: hostinger`, cuerpo “Access to this resource on the server is denied!”). Un fetch previo vía herramienta interna devolvió 500; **no se reprodujo con curl**. El archivo no está ausente ni malformado.

### Sitemap live actual (todavía 12 URLs, pre-deploy)

XML válido. Locs con trailing slash, canónicos del dominio:

```
https://dinamicsystems.com/
https://dinamicsystems.com/servicios/inventarios-fisicos/
https://dinamicsystems.com/servicios/inventarios-con-drones/
https://dinamicsystems.com/servicios/inventarios-ciclicos/
https://dinamicsystems.com/servicios/auditoria-de-inventarios/
https://dinamicsystems.com/industrias/depositos-centros-distribucion/
https://dinamicsystems.com/industrias/retail-cadenas-sucursales/
https://dinamicsystems.com/industrias/operadores-logisticos-industria/
https://dinamicsystems.com/recursos/como-realizar-un-inventario-fisico/
https://dinamicsystems.com/recursos/como-preparar-un-deposito-para-un-inventario/
https://dinamicsystems.com/recursos/inventario-general-vs-inventario-ciclico/
https://dinamicsystems.com/recursos/como-funciona-un-inventario-con-drones/
```

`robots.txt` live:

```
User-agent: *
Allow: /

Sitemap: https://dinamicsystems.com/sitemap.xml
```

### Mitigación en código (pendiente de deploy)

- `public/.htaccess` permite `sitemap.xml` y `robots.txt` (`Require all granted`) y evita rewrite SPA.
- El prerender copia `.htaccess` a `dist/.htaccess`.
- `deploy/HOSTINGER_FRONTEND.md` documenta Bot Protection / hotlink si el 403 a Googlebot smartphone o Bingbot continúa.

**Post-deploy obligatorio:** repetir curl con UA Googlebot smartphone y Bingbot. HTTP 200 es el criterio. Hasta entonces, no hay 200 de crawler mobile verificado en producción para el sitemap nuevo (15 URLs), porque aún no se subió `dist/`.

Headers curl (GET default, recorte):

```
HTTP/2 200
content-type: application/xml
platform: hostinger
panel: hpanel
server: LiteSpeed
```

---

## Fase 0B — Infraestructura

Implementado:

- `PageType` incluye `hub`
- `ContentGroup` incluye `servicios | industrias | recursos | buenas-practicas | innovacion | investigacion`
- `HUB_PATH_BY_GROUP` + `FUTURE_HUB_GROUPS`
- `HubPageTemplate`
- Breadcrumbs UI y JSON-LD: el grupo enlaza al hub **solo si está publicado**
- CollectionPage + ItemList (hijas reales; error si el hub no tiene hijas)
- `publishedRoutes`, prerender, `validate:seo-build`, `validate:links`

No se publicaron artículos GEO.

---

## Fase 0C — Hubs indexables

| URL | Canonical | Robots | Hijas | Schema |
|-----|-----------|--------|-------|--------|
| `/servicios/` | `https://dinamicsystems.com/servicios/` | `index, follow` | 4 | CollectionPage + ItemList(4) + BreadcrumbList |
| `/industrias/` | `https://dinamicsystems.com/industrias/` | `index, follow` | 3 | CollectionPage + ItemList(3) + BreadcrumbList |
| `/recursos/` | `https://dinamicsystems.com/recursos/` | `index, follow` | 4 | CollectionPage + ItemList(4) + BreadcrumbList |

Header: no se agregaron hubs. El menú sigue siendo Inicio, Quiénes Somos, dropdowns Servicios/Industrias, CTA Contacto. Recursos sigue oculto (ningún recurso tiene `showInHeader`).

Footer: títulos de columna “Servicios”, “Industrias” y “Recursos” enlazan a los hubs. Sin listar decenas de artículos.

Home: `HomePage.tsx` y `ExplorePagesSection.tsx` **sin cambios**.

---

## Fase 0D — Hubs futuros

`/buenas-practicas/`, `/innovacion/`, `/investigacion/`:

- constantes en `HUB_PATH_BY_GROUP`
- **no** están en `publishedRoutes`
- **no** hay carpeta en `dist/`
- **no** están en sitemap
- Playwright `request.get` → status ≥ 400

No hay CollectionPage vacío.

---

## Sitemap local (post-build)

15 URLs, XML válido (`xmllint --noout dist/sitemap.xml`), todas con `/` final:

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

No incluye 404, ni hubs futuros, ni páginas GEO.

---

## Canonicals y breadcrumbs (muestra)

`dist/servicios/index.html`:

- canonical `https://dinamicsystems.com/servicios/`
- H1 “Servicios de inventarios físicos”
- breadcrumb Inicio → Servicios (página actual)
- JSON-LD CollectionPage con 4 servicios

`dist/servicios/inventarios-fisicos/index.html`:

- breadcrumb UI: Inicio → **Servicios** (`href="/servicios"`) → Inventarios físicos
- JSON-LD BreadcrumbList: Inicio + Servicios + página

---

## Tests ejecutados

### `npm run build:validated`

- `tsc` OK (app, scripts, tests)
- Vite build OK
- Prerender: home + 3 hubs + 11 interiores + 404 + sitemap + `.htaccess`
- `validate:seo-build` all checks passed
- `validate:links` 14 contents, 15 paths, no orphans

### Playwright (`npx playwright test`)

```
✓ home hydrates, anchors and form
✓ service page + contact hash from interior
✓ industry and resource pages
✓ 404 is noindex and linked
✓ mobile drawer lists primary services
✓ indexable hubs list children and keep header commercial
✓ child breadcrumb links to published hub
✓ unpublished future hubs are not prerendered
✓ secondary service and resource pages

9 passed
```

---

## Git (working tree, sin commit)

### `git status`

```
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
	modified:   deploy/HOSTINGER_FRONTEND.md
	modified:   deploy/MEASUREMENT_AND_INDEXING.md
	modified:   scripts/prerender.ts
	modified:   scripts/validate-seo-build.ts
	modified:   src/App.tsx
	modified:   src/components/layout/Footer.tsx
	modified:   src/content/registry.ts
	modified:   src/content/types.ts
	modified:   src/pages/interiorPages.tsx
	modified:   src/routes.ts
	modified:   src/seo/pageSeo.ts
	modified:   src/seo/schemas.ts
	modified:   tests/ssg-smoke.spec.ts

Untracked files:
	docs/seo-geo-migration-plan.md
	docs/seo-geo-url-map.csv
	docs/seo-geo-phase0-validation.md
	public/.htaccess
	src/content/hubs/
	src/pages/templates/HubPageTemplate.tsx
```

### `git diff --stat`

```
 deploy/HOSTINGER_FRONTEND.md       |  25 ++++++--
 deploy/MEASUREMENT_AND_INDEXING.md |   2 +-
 scripts/prerender.ts               |   5 ++
 scripts/validate-seo-build.ts      |  52 ++++++++++++++--
 src/App.tsx                        |   9 +++
 src/components/layout/Footer.tsx   |  58 +++++++++++++++---
 src/content/registry.ts            |   6 ++
 src/content/types.ts               |   9 ++-
 src/pages/interiorPages.tsx        |  16 +++++
 src/routes.ts                      | 122 +++++++++++++++++++++++++++++++++++--
 src/seo/pageSeo.ts                 |  69 +++++++++++++++++----
 src/seo/schemas.ts                 |  27 ++++++++
 tests/ssg-smoke.spec.ts            |  47 ++++++++++++++
 13 files changed, 414 insertions(+), 33 deletions(-)
```

### `git diff`

El diff completo está en el working tree (`git diff` + untracked). Archivos **no** tocados, a propósito:

- `src/pages/HomePage.tsx`
- `src/components/layout/Header.tsx`
- `src/components/sections/ExplorePagesSection.tsx`
- cualquier HTML de `Paginas-geo-dinamic`

---

## Fuera de alcance (respetado)

- Hero, clientes, contacto, navegación principal
- Migración de páginas GEO
- 301 Cloudflare Pages/Workers
- Apagado de hosts viejos
- Indexación de `/buenas-practicas/`, `/innovacion/`, `/investigacion/`

---

## Pendiente de producción (no bloquea code review)

1. Subir `dist/` a Hostinger **incluyendo** `sitemap.xml` y `.htaccess`.
2. Verificar HTTP 200 de `sitemap.xml` con Googlebot smartphone y Bingbot.
3. Si el 403 persiste: Bot Protection / hotlink en hPanel.
4. Reenviar sitemap en Search Console (15 URLs) **después** de ese 200.

Fase 1 no arranca hasta code review.
