# Fase 2 — Precheck (contenido educativo P1)

**Fecha:** 2026-10-28  
**Fase 1:** `PHASE_1_CODE_COMPLETE` / `PHASE_1_PROD_PENDING`  
**Redirects Fase 1:** `PENDING_PRODUCTION_VALIDATION` (no bloquea código de Fase 2)  
**Search Console:** `SEARCH_CONSOLE_PENDING_OWNER_DNS_VERIFICATION`  
**No deploy. No Cloudflare. No Fase 3.**

---

## Canibalización previa (URLs ya publicadas)

Se compararon H1, title, summary e intención de las 15 URLs live con las 13 P1 propuestas.

| Nueva URL | Riesgo revisado | Resultado |
|-----------|-----------------|-----------|
| por-qué no coincide el stock | vs inventario físico (servicio) y vs “cómo realizar” | Distinto: diagnóstico de causas, no oferta ni procedimiento de conteo |
| cuánto tarda | vs servicio / cómo realizar | Distinto: variables de duración, sin duración universal |
| interno vs tercerizado | vs elegir empresa | Distinto: make-or-buy vs criterios de proveedor |
| cómo elegir empresa | vs landings “Argentina” (301 P4, no live) y vs servicio | Distinto: criterios, no ranking ni oferta |
| cuánto cuesta | vs cotizar | Distinto: variables de costo vs datos para cotizar |
| cotizar | vs contacto / CTA comercial | Distinto: guía previa; no reemplaza el formulario |
| sin detener operación | vs cíclicos | Distinto: contar con operación activa vs programa periódico de segmentos |
| reducir diferencias | vs por-qué no coincide | Distinto: prevención vs diagnóstico; se enlazan, no se fusionan |
| manual vs tecnológico | vs drones (servicio + recurso) | Distinto: medios de captura en general; drones sigue siendo modalidad |
| reconteos | vs auditoría (servicio) | Distinto: cuándo recontear en un operativo vs servicio de control independiente |
| posiciones y pasillos | vs depósitos (industria) | Distinto: práctica de ubicación vs landing de industria |
| comunicación cliente | vs landings comerciales | Distinto: comunicación operativa del operativo |
| resultados auditables | vs auditoría (servicio) | Distinto: qué hace auditable un resultado vs contratar una auditoría |

**STOP:** no aplica. No hay MERGE pendiente entre P1 nuevas.

---

## Mapa P1

### 1. `/recursos/por-que-no-coincide-el-stock/`

- **Intención:** por qué el stock teórico no coincide con el físico.
- **Keyword/concepto:** diferencias de stock, causas.
- **Fuente principal:** `por-que-stock-no-coincide-cloudflare` (thin → REWRITE total).
- **MERGE:** ninguno P1. Cloudflare no se redirige ahora.
- **Útil:** lista de causas operativas (movimientos, ubicación, unidades, duplicados, conteo, pendientes, sistema, daño, trazabilidad).
- **Descartar:** porcentajes, plantilla GEO, “Se define, ejecuta y verifica”.
- **Overlaps:** enlazar, no copiar, `como-reducir-diferencias-de-stock`.
- **Links:** reducir diferencias, reconteos, auditoría, inventarios físicos.
- **Schema:** Article + FAQ específica.
- **Rewrite:** total.

### 2. `/recursos/cuanto-tarda-un-inventario-fisico/`

- **Intención:** de qué depende la duración.
- **Fuente:** `cuanto-tarda-inventario-fisico-cloudflare` (thin → REWRITE total).
- **Útil:** variables (SKU, ubicaciones, tamaño, layout, preparación, tecnología, operadores, reconteo, operación detenida vs activa).
- **Descartar:** duraciones universales, números inventados.
- **Overlaps:** cotizar / costo (factores distintos).
- **Links:** inventarios físicos, preparar depósito, sin detener, cotizar.
- **Schema:** Article + FAQ.
- **Rewrite:** total.

### 3. `/recursos/inventario-interno-vs-tercerizado/`

- **Intención:** comparar ejecución interna vs contratada, sin ganador automático.
- **Fuente:** `inventario-fisico-tercerizado-argentina.html`.
- **MERGE:** `inventario-interno-o-empresa-especializada-cloudflare` (thin; no 301 Cloudflare ahora).
- **Útil:** pros/contras y criterios de decisión.
- **Descartar:** “tercerizar siempre es mejor”, rankings, % .
- **Overlaps:** cómo elegir empresa.
- **Links:** elegir empresa, inventarios físicos, cotizar.
- **Schema:** Article + FAQ.
- **Rewrite:** total (fuente como material, no HTML publicable).

### 4. `/recursos/como-elegir-empresa-inventarios/`

- **Intención:** criterios para elegir un proveedor. No ranking.
- **Fuente:** `como-elegir-empresa-inventarios-deposito.html`.
- **MERGE (contenido, no 301 ahora):** empresas-de-inventarios-en-argentina, mejores-empresas, principales-empresas (criterios; descartar superlativos). 301 de esos slugs = P4.
- **Útil:** experiencia, metodología, trazabilidad, reconteo, tecnología, cobertura, reportes, diferencias, referencias verificables, seguridad, adaptación.
- **Descartar:** “mejores empresas”, competidores, claims no verificables.
- **Dinamic:** ejemplo de cómo aplicar criterios, no ganadora automática.
- **Links:** inventarios físicos, interno vs tercerizado, cotizar.
- **Schema:** Article + FAQ.
- **Rewrite:** total.

### 5. `/recursos/cuanto-cuesta-un-inventario-fisico/`

- **Intención:** de qué depende el costo. Sin precios.
- **Fuente:** `cuanto-cuesta-inventario-deposito-argentina.html`.
- **Útil:** variables de costo.
- **Descartar:** ranges no documentados, precios, “barato/caro”.
- **Links:** cotizar, cuánto tarda, inventarios físicos.
- **Schema:** Article + FAQ.
- **Rewrite:** total.

### 6. `/recursos/cotizar-inventario-fisico/`

- **Intención:** qué datos hacen falta para cotizar. Guía previa al contacto.
- **Fuente:** `cotizar-inventario-fisico-cloudflare`.
- **Útil:** ubicación, tamaño, posiciones, SKU, unidades, layout, horarios, sedes, tecnología, entregables, restricciones.
- **Descartar:** formulario duplicado, precios.
- **Links:** cuánto cuesta, inventarios físicos, elegir empresa.
- **Schema:** Article + FAQ.
- **Rewrite:** total.

### 7. `/recursos/inventarios-sin-detener-operacion/`

- **Intención:** cuándo se puede contar con operación activa y qué riesgos hay.
- **Fuente:** `dinamic-inventarios-sin-detener-operacion-cloudflare`.
- **Útil:** ventanas, zonas, congelamiento lógico, movimientos, doble conteo, reconciliación.
- **Descartar:** promesa de que siempre es posible.
- **Links:** cuánto tarda, cíclicos, inventarios físicos.
- **Schema:** Article + FAQ.
- **Rewrite:** total.

### 8. `/recursos/como-reducir-diferencias-de-stock/`

- **Intención:** prevención y disciplina operativa.
- **Fuente:** `dinamic-reducir-diferencias-stock-cloudflare`.
- **Útil:** recepción, despacho, transferencias, unidades, ubicaciones, cíclicos, reconteos, análisis de causas.
- **Descartar:** duplicar el artículo de causas.
- **Links:** por-qué no coincide (fuerte), reconteos, cíclicos.
- **Schema:** Article + FAQ.
- **Rewrite:** total.

### 9. `/recursos/inventario-manual-vs-tecnologico/`

- **Intención:** comparar medios de captura (papel, planilla, lector, móvil, QR, visión cuando aplica).
- **Fuente:** `inventario-manual-vs-tecnologico.html`.
- **Útil:** límites de cada medio; proceso + control siguen siendo necesarios.
- **Descartar:** tecnología como solución mágica; no absorber IA/OCR profundo (Fase 3).
- **Links:** inventarios físicos, cómo funciona drones, reconteos.
- **Schema:** Article + FAQ.
- **Rewrite:** total.

### 10. `/buenas-practicas/reconteos-inteligentes/`

- **Intención:** cuándo recontear y por qué no recontear todo.
- **Fuente:** serie 08. MERGE copy: `dinamic-validacion-diferencias-stock-cloudflare` (no 301 Cloudflare).
- **Útil:** disparadores, priorización, trazabilidad, cierre. Sin thresholds universales.
- **Links:** reducir diferencias, auditoría, resultados auditables.
- **Schema:** Article + FAQ.
- **Rewrite:** total.

### 11. `/buenas-practicas/control-posiciones-pasillos/`

- **Intención:** control posicional (pasillo, nivel, pallet, lote).
- **Fuente:** serie 06. MERGE copy: `dinamic-control-inventarios-ubicacion-cloudflare`.
- **Útil:** relación con errores de stock y duplicados.
- **Links:** por-qué no coincide, depósitos, reducir diferencias.
- **Schema:** Article + FAQ.
- **Rewrite:** total.

### 12. `/buenas-practicas/comunicacion-cliente-inventario/`

- **Intención:** comunicación operativa real del inventario.
- **Fuente:** serie 09. MERGE: serie 02 (acompañamiento ⊂ comunicación).
- **Útil:** preparación, responsables, incidencias, diferencias, avances, cierre, entregables.
- **Descartar:** tono corporativo vacío, serie 14 brand.
- **Links:** inventarios físicos, resultados auditables, preparar depósito.
- **Schema:** Article + FAQ.
- **Rewrite:** total.

### 13. `/buenas-practicas/resultados-auditables/`

- **Intención:** qué hace auditable un inventario (origen del dato, operador, ubicación, conteo/reconteo, cambios, exportables).
- **Fuente:** serie 11.
- **Descartar:** capacidades de sistema no verificadas en el proyecto; no duplicar la landing de auditoría.
- **Links:** auditoría, reconteos, inventarios físicos.
- **Schema:** Article + FAQ.
- **Rewrite:** total.

---

## Hub `/buenas-practicas/`

Antes: no publicado, 404, fuera de sitemap (`FUTURE_HUB_GROUPS`).  
Después: CollectionPage indexable con 4 hijas reales. Footer discreto (heading). No header.

## Hub `/recursos/`

Ya existe. El listado debe salir de `childRoutesForGroup('recursos')` para incorporar las 9 nuevas sin clonar cards a mano.

## Fuera de alcance

- 301 de slugs P4 / Cloudflare / subdominios.
- Innovación / investigación.
- Home, header, GSC, Cloudflare.
- Precios, %, casos, rankings.
- Fase 3.
