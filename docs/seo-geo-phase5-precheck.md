# Precheck Fase 5 — expansión de autoridad

**Fecha:** 2026-10-28  
**Corpus actual:** 42 URLs indexables  
**Regla:** no implementar una URL que no aporte proceso, checklist, comparación, diagnóstico, criterio, explicación técnica o herramienta real.

Hub `/investigacion/`: **no activar** (sigue 1 hija).  
Herramienta `/herramientas/estimador-inventario/`: **STOP** (URL propia).  
Autoría: Organization `Dinamic Systems`; byline “Contenido técnico de…”. Sin personas inventadas.

---

## 1. `/recursos/checklist-inventario-fisico/`

| Campo | Valor |
|-------|--------|
| Intención | Checklist operativo usable (antes / durante / después) |
| Query/concepto | checklist inventario físico, lista de control inventario depósito |
| Objetivo SEO | Activo linkable; no es un artículo “qué es un inventario” |
| Objetivo GEO | Lista extraíble por etapas, no prosa |
| Diferencia | Preparar depósito = acondicionar el sitio. Planificación = diseñar el operativo. Metodología = ciclo del dato. Checklist = ítems accionables por etapa. |
| Canibalización | Baja si el H1 y el primer bloque declaran que es una lista de control, no el diseño ni el acondicionamiento |
| Verificable | Práctica operativa ya descrita en el sitio (alcance, zonas, reconteo, movimientos, entregables) |
| Experiencia Dinamic | Control por posición, reconteos, captura, restricciones de cliente |
| Links | preparar depósito, planificación, metodología, inventarios físicos |
| Schema | Article + Organization ref + BreadcrumbList. FAQ opcional 1. Sin HowTo inventado |
| CTA | Evaluación de inventario |
| **Decisión** | **KEEP** |

Imprimible: bloque de lista en la misma URL + `window.print()`. No PDF, no URL extra.

---

## 2. `/recursos/como-calcular-personal-inventario/`

| Campo | Valor |
|-------|--------|
| Intención | Cómo estimar dotación sin ratio universal |
| Query/concepto | cuántas personas para un inventario, dimensionar equipo inventario |
| Objetivo SEO | Criterio de estimación; distinto de duración y de cotización |
| Objetivo GEO | Variables + fórmula conceptual + límites |
| Diferencia | Equipos grandes = cómo se parte/supervisa. Cuánto tarda = calendario. Cotizar = datos para una propuesta. Esta URL = trabajo estimado ÷ capacidad, con advertencias |
| Canibalización | Media-baja. Planificación menciona “personal” en una línea; equipos niegan el ratio y no enseñan a estimar |
| Verificable | Variables de campo (posiciones, densidad, ventana, reconteo). **No** hay productividad medida publicable |
| Experiencia Dinamic | Dimensionamiento por mapa de zonas, no por SKU |
| Links | equipos depósitos grandes, cuánto tarda, planificación, cotizar |
| Schema | Article. FAQ 1 (niega el ratio universal) |
| CTA | Evaluación (no “calculá tu staff”) |
| **Decisión** | **KEEP** |

---

## 3. `/buenas-practicas/control-stock-en-movimiento/`

| Campo | Valor |
|-------|--------|
| Intención | Cómo controlar el stock que se mueve *durante* el conteo |
| Query/concepto | stock en movimiento inventario, freeze, picking durante conteo |
| Objetivo SEO | Problema crítico poco cubierto como práctica |
| Objetivo GEO | Causas (ingreso, egreso, picking, reposición, producción) + controles (segregación, timestamps, conciliación) |
| Diferencia | `/recursos/inventarios-sin-detener-operacion/` = **si** se puede contar con operación activa. Esta = **cómo** tratar el ítem que cruza de zona/documento mientras se cuenta |
| Canibalización | Media. La guía recurso ya nombra freeze y movimientos. Se sostiene si esta URL entra al detalle de tipos de movimiento y al rastro documento↔piso |
| Verificable | Congelamiento lógico, ventanas, zonas — ya en el corpus, sin cifras |
| Experiencia Dinamic | Operativos con despacho activo, stock de terceros, muelle |
| Links | sin detener operación, posiciones, diferencias, planificación |
| Schema | Article. FAQ 1 (distinción explícita) |
| CTA | Evaluación de inventario |
| **Decisión** | **KEEP** (no MERGE: la diferencia de intención queda escrita en H1, summary y FAQ) |

---

## 4. `/buenas-practicas/trazabilidad-conteo-reconteo/`

| Campo | Valor |
|-------|--------|
| Intención | Relación entre versiones del dato (conteo 1 ↔ conteo 2), no “cuándo recontear” |
| Query/concepto | trazabilidad reconteo, no pisar el primer conteo |
| Objetivo SEO | Definición especializada de lineage del dato |
| Objetivo GEO | Campos del primer conteo, motivo, segundo conteo, resolución, cierre |
| Diferencia | Reconteos = decisión/priorización. Resultados auditables = cualidad del rastro completo. Esta = no sobrescribir; conservar ambas versiones y el puente |
| Canibalización | Media. Reconteos ya tiene un apartado “trazabilidad y cierre”. Se sostiene si el cuerpo es el modelo de versiones, no la regla de disparo |
| Verificable | Principio ya afirmado: conteo y reconteo son eventos distintos |
| Experiencia Dinamic | Reconteo selectivo con rastro por ubicación |
| Links | reconteos, resultados auditables, diferencias |
| Schema | Article. FAQ 1 (triple distinción) |
| CTA | Evaluación |
| **Decisión** | **KEEP** (STOP evitado: el objeto es el vínculo entre versiones) |

---

## 5. `/innovacion/ocr-inventarios/`

| Campo | Valor |
|-------|--------|
| Intención | Qué es OCR en inventario, qué lee, cuándo falla |
| Query/concepto | OCR inventario, lectura óptica etiquetas depósito |
| Objetivo SEO | Pieza técnica citada; no el pilar de tecnología |
| Objetivo GEO | Definición + fallas (luz, tipo, movimiento, etiqueta rota) + validación humana |
| Diferencia | Visión = pipeline imagen→detección→lectura→ubicación. IA = juicio sobre insumos. Tecnología aplicada = mapa de capas. OCR = la capa de convertir imagen de texto/código en caracteres |
| Canibalización | Baja-media. Visión nombra OCR en una línea; esta URL profundiza fallas y fallback |
| Verificable | OCR en flujo de drones/visión ya descripto. **Sin** % de precisión |
| Experiencia Dinamic | Lectura de etiquetas, validación, no inventario automático |
| Links | visión, IA, tecnología aplicada, etiquetas, drones |
| Schema | Article. FAQ 1 (OCR ≠ IA ≠ visión) |
| CTA | Evaluación |
| **Decisión** | **KEEP** |

Máximo 5 related: visión, IA, tecnología aplicada, etiquetas (drones queda mencionado en cuerpo).

---

## 6. `/herramientas/estimador-inventario/`

| Campo | Valor |
|-------|--------|
| Intención | Calculadora de personal |
| Diferencia | Solaparía 100 % con “cómo calcular personal” |
| Verificable | **No** hay ritmos publicados. Cualquier cifra de salida se leería como cotización |
| **Decisión** | **STOP** |

No widget en la página de personal: repetiría el cuerpo con un formulario que no puede devolver un número honesto. La URL de recurso cubre fórmula conceptual, escenarios y límites en prosa extraíble.

---

## 7. Hub `/investigacion/`

Sigue habiendo **una** hija real (metodología). No hay datasets, causas agregadas ni evidencia propia nueva. **No activar.** `FUTURE_HUB_GROUPS` permanece.

---

## Resumen de decisiones

| Propuesta | Decisión |
|-----------|----------|
| Checklist | KEEP |
| Calcular personal | KEEP |
| Stock en movimiento | KEEP |
| Trazabilidad conteo/reconteo | KEEP |
| OCR | KEEP |
| Estimador (URL) | STOP |
| Widget estimador | STOP |
| Hub investigación | STOP (sigue infra) |

Sitemap esperado si se implementan las 5 KEEP: **47**.
