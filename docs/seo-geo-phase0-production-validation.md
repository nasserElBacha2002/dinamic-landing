# Validación post-deploy Fase 0 — producción

**Fecha/hora:** 2026-10-28 19:19–19:21 UTC (22:19 ART)  
**Deploy live:** `Last-Modified: Wed, 28 Oct 2026 19:17:13 GMT`  
**Working tree:** sobre `ce3de08` (`main`, sin commit)  
**Veredicto:** infraestructura Fase 0 **en producción**. Fase 0 **no CLOSED** hasta que Search Console confirme lectura del sitemap. No avanzar a Fase 1.

---

## Criterio de cierre

| Criterio | Estado |
|----------|--------|
| Sitemap producción HTTP 200 | **Sí** |
| Googlebot smartphone → sitemap 200 | **Sí** |
| Bingbot → sitemap 200 | **Sí** |
| Search Console puede leer el sitemap | **Pendiente dueño** — GSC pide login de Google |
| Sitemap contiene 15 URLs correctas | **Sí** — XML válido, HTTPS, hostname canónico, trailing slash |
| Hubs actuales 200 + canonical | **Sí** |
| Hubs futuros no indexables | **Sí** — 404, ausentes del sitemap (404 es el default Hostinger, no `404.html`) |
| Páginas GEO no migradas | **Sí** |
| Home/header sin cambios | **Sí** |

---

## 1. Deploy

Hostinger actualizado por el dueño. El origen ya no es el build 2026-08-04.

Evidencia:

- `sitemap.xml` `last-modified: Wed, 28 Oct 2026 19:17:13 GMT`, 1487 bytes (antes 1277).
- `/servicios/index.html` (y pares) sustituyen el autoindex.
- `/404.html` existe (200, `noindex, follow`, H1 “No encontramos esta página”).

---

## 2. Sitemap

`GET https://dinamicsystems.com/sitemap.xml`

```
HTTP/2 200
content-type: application/xml
last-modified: Wed, 28 Oct 2026 19:17:13 GMT
content-length: 1487
server: LiteSpeed
platform: hostinger
```

`xmllint --noout` OK. 15 `<loc>`, todas `https://dinamicsystems.com…/`.

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

Sin 404, sin `/buenas-practicas|innovacion|investigacion`, sin páginas GEO.

`robots.txt` (200, `text/plain`):

```
User-agent: *
Allow: /

Sitemap: https://dinamicsystems.com/sitemap.xml
```

Navegador: XML renderizado, mismas 15 URLs.

---

## 3. Matriz de crawlers (2026-10-28 19:19 UTC)

| Cliente | sitemap.xml | robots.txt | / | hubs |
|---------|-------------|------------|---|------|
| curl default | **200** XML | 200 | 200 | 200 |
| Mozilla Chrome | **200** XML | 200 | 200 | 200 |
| Googlebot desktop | **200** XML | 200 | **403** HTML | **403** |
| Googlebot smartphone (Nexus 5X) | **200** XML | 200 | **403** HTML | **403** |
| Bingbot | **200** XML | 200 | **403** HTML | **403** |
| GPTBot | **200** XML | 200 | **429** | **429** |

El P0 del sitemap quedó resuelto: Googlebot smartphone y Bingbot leen `sitemap.xml` con HTTP 200.

El 403 en HTML con UA de Googlebot/Bingbot sale de una IP que **no** está en los rangos publicados de esos crawlers. Hostinger/LiteSpeed verifica bots por IP/rDNS. No se añadió allowlist por User-Agent. La prueba de crawler real es GSC → Inspección de URL → Probar URL publicada.

GPTBot 429 = rate limit.

---

## 4. Search Console

`https://search.google.com/search-console/sitemaps?resource_id=sc-domain:dinamicsystems.com` redirige a login de Google. No hay sesión.

**Acción del dueño (bloquea CLOSED):**

1. Search Console → Sitemaps → enviar `https://dinamicsystems.com/sitemap.xml`
2. Confirmar “Sitemap leído” / “Correcto”
3. Inspección live de `/`, `/servicios/`, `/industrias/`, `/recursos/`

---

## 5. Hubs en producción

| URL | Status | Canonical | Robots | H1 | Hijos | Autoindex |
|-----|--------|-----------|--------|----|-------|-----------|
| `/servicios/` | 200 | `https://dinamicsystems.com/servicios/` | `index, follow` | Servicios de inventarios físicos | 4, href con `/` | no |
| `/industrias/` | 200 | `https://dinamicsystems.com/industrias/` | `index, follow` | Inventarios físicos por tipo de operación | 3 | no |
| `/recursos/` | 200 | `https://dinamicsystems.com/recursos/` | `index, follow` | Guías sobre inventarios físicos | 4 | no |
| `/servicios` | **301** → `/servicios/` | — | — | — | — | — |

Hijo `/servicios/inventarios-fisicos/`: breadcrumb Inicio (`/`) → Servicios (`href="/servicios/"`) → página actual. JSON-LD BreadcrumbList usa `https://dinamicsystems.com/servicios/`.

Header en hubs y home: Inicio, Quiénes Somos, Servicios, Industrias, Contacto. Sin Recursos, sin Buenas prácticas / Innovación / Investigación.

Footer: headings Servicios / Industrias / Recursos apuntan a los hubs con trailing slash.

Home: hero, clientes, contacto y ExplorePagesSection comerciales. Sin grid GEO.

---

## 6. Hubs futuros

| URL | Status | En sitemap |
|-----|--------|------------|
| `/buenas-practicas/` | 404 | no |
| `/innovacion/` | 404 | no |
| `/investigacion/` | 404 | no |

El 404 servido es el default Hostinger (`This Page Does Not Exist`, `Last-Modified: Tue, 22 Apr 2025`). `/404.html` del sitio **sí está publicado** (200, `noindex, follow`), pero hPanel no lo usa como ErrorDocument (o el panel pisa el `.htaccess`).

No bloquea indexación de hubs futuros (no hay documento nuestro). Conviene en hPanel: Error pages → 404 → `/404.html`.

---

## 7. Structured data (HTML SSR live)

Grafo de cada hub (3 nodos):

1. `Organization` `@id=https://dinamicsystems.com/#organization`
2. `BreadcrumbList` (Inicio + hub, URLs con `/`)
3. `CollectionPage` + `ItemList` anidado (`mainEntity`), `about` → `#organization`

Sin Organization duplicada. Sin `#website` colgante. Sin schemas extra.

---

## Hallazgos residuales (no Fase 1)

1. **GSC:** falta reenviar sitemap e inspección live (dueño).
2. **404 Hostinger:** rutas desconocidas no usan `/404.html` noindex.
3. **403 HTML** con UA spoofed de Googlebot: esperado si LiteSpeed valida IP; confirmar con GSC live test. No “arreglar” con allowlist de UA.

---

## Git

Sin cambios de código en esta revalidación. El working tree de Fase 0 sigue sin commit. Diff en `git diff` / `git status`.
