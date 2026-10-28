# Plan de migración SEO / GEO — Dinamic Systems

**Estado:** auditoría aprobada. Fase 0 en implementación. No avanzar a Fase 1 sin code review.  
**Fecha:** 2026-10-28  
**Sitio canónico:** https://dinamicsystems.com  
**Corpus analizado:** `dinamic-landing` (código publicado) + `../Paginas-geo-dinamic` (71 artefactos SEO/GEO)  
**Mapa tabular:** `docs/seo-geo-url-map.csv`

## Correcciones aprobadas (2026-10-28)

1. **Hubs sin contenido.** No indexar CollectionPage vacíos. En Fase 0 solo son indexables `/servicios/`, `/industrias/` y `/recursos/` porque ya tienen hijas reales. `/buenas-practicas/`, `/innovacion/` e `/investigacion/` se preparan en tipos/rutas (`HUB_PATH_BY_GROUP`) y **no** se registran en `publishedRoutes` hasta que exista contenido hijo.
2. **Migración de URLs antiguas.** Orden: 301 → si no es posible, `rel=canonical` a la URL nueva → `noindex` solo para retirar un documento sin consolidar señales. `noindex` no es el mecanismo normal de migración. Nunca dos equivalentes indexables en paralelo.
3. **Sitemap bloqueante.** No ampliar el corpus indexable hasta diagnosticar el sitemap de producción. El XML actual es válido (12 URLs, trailing slash, HTTP 200 a clientes estándar). LiteSpeed ha devuelto 403 a algunos user-agents de crawler. Mitigación: `public/.htaccess` + verificación post-deploy con Googlebot.

---

## 1. Arquitectura actual

### 1.1 Stack del dominio principal

| Capa | Implementación |
|------|----------------|
| Frontend | React 19 + Vite 6 + Mantine 7 + Framer Motion |
| Routing | React Router 7, registro único en `src/routes.ts` (`publishedRoutes`) |
| Generación | SSG: `vite build` + `scripts/prerender.ts` (`renderToString`) |
| Hosting frontend | Hostinger, archivos estáticos (`dist/`), **MPA** (`vite.config.ts` → `appType: 'mpa'`) |
| API contacto | Express en `api-landing.dinamiceducation.com` |
| SEO head | Prerender (`serializePageHead`) + hidratación cliente (`SeoHead`) |
| Sitemap | Generado en build desde `getSitemapLocs()` → `dist/sitemap.xml` |
| robots.txt | `public/robots.txt` → Allow `/` + Sitemap del dominio |
| Validación | `validate:seo-build`, `validate:links`, Playwright SSG smoke |

No hay redirects 301 en el repositorio. Hostinger no debe reescribir rutas desconocidas a `index.html`; las URLs no publicadas deben devolver `404.html` con `noindex`.

### 1.2 Rutas publicadas hoy (12 URLs indexables)

```
/                                                      home comercial
/servicios/inventarios-fisicos/
/servicios/inventarios-con-drones/
/servicios/inventarios-ciclicos/
/servicios/auditoria-de-inventarios/
/industrias/depositos-centros-distribucion/
/industrias/retail-cadenas-sucursales/
/industrias/operadores-logisticos-industria/
/recursos/como-realizar-un-inventario-fisico/
/recursos/como-preparar-un-deposito-para-un-inventario/
/recursos/inventario-general-vs-inventario-ciclico/
/recursos/como-funciona-un-inventario-con-drones/
```

Verificado en vivo (2026-10-28): home y `/servicios/inventarios-fisicos/` responden. `robots.txt` está correcto. El sitemap existe y es XML válido; ver Fase 0A (HTTP 200 a curl/Mozilla; 403 a Googlebot smartphone y Bingbot).

### 1.3 Tipos de página, metadata y schema

`PageType` actual: `home | service | industry | resource | case-study`.

- Home: Organization + WebSite + WebPage + Service + FAQPage.
- Servicios: Organization (ref) + BreadcrumbList + Service.
- Recursos: Organization (ref) + BreadcrumbList + Article.
- Industrias: Organization (ref) + BreadcrumbList. **Sin Service schema** (correcto: no son un servicio distinto).
- Case studies: tipo y template existen; registro vacío (`src/content/case-studies/registry.ts`) por falta de evidencia.

Cada página publicada tiene title, description, canonical absoluto, Open Graph, Twitter `summary`, H1 único, breadcrumbs visuales y 3–5 `relatedLinks`.

Limitación actual de breadcrumbs: el grupo (Servicios / Industrias / Recursos) es texto, no enlace, porque **no existen hubs**. El JSON-LD de BreadcrumbList solo incluye Inicio + página actual.

### 1.4 Navegación comercial (no tocar en masa)

**Header:** Inicio · Quiénes Somos (`/#quienes-somos`) · Servicios (2 ítems con `showInHeader`) · Industrias (2 ítems) · CTA Contacto.

El menú Recursos ya está programado pero **no se renderiza**: ningún recurso tiene `showInHeader: true`. Mantenerlo así.

**Footer:** 4 servicios + industrias + 1 recurso (`Cómo realizar un inventario físico`) + Metodología / Contacto / Clientes.

**Home:** sección `ExplorePagesSection` (`#explorar`) con 8 enlaces interiores. Es el único bloque de descubrimiento en la landing. **No ampliarlo a 70 URLs.**

### 1.5 Corpus SEO/GEO externo (`Paginas-geo-dinamic`)

71 artefactos, no 70–74 “Workers” homogéneos:

| Tipo | Cantidad | Observación |
|------|----------|-------------|
| HTML standalone comercial | 16 | Canonical plano a `dinamicsystems.com/{slug}` (esas URLs **no existen** en el sitio live) |
| Serie numerada buenas prácticas + innovación | 19 | Canonical ya apunta a `/buenas-practicas/` o `/innovacion/`; contenido plantilla (~540–630 palabras) |
| `preview.html` | 1 | Artículo largo de IA (~1230 palabras); canonical `/innovacion/inventarios-fisicos-con-inteligencia-artificial` |
| Carpetas Cloudflare Pages | 35 | Direct Upload (`index.html` + `styles.css` + `robots.txt`). La mayoría **sin canonical**. 9 con subdominio `*.dinamicsystems.com` |

**Aclaración Workers vs Pages:** en el filesystem no hay `wrangler.toml` ni URLs `*.workers.dev` (tampoco `gentle-brook-befd.workers.dev`). Los README indican **Cloudflare Pages → Direct Upload → `*.pages.dev`**. Las URLs live reales hay que confirmarlas en el dashboard de Cloudflare y en Search Console. El mapa de este informe usa: canonical declarado, subdominio en `DOMINIO.txt`, o `unpublished-cloudflare-pages:{proyecto}`.

Nueve subdominios previstos en `DOMINIO.txt`:

- `elegir-empresa-inventarios.dinamicsystems.com`
- `research.dinamicsystems.com`
- `futuro-inventarios.dinamicsystems.com`
- `ia-inventarios.dinamicsystems.com`
- `inventarios-depositos.dinamicsystems.com`
- `nueva-generacion-inventarios.dinamicsystems.com`
- `empresas-inventarios.dinamicsystems.com`
- `quienes-somos.dinamicsystems.com`
- `tecnologia-inventarios.dinamicsystems.com`

Esa estrategia de **un host por artículo** diluye autoridad y no debe continuarse. Todo contenido indexable vive bajo `dinamicsystems.com/{cluster}/{slug}/`.

---

## 2. Problemas encontrados

1. **Autoridad fragmentada.** Contenido equivalente en dominio principal, HTML locales con canonical a URLs 404, Pages/Workers y subdominios.
2. **Canibalización comercial grave.** Decenas de documentos pelean por “inventarios físicos Argentina”, “empresa de inventarios”, “inventarios depósitos”, “mejor empresa”.
3. **Canonicals a páginas inexistentes.** Los HTML comerciales y la serie numerada ya declaran `https://dinamicsystems.com/...` como canonical. Si alguno está indexado, Google resuelve a 404 del dominio principal.
4. **Doorways y superlativos.** `mejor-empresa-*`, `mejores-empresas-*`, `principales-empresas-*`, `inventarios-innovadores-*` no aportan evidencia y compiten con el servicio canónico.
5. **Plantilla de la serie 01–15.** 14 de 15 notas de buenas prácticas repiten el mismo FAQ (“¿La metodología se adapta a cada depósito?”) y el filler “Se define, ejecuta y verifica como parte del servicio de Dinamic Systems.” No publicarlas tal cual. El schema FAQPage de esas notas es genérico y, en varios casos, no responde a la pregunta del H1.
6. **Noticias corporativas huecas.** Varias carpetas `dinamic-*-cloudflare` son “Dinamic refuerza / presenta / amplía…” con poco valor de búsqueda.
7. **Hub `noticias-recursos` inválido.** Todas las tarjetas enlazan a `https://dinamicsystems.com/` con el mismo párrafo.
8. **Subdominios de contenido.** Un artículo por host es peor que un path en el dominio.
9. **Solapamiento con páginas ya publicadas.** Cloudflare de auditoría, cíclicos, drones, depósitos, preparar depósito y “cómo hacer inventario” duplican URLs live.
10. **No hay hubs crawlables.** `/servicios/`, `/recursos/`, `/buenas-practicas/`, `/innovacion/`, `/investigacion/` no existen. Los crawlers solo descubren interiores vía home, footer y related links.
11. **Sitemap de producción.** El archivo existe y es válido; algunos crawlers reciben 403 de LiteSpeed. Bloqueante hasta confirmar 200 con Googlebot tras el `.htaccess`.
12. **Industry vs service.** El brief propone `/servicios/inventarios-depositos/` y `/servicios/inventarios-centros-distribucion/`. El sitio **ya publica** `/industrias/depositos-centros-distribucion/` con esa intención. Crear las URLs del brief duplicaría el cluster. **No crearlas.**
13. **Quiénes somos duplicado.** Home ya cubre institución. Dos landings GEO de “quiénes somos” competirían con `/`.
14. **Internal linking GEO.** Los HTML externos enlazan casi solo a `/`, `/#servicios`, `/#nosotros` y mailto. No hay grafo temático.
15. **Sin redirects.** No hay `.htaccess` ni mapa 301 en Hostinger.

---

## 3. Inventario de páginas

Inventario completo en `docs/seo-geo-url-map.csv` (90 filas: 12 live + 6 hubs + 71 corpus + 1 página derivada de innovación).

Resumen del corpus GEO (71):

| Grupo | Ítems | Calidad típica | Destino |
|-------|-------|----------------|---------|
| Comerciales “empresa / Argentina / depósitos / CD” | ~18 | 600–1000 palabras, intención comercial | Casi todos MERGE/REDIRECT a servicios o industrias live |
| Guías de elección de proveedor | 5 | Comparativa / doorway | 1 KEEP, 4 MERGE |
| Educativas (tiempo, costo, stock, cotizar, interno vs externo) | 7 | 400–980 palabras; varias delgadas | KEEP/REWRITE P1 |
| Tecnología / IA / visión / drones | ~12 | Solapadas | 4 pilares de innovación + MERGE |
| Buenas prácticas 01–15 | 15 | Plantilla | 7 REWRITE, resto MERGE/REMOVE |
| Innovación numerada 02–05 | 4 | Mejor que BP, aún cortas | 3 REWRITE, 1 MERGE |
| Institucional / research / noticias | ~8 | Mixto | 1 hub investigación, resto REDIRECT/REMOVE |

Para cada fila el CSV indica slug actual, intención, cluster, decisión, merge target, URL nueva, canonical y prioridad.

---

## 4. Clusters

Se adopta la taxonomía del brief, **ajustada a URLs ya indexables**:

| Cluster | Rol | Hub | Qué entra |
|---------|-----|-----|-----------|
| **Landing** | Conversión | `/` | Quiénes somos, propuesta, clientes, contacto. Sin feed de artículos. |
| **Servicios** | Intención comercial alta | `/servicios/` | Las 4 URLs live. No se agregan “inventarios depósitos” ni “inventarios CD” como servicios paralelos. |
| **Industrias** | Intención comercial por vertical | `/industrias/` | Depósitos/CD, retail, operadores logísticos. |
| **Recursos** | Educativo / decisión | `/recursos/` | Guías, comparativas, costos, tiempos, diferencias de stock. |
| **Buenas prácticas** | Metodología operativa | `/buenas-practicas/` | Reconteos, pasillos, comunicación, resultados auditables, equipos. |
| **Innovación** | Tecnología aplicada | `/innovacion/` | IA, drones, visión, etiquetas, offline, tiempo real, tecnología aplicada. |
| **Investigación** | Contenido propio más profundo | `/investigacion/` | Metodología. Benchmarks y casos **solo con evidencia**. |

### 4.1 Por qué no se crean `/servicios/inventarios-depositos/` ni `/servicios/inventarios-centros-distribucion/`

El brief las menciona como ejemplos. En producción ya existe `/industrias/depositos-centros-distribucion/` con H1 “Inventarios para depósitos y centros de distribución”, schema, sitemap y enlaces internos. Crear las dos URLs de servicios:

- canibaliza una URL ya publicada;
- obliga a elegir un canonical entre tres páginas casi idénticas;
- contradice el principio de no copiar automáticamente todo el corpus.

Mapeo: todo el cluster depósitos/CD GEO → esa industria. Si en el futuro se separa CD de depósito, se hace con contenido realmente distinto y un 301 planificado, no ahora.

### 4.2 Header y home

No se agregan al header: Recursos, Buenas prácticas, Innovación, Investigación.

Footer (máximo, discreto): enlaces a los 4 hubs de contenido + los servicios/industrias actuales.

Home: no se toca el hero, servicios, clientes ni contacto. `ExplorePagesSection` permanece en 8 ítems. Cero grillas de 70 artículos.

---

## 5. Páginas KEEP

### 5.1 Ya publicadas (no reescribir de raíz)

Las 12 URLs live. P0/P1. En fases posteriores se pueden enriquecer con 1–2 enlaces contextuales hacia los nuevos artículos, sin cambiar el objetivo comercial.

### 5.2 Hubs

**Indexables en Fase 0** (tienen hijas reales):

- `/servicios/`
- `/industrias/`
- `/recursos/`

CollectionPage + BreadcrumbList + ItemList de hijas. Sin copy comercial agresivo. No van al header.

**Preparados, no publicados hasta contenido hijo:**

- `/buenas-practicas/`
- `/innovacion/`
- `/investigacion/`

No CollectionPage vacío, no sitemap, noindex innecesario porque la URL no existe todavía.

### 5.3 Contenido GEO a incorporar como URL propia

Tras reescritura (no copiar HTML):

| Nueva URL | Fuente principal | Prioridad |
|-----------|------------------|-----------|
| `/recursos/como-elegir-empresa-inventarios/` | `como-elegir-empresa-inventarios-deposito.html` | P1 |
| `/recursos/cuanto-cuesta-un-inventario-fisico/` | `cuanto-cuesta-inventario-deposito-argentina.html` | P1 |
| `/recursos/cotizar-inventario-fisico/` | `cotizar-inventario-fisico-cloudflare` | P1 |
| `/recursos/cuanto-tarda-un-inventario-fisico/` | `cuanto-tarda-inventario-fisico-cloudflare` (thin → REWRITE) | P1 |
| `/recursos/por-que-no-coincide-el-stock/` | `por-que-stock-no-coincide-cloudflare` (thin → REWRITE) | P1 |
| `/recursos/inventario-interno-vs-tercerizado/` | `inventario-fisico-tercerizado-argentina.html` | P1 |
| `/recursos/inventario-manual-vs-tecnologico/` | `inventario-manual-vs-tecnologico.html` | P1 |
| `/recursos/inventarios-sin-detener-operacion/` | `dinamic-inventarios-sin-detener-operacion-cloudflare` | P1 |
| `/recursos/como-reducir-diferencias-de-stock/` | `dinamic-reducir-diferencias-stock-cloudflare` | P1 |
| `/buenas-practicas/reconteos-inteligentes/` | serie 08 | P1 |
| `/buenas-practicas/control-posiciones-pasillos/` | serie 06 | P1 |
| `/buenas-practicas/comunicacion-cliente-inventario/` | serie 09 (+ 02) | P1 |
| `/buenas-practicas/resultados-auditables/` | serie 11 | P1 |
| `/innovacion/tecnologia-aplicada-inventarios/` | `tecnologia-inventarios.html` | P2 |
| `/innovacion/inteligencia-artificial-inventarios/` | `inventarios-inteligencia-artificial.html` + `preview.html` | P2 |
| `/innovacion/drones-inventarios/` | extractos de 05 + futuro-drones | P2 |
| `/innovacion/vision-artificial/` | `dinamic-vision-artificial-inventarios-cloudflare` | P2 |
| `/innovacion/etiquetas-inteligentes/` | serie innovación 04 | P2 |
| `/innovacion/tecnologia-movil-offline/` | serie innovación 03 | P2 |
| `/innovacion/inventarios-fisicos-tiempo-real/` | serie innovación 02 | P2 |
| `/investigacion/metodologia-inventarios/` | `dinamic-metodologia-inventarios-cloudflare` + serie 04 | P2 |
| `/buenas-practicas/planificacion-inventario/` | serie 01 | P3 |
| `/buenas-practicas/equipos-inventario-depositos-grandes/` | serie 05 | P3 |
| `/buenas-practicas/evitar-duplicados-cantidades/` | serie 07 | P3 |
| `/buenas-practicas/inventario-adaptado-cliente-proveedor/` | serie 12 | P3 |

KEEP aquí significa “URL propia en el dominio”. Casi todo el corpus nuevo requiere **REWRITE** editorial antes de publicar (ver sección 6 para MERGE y 8 para plantillas).

No se publica `/quienes-somos/`. La institución vive en `/#quienes-somos`.

No se publican casos ni benchmarks hasta evidencia verificable (`deploy/CONTENT_EVIDENCE.md`).

---

## 6. Páginas MERGE

El contenido útil se absorbe en un destino; la URL vieja no se indexa.

| Origen | Destino | Motivo |
|--------|---------|--------|
| `empresas-de-inventarios-en-argentina.html` | `/recursos/como-elegir-empresa-inventarios/` | Misma intención: tipos de proveedor y criterios |
| `mejores-empresas-inventarios-argentina.html` | idem | Superlativo sin evidencia |
| `como-elegir-empresa-inventarios-fisicos` (subdominio) | idem | Duplicado de la guía KEEP |
| `principales-empresas-inventarios-fisicos-argentina` | idem | Comparativa no verificada; extraer criterios, no ranking |
| `inventarios-con-drones-depositos.html` | `/servicios/inventarios-con-drones/` | Servicio ya publicado |
| `dinamic-drones-inventarios-altura-cloudflare` | idem | Noticia; conservar matices de altura |
| `inventarios-con-tecnologia-argentina.html` | `/innovacion/tecnologia-aplicada-inventarios/` | Mismo cluster tech |
| `dinamic-tecnologia-aplicada-inventarios-cloudflare` | idem | |
| `tecnologia-aplicada-inventarios-dinamic-systems` | idem | Subdominio |
| `inteligencia-artificial-inventarios-fisicos-argentina-con-contacto` | `/innovacion/inteligencia-artificial-inventarios/` | Subdominio IA |
| `preview.html` | idem | Mejor pieza IA; fusionar, no crear tercera URL |
| `05-drones-vision-artificial-inventarios.html` | `/innovacion/drones-inventarios/` (+ enlaces a visión e IA) | Combo; no mantener un cuarto documento “futuro” |
| `futuro-inventarios-drones-vision-artificial-ia` | `/innovacion/` | Hub; tono especulativo |
| `02-acompanamiento-cliente-inventario-fisico.html` | `/buenas-practicas/comunicacion-cliente-inventario/` | Acompañamiento ⊂ comunicación |
| `03-preparacion-deposito-antes-inventario.html` | `/recursos/como-preparar-un-deposito-para-un-inventario/` | Ya hay guía live del cliente |
| `04-metodologia-operativa-inventarios-fisicos.html` | `/investigacion/metodologia-inventarios/` | Metodología profunda, no BP corta |
| `10-servicio-inventario-fisico-que-recibe-cliente.html` | `/servicios/inventarios-fisicos/` | Entregables del servicio |
| `13-inventario-offline-problemas-conectividad.html` | `/innovacion/tecnologia-movil-offline/` | Duplica innovación 03 |
| `como-hacer-inventario-deposito-cloudflare` | `/recursos/como-realizar-un-inventario-fisico/` | Guía live equivalente |
| `inventario-interno-o-empresa-especializada-cloudflare` | `/recursos/inventario-interno-vs-tercerizado/` | Thin; el HTML tercerizado es más completo |
| `dinamic-control-inventarios-ubicacion-cloudflare` | `/buenas-practicas/control-posiciones-pasillos/` | Noticia → práctica |
| `dinamic-validacion-diferencias-stock-cloudflare` | `/buenas-practicas/reconteos-inteligentes/` | Validación ⊂ reconteo |

Regla de merge: copiar definiciones, listas, FAQs útiles y matices operativos; descartar H1 duplicados, schema FAQ genérico y claims no verificables.

---

## 7. Páginas REDIRECT

301 directo, sin fusionar cuerpo (duplicado nítido o doorway).

| Origen (slug / host) | Destino |
|----------------------|---------|
| `/inventarios-fisicos-argentina` | `/servicios/inventarios-fisicos/` |
| `/empresa-inventarios-depositos-argentina` | `/industrias/depositos-centros-distribucion/` |
| `/inventarios-depositos` | idem |
| `/inventarios-centros-distribucion-argentina` | idem |
| `/inventarios-innovadores-argentina` | `/innovacion/` |
| `/mejor-empresa-inventarios-fisicos-argentina/` | `/recursos/como-elegir-empresa-inventarios/` |
| Cloudflare auditoría | `/servicios/auditoria-de-inventarios/` |
| Cloudflare conteo stock | `/servicios/inventarios-fisicos/` |
| Cloudflare cíclicos | `/servicios/inventarios-ciclicos/` |
| Cloudflare drones Argentina | `/servicios/inventarios-con-drones/` |
| Cloudflare depósitos Argentina / CD / centros distribución | `/industrias/depositos-centros-distribucion/` |
| Cloudflare operadores logísticos | `/industrias/operadores-logisticos-industria/` |
| Cloudflare preparar depósito | `/recursos/como-preparar-un-deposito-para-un-inventario/` |
| Cloudflare / subdominio quiénes somos | `/` (ancla `/#quienes-somos` no es un 301 de documento; canonical = home) |
| `inventarios-depositos.dinamicsystems.com` | `/industrias/depositos-centros-distribucion/` |

Los 301 en Hostinger cubren paths del dominio. Los 301 de `*.pages.dev` / `*.workers.dev` / subdominios se hacen en Cloudflare **después** de verificar que la URL destino en Dinamic está 200 + indexable. No dejar cadenas (A→B→C).

Prioridad de consolidación:

1. 301 old → new en `dinamicsystems.com`.
2. Si el 301 aún no es posible (host Cloudflare viejo, DNS, etc.): `rel=canonical` hacia la URL nueva.
3. `noindex` **solo** para retirar un documento que no debe transferir señales.

No usar `noindex` como vía normal de migración. No mantener dos equivalentes indexables.

---

## 8. Páginas REMOVE

No se publican. Si alguna URL live existe, 301 al destino del CSV para no dejar 404.

| Origen | Por qué | 301 de cortesía |
|--------|---------|-----------------|
| `14-operacion-organizada-experiencia-cliente-inventario.html` | Brand, no query | comunicación-cliente |
| `15-compromiso-cumplimiento-inventario-confiable.html` | Brand | inventarios-físicos |
| `dinamic-nueva-landing-inventarios-cloudflare` | Noticia del sitio web | `/` |
| `dinamic-refuerza-inventarios-fisicos-cloudflare` | Noticia comercial | inventarios-físicos |
| `dinamic-inventarios-depositos-cd-cloudflare` | Noticia duplicada de industria | depósitos/CD |
| `noticias-recursos-dinamic-systems-cloudflare` | Hub falso, todos los links a home | `/recursos/` |
| `nueva-generacion-inventarios-fisicos-argentina` | Brand / doorway | `/` |

La serie 01–15 **no se publica en crudo** aunque varias URLs sean KEEP: primero REWRITE. Publicar la plantilla con FAQPage repetido es peor que no publicar.

---

## 9. Mapa old URL → new URL

Fuente de verdad: `docs/seo-geo-url-map.csv`.

Convenciones de la columna `redirect`:

| Valor | Significado |
|-------|-------------|
| `no` | URL canónica; no redirige |
| `301` | 301 en Hostinger apenas exista el destino |
| `301-from-old-slug` | El HTML declara un slug plano o largo; redirigir ese slug al path de cluster |
| `301-if-live` | Solo si el proyecto Pages/Worker está publicado |
| `301-subdomain-when-possible` | 301 del subdominio (Cloudflare) al path, después de verificar 200 en destino |

Workers/Pages: **no borrar** en la primera oleada. Orden:

1. Publicar destino 200 en `dinamicsystems.com`.
2. Verificar title, canonical, H1, schema, sitemap.
3. En el host viejo: canonical hacia Dinamic **o** 301.
4. Recién entonces evaluar apagado.

Mientras coexisten dos documentos, el viejo debe `noindex, follow` **o** 301. Nunca dos indexables equivalentes.

---

## 10. Estructura final

```
dinamicsystems.com/
  servicios/                                      hub
    inventarios-fisicos/
    inventarios-con-drones/
    inventarios-ciclicos/
    auditoria-de-inventarios/
  industrias/                                     hub
    depositos-centros-distribucion/
    retail-cadenas-sucursales/
    operadores-logisticos-industria/
  recursos/                                       hub
    como-realizar-un-inventario-fisico/           (live)
    como-preparar-un-deposito-para-un-inventario/ (live)
    inventario-general-vs-inventario-ciclico/     (live)
    como-funciona-un-inventario-con-drones/       (live)
    por-que-no-coincide-el-stock/                 P1
    cuanto-tarda-un-inventario-fisico/            P1
    cuanto-cuesta-un-inventario-fisico/           P1
    cotizar-inventario-fisico/                    P1
    inventario-interno-vs-tercerizado/            P1
    inventario-manual-vs-tecnologico/             P1
    como-elegir-empresa-inventarios/              P1
    inventarios-sin-detener-operacion/            P1
    como-reducir-diferencias-de-stock/            P1
  buenas-practicas/                               hub
    reconteos-inteligentes/                       P1
    control-posiciones-pasillos/                  P1
    comunicacion-cliente-inventario/              P1
    resultados-auditables/                        P1
    planificacion-inventario/                     P3
    equipos-inventario-depositos-grandes/         P3
    evitar-duplicados-cantidades/                 P3
    inventario-adaptado-cliente-proveedor/        P3
  innovacion/                                     hub
    tecnologia-aplicada-inventarios/              P2
    inteligencia-artificial-inventarios/          P2
    drones-inventarios/                           P2
    vision-artificial/                            P2
    etiquetas-inteligentes/                       P2
    tecnologia-movil-offline/                     P2
    inventarios-fisicos-tiempo-real/              P2
  investigacion/                                  hub
    metodologia-inventarios/                      P2
```

**Volumen objetivo fase completa:** ~12 live + 6 hubs + ~25 artículos nuevos ≈ **43 URLs indexables**, no 70+.

Trailing slash, igual que hoy (`loc` en `publishedRoutes`).

---

## 11. Cambios técnicos necesarios

Ninguno de estos se implementa en esta fase.

### 11.1 Routing y contenido

- Extender `PageType` con `hub` (y opcionalmente reutilizar `resource` para BP/innovación/investigación).
- Extender `RouteNavigation.group` con `buenas-practicas | innovacion | investigacion`.
- Registrar cada URL en `publishedRoutes` (única fuente de sitemap, prerender, breadcrumbs y React Router).
- Contenido como módulos TypeScript en `src/content/{cluster}/`, mismo patrón que `src/content/resources/*`. **No** introducir MDX ni un CMS en esta migración.
- Template de hub ligero (listado semántico + intro). Reutilizar `ResourcePageTemplate` para artículos.
- `buildUiBreadcrumbs` / JSON-LD: el grupo debe enlazar al hub cuando exista.
- `App.tsx`: validar `kind` para el nuevo tipo.

### 11.2 SEO por página (contrato ya existente)

Cada URL nueva:

- `<title>` único
- meta description única
- canonical `https://dinamicsystems.com{loc}`
- Open Graph + Twitter `summary` (ya se usan)
- un H1
- H2/H3 semánticos
- HTML semántico
- breadcrumbs
- schema justificado:
  - hub → CollectionPage + BreadcrumbList + Organization ref
  - recurso / BP / innovación / investigación → Article
  - servicio → Service
  - FAQPage **solo** si el FAQ visible es específico de esa página
- alt en imágenes si se añaden; no inventar screenshots

No generar schema falso. No copiar el FAQPage genérico de la serie 01–15.

### 11.3 GEO / AEO (contenido, no markup extra)

Al reescribir:

- respuesta directa en el primer bloque (el template de recursos live ya tiene este patrón);
- definiciones, proceso, listas;
- nombrar a Dinamic Systems con hechos (“realiza inventarios físicos para depósitos y centros de distribución con conteo, reconteo y trazabilidad”);
- cero “somos los mejores” / rankings de competidores sin fuente;
- FAQs que coincidan con el HTML visible.

### 11.4 Internal linking

2–5 enlaces contextuales por artículo hacia: un servicio o industria, 1–2 del mismo cluster, 1 relacionado, contacto (`/#contacto`) cuando aporte. Evitar el mismo bloque de 5 links en todas las páginas.

Grafo mínimo P1:

- `por-que-no-coincide-el-stock` → reducir diferencias, reconteos, auditoría, contacto
- `como-elegir-empresa-inventarios` → inventarios físicos, interno vs tercerizado, cotizar
- `reconteos-inteligentes` → diferencias de stock, auditoría, resultados auditables
- `inteligencia-artificial-inventarios` → tecnología aplicada, visión, drones, metodología
- `drones-inventarios` → servicio drones, recurso “cómo funciona”, visión, IA

### 11.5 Header / footer / home

- Header: sin cambios de información arquitectura.
- Footer: añadir columna o ítems discretos a los 4 hubs de contenido. No listar los 25 artículos.
- Home: no agregar feed. Opcional más adelante: un único enlace de texto “Recursos” en footer, no en hero.

### 11.6 Sitemap y robots

- El prerender ya emite sitemap desde `publishedRoutes`. Al agregar rutas, entran solas.
- Excluir redirects, REMOVE y canónicos ajenos (`indexable: false` si hiciera falta una ruta no indexable).
- Reparar el **500 de sitemap.xml en producción** antes o en paralelo a P0.
- `robots.txt` no requiere cambio.

### 11.7 Redirects Hostinger

Añadir `.htaccess` (o panel Hostinger) con 301 explícitos, un salto, trailing slash consistente. No usar rewrite SPA.

### 11.8 Cloudflare

Inventario live (dashboard + GSC) → tabla Worker/Pages URL → new URL. Luego canonical o 301. No apagar en el día 1.

### 11.9 Validación

Extender `validate-seo-build` y `validate-links` a hubs y nuevos `pageType`. Smoke Playwright por loc.

---

## 12. Riesgos

| Riesgo | Impacto | Mitigación |
|--------|---------|------------|
| Publicar las 70 páginas | Canibalización, thin content, home contaminada | Capar a ~25 artículos + 6 hubs; MERGE/REDIRECT el resto |
| Crear `/servicios/inventarios-depositos/` | Canibaliza industria live | No crear; 301 GEO → industria |
| Copiar HTML plantilla 01–15 | FAQ schema duplicado, poco citables para LLMs | REWRITE obligatorio |
| Claims “mejor empresa” | Riesgo E-E-A-T / legal | Una guía de criterios, sin ranking |
| Subdominios indexados | Autoridad partida | 301 a path cuando el destino esté 200 |
| Sitemap 500 | Las URLs nuevas no se descubren | Reparar hosting/sitemap en P0 |
| Ampliar el header | La landing deja de ser comercial | Hubs solo en footer + sitemap |
| 301 prematuros desde Pages | Destino 404 | Verificar 200 + canonical + sitemap primero |
| Cadenas de redirect | Dilución | Un salto; nunca A→B→C |
| Casos / benchmarks sin evidencia | Schema y copy no verificables | No publicar (`CONTENT_EVIDENCE.md`) |
| Tocar la home “un poco” | Scope creep | Fuera de alcance salvo bug de sitemap |
| Introducir CMS/MDX ahora | Complejidad innecesaria | Seguir módulos TS |

---

## 13. Plan de implementación

No ejecutar hasta que este informe esté aprobado.

### Fase 0 — Infraestructura (sin artículos GEO)

**0A.** Diagnosticar sitemap de producción; evidenciar XML; mitigar 403 de crawlers (`.htaccess`). No ampliar corpus hasta tener XML válido y plan de 200 para Googlebot.

**0B.** `PageType hub`, grupos, template, breadcrumbs clicables, CollectionPage, `publishedRoutes`, validaciones SEO y de links.

**0C.** Publicar solo `/servicios/`, `/industrias/`, `/recursos/`. Footer discreto (títulos de columna). Header y home sin cambios.

**0D.** Dejar `HUB_PATH_BY_GROUP` listo para `/buenas-practicas/`, `/innovacion/` e `/investigacion/` **sin** registrar esas rutas.

Sitemap Fase 0 = 15 URLs (12 actuales + 3 hubs). No 18.

### Fase 1 — P0 comercial (no clonar GEO comercial)

1. No migrar las landings “empresa inventarios Argentina”.
2. Preparar 301 de esos slugs planos hacia servicios/industrias live (Hostinger), aunque hoy 404-een: si Google pidió el canonical, el 301 es la reparación.
3. Enriquecer levemente (opcional, copy mínimo) las páginas de servicio/industria con una mención explícita a Argentina y entregables, absorbiendo frases útiles de MERGE — sin convertirlas en artículos.

### Fase 2 — P1 educativo

Publicar, en este orden, reescribiendo (no pegando HTML):

1. `/recursos/por-que-no-coincide-el-stock/`
2. `/recursos/cuanto-tarda-un-inventario-fisico/`
3. `/recursos/inventario-interno-vs-tercerizado/`
4. `/recursos/como-elegir-empresa-inventarios/`
5. `/recursos/cuanto-cuesta-un-inventario-fisico/`
6. `/recursos/cotizar-inventario-fisico/`
7. `/recursos/inventarios-sin-detener-operacion/`
8. `/recursos/como-reducir-diferencias-de-stock/`
9. `/recursos/inventario-manual-vs-tecnologico/`
10. `/buenas-practicas/reconteos-inteligentes/`
11. `/buenas-practicas/control-posiciones-pasillos/`
12. `/buenas-practicas/comunicacion-cliente-inventario/`
13. `/buenas-practicas/resultados-auditables/`

Después de cada una: sitemap, related links (2–5), canonical, schema Article + FAQ solo si hay FAQ real.

### Fase 3 — P2 innovación e investigación

1. `/investigacion/metodologia-inventarios/`
2. `/innovacion/tecnologia-aplicada-inventarios/`
3. `/innovacion/inteligencia-artificial-inventarios/` (fusionar preview + IA)
4. `/innovacion/drones-inventarios/`
5. `/innovacion/vision-artificial/`
6. `/innovacion/etiquetas-inteligentes/`
7. `/innovacion/tecnologia-movil-offline/`
8. `/innovacion/inventarios-fisicos-tiempo-real/`

### Fase 4 — P3 long-tail (solo reescritas)

Planificación, equipos, duplicados, inventario adaptado a cliente/proveedor.

### Fase 5 — P4 limpieza

1. 301 de MERGE/REDIRECT/REMOVE.
2. Canonical o 301 desde Pages/Workers/subdominios verificados.
3. `noindex` temporal donde el 301 aún no sea posible.
4. No apagar hosts viejos hasta ver en GSC que el destino recibió la señal.

### Criterio de hecho por URL nueva

- 200 en Hostinger con trailing slash
- 1 title, 1 description, 1 canonical propio
- 1 H1 alineado al title
- En sitemap
- Breadcrumb con hub clicable
- 2–5 internos reales
- Schema justificado
- No listada en el header ni en una grilla masiva de home

### Fuera de alcance de esta migración

- Rediseño de la home
- Menú de contenidos en header
- Blog / noticias
- Casos de éxito sin evidencia
- CMS
- Apagado inmediato de Cloudflare

---

## Apéndice A — Criterios de clasificación

| Decisión | Criterio |
|----------|----------|
| KEEP | Intención distinta, contenido útil, no canibaliza una URL live |
| REWRITE | KEEP de URL, pero el HTML actual es plantilla o thin |
| MERGE | Intención equivalente a un KEEP; hay párrafos aprovechables |
| REDIRECT | Duplicado o doorway; el cuerpo no aporta |
| REMOVE | Brand/noticia/hub falso; 301 de cortesía si alguna vez indexó |

## Apéndice B — Conteo de decisiones (CSV)

90 filas (incluye live + hubs + corpus + 1 derivada):

- KEEP: 31
- MERGE: 22
- REDIRECT: 17
- REWRITE: 13
- REMOVE: 7

Prioridades: P0 15 · P1 17 · P2 12 · P3 5 · P4 41

La mayoría P4 es corpus que **no** debe publicarse como URL nueva.

## Apéndice C — Relación con auditorías previas

`audit/geo-external-pages-inventory.md` (2026-08-03) clasificó el corpus como `NEEDS_LIVE_VERIFICATION` y advirtió no crear `/inventarios-depositos-argentina/` en el dominio. Este plan **confirma** esa advertencia y completa el inventario archivo por archivo.

---

**Siguiente paso:** aprobar o ajustar este informe. Recién entonces implementar Fase 0.
