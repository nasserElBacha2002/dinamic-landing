# Inventario GEO externo / pages.dev

**Fecha:** 2026-08-03  
**Alcance:** solo evidencia en este repositorio + filesystem hermano conocido. Sin Search Console live.

## Hallazgos en repo `dinamic-landing`

| Origen | Hallazgo | Clasificación |
|--------|----------|---------------|
| Código fuente / routes | Sin URLs `*.pages.dev` | NOT_FOUND_IN_REPO |
| `src/`, `deploy/`, docs | Sin canonicals a hosts externos | NOT_FOUND_IN_REPO |
| Dominio canónico | `https://dinamicsystems.com` (`src/seo/site.ts`) | KEEP |

## Hallazgo fuera del repo (filesystem hermano)

| Item | Evidencia | Clasificación |
|------|-----------|---------------|
| Carpeta `../Paginas-geo-dinamic` | Existe junto a `dinamic-landing` (listado directorio padre) | NEEDS_LIVE_VERIFICATION |
| Contenido / indexación | No inspeccionado en esta pasada (fuera de workspace) | NEEDS_LIVE_VERIFICATION |

## Acciones recomendadas
1. Verificar en Google Search Console si hay propiedades `pages.dev` o HTML GEO indexados.
2. Si indexan: `noindex` o canonical a `dinamicsystems.com` + rutas internas existentes (`/industrias/depositos-centros-distribucion/`, etc.).
3. No crear `/inventarios-depositos-argentina/` en el dominio principal (evitar doorway).
4. No afirmar dilución de autoridad hasta evidencia live.

## Estado
**NEEDS_LIVE_VERIFICATION** — no bloquea deploy del dominio principal.
