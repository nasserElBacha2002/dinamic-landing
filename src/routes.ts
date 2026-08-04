import type { PageSeo } from '@/seo/types';
import { absoluteUrl, defaultOgImage, SITE_ORIGIN } from '@/seo/site';

export { absoluteUrl, SITE_ORIGIN };

export type PageType = 'home' | 'service' | 'industry' | 'resource' | 'case-study';

export type RouteNavigation = {
  label: string;
  group?: 'servicios' | 'industrias' | 'recursos';
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
    id: 'service-inventarios-fisicos',
    path: '/servicios/inventarios-fisicos',
    loc: '/servicios/inventarios-fisicos/',
    pageType: 'service',
    breadcrumbLabels: ['Servicios', 'Inventarios físicos'],
    seo: {
      title: 'Inventarios físicos para empresas | Dinamic Systems',
      description:
        'Inventarios físicos profesionales con planificación, conteo, reconteos, supervisión y reportes auditables para retail, logística y distribución.',
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
        'Inventarios en depósitos con drones, captura de imágenes, lectura de etiquetas y visión artificial, con evaluación previa y validación de resultados.',
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
        'Inventarios cíclicos con conteos periódicos por criticidad o rotación, planificación, seguimiento y trazabilidad, complementarios al inventario general.',
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
        'Auditoría de inventarios con muestreo, revisión de procedimientos, reconteos, análisis de diferencias y reportes con evidencia documentada.',
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
    id: 'industry-depositos',
    path: '/industrias/depositos-centros-distribucion',
    loc: '/industrias/depositos-centros-distribucion/',
    pageType: 'industry',
    breadcrumbLabels: ['Industrias', 'Depósitos y centros de distribución'],
    seo: {
      title: 'Inventarios para depósitos y centros de distribución',
      description:
        'Inventarios para depósitos y CD: racks, pallets, pasillos, altura y control por ubicación con inventario físico y apoyo tecnológico cuando corresponde.',
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
        'Inventarios físicos para retail y cadenas: salón, depósito interno, coordinación por sucursal y consolidación de resultados.',
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
        'Inventarios para operadores logísticos e industria: stock de terceros, ubicaciones, pallets, lotes, trazabilidad y conciliación documentada.',
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
] as const satisfies readonly PublishedRoute[];

export type RouteId = (typeof publishedRoutes)[number]['id'];

const routes: readonly PublishedRoute[] = publishedRoutes;

export function getSitemapLocs(): string[] {
  return routes.filter((r) => r.indexable !== false).map((r) => absoluteUrl(r.loc));
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
    if (r.navigation?.group !== group) return false;
    if (opts?.header && !r.navigation.showInHeader) return false;
    if (opts?.footer && !r.navigation.showInFooter) return false;
    if (opts?.home && !r.navigation.showOnHome) return false;
    return true;
  });
}

export function routesForHomeExplore(): PublishedRoute[] {
  return routes.filter((r) => r.pageType !== 'home' && Boolean(r.navigation?.showOnHome));
}

export function routesForFooter(): PublishedRoute[] {
  return routes.filter((r) => Boolean(r.navigation?.showInFooter));
}
