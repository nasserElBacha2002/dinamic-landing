# Hardening report

**Fecha:** 2026-08-03  
**Commits:** `2ec7854` (CTAs/SSR/a11y), `8ba47e9` (images/preloads)

## CTAs
Interior `primaryLabel` unificado a «Solicitar evaluación de inventario» / industria depósitos «Evaluar un inventario para esta operación».

## SSR Mantine
`&:focus, &:focus-within` movido de `styles` JS a `formControls.module.css`.  
LogoCard hover a CSS module.  
**Resultado build:** sin warning «Unsupported style property &:focus».

## Imágenes
| Asset | PNG | WebP |
|-------|-----|------|
| hero | 1.9 MB | **106 KB** |
| quienes-somos | 2.2 MB | **115 KB** |
| auditoria | 2.2 MB | **142 KB** |

Dimensiones explícitas + lazy below-fold. Hero `fetchPriority=high`.

## Preloads
Antes (~20 imágenes). **Después: 2** (logo brand + hero.webp).

## Bundle
JS ~778 KB (leve suba por FAQ/form). CSS ~215 KB. Dist total menor por WebP.

## Estado
**COMPLETE** (code-split agresivo no aplicado — sin justificación fuerte).
