# Validación final — Landing principal Etapas 1 y 2

**Fecha:** 2026-08-03  
**Commits:** `b218144` + `2d1274e`  
**Base previa:** `284dd42`

---

## 1. Comandos ejecutados

| Comando | Resultado | Observaciones |
|---------|-----------|---------------|
| `npm run typecheck` | PASS | Node 22.14.0 |
| `npm run build:validated` | PASS | prerender + SEO + links |
| `npm run test:ssg-smoke` | PASS | 6/6 (~11–15s) |
| `npx playwright test --list` | PASS | 6 tests listados |
| Verificación HTML `dist/index.html` | PASS | title, H1, bloques, orden, sin claims prohibidos |

Primera corrida de smoke falló por Chromium ausente; se instaló con `npx playwright install chromium` y se re-ejecutó con éxito.

## 2. Checks HTML (sin JS)

- Title correcto  
- Description con Argentina / depósitos / reconteos  
- 1× H1  
- Bloque depósitos + diferencias + tech presentes  
- `id="metodologia"` / `depositos` / `diferencias` antes de `tecnologia`  
- Sin «Consultoría», «Expertos en», «Eliminamos discrepancias», «garantiza precisión»  
- Sin «autónomos» en `<head>`

## 3. Rendimiento (antes → después)

| Métrica | Antes (audit) | Después |
|---------|---------------|---------|
| JS bundle | ~764–783 KB | **754 KB** (`index-eDqdEys_.js`) |
| CSS | ~214–219 KB | **208 KB** |
| `drone-warehouse.png` en dist | sí (~280 KB) | **no** (sección retirada) |
| PNG en `dist/assets` | más | **19** (logos + hero + about + auditoria) |
| Preloads agresivos | reportados | no optimizados de fondo (pendiente) |
| dist total | ~9.0 MB | **8.7 MB** |

No se agregaron librerías. Lazy load en About + imagen tech.

## 4. Accesibilidad (inspección código + smoke)

- Un H1  
- Cards servicios = `Link` + `aria-label` + `ds-focus-ring`  
- `prefers-reduced-motion` en motion existentes  
- Formulario sin regresiones (smoke)  
- Drawer móvil OK (smoke)  
- Responsive formal Lighthouse no corrido (pendiente)

## 5. SEO / GEO

Entidades reforzadas en HTML: Dinamic Systems, Argentina, inventarios físicos, depósitos, mercadería, racks/pallets, reconteos, diferencias, totales/parciales, retail, logística, tecnología complementaria.

Home title ≠ servicio físicos title.

## 6. Definition of Done (checklist)

- [x] title prioriza inventarios físicos  
- [x] H1 depósitos/retail/operaciones logísticas  
- [x] Argentina en primer viewport (eyebrow + hero)  
- [x] definición ejecución inventarios  
- [x] mercadería y depósitos directos  
- [x] reconteos y diferencias explicados  
- [x] servicios con links reales  
- [x] Consultoría → Auditoría  
- [x] proceso 5 etapas  
- [x] bloque depósitos  
- [x] bloque diferencias  
- [x] tech después del servicio  
- [x] drones complementarios  
- [x] sin claims absolutos prohibidos en home  
- [x] sin rutas inventadas  
- [x] sin testimonios inventados  
- [x] sin schema reviews  
- [x] anchors (`#servicios`, `#contacto`, etc.)  
- [x] HTML prerender  
- [x] smoke sin hydration noise  
- [x] typecheck / build:validated / smoke / links  
- [x] commits mergeables a `main`  

Pendiente no bloqueante: Lighthouse CWV, WebP, code-split, FAQ Etapa 4.

## 7. Estado

**COMPLETE_WITH_MINOR_ISSUES**

Issues menores: warning Mantine SSR focus; PNGs pesados; CTAs «Solicitar reunión» en páginas interiores; smoke requirió instalar Chromium en el entorno.
