# Frontend estático — Hostinger (Fase 3)

La web pública se publica como **archivos estáticos** generados por Vite + prerender SSR (`renderToString`). Cada URL publicada es una carpeta con `index.html`. **No** uses un rewrite SPA hacia `index.html` como sustituto del prerender.

## Requisitos de Node

- Mínimo: **Node.js `>=20.18.1`** (`package.json` → `engines`)
- Ver `.nvmrc`

```bash
node --version
nvm use
```

## Build

```bash
npm install
npm run build:validated
npm run test:ssg-smoke
```

## Qué subir a `public_html`

Subí **todo** el contenido de `dist/` (reemplazo completo recomendado):

```text
index.html
404.html
robots.txt
sitemap.xml
favicon.svg
logo.png
assets/
servicios/
  inventarios-fisicos/index.html
  inventarios-con-drones/index.html
  inventarios-ciclicos/index.html
  auditoria-de-inventarios/index.html
industrias/
  depositos-centros-distribucion/index.html
  retail-cadenas-sucursales/index.html
  operadores-logisticos-industria/index.html
recursos/
  como-realizar-un-inventario-fisico/index.html
  como-preparar-un-deposito-para-un-inventario/index.html
  inventario-general-vs-inventario-ciclico/index.html
  como-funciona-un-inventario-con-drones/index.html
```

No hace falta subir `dist/.vite/`.

## Deep links y trailing slash

```text
https://dinamicsystems.com/servicios/inventarios-ciclicos/
→ public_html/servicios/inventarios-ciclicos/index.html
```

Preferí URLs con barra final. Probá recarga directa (F5) en cada ruta.

## Página 404

Configurá el documento de error 404 como `/404.html`. **No** redirigís rutas desconocidas a `/index.html`.

## Verificación post-deploy

1. Home + 4 servicios + 3 industrias + 4 recursos (12 URLs del sitemap)
2. URL inventada → `404.html` con noindex
3. `sitemap.xml` — exactamente 12 URLs
4. Formulario → `VITE_API_BASE_URL`

## Variable de entorno

```env
VITE_API_BASE_URL=https://api-landing.dinamiceducation.com
```

## Rollback

Conservá el `dist/` anterior (zip) antes de subir.

## Alcance actual

Publicadas indexables: home + 4 servicios + 3 industrias + 4 recursos (12 URLs en sitemap).  
Páginas legales públicas: **no publicadas** hasta texto aprobado.  
Casos de éxito indexables: pendientes de evidencia (`deploy/CONTENT_EVIDENCE.md`).  
Medición: `deploy/MEASUREMENT_AND_INDEXING.md`.

### Build / API

Antes de `npm run build` en Hostinger, definir `VITE_API_BASE_URL` (recomendado) o `VITE_DEPLOY_ENV=production` para el fallback explícito. No alcanza con un `vite build` genérico sin variables.
