# Etapa 2 — Implementation report

**Fecha:** 2026-08-03  
**Commit:** `2d1274e` — `feat(landing): restructure homepage content for warehouse inventory intent`

---

## 1. Resumen

Reorden de la home: servicio → sectores → proceso 5 etapas → depósitos → diferencias → tecnología unificada → clientes → recursos → CTA/form. Cards de servicios con links reales. Retiro de cuatro bloques tech fragmentados.

## 2. Archivos modificados / creados / eliminados

### Creados
- `src/components/sections/IndustriesSection.tsx`
- `src/components/sections/WarehouseIntentSection.tsx`
- `src/components/sections/StockDifferencesSection.tsx`
- `src/components/sections/TechnologyComplementSection.tsx`

### Modificados
- `src/pages/HomePage.tsx`
- `src/routes.ts` (`showOnHome`)
- `src/data/services.ts`, `methodology.ts`
- `src/types/content.ts` (`ServiceItem.to`)
- `src/components/ui/ServiceCard.tsx` (Link accesible)
- `ServicesMapSection`, `MethodologySection`, `ExplorePagesSection`, `ClientsSection`, `AboutSection` (lazy img)
- `scripts/prerender.ts` (expect H1 home)

### Eliminados
- `DigitalInfrastructureSection` (+ css)
- `DroneInventorySection` (+ css)
- `ArtificialVisionSection`
- `VisionProcessFlowSection` (+ css)
- `src/data/visionProcessSteps.ts`

## 3. Cambios realizados

Orden final en `HomePage`:

1. Hero  
2. About  
3. ValueSystem  
4. Services (`#servicios`)  
5. Industries (`#sectores`)  
6. Methodology (`#metodologia`)  
7. Warehouse (`#depositos`)  
8. StockDifferences (`#diferencias`)  
9. TechnologyComplement (`#tecnologia`)  
10. Clients  
11. Explore  
12. Cta  
13. Contact  

## 4. Decisiones de arquitectura

- ValueSystem se mantiene tras About (refuerza precisión operativa sin ser tech).
- Tech unificada en un solo section; detalle drones → link a `/servicios/inventarios-con-drones/`.
- Explore ordenado explícitamente; drones service fuera de `showOnHome`.
- «Consultoría» → «Auditoría de inventarios» con ruta real.
- Imagen `auditoria.png` con `loading="lazy"` en tech; About lazy; hero sin lazy (LCP).

## 5. Copy final

Bloques depósitos/diferencias/tech/proceso según propuesta aprobada.

## 6. Claims

Sin absolutos prohibidos en HTML home (verificado en `dist/index.html`).

## 7. Rutas y enlaces añadidos

| Origen | Destino |
|--------|---------|
| Service cards | 4 servicios publicados |
| Industries | 3 industrias |
| Warehouse CTA | `/industrias/depositos-centros-distribucion/` |
| Diferencias | auditoría, cíclicos, recurso inventario físico |
| Tech | inventarios con drones |

Sin rutas nuevas.

## 8–9. Componentes creados / fusionados

Creados 4. Fusionados/retirados 4 secciones tech + vision steps.

## 10–11. Validaciones

- `npm run typecheck` ✅  
- `npm run build:validated` ✅  
- `npm run test:ssg-smoke` ✅ (6/6)  
- `npx playwright test --list` ✅  
- HTML DoD checks ✅  

## 12. Riesgos pendientes

- PNG hero/about/auditoría ~2MB sin WebP (fuera de alcance perf completa).
- Bundle JS ~754KB sin code-splitting.
- Mantine SSR warning `&:focus, &:focus-within`.
- Interior CTAs aún dicen «Solicitar reunión» (fuera de alcance home).

## 13. Fuera de alcance

FAQ, schema FAQ/WebSite, form fields Etapa 3, casos, legal, ERP específicos.

## 14. Estado final Etapa 2

**COMPLETE**
