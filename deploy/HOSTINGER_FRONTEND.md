# Frontend estático — Hostinger (Fase 1)

La web pública se publica como **archivos estáticos** generados por Vite + prerender SSR (`renderToString`). No uses un rewrite SPA como sustituto del HTML prerenderizado.

## Build

```bash
npm install
npm run build:validated
```

Esto ejecuta:

1. `tsc --noEmit`
2. `vite build` → `dist/`
3. `tsx scripts/prerender.ts` → inyecta HTML de `/` en `dist/index.html` + `dist/sitemap.xml`
4. `tsx scripts/validate-seo-build.ts` → validación estructural SEO

## Qué subir a Hostinger

Subí el contenido de `dist/` a `public_html` (reemplazando al menos):

```text
index.html
assets/
robots.txt
sitemap.xml
favicon.svg
logo.png
```

## Verificación post-deploy

1. Abrí `https://dinamicsystems.com/` y confirmá título / H1.
2. Ver “View Page Source”: `#root` debe contener HTML (H1, texto de la empresa), no estar vacío.
3. `https://dinamicsystems.com/robots.txt`
4. `https://dinamicsystems.com/sitemap.xml` (solo la home en Fase 1)
5. Probar el formulario de contacto (API: `VITE_API_BASE_URL` / fallback `api-landing.dinamiceducation.com`).

## Alcance Fase 1

- Solo existe la ruta pública `/`.
- No configures redirects/rewrites hacia `index.html` para paths futuros: las próximas URLs (`/servicios/...`, etc.) se generarán como HTML estático independiente (`…/index.html`) en fases siguientes.
- El prerender es determinístico (Vite SSR + `renderToString`), sin Puppeteer.

## Variable de entorno del frontend

Antes del build de producción:

```env
VITE_API_BASE_URL=https://api-landing.dinamiceducation.com
```

Ver `.env.frontend.example`. No pongas secretos SMTP en el frontend.
