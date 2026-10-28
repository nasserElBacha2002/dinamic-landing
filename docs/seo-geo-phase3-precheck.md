# Fase 3 — Precheck (innovación, investigación, long-tail)

**Fecha:** 2026-10-28  
**Fase 2:** `PHASE_2_CODE_COMPLETE` (con endurecimiento editorial)  
**Fase 1 producción:** `PENDING_PRODUCTION_VALIDATION`  
**Deploy:** `DEPLOY_DEFERRED_UNTIL_PHASE_4`  
**Search Console:** `SEARCH_CONSOLE_PENDING_OWNER_DNS_VERIFICATION`  
**Cloudflare:** `UNCHANGED`  

No deploy. No DNS. No sitemap live. No GSC.

---

## Canibalización previa (cruces críticos)

| Par | Diferencia | Decisión |
|-----|------------|----------|
| Drones servicio / recurso / innovación | Contratación vs funcionamiento vs evolución/integración técnica | KEEP las tres, con sección “qué no es esta página” en innovación |
| IA vs visión | Procesamiento/clasificación vs captura e interpretación de imagen | KEEP ambas |
| Tecnología aplicada vs manual vs tecnológico | Pilar del stack vs comparación de medios de captura | KEEP ambas |
| Metodología vs planificación | Ciclo completo del dato vs diseño previo del operativo | KEEP ambas |
| Resultados auditables vs metodología | Cualidad del rastro vs procedimiento entero | KEEP ambas |
| Etiquetas vs posiciones | Identificación del ítem/hueco vs control de pasillo/nivel/pallet | KEEP ambas |
| Tiempo real vs sin detener operación | Significado del “en vivo” vs contar con el predio activo | KEEP ambas |
| Equipos grandes vs planificación | Dotación y supervisión vs diseño general | KEEP ambas |
| Duplicados vs diferencias / reconteos | Cómo se produce el doble conteo vs diagnóstico y vs cuándo recontear | KEEP, con links |

No hay STOP. No se publican benchmarks, casos ni %.

---

## Innovación

### `/innovacion/tecnologia-aplicada-inventarios/` — KEEP / REWRITE

- **Intención:** pilar: qué tecnologías intervienen en un inventario y cómo se relacionan.
- **Fuente:** `tecnologia-inventarios.html` + MERGE `inventarios-con-tecnologia-argentina.html`, Cloudflare tech (contenido, no 301).
- **Útil:** captura digital, códigos, QR, móvil, trazabilidad, validación, OCR, visión, drones, offline, sincronización — a vuelo de pájaro.
- **Descartar:** superlativos, “ecosistema propio garantiza”, brochure.
- **FAQ:** no. El cuerpo ya es un mapa.
- **Links:** IA, visión, mobile/offline, inventarios físicos.
- **Evidencia:** ninguna cifra. Dinamic usa captura digital y drones cuando el sitio lo permite; no se listan productos innombrables.

### `/innovacion/inteligencia-artificial-inventarios/` — KEEP / REWRITE

- **Intención:** usos posibles de IA en el procesamiento de un inventario.
- **Fuente:** `inventarios-inteligencia-artificial.html` + `preview.html` (fusionar). MERGE subdominio IA (no 301 ahora).
- **Útil:** clasificación, asistencia a lectura, validación, detección de inconsistencias, ayuda al procesamiento. Distinguir de OCR y de visión.
- **Descartar:** “elimina errores”, “automatización total”, futuro especulativo.
- **FAQ:** 1, diferencia IA vs visión.
- **Links:** visión, drones, metodología.

### `/innovacion/drones-inventarios/` — KEEP / REWRITE

- **Intención:** evolución e integración técnica del relevamiento aéreo.
- **Fuente:** serie 05 + `futuro-inventarios-drones-vision-artificial-ia` (extraer límites, no tono especulativo).
- **Qué no es:** no es la landing de contratación ni la guía de funcionamiento.
- **FAQ:** 1, diferencia vs servicio y vs recurso.
- **Links:** servicio drones, recurso cómo funciona, visión.

### `/innovacion/vision-artificial/` — KEEP / REWRITE

- **Intención:** captura de imagen, detección, lectura, asociación a ubicación, validación humana, límites.
- **Fuente:** `dinamic-vision-artificial-inventarios-cloudflare`.
- **Descartar:** visión = inventario completo.
- **FAQ:** 1, no reemplaza el conteo.
- **Links:** IA, drones, tecnología aplicada.

### `/innovacion/etiquetas-inteligentes/` — KEEP / REWRITE

- **Intención:** identificación ítem/ubicación (códigos, etiquetas impresas, QR). No RFID/NFC si no está documentado en el proyecto.
- **Fuente:** serie innovación 04.
- **FAQ:** no.
- **Links:** posiciones, tecnología aplicada, duplicados.

### `/innovacion/tecnologia-movil-offline/` — KEEP / REWRITE

- **Intención:** captura sin red, almacén local, sincronización posterior, límites. Sin garantías absolutas.
- **Fuente:** serie 03 + MERGE serie 13.
- **FAQ:** 1, qué se pierde si no sincroniza.
- **Links:** tecnología aplicada, tiempo real, inventarios físicos.

### `/innovacion/inventarios-fisicos-tiempo-real/` — KEEP / REWRITE

- **Intención:** definir “tiempo real” sin prometer sync instantánea.
- **Fuente:** serie innovación 02.
- **Distinguir:** captura durante operación ≠ update cercano al evento ≠ inventario continuo ≠ ERP/WMS ≠ consolidación posterior.
- **FAQ:** 1, definición.
- **Links:** mobile/offline, metodología, sin detener.

**Hub `/innovacion/`:** activar. CollectionPage. No header. Footer discreto.

---

## Investigación

### `/investigacion/metodologia-inventarios/` — KEEP / REWRITE

- **Intención:** ciclo metodológico completo (preparación → entregable). Contenido más denso del sitio.
- **Fuente:** `dinamic-metodologia-inventarios-cloudflare` + serie 04.
- **Descartar:** “metodología patentada”, certificación no documentada, plantilla “se define, ejecuta y verifica”.
- **FAQ:** 1, no es una certificación.
- **Links:** planificación, reconteos, posiciones, resultados auditables.
- **Hub `/investigacion/`:** activar con esta única hija real (ItemList de 1). No crear benchmarks.

---

## Long-tail (ex P3)

### `/buenas-practicas/planificacion-inventario/` — KEEP / REWRITE

- **Intención:** diseño del operativo (alcance, zonas, calendario, personal, layout, stock en movimiento, responsables).
- **No duplicar:** preparar depósito = acondicionamiento del sitio.
- **FAQ:** 1, diferencia vs preparar depósito.
- **Links:** preparar depósito, metodología, inventarios físicos.

### `/buenas-practicas/equipos-inventario-depositos-grandes/` — KEEP / REWRITE

- **Intención:** dimensionar y coordinar equipos en predios grandes. Sin ratios universales.
- **FAQ:** no.
- **Links:** planificación, inventarios físicos, depósitos.

### `/buenas-practicas/evitar-duplicados-cantidades/` — KEEP / REWRITE

- **Intención:** cómo se produce y se corta el doble conteo / cantidad mal capturada.
- **FAQ:** no.
- **Links:** posiciones, diferencias, reconteos.

### `/buenas-practicas/inventario-adaptado-cliente-proveedor/` — KEEP / REWRITE

- **Intención:** adaptación operativa (formatos, etiquetas, reglas, layout, códigos, restricciones). No “flexibilidad” de marketing.
- **FAQ:** no.
- **Links:** comunicación, planificación, operadores.

**Hub BP:** 8 hijas, agrupadas: planificación / ejecución / control y cierre.

---

## Fuera de alcance

301 Cloudflare, subdominios, GSC, DNS, Hostinger, header, home, casos, %.
