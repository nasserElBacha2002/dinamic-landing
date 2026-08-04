# Performance before / after

**Fecha:** 2026-08-03

| Métrica | Baseline (post Etapa 2) | Release (Etapas 3–4 + hardening) |
|---------|-------------------------|----------------------------------|
| JS principal | ~754 KB | ~778 KB |
| CSS | ~208 KB | ~215 KB |
| hero asset | PNG ~2.0 MB | WebP **108 KB** |
| about asset | PNG ~2.2 MB | WebP **118 KB** |
| tech asset | PNG ~2.2 MB | WebP **146 KB** |
| Preloads imagen | ~20 | **2** |
| Warning SSR focus | presente | **ausente** |
| dist total | ~8.7 MB | ~**2.9–3.5 MB** estimado (sin PNG grandes en bundle) |

## Decisiones
- No code-split por sección (riesgo prerender).
- PNG fuente conservados en `src/assets/images/` para regenerar WebP; no se importan.
- Logos cliente: lazy, sin conversión (ya pequeños).
