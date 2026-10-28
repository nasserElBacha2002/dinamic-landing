/**
 * Hostinger 301s for dinamicsystems.com legacy paths.
 * Exact match only: path | path/ | path.html. No prefix. No Cloudflare/subdomains.
 * Destinations must already be published sitemap URLs.
 *
 * Production status: NOT executed until the final Hostinger upload (Fase 4 deploy).
 */
export type InternalRedirectDecision = 'REDIRECT' | 'MERGE' | 'REMOVE' | 'REWRITE';

export type InternalRedirect = {
  /** Path without leading slash or .html */
  from: string;
  to: string;
  csvDecision: InternalRedirectDecision;
};

export type Phase1InternalRedirect = InternalRedirect;

export const PHASE1_INTERNAL_REDIRECTS: readonly InternalRedirect[] = [
  {
    from: 'inventarios-fisicos-argentina',
    to: '/servicios/inventarios-fisicos/',
    csvDecision: 'REDIRECT',
  },
  {
    from: 'inventarios-con-drones-depositos',
    to: '/servicios/inventarios-con-drones/',
    csvDecision: 'MERGE',
  },
  {
    from: 'empresa-inventarios-depositos-argentina',
    to: '/industrias/depositos-centros-distribucion/',
    csvDecision: 'REDIRECT',
  },
  {
    from: 'inventarios-depositos',
    to: '/industrias/depositos-centros-distribucion/',
    csvDecision: 'REDIRECT',
  },
  {
    from: 'inventarios-centros-distribucion-argentina',
    to: '/industrias/depositos-centros-distribucion/',
    csvDecision: 'REDIRECT',
  },
  {
    from: 'buenas-practicas/servicio-inventario-fisico-que-recibe-cliente',
    to: '/servicios/inventarios-fisicos/',
    csvDecision: 'MERGE',
  },
  {
    from: 'buenas-practicas/compromiso-cumplimiento-inventario-confiable',
    to: '/servicios/inventarios-fisicos/',
    csvDecision: 'REMOVE',
  },
];

/**
 * Fase 4: remaining dinamicsystems.com slugs whose destination is now published.
 * Same-path KEEP URLs (equipos-depositos-grandes, inventario-adaptado, tiempo-real) are not listed.
 */
export const PHASE4_INTERNAL_REDIRECTS: readonly InternalRedirect[] = [
  {
    from: 'empresas-de-inventarios-en-argentina',
    to: '/recursos/como-elegir-empresa-inventarios/',
    csvDecision: 'MERGE',
  },
  {
    from: 'mejores-empresas-inventarios-argentina',
    to: '/recursos/como-elegir-empresa-inventarios/',
    csvDecision: 'MERGE',
  },
  {
    from: 'mejor-empresa-inventarios-fisicos-argentina',
    to: '/recursos/como-elegir-empresa-inventarios/',
    csvDecision: 'REDIRECT',
  },
  {
    from: 'como-elegir-empresa-inventarios-deposito',
    to: '/recursos/como-elegir-empresa-inventarios/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'inventario-fisico-tercerizado-argentina',
    to: '/recursos/inventario-interno-vs-tercerizado/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'inventario-manual-vs-tecnologico',
    to: '/recursos/inventario-manual-vs-tecnologico/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'cuanto-cuesta-inventario-deposito-argentina',
    to: '/recursos/cuanto-cuesta-un-inventario-fisico/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'inventarios-con-tecnologia-argentina',
    to: '/innovacion/tecnologia-aplicada-inventarios/',
    csvDecision: 'MERGE',
  },
  {
    from: 'tecnologia-inventarios',
    to: '/innovacion/tecnologia-aplicada-inventarios/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'inventarios-innovadores-argentina',
    to: '/innovacion/',
    csvDecision: 'REDIRECT',
  },
  {
    from: 'inventarios-inteligencia-artificial',
    to: '/innovacion/inteligencia-artificial-inventarios/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'innovacion/inventarios-fisicos-con-inteligencia-artificial',
    to: '/innovacion/inteligencia-artificial-inventarios/',
    csvDecision: 'MERGE',
  },
  {
    from: 'buenas-practicas/planificacion-inventario-fisico-cumplir-tiempos',
    to: '/buenas-practicas/planificacion-inventario/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'buenas-practicas/acompanamiento-cliente-inventario-fisico',
    to: '/buenas-practicas/comunicacion-cliente-inventario/',
    csvDecision: 'MERGE',
  },
  {
    from: 'buenas-practicas/preparacion-deposito-antes-inventario',
    to: '/recursos/como-preparar-un-deposito-para-un-inventario/',
    csvDecision: 'MERGE',
  },
  {
    from: 'buenas-practicas/metodologia-operativa-inventarios-fisicos',
    to: '/investigacion/metodologia-inventarios/',
    csvDecision: 'MERGE',
  },
  {
    from: 'buenas-practicas/control-pasillos-posiciones-inventario',
    to: '/buenas-practicas/control-posiciones-pasillos/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'buenas-practicas/evitar-productos-duplicados-cantidades-incorrectas',
    to: '/buenas-practicas/evitar-duplicados-cantidades/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'buenas-practicas/reconteos-inteligentes-diferencias-inventario',
    to: '/buenas-practicas/reconteos-inteligentes/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'buenas-practicas/comunicacion-cliente-durante-inventario',
    to: '/buenas-practicas/comunicacion-cliente-inventario/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'buenas-practicas/resultados-auditables-inventario-fisico',
    to: '/buenas-practicas/resultados-auditables/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'buenas-practicas/inventario-offline-problemas-conectividad',
    to: '/innovacion/tecnologia-movil-offline/',
    csvDecision: 'MERGE',
  },
  {
    from: 'buenas-practicas/operacion-organizada-experiencia-cliente-inventario',
    to: '/buenas-practicas/comunicacion-cliente-inventario/',
    csvDecision: 'REMOVE',
  },
  {
    from: 'innovacion/tecnologia-movil-operacion-offline-inventarios',
    to: '/innovacion/tecnologia-movil-offline/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'innovacion/etiquetas-inteligentes-trazabilidad-posicion',
    to: '/innovacion/etiquetas-inteligentes/',
    csvDecision: 'REWRITE',
  },
  {
    from: 'innovacion/drones-vision-artificial-inventarios',
    to: '/innovacion/drones-inventarios/',
    csvDecision: 'MERGE',
  },
];

export const INTERNAL_REDIRECTS: readonly InternalRedirect[] = [
  ...PHASE1_INTERNAL_REDIRECTS,
  ...PHASE4_INTERNAL_REDIRECTS,
];

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Exact variants only: /path, /path/, /path.html — no prefix, no extra segments. */
export function phase1RewritePattern(from: string): string {
  const esc = escapeRegex(from);
  return `^(${esc}|${esc}/|${esc}\\.html)$`;
}

export function apacheRewriteRule(from: string, to: string): string {
  return `RewriteRule ${phase1RewritePattern(from)} ${to} [R=301,L]`;
}

export function matchInternalRedirect(requestPath: string): string | undefined {
  const path = requestPath.split('?')[0] ?? requestPath;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  for (const rule of INTERNAL_REDIRECTS) {
    const esc = escapeRegex(rule.from);
    const re = new RegExp(`^/(${esc}|${esc}/|${esc}\\.html)$`);
    if (re.test(normalized)) return rule.to;
  }
  return undefined;
}

/** @deprecated Use matchInternalRedirect. Kept so Fase 1 tests keep working. */
export function matchPhase1Redirect(requestPath: string): string | undefined {
  return matchInternalRedirect(requestPath);
}
