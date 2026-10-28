# Fase 1 — Precheck

**Fecha:** 2026-10-28  
**Alcance:** consolidación comercial sobre URLs live. Sin Fase 2. Sin Cloudflare.  
**Search Console:** PENDING_OWNER_DNS_VERIFICATION (GoDaddy TXT). No se usa como evidencia.

---

## Fase 0 intacta (producción, 2026-10-28)

| Chequeo | Resultado |
|---------|-----------|
| Sitemap live HTTP 200 | Sí, XML, 15 URLs |
| `/servicios/`, `/industrias/`, `/recursos/` | 200, canonical propio |
| Home sin GEO | Sí |
| Header comercial | Inicio, Quiénes Somos, Servicios, Industrias, Contacto |
| Hubs futuros | 404, fuera de sitemap |
| GEO no migrada | Sí |

---

## Contradicción plan vs CSV

| Tema | CSV | Plan / brief Fase 1 | Resolución |
|------|-----|---------------------|------------|
| Prioridad de slugs planos (`/inventarios-fisicos-argentina`, `/inventarios-depositos`, etc.) | **P4** | Brief los pide ahora; el plan Fase 1 decía “preparar 301” | Se implementan **301 internos** en Hostinger porque la **decisión** CSV es REDIRECT/MERGE al destino live. La prioridad P4 se adelanta solo para paths del dominio principal. |
| `research.dinamicsystems.com` | P0 KEEP → `/investigacion/` | No tocar hosts externos | **No se toca.** |
| MERGE a `/recursos/como-elegir-empresa-inventarios/` | P4, destino aún no publicado | No iniciar Fase 2 | **No redirect.** El destino no existe. |
| MERGE/REDIRECT Cloudflare / subdominios | `301-if-live` / `301-subdomain-when-possible` | Excepción: no Cloudflare | **No se toca.** |

Fuente de verdad para **KEEP / MERGE / REDIRECT / destino:** CSV.  
Este brief manda **cuándo** ejecutar 301 internos hacia URLs **ya live**.

---

## URLs destino (solo las 7 live)

### `/servicios/inventarios-fisicos/`

| Rol | Fuente | Notas |
|-----|--------|-------|
| KEEP | landing live | Base comercial |
| MERGE copy | `10-servicio-inventario-fisico-que-recibe-cliente.html` | Entregables: plan, ejecución, validación, informe |
| REDIRECT | `/inventarios-fisicos-argentina` | Duplicado comercial “Argentina” |
| REDIRECT (MERGE CSV) | `/buenas-practicas/servicio-inventario-fisico-que-recibe-cliente` | Destino live; no se publicará como BP |
| REDIRECT (REMOVE CSV) | `/buenas-practicas/compromiso-cumplimiento-inventario-confiable` | Brand; 301 al servicio |
| No tocar | Cloudflare `conteo-stock`, `refuerza-inventarios` | Host externo |
| Descartado | Rankings, “los mejores”, plantilla repetida de 15, claims de % | |

**Reutilizable:** conteo por ubicación, reconteo, trazabilidad, reportes, Argentina, tipos de operación (depósito/CD, retail, logística).  
**Riesgo:** no convertirla en guía “cómo hacer un inventario” (eso es `/recursos/como-realizar-un-inventario-fisico/`).

### `/servicios/inventarios-con-drones/`

| Rol | Fuente |
|-----|--------|
| KEEP | landing live |
| MERGE copy | `inventarios-con-drones-depositos.html` (condiciones, altura, integración) |
| REDIRECT | `/inventarios-con-drones-depositos` |
| Fase 3 / no absorber | IA, OCR profundo, `05-drones-vision-artificial`, `/recursos/como-funciona-un-inventario-con-drones/` (KEEP P1) |
| No tocar | Cloudflare drones |

**Riesgo:** canibalizar el recurso educativo o innovación. La landing vende la modalidad; el recurso explica el mecanismo.

### `/servicios/inventarios-ciclicos/`

| Rol | Fuente |
|-----|--------|
| KEEP | landing live |
| MERGE | no hay HTML de dominio principal equivalente |
| No tocar | Cloudflare `inventarios-ciclicos-argentina` |
| Separar | `/recursos/inventario-general-vs-inventario-ciclico/` (KEEP P1) |

**Cambio:** copy de servicio + FAQ; enlace al recurso. Sin redirect educativo.

### `/servicios/auditoria-de-inventarios/`

| Rol | Fuente |
|-----|--------|
| KEEP | landing live |
| MERGE | no hay HTML de dominio principal equivalente |
| No tocar | Cloudflare `auditoria-inventarios-argentina` |
| No absorber aún | reconteos/resultados auditables/metodología como artículos BP |

### `/industrias/depositos-centros-distribucion/`

Canónica para depósitos, CD, “empresa de inventarios para depósitos”. **No** crear `/servicios/inventarios-depositos/`.

| Rol | Fuente |
|-----|--------|
| KEEP | landing live |
| MERGE copy | `empresa-inventarios-depositos-argentina.html`, `inventarios-depositos.html`, `inventarios-centros-distribucion-argentina.html` |
| REDIRECT | `/empresa-inventarios-depositos-argentina`, `/inventarios-depositos`, `/inventarios-centros-distribucion-argentina` |
| No tocar | subdominio `inventarios-depositos.dinamicsystems.com`, Cloudflare CD |

**Riesgo:** no competir con `/servicios/inventarios-fisicos/` (servicio vs operación).

### `/industrias/retail-cadenas-sucursales/`

KEEP live. Sin MERGE de dominio principal. Ajuste leve Argentina + AEO. Sin redirects nuevos.

### `/industrias/operadores-logisticos-industria/`

KEEP live. Sin MERGE de dominio principal. Ajuste leve Argentina + AEO. Cloudflare operadores: no tocar.

---

## Redirects internos a implementar (Hostinger)

Un salto, destino `loc` con trailing slash. Variantes `path`, `path/`, `path.html`.

| old_url | new_url | CSV |
|---------|---------|-----|
| `/inventarios-fisicos-argentina` | `/servicios/inventarios-fisicos/` | REDIRECT |
| `/inventarios-con-drones-depositos` | `/servicios/inventarios-con-drones/` | MERGE |
| `/empresa-inventarios-depositos-argentina` | `/industrias/depositos-centros-distribucion/` | REDIRECT |
| `/inventarios-depositos` | `/industrias/depositos-centros-distribucion/` | REDIRECT |
| `/inventarios-centros-distribucion-argentina` | `/industrias/depositos-centros-distribucion/` | REDIRECT |
| `/buenas-practicas/servicio-inventario-fisico-que-recibe-cliente` | `/servicios/inventarios-fisicos/` | MERGE |
| `/buenas-practicas/compromiso-cumplimiento-inventario-confiable` | `/servicios/inventarios-fisicos/` | REMOVE |

Hoy todas 404 en el dominio (Hostinger default). El 301 repara slugs que Google pudo pedir.

**Fuera de alcance:** cualquier `*.pages.dev`, `*.workers.dev`, subdominio, MERGE a URLs no publicadas.

---

## Cambios de copy propuestos

- Enriquecer, no reescribir.
- Argentina en summary / primer bloque / FAQ, sin stuffing.
- FAQ visible (AEO) en las 7 landings.
- Related 2–5, comerciales, no clones.
- Title/description únicos; canonical propio.
- Home, header, ExplorePagesSection, footer de Fase 0: sin cambios de estructura.
