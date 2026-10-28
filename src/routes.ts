import type { PageSeo } from '@/seo/types';
import { absoluteUrl, defaultOgImage, SITE_ORIGIN } from '@/seo/site';

export { absoluteUrl, SITE_ORIGIN };

export type PageType = 'home' | 'service' | 'industry' | 'resource' | 'case-study' | 'hub';

export type ContentGroup =
  | 'servicios'
  | 'industrias'
  | 'recursos'
  | 'buenas-practicas'
  | 'innovacion'
  | 'investigacion';

export type RouteNavigation = {
  label: string;
  group?: ContentGroup;
  /** Include in Header menus / mobile drawer group lists */
  showInHeader?: boolean;
  /** Include in Footer column lists */
  showInFooter?: boolean;
  /** Include in home ExplorePagesSection */
  showOnHome?: boolean;
};

/**
 * Central published-route registry.
 * Sitemap, prerender, React Router and breadcrumbs all consume this list.
 * Do not add a URL here unless a renderable page exists.
 */
export type PublishedRoute = {
  id: string;
  /** React Router path (no trailing slash except root) */
  path: string;
  /** Canonical / sitemap location (directories end with /) */
  loc: string;
  pageType: PageType;
  /** When false, excluded from sitemap. Default true. */
  indexable?: boolean;
  seo: Omit<PageSeo, 'jsonLd' | 'canonicalPath'> & {
    canonicalPath?: string;
  };
  navigation?: RouteNavigation;
  /** Breadcrumb trail labels after Inicio */
  breadcrumbLabels: string[];
};

export const publishedRoutes = [
  {
    id: 'home',
    path: '/',
    loc: '/',
    pageType: 'home',
    breadcrumbLabels: [],
    seo: {
      title: 'Inventarios físicos para depósitos y empresas | Dinamic Systems',
      description:
        'Dinamic Systems realiza inventarios físicos en Argentina para depósitos, retail, centros de distribución y logística, con conteos, reconteos, control por ubicación y trazabilidad digital.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Inicio', showInHeader: true },
  },
  {
    id: 'hub-servicios',
    path: '/servicios',
    loc: '/servicios/',
    pageType: 'hub',
    breadcrumbLabels: ['Servicios'],
    seo: {
      title: 'Servicios de inventarios físicos | Dinamic Systems',
      description:
        'Inventarios físicos, cíclicos, auditoría y modalidad con drones para depósitos, retail y operaciones logísticas en Argentina.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Servicios',
      group: 'servicios',
      showInHeader: false,
      showInFooter: false,
      showOnHome: false,
    },
  },
  {
    id: 'service-inventarios-fisicos',
    path: '/servicios/inventarios-fisicos',
    loc: '/servicios/inventarios-fisicos/',
    pageType: 'service',
    breadcrumbLabels: ['Servicios', 'Inventarios físicos'],
    seo: {
      title: 'Inventarios físicos para empresas | Dinamic Systems',
      description:
        'Dinamic Systems realiza inventarios físicos para depósitos, centros de distribución y retail: conteo por ubicación, reconteos, trazabilidad y resultados auditables.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Inventarios físicos',
      group: 'servicios',
      showInHeader: true,
      showInFooter: true,
      showOnHome: true,
    },
  },
  {
    id: 'service-inventarios-drones',
    path: '/servicios/inventarios-con-drones',
    loc: '/servicios/inventarios-con-drones/',
    pageType: 'service',
    breadcrumbLabels: ['Servicios', 'Inventarios con drones'],
    seo: {
      title: 'Inventarios con drones para depósitos | Dinamic Systems',
      description:
        'Inventarios con drones como complemento del conteo físico en depósitos y altura: evaluación previa, captura de etiquetas y validación de resultados.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Inventarios con drones',
      group: 'servicios',
      showInHeader: true,
      showInFooter: true,
    },
  },
  {
    id: 'service-inventarios-ciclicos',
    path: '/servicios/inventarios-ciclicos',
    loc: '/servicios/inventarios-ciclicos/',
    pageType: 'service',
    breadcrumbLabels: ['Servicios', 'Inventarios cíclicos'],
    seo: {
      title: 'Inventarios cíclicos para empresas | Dinamic Systems',
      description:
        'Servicio de inventarios cíclicos: conteos periódicos por criticidad, rotación o ubicación, con planificación, reconteos y trazabilidad. Complementarios al inventario general.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Inventarios cíclicos',
      group: 'servicios',
      showInFooter: true,
      showOnHome: true,
    },
  },
  {
    id: 'service-auditoria-inventarios',
    path: '/servicios/auditoria-de-inventarios',
    loc: '/servicios/auditoria-de-inventarios/',
    pageType: 'service',
    breadcrumbLabels: ['Servicios', 'Auditoría de inventarios'],
    seo: {
      title: 'Auditoría de inventarios | Dinamic Systems',
      description:
        'Auditoría de inventarios con muestreo, revisión de procedimientos, reconteos independientes y reportes con evidencia para control interno o externo.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Auditoría de inventarios',
      group: 'servicios',
      showInFooter: true,
      showOnHome: true,
    },
  },
  {
    id: 'hub-industrias',
    path: '/industrias',
    loc: '/industrias/',
    pageType: 'hub',
    breadcrumbLabels: ['Industrias'],
    seo: {
      title: 'Inventarios físicos por industria | Dinamic Systems',
      description:
        'Inventarios físicos para depósitos y centros de distribución, retail y cadenas, y operadores logísticos o industria.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Industrias',
      group: 'industrias',
      showInHeader: false,
      showInFooter: false,
      showOnHome: false,
    },
  },
  {
    id: 'industry-depositos',
    path: '/industrias/depositos-centros-distribucion',
    loc: '/industrias/depositos-centros-distribucion/',
    pageType: 'industry',
    breadcrumbLabels: ['Industrias', 'Depósitos y centros de distribución'],
    seo: {
      title: 'Inventarios para depósitos y centros de distribución',
      description:
        'Inventarios físicos para depósitos y centros de distribución: racks, pallets, pasillos, altura y control por ubicación, con apoyo en altura cuando corresponde.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Depósitos y CD',
      group: 'industrias',
      showInHeader: true,
      showInFooter: true,
      showOnHome: true,
    },
  },
  {
    id: 'industry-retail',
    path: '/industrias/retail-cadenas-sucursales',
    loc: '/industrias/retail-cadenas-sucursales/',
    pageType: 'industry',
    breadcrumbLabels: ['Industrias', 'Retail y cadenas de sucursales'],
    seo: {
      title: 'Inventarios para retail y cadenas de sucursales',
      description:
        'Inventarios físicos para retail y cadenas de sucursales: salón, depósito interno, coordinación por local y consolidación de resultados.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Retail y cadenas',
      group: 'industrias',
      showInHeader: true,
      showInFooter: true,
      showOnHome: true,
    },
  },
  {
    id: 'industry-operadores-logisticos',
    path: '/industrias/operadores-logisticos-industria',
    loc: '/industrias/operadores-logisticos-industria/',
    pageType: 'industry',
    breadcrumbLabels: ['Industrias', 'Operadores logísticos e industria'],
    seo: {
      title: 'Inventarios para operadores logísticos e industria',
      description:
        'Inventarios físicos para operadores logísticos e industria: stock de terceros, ubicaciones, pallets, trazabilidad y conciliación documentada.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Operadores logísticos e industria',
      group: 'industrias',
      showInFooter: true,
    },
  },
  {
    id: 'hub-recursos',
    path: '/recursos',
    loc: '/recursos/',
    pageType: 'hub',
    breadcrumbLabels: ['Recursos'],
    seo: {
      title: 'Guías sobre inventarios físicos | Dinamic Systems',
      description:
        'Guías sobre inventarios físicos: proceso, preparación, diferencias de stock, tiempos, costo, cotización, interno vs. tercerizado y medios de captura.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Recursos',
      group: 'recursos',
      showInHeader: false,
      showInFooter: false,
      showOnHome: false,
    },
  },
  {
    id: 'resource-inventario-fisico',
    path: '/recursos/como-realizar-un-inventario-fisico',
    loc: '/recursos/como-realizar-un-inventario-fisico/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Cómo realizar un inventario físico'],
    seo: {
      title: 'Cómo realizar un inventario físico paso a paso',
      description:
        'Guía para realizar un inventario físico empresarial: preparación, alcance, conteo, reconteo, conciliación y cierre documentado.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Cómo realizar un inventario físico',
      group: 'recursos',
      showInFooter: true,
      showOnHome: true,
    },
  },
  {
    id: 'resource-preparar-deposito',
    path: '/recursos/como-preparar-un-deposito-para-un-inventario',
    loc: '/recursos/como-preparar-un-deposito-para-un-inventario/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Cómo preparar un depósito para un inventario'],
    seo: {
      title: 'Cómo preparar un depósito para un inventario',
      description:
        'Guía para preparar un depósito antes del inventario: orden, ubicaciones, identificación, devoluciones, movimientos y responsables.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Preparar un depósito para un inventario',
      group: 'recursos',
      showOnHome: true,
    },
  },
  {
    id: 'resource-general-vs-ciclico',
    path: '/recursos/inventario-general-vs-inventario-ciclico',
    loc: '/recursos/inventario-general-vs-inventario-ciclico/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Inventario general vs. inventario cíclico'],
    seo: {
      title: 'Inventario general vs. inventario cíclico',
      description:
        'Comparación de inventario general y cíclico: alcance, frecuencia, interrupción, costo operativo, ventajas y limitaciones.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Inventario general vs. cíclico',
      group: 'recursos',
      showOnHome: true,
    },
  },
  {
    id: 'resource-como-funcionan-drones',
    path: '/recursos/como-funciona-un-inventario-con-drones',
    loc: '/recursos/como-funciona-un-inventario-con-drones/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Cómo funciona un inventario con drones'],
    seo: {
      title: 'Cómo funciona un inventario con drones',
      description:
        'Explicación de inventarios con drones: navegación, captura, códigos, OCR, visión artificial, validación, seguridad y limitaciones.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Cómo funciona un inventario con drones',
      group: 'recursos',
    },
  },
  {
    id: 'resource-por-que-no-coincide',
    path: '/recursos/por-que-no-coincide-el-stock',
    loc: '/recursos/por-que-no-coincide-el-stock/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Por qué no coincide el stock'],
    seo: {
      title: 'Por qué no coincide el stock teórico con el físico',
      description:
        'Causas concretas de desvío entre stock teórico y físico: movimientos, ubicación, unidades, duplicados, conteos, pendientes, sistema y trazabilidad.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Por qué no coincide el stock',
      group: 'recursos',
    },
  },
  {
    id: 'resource-cuanto-tarda',
    path: '/recursos/cuanto-tarda-un-inventario-fisico',
    loc: '/recursos/cuanto-tarda-un-inventario-fisico/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Cuánto tarda un inventario físico'],
    seo: {
      title: 'Cuánto tarda un inventario físico',
      description:
        'La duración de un inventario físico depende de SKU, ubicaciones, layout, preparación, tecnología, operadores, reconteo y si la operación sigue activa.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Cuánto tarda un inventario físico',
      group: 'recursos',
    },
  },
  {
    id: 'resource-interno-vs-tercerizado',
    path: '/recursos/inventario-interno-vs-tercerizado',
    loc: '/recursos/inventario-interno-vs-tercerizado/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Inventario interno vs. tercerizado'],
    seo: {
      title: 'Inventario interno vs. inventario tercerizado',
      description:
        'Comparación neutral entre hacer el inventario con el equipo interno o contratar un tercero: sesgo, costo, escala y criterios de decisión.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Inventario interno vs. tercerizado',
      group: 'recursos',
    },
  },
  {
    id: 'resource-elegir-empresa',
    path: '/recursos/como-elegir-empresa-inventarios',
    loc: '/recursos/como-elegir-empresa-inventarios/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Cómo elegir una empresa de inventarios'],
    seo: {
      title: 'Cómo elegir una empresa de inventarios físicos',
      description:
        'Criterios para elegir un proveedor de inventarios: método, trazabilidad, reconteo, cobertura, reportes y referencias. Sin ranking ni superlativos.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Cómo elegir una empresa de inventarios',
      group: 'recursos',
    },
  },
  {
    id: 'resource-cuanto-cuesta',
    path: '/recursos/cuanto-cuesta-un-inventario-fisico',
    loc: '/recursos/cuanto-cuesta-un-inventario-fisico/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Cuánto cuesta un inventario físico'],
    seo: {
      title: 'Cuánto cuesta un inventario físico',
      description:
        'Variables de costo de un inventario físico: volumen, ubicaciones, duración, personal, horario, desplazamiento, complejidad y entregables. Sin tarifas inventadas.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Cuánto cuesta un inventario físico',
      group: 'recursos',
    },
  },
  {
    id: 'resource-cotizar',
    path: '/recursos/cotizar-inventario-fisico',
    loc: '/recursos/cotizar-inventario-fisico/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Cotizar un inventario físico'],
    seo: {
      title: 'Qué datos hacen falta para cotizar un inventario físico',
      description:
        'Guía previa al contacto: ubicación, tamaño, posiciones, SKU, layout, horarios, sedes, entregables y restricciones para cotizar un inventario físico.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Cotizar un inventario físico',
      group: 'recursos',
    },
  },
  {
    id: 'resource-sin-detener',
    path: '/recursos/inventarios-sin-detener-operacion',
    loc: '/recursos/inventarios-sin-detener-operacion/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Inventarios sin detener la operación'],
    seo: {
      title: 'Inventarios físicos sin detener la operación',
      description:
        'Cuándo se puede inventariar con la operación activa: zonas, ventanas, control de movimientos, congelamiento lógico y riesgo de doble conteo. Sin promesas universales.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Inventarios sin detener la operación',
      group: 'recursos',
    },
  },
  {
    id: 'resource-reducir-diferencias',
    path: '/recursos/como-reducir-diferencias-de-stock',
    loc: '/recursos/como-reducir-diferencias-de-stock/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Cómo reducir diferencias de stock'],
    seo: {
      title: 'Cómo reducir diferencias de stock',
      description:
        'Prevención de diferencias de stock: ubicación, recepción, despacho, unidades, cíclicos, reconteos y análisis de causas. Distinto del diagnóstico de por qué no coincide.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Cómo reducir diferencias de stock',
      group: 'recursos',
    },
  },
  {
    id: 'resource-manual-vs-tecnologico',
    path: '/recursos/inventario-manual-vs-tecnologico',
    loc: '/recursos/inventario-manual-vs-tecnologico/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Inventario manual vs. tecnológico'],
    seo: {
      title: 'Inventario manual vs. inventario con tecnología',
      description:
        'Comparación de medios de captura: papel, planilla, lector, móvil, QR y visión. El proceso y el control siguen siendo necesarios; la tecnología no es mágica.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Inventario manual vs. tecnológico',
      group: 'recursos',
    },
  },
  {
    id: 'hub-buenas-practicas',
    path: '/buenas-practicas',
    loc: '/buenas-practicas/',
    pageType: 'hub',
    breadcrumbLabels: ['Buenas prácticas'],
    seo: {
      title: 'Buenas prácticas de inventario físico | Dinamic Systems',
      description:
        'Prácticas de inventario físico: reconteos, control de posiciones y pasillos, comunicación durante el operativo y resultados auditables.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Buenas prácticas',
      group: 'buenas-practicas',
      showInHeader: false,
      showInFooter: false,
      showOnHome: false,
    },
  },
  {
    id: 'practice-reconteos',
    path: '/buenas-practicas/reconteos-inteligentes',
    loc: '/buenas-practicas/reconteos-inteligentes/',
    pageType: 'resource',
    breadcrumbLabels: ['Buenas prácticas', 'Reconteos inteligentes'],
    seo: {
      title: 'Reconteos inteligentes en un inventario físico',
      description:
        'Cuándo recontear una diferencia, por qué no recontear todo y cómo priorizar con trazabilidad. Sin umbrales universales.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Reconteos inteligentes',
      group: 'buenas-practicas',
    },
  },
  {
    id: 'practice-posiciones',
    path: '/buenas-practicas/control-posiciones-pasillos',
    loc: '/buenas-practicas/control-posiciones-pasillos/',
    pageType: 'resource',
    breadcrumbLabels: ['Buenas prácticas', 'Control de posiciones y pasillos'],
    seo: {
      title: 'Control de posiciones y pasillos en el inventario',
      description:
        'Por qué el inventario de un depósito se registra por pasillo, posición, nivel y pallet, y cómo eso evita duplicados y falsos faltantes.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Control de posiciones y pasillos',
      group: 'buenas-practicas',
    },
  },
  {
    id: 'practice-comunicacion',
    path: '/buenas-practicas/comunicacion-cliente-inventario',
    loc: '/buenas-practicas/comunicacion-cliente-inventario/',
    pageType: 'resource',
    breadcrumbLabels: ['Buenas prácticas', 'Comunicación durante el inventario'],
    seo: {
      title: 'Comunicación con el cliente durante un inventario',
      description:
        'Comunicación operativa de un inventario: responsables, incidencias, diferencias, avances, cierre y entregables. Sin tono corporativo vacío.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Comunicación durante el inventario',
      group: 'buenas-practicas',
    },
  },
  {
    id: 'practice-resultados-auditables',
    path: '/buenas-practicas/resultados-auditables',
    loc: '/buenas-practicas/resultados-auditables/',
    pageType: 'resource',
    breadcrumbLabels: ['Buenas prácticas', 'Resultados auditables'],
    seo: {
      title: 'Qué hace auditable el resultado de un inventario',
      description:
        'Qué rastro deja un inventario auditable: origen del dato, operador, ubicación, conteo, reconteo, cambios y exportables. Sin claims técnicos no documentados.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Resultados auditables',
      group: 'buenas-practicas',
    },
  },
] as const satisfies readonly PublishedRoute[];

export type RouteId = (typeof publishedRoutes)[number]['id'];

const routes: readonly PublishedRoute[] = publishedRoutes;

/**
 * Hub paths by content group.
 * Only register a hub in `publishedRoutes` when it already has indexable children.
 * Future groups (buenas-practicas, innovacion, investigacion) stay here so breadcrumbs
 * can link once those hubs are published — they are not in sitemap until then.
 */
export const HUB_PATH_BY_GROUP: Record<ContentGroup, { path: string; loc: string }> = {
  servicios: { path: '/servicios', loc: '/servicios/' },
  industrias: { path: '/industrias', loc: '/industrias/' },
  recursos: { path: '/recursos', loc: '/recursos/' },
  'buenas-practicas': { path: '/buenas-practicas', loc: '/buenas-practicas/' },
  innovacion: { path: '/innovacion', loc: '/innovacion/' },
  investigacion: { path: '/investigacion', loc: '/investigacion/' },
};

export const FUTURE_HUB_GROUPS: readonly ContentGroup[] = ['innovacion', 'investigacion'];

export function isSitemapRoute(route: PublishedRoute): boolean {
  if (route.indexable === false) return false;
  if (/noindex/i.test(route.seo.robots ?? 'index, follow')) return false;
  return true;
}

export function getSitemapLocs(): string[] {
  return routes.filter(isSitemapRoute).map((r) => absoluteUrl(r.loc));
}

export function getPublishedHubForGroup(group: ContentGroup): PublishedRoute | undefined {
  return getRouteByPath(HUB_PATH_BY_GROUP[group].path);
}

export function childRoutesForGroup(group: ContentGroup): PublishedRoute[] {
  return routes.filter(
    (r) => r.navigation?.group === group && r.pageType !== 'hub' && r.indexable !== false,
  );
}

export function getRouteById(id: string): PublishedRoute | undefined {
  return routes.find((r) => r.id === id);
}

export function getRouteByPath(path: string): PublishedRoute | undefined {
  const normalized = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
  return routes.find((r) => r.path === normalized || r.loc === path || r.loc === `${normalized}/`);
}

export function routesInGroup(
  group: NonNullable<RouteNavigation['group']>,
  opts?: { header?: boolean; footer?: boolean; home?: boolean },
): PublishedRoute[] {
  return routes.filter((r) => {
    if (r.pageType === 'hub') return false;
    if (r.navigation?.group !== group) return false;
    if (opts?.header && !r.navigation.showInHeader) return false;
    if (opts?.footer && !r.navigation.showInFooter) return false;
    if (opts?.home && !r.navigation.showOnHome) return false;
    return true;
  });
}

export function routesForHomeExplore(): PublishedRoute[] {
  return routes.filter(
    (r) => r.pageType !== 'home' && r.pageType !== 'hub' && Boolean(r.navigation?.showOnHome),
  );
}

export function routesForFooter(): PublishedRoute[] {
  return routes.filter((r) => Boolean(r.navigation?.showInFooter));
}
