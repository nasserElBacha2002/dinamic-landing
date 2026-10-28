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
    id: 'resource-checklist',
    path: '/recursos/checklist-inventario-fisico',
    loc: '/recursos/checklist-inventario-fisico/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Checklist de inventario físico'],
    seo: {
      title: 'Checklist de un inventario físico',
      description:
        'Lista de control operativa: antes, durante y después del inventario. Alcance, zonas, movimientos, reconteos y cierre. No sustituye planificación ni preparar el depósito.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Checklist de inventario físico', group: 'recursos' },
  },
  {
    id: 'resource-calcular-personal',
    path: '/recursos/como-calcular-personal-inventario',
    loc: '/recursos/como-calcular-personal-inventario/',
    pageType: 'resource',
    breadcrumbLabels: ['Recursos', 'Cómo calcular el personal de un inventario'],
    seo: {
      title: 'Cómo calcular el personal de un inventario físico',
      description:
        'Cómo estimar la dotación de un inventario: posiciones, densidad, layout, ventana y reconteo. Fórmula conceptual sin ratios universales ni cifras de productividad.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Cómo calcular el personal de un inventario', group: 'recursos' },
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
        'Prácticas de inventario físico: planificación, ejecución, stock en movimiento, reconteos, trazabilidad del dato y cierre auditable.',
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
  {
    id: 'practice-planificacion',
    path: '/buenas-practicas/planificacion-inventario',
    loc: '/buenas-practicas/planificacion-inventario/',
    pageType: 'resource',
    breadcrumbLabels: ['Buenas prácticas', 'Planificación de un inventario'],
    seo: {
      title: 'Planificación de un inventario físico',
      description:
        'Cómo se diseña un inventario: alcance, zonas, calendario, personal, layout, stock en movimiento y responsables. Distinto de preparar el depósito.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Planificación de un inventario', group: 'buenas-practicas' },
  },
  {
    id: 'practice-equipos',
    path: '/buenas-practicas/equipos-inventario-depositos-grandes',
    loc: '/buenas-practicas/equipos-inventario-depositos-grandes/',
    pageType: 'resource',
    breadcrumbLabels: ['Buenas prácticas', 'Equipos en depósitos grandes'],
    seo: {
      title: 'Equipos de inventario en depósitos grandes',
      description:
        'Cómo se dimensionan y coordinan equipos de inventario en predios grandes: zonas, supervisión y especialización. Sin ratios universales.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Equipos en depósitos grandes', group: 'buenas-practicas' },
  },
  {
    id: 'practice-duplicados',
    path: '/buenas-practicas/evitar-duplicados-cantidades',
    loc: '/buenas-practicas/evitar-duplicados-cantidades/',
    pageType: 'resource',
    breadcrumbLabels: ['Buenas prácticas', 'Evitar duplicados y cantidades incorrectas'],
    seo: {
      title: 'Cómo evitar duplicados y cantidades incorrectas',
      description:
        'Cómo se producen y se cortan el doble conteo y las cantidades mal capturadas: identificación, posición, relectura, validación y reconteo.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Evitar duplicados y cantidades incorrectas', group: 'buenas-practicas' },
  },
  {
    id: 'practice-adaptado',
    path: '/buenas-practicas/inventario-adaptado-cliente-proveedor',
    loc: '/buenas-practicas/inventario-adaptado-cliente-proveedor/',
    pageType: 'resource',
    breadcrumbLabels: ['Buenas prácticas', 'Inventario adaptado a cliente o proveedor'],
    seo: {
      title: 'Inventario adaptado a cliente o proveedor',
      description:
        'Adaptación operativa de un inventario: formatos, etiquetas, ubicaciones, códigos, layouts y restricciones. Sin discurso genérico de flexibilidad.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Inventario adaptado a cliente o proveedor', group: 'buenas-practicas' },
  },
  {
    id: 'practice-stock-movimiento',
    path: '/buenas-practicas/control-stock-en-movimiento',
    loc: '/buenas-practicas/control-stock-en-movimiento/',
    pageType: 'resource',
    breadcrumbLabels: ['Buenas prácticas', 'Control de stock en movimiento'],
    seo: {
      title: 'Control de stock en movimiento durante el inventario',
      description:
        'Cómo controlar ingresos, egresos, picking, reposición y transferencias mientras se cuenta. Distinto de decidir si se puede inventariar sin detener la operación.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Control de stock en movimiento', group: 'buenas-practicas' },
  },
  {
    id: 'practice-trazabilidad-conteo',
    path: '/buenas-practicas/trazabilidad-conteo-reconteo',
    loc: '/buenas-practicas/trazabilidad-conteo-reconteo/',
    pageType: 'resource',
    breadcrumbLabels: ['Buenas prácticas', 'Trazabilidad entre conteo y reconteo'],
    seo: {
      title: 'Trazabilidad entre conteo y reconteo',
      description:
        'Cómo conservar las dos versiones del dato: primer conteo, motivo, segundo conteo y resolución. Distinto de cuándo recontear y de un resultado auditable.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Trazabilidad entre conteo y reconteo', group: 'buenas-practicas' },
  },
  {
    id: 'hub-innovacion',
    path: '/innovacion',
    loc: '/innovacion/',
    pageType: 'hub',
    breadcrumbLabels: ['Innovación'],
    seo: {
      title: 'Tecnología e innovación en inventarios físicos | Dinamic Systems',
      description:
        'Tecnología aplicada a inventarios: captura digital, visión, OCR, drones, IA, etiquetas, móvil offline y el sentido real de tiempo real. Con límites explícitos.',
      ogType: 'website',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: {
      label: 'Innovación',
      group: 'innovacion',
      showInHeader: false,
      showInFooter: false,
      showOnHome: false,
    },
  },
  {
    id: 'innovation-tecnologia-aplicada',
    path: '/innovacion/tecnologia-aplicada-inventarios',
    loc: '/innovacion/tecnologia-aplicada-inventarios/',
    pageType: 'resource',
    breadcrumbLabels: ['Innovación', 'Tecnología aplicada a inventarios'],
    seo: {
      title: 'Tecnología aplicada a inventarios físicos',
      description:
        'Mapa de capas técnicas de un inventario: captura digital, códigos, QR, móvil, validación, OCR, visión, drones, offline y sincronización.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Tecnología aplicada a inventarios', group: 'innovacion' },
  },
  {
    id: 'innovation-ia',
    path: '/innovacion/inteligencia-artificial-inventarios',
    loc: '/innovacion/inteligencia-artificial-inventarios/',
    pageType: 'resource',
    breadcrumbLabels: ['Innovación', 'Inteligencia artificial en inventarios'],
    seo: {
      title: 'Inteligencia artificial en inventarios físicos',
      description:
        'Usos posibles de IA en un inventario: clasificación, asistencia a lectura, validación y detección de inconsistencias. No elimina errores ni reemplaza la visión.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Inteligencia artificial en inventarios', group: 'innovacion' },
  },
  {
    id: 'innovation-drones',
    path: '/innovacion/drones-inventarios',
    loc: '/innovacion/drones-inventarios/',
    pageType: 'resource',
    breadcrumbLabels: ['Innovación', 'Drones en inventarios'],
    seo: {
      title: 'Drones en inventarios: integración técnica y límites',
      description:
        'Cómo se integra un dron al inventario: visión, validación y límites de interiores. Distinto del servicio comercial y de la guía de funcionamiento.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Drones en inventarios', group: 'innovacion' },
  },
  {
    id: 'innovation-vision',
    path: '/innovacion/vision-artificial',
    loc: '/innovacion/vision-artificial/',
    pageType: 'resource',
    breadcrumbLabels: ['Innovación', 'Visión artificial'],
    seo: {
      title: 'Visión artificial en inventarios físicos',
      description:
        'Qué hace la visión artificial en un inventario: captura, detección, lectura, asociación a ubicación y validación humana. No equivale a un conteo completo.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Visión artificial', group: 'innovacion' },
  },
  {
    id: 'innovation-ocr',
    path: '/innovacion/ocr-inventarios',
    loc: '/innovacion/ocr-inventarios/',
    pageType: 'resource',
    breadcrumbLabels: ['Innovación', 'OCR en inventarios'],
    seo: {
      title: 'OCR en inventarios físicos',
      description:
        'Qué es OCR en un inventario, qué puede leer y cuándo falla. No es IA, no es visión completa y no es un inventario automático. Sin porcentajes de precisión.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'OCR en inventarios', group: 'innovacion' },
  },
  {
    id: 'innovation-etiquetas',
    path: '/innovacion/etiquetas-inteligentes',
    loc: '/innovacion/etiquetas-inteligentes/',
    pageType: 'resource',
    breadcrumbLabels: ['Innovación', 'Etiquetas e identificación'],
    seo: {
      title: 'Etiquetas e identificación en el inventario',
      description:
        'Identificación de ítem y ubicación con códigos, etiquetas impresas y QR. Sin afirmar RFID u otros hardwares no documentados.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Etiquetas e identificación', group: 'innovacion' },
  },
  {
    id: 'innovation-mobile-offline',
    path: '/innovacion/tecnologia-movil-offline',
    loc: '/innovacion/tecnologia-movil-offline/',
    pageType: 'resource',
    breadcrumbLabels: ['Innovación', 'Tecnología móvil y offline'],
    seo: {
      title: 'Tecnología móvil y captura offline en inventarios',
      description:
        'Captura de inventario sin conectividad: almacén local, sincronización posterior y límites. Sin garantías de que ningún dato se pierda.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Tecnología móvil y offline', group: 'innovacion' },
  },
  {
    id: 'innovation-tiempo-real',
    path: '/innovacion/inventarios-fisicos-tiempo-real',
    loc: '/innovacion/inventarios-fisicos-tiempo-real/',
    pageType: 'resource',
    breadcrumbLabels: ['Innovación', 'Inventarios en tiempo real'],
    seo: {
      title: 'Qué significa un inventario físico en tiempo real',
      description:
        'Tiempo real no es una sola cosa: captura durante operación, avance cercano al evento, cíclicos, ERP/WMS o consolidación posterior. Sin sync instantánea no documentada.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Inventarios en tiempo real', group: 'innovacion' },
  },
  {
    id: 'research-metodologia',
    path: '/investigacion/metodologia-inventarios',
    loc: '/investigacion/metodologia-inventarios/',
    pageType: 'resource',
    breadcrumbLabels: ['Metodología de inventarios'],
    seo: {
      title: 'Metodología de un inventario físico',
      description:
        'Ciclo metodológico de un inventario: preparación, alcance, zonas, captura, validación, reconteo, diferencias, trazabilidad y entregables. Sin certificación ni patente.',
      ogType: 'article',
      robots: 'index, follow',
      ogImage: defaultOgImage,
    },
    navigation: { label: 'Metodología de inventarios', group: 'investigacion' },
  },
] as const satisfies readonly PublishedRoute[];

export type RouteId = (typeof publishedRoutes)[number]['id'];

const routes: readonly PublishedRoute[] = publishedRoutes;

/**
 * Hub paths by content group.
 * Only register a hub in `publishedRoutes` when it already has ≥2 indexable children
 * (a single child is not enough to publish a CollectionPage).
 * `/investigacion/` stays mapped here so it can be reactivated when studies/benchmarks exist.
 */
export const HUB_PATH_BY_GROUP: Record<ContentGroup, { path: string; loc: string }> = {
  servicios: { path: '/servicios', loc: '/servicios/' },
  industrias: { path: '/industrias', loc: '/industrias/' },
  recursos: { path: '/recursos', loc: '/recursos/' },
  'buenas-practicas': { path: '/buenas-practicas', loc: '/buenas-practicas/' },
  innovacion: { path: '/innovacion', loc: '/innovacion/' },
  investigacion: { path: '/investigacion', loc: '/investigacion/' },
};

/** Hub groups with infrastructure ready but no indexable CollectionPage yet. */
export const FUTURE_HUB_GROUPS: readonly ContentGroup[] = ['investigacion'];

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
