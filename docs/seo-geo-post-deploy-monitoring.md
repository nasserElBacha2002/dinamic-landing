# Monitoreo post-deploy SEO/GEO — Dinamic Systems

**Search Console:** `PENDING_OWNER_DNS_VERIFICATION` (no usar GSC como evidencia hasta verificar el dominio).  
**Cloudflare:** `MAPPED_NOT_EXECUTED`.  
**Fecha:** 2026-10-28  

Este plan aplica **después** del upload a Hostinger. No se ejecuta ahora.

---

## 24–72 h

- Sitemap leído (cuando GSC esté verificado). Hasta entonces: `curl` + User-Agent de bots sobre `sitemap.xml` y `robots.txt`.
- Errores 404/5xx en URLs del sitemap (42).
- `/investigacion/` debe ser 404, no 200.
- Redirects: una muestra Fase 1 y una Fase 4; un salto; destino con trailing slash.
- Negativo: `/inventarios-depositos-algo` no redirige.
- Canonical self en home, un hub, un servicio, metodología.
- `robots.txt` Allow `/` + Sitemap canónico.
- Header/home comerciales (sin Innovación/Investigación/Recursos/BP en header).

---

## 1–2 semanas

Si GSC ya está verificado:

- URLs descubiertas vs 42 del sitemap.
- URLs indexadas (no esperar 42/42).
- Queries iniciales: inventarios físicos, drones, depósitos, diferencias de stock.
- Duplicados: fuentes 301 no deben aparecer como canónicas.
- `/investigacion/` no debe indexarse. Si aparece, dejar que el 404 la saque; no crear el hub.

---

## 4–8 semanas

- Impresiones, clics, posición media por URL.
- Páginas con 0 impresiones: revisar enlaces internos, no crear URLs nuevas para “rellenar”.
- Consultas compartidas entre URLs del mismo cluster.

### Cluster drones (atención especial)

URLs:

| URL | Intención |
|-----|-----------|
| `/servicios/inventarios-con-drones/` | Contratación / modalidad |
| `/recursos/como-funciona-un-inventario-con-drones/` | Cómo funciona el vuelo |
| `/innovacion/drones-inventarios/` | Integración técnica y límites |

Si las tres capturan las mismas consultas durante 4–8 semanas:

1. Confirmar en GSC (consultas × página).
2. Evaluar **MERGE** de innovación → recurso o servicio, según qué query gane.
3. No fusionar preventivamente: hoy title/H1/summary están diferenciados.

---

## Otros clusters a vigilar

- IA vs visión.
- Tecnología aplicada vs manual/tecnológico.
- Metodología vs planificación.
- Resultados auditables vs metodología.
- Etiquetas vs posiciones.
- Tiempo real vs inventario sin detener operación.
- Costo vs cotización.
- Diagnóstico de diferencias vs reducción de diferencias.

---

## Cloudflare / subdominios

No apagar nada en las primeras 72 h del deploy de Dinamic.

Cuando las URLs destino estén indexables en el dominio principal, ejecutar el mapa `docs/seo-geo-external-consolidation-map.csv` fila por fila (`safe_to_execute` pasa a sí sólo con destino 200 en producción y control del host).

KEEP_EXTERNAL = 0 en el mapa actual. Si un host resulta tener contenido único no cubierto, documentar la excepción antes de 301.
