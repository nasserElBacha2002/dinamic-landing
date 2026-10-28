# Plan de deploy final SEO/GEO — Dinamic Systems

**Estado:** `READY_FOR_FINAL_DEPLOY` / `DEPLOY_NOT_EXECUTED`  
**Fecha:** 2026-10-28  

Este documento prepara **un** upload a Hostinger. No se ejecuta en esta fase.

No modificar DNS. No enviar sitemap a Search Console. No apagar Cloudflare. No tocar subdominios.

---

## Antes del deploy

1. **Backup de producción.** Bajar o zippear el `public_html` actual de Hostinger (incluye el `dist/` de Fase 0). Conservar fuera del servidor.
2. **Commit y tag** del árbol que se va a subir (después del code review). Ejemplo de tag: `seo-geo-final-deploy`.
3. **Working tree limpio** en esa revisión. No subir un `dist/` generado desde cambios sin commit.
4. Node `>=20.18.1` (`.nvmrc`).
5. Variables de entorno del frontend:

```env
VITE_API_BASE_URL=https://api-landing.dinamiceducation.com
```

6. Build limpio:

```bash
rm -rf dist
npm ci
npm run build:validated
npx playwright test
```

7. Comprobar el paquete local:

| Chequeo | Esperado |
|---------|----------|
| `dist/sitemap.xml` | **42** `<loc>` HTTPS, hostname `dinamicsystems.com`, trailing slash |
| `dist/.htaccess` | 33 reglas 301 exactas (7 Fase 1 + 26 Fase 4) |
| `dist/robots.txt` | `Sitemap: https://dinamicsystems.com/sitemap.xml` |
| `dist/404.html` | `noindex` |
| `dist/investigacion/index.html` | **no existe** |
| `dist/investigacion/metodologia-inventarios/index.html` | existe |
| `dist/innovacion/index.html` | existe |

8. No validar producción todavía. La evidencia de este paso es local.

---

## Deploy

Subir **todo** el contenido de `dist/` a `public_html` (reemplazo completo, no un diff a mano).

Debe incluir:

- `index.html`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `.htaccess`
- `favicon.svg` / `logo.png`
- `assets/`
- todas las carpetas prerenderizadas (`servicios/`, `industrias/`, `recursos/`, `buenas-practicas/`, `innovacion/`, `investigacion/metodologia-inventarios/`, etc.)

No subir `dist/.vite/`.

No reescribir rutas desconocidas a `index.html`. El `.htaccess` ya define `ErrorDocument 404 /404.html`.

Hostinger LiteSpeed aplica el `.htaccess` del `public_html`. Sin ese archivo no hay 301.

### Rollback

Restaurar el zip de `public_html` anterior. Los 301 y las URLs nuevas desaparecen juntas. Cloudflare no se toca en el rollback (nunca se ejecutó).

---

## Post-deploy (cuando se ejecute)

Verificar, en este orden:

1. Home `/` — H1 comercial, header intacto (Inicio, Quiénes Somos, Servicios, Industrias, Contacto). Sin Recursos/BP/Innovación/Investigación en header.
2. Hubs: `/servicios/`, `/industrias/`, `/recursos/`, `/buenas-practicas/`, `/innovacion/`.
3. `/investigacion/` → **404** (no CollectionPage).
4. `/investigacion/metodologia-inventarios/` → 200, canonical propio.
5. Muestras: `/servicios/inventarios-fisicos/`, `/servicios/inventarios-con-drones/`, `/recursos/como-realizar-un-inventario-fisico/`.
6. Innovación: `/innovacion/tecnologia-aplicada-inventarios/`.
7. Redirects Fase 1 (una muestra por regla): `/inventarios-fisicos-argentina` → `/servicios/inventarios-fisicos/`.
8. Redirects Fase 4 (muestras): `/tecnologia-inventarios` → `/innovacion/tecnologia-aplicada-inventarios/`; `/mejores-empresas-inventarios-argentina` → `/recursos/como-elegir-empresa-inventarios/`.
9. Negativos: `/inventarios-depositos-algo` **no** redirige.
10. `https://dinamicsystems.com/sitemap.xml` — 42 URLs, HTTP 200.

### Crawlers

Probar `sitemap.xml` y home con:

- curl (cliente estándar)
- navegador
- User-Agent `Googlebot` smartphone
- User-Agent `Bingbot`
- User-Agent `GPTBot`

Un 200 con User-Agent de bot **no** prueba un crawl real. Si LiteSpeed devuelve 403 a bots, revisar Bot Protection / hotlink como en `deploy/HOSTINGER_FRONTEND.md`.

---

## Search Console (después de DNS TXT)

Sigue `PENDING_OWNER_DNS_VERIFICATION`. Cuando el TXT esté en GoDaddy:

1. Verificar el dominio.
2. Enviar `https://dinamicsystems.com/sitemap.xml`.
3. Inspeccionar: `/`, `/servicios/`, `/recursos/`, `/buenas-practicas/`, `/innovacion/`, `/investigacion/metodologia-inventarios/`.
4. Solicitar indexación sólo si aporta.
5. Monitorear cobertura. No inspeccionar `/investigacion/` como URL a indexar.

---

## Cloudflare

`MAPPED_NOT_EXECUTED`. Ver `docs/seo-geo-external-consolidation-map.csv`.

Después de que las URLs destino estén 200 en producción, y sólo entonces, se pueden ejecutar 301 de subdominios/Pages. No es obligatorio apagar Cloudflare: el objetivo es no tener dos documentos equivalentes indexables.
