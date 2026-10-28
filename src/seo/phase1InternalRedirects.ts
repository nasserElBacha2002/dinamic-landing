/**
 * Hostinger 301s for Fase 1. Only dinamicsystems.com paths whose CSV
 * decision is REDIRECT/MERGE/REMOVE into an already published commercial URL.
 * Do not add Cloudflare, subdomains, or destinations that are not live.
 */
export type Phase1InternalRedirect = {
  /** Path without leading slash or .html */
  from: string;
  to: string;
  csvDecision: 'REDIRECT' | 'MERGE' | 'REMOVE';
};

export const PHASE1_INTERNAL_REDIRECTS: readonly Phase1InternalRedirect[] = [
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
