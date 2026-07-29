# Auditoría de evidencia — Fase 4

Fecha: 2026-07-28

## Qué existe en el repositorio

| Activo | Estado | Uso permitido |
|--------|--------|---------------|
| Logos de clientes (`src/data/clients.ts`) | Presentes (nombres + categorías + PNG) | Mostrar logos en home como “empresas que confían”, sin inventar casos |
| Organización (dirección, teléfono, email) | En sitio / Organization JSON-LD | Schemas y contacto |
| Contenido de servicios/industrias/recursos | Tipado y publicado | Páginas actuales |
| Métricas de proyecto (SKU, m², duración, % reconteo) | **No encontradas** | No publicar |
| Narrativas de caso con alcance/metodología | **No encontradas** | No publicar |
| Testimonios autorizados | **No encontrados** | No publicar |
| Perfiles LinkedIn / menciones externas | **No encontrados en repo** | No agregar sin verificación |
| Relación con universidades | **No documentada en repo** | No afirmar |

## Decisión

- Arquitectura de casos: **lista** (`CaseStudyPageTemplate`, tipos, `src/content/case-studies/registry.ts`).
- Rutas `/casos-de-exito/*`: **no publicadas** (evitar placeholders indexables).
- Páginas `/empresa/` y `/tecnologia/`: **no publicadas** en esta fase; el contenido institucional ya está en home (`#quienes-somos` y secciones de tecnología). Evitar duplicar sin valor nuevo.

## Cómo publicar un caso más adelante

1. Completar un objeto `CaseStudyPageContent` con `evidence[].verified: true` solo para datos comprobables.
2. Si el cliente no autoriza nombre, usar descriptor anónimo y `clientNamed: false`.
3. Agregar ruta a `publishedRoutes` + componente + entrada en registry de contenido.
4. Regenerar sitemap vía prerender (no editar a mano).

Estado casos: **BLOCKED BY CONTENT**.
