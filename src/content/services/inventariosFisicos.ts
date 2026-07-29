import type { ServicePageContent } from '@/content/types';

export const inventariosFisicosContent: ServicePageContent = {
  kind: 'service',
  eyebrow: 'Servicio',
  h1: 'Inventarios físicos profesionales para empresas',
  summary:
    'Dinamic Systems planifica y ejecuta inventarios físicos con metodología operativa, supervisión en campo y trazabilidad digital para que la empresa cuente con resultados auditables y accionables.',
  sections: [
    {
      id: 'que-es',
      heading: 'Qué incluye el inventario físico',
      body: [
        'El inventario físico es el relevamiento sistemático de existencias en tiendas, depósitos o centros de distribución. Nuestro equipo organiza el operativo, define el alcance por ubicación y registra cada captura con trazabilidad para su posterior análisis.',
        'El servicio está pensado para empresas de retail, logística y distribución que necesitan exactitud de stock, control por ubicación y evidencia para auditoría interna o externa.',
      ],
    },
    {
      id: 'planificacion',
      heading: 'Planificación del operativo',
      body: [
        'Antes del conteo relevamos la infraestructura logística, tipos de carga, zonas críticas y ventanas horarias. Con esa información armamos el cronograma, la dotación y los criterios de cobertura.',
        'La planificación busca reducir interrupciones: se acuerdan cortes de movimiento, zonas prioritarias y el orden de avance para mantener el control operativo durante el inventario.',
      ],
    },
    {
      id: 'ejecucion',
      heading: 'Conteo, reconteo y supervisión',
      body: [
        'El conteo se ejecuta por ubicación con personal capacitado y herramientas de captura. Cuando aparecen diferencias, se activan reconteos acotados para validar el dato antes del cierre.',
        'La supervisión en campo controla avance, cobertura y calidad del registro. El objetivo es un relevamiento consistente, no un número promocional de precisión.',
      ],
    },
    {
      id: 'cierre',
      heading: 'Conciliación y entrega de resultados',
      body: [
        'Al finalizar se consolidan capturas, se analizan desvíos y se preparan reportes orientados a auditoría y decisión operativa. La empresa recibe información trazable por sector o ubicación según el alcance acordado.',
        'Si el proceso lo requiere, acompañamos la lectura de resultados para priorizar ajustes de stock y mejoras de control.',
      ],
    },
  ],
  benefits: [
    {
      title: 'Metodología estructurada',
      description: 'Diagnóstico, planificación, ejecución y cierre con criterios claros de cobertura.',
    },
    {
      title: 'Trazabilidad digital',
      description: 'Registro de capturas para seguimiento y auditoría posterior.',
    },
    {
      title: 'Adaptado a cada operación',
      description: 'Alcance definido según retail, depósito o centro de distribución.',
    },
    {
      title: 'Resultados accionables',
      description: 'Reportes pensados para conciliar stock y mejorar el control operativo.',
    },
  ],
  steps: [
    {
      title: 'Diagnóstico y alcance',
      description: 'Relevamos operación, ubicaciones y requerimientos del inventario.',
    },
    {
      title: 'Plan operativo',
      description: 'Definimos cronograma, recursos y reglas de movimiento durante el conteo.',
    },
    {
      title: 'Ejecución en campo',
      description: 'Conteo físico, captura digital, supervisión y reconteos cuando corresponde.',
    },
    {
      title: 'Conciliación y entrega',
      description: 'Análisis de diferencias y reportes auditables para la empresa.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios para depósitos y centros de distribución',
      to: '/industrias/depositos-centros-distribucion/',
      description: 'Cómo se adapta el inventario físico a racks, pallets y posiciones.',
    },
    {
      label: 'Inventarios para retail y cadenas',
      to: '/industrias/retail-cadenas-sucursales/',
      description: 'Coordinación de conteos en salón, depósito interno y múltiples locales.',
    },
    {
      label: 'Inventarios cíclicos',
      to: '/servicios/inventarios-ciclicos/',
      description: 'Conteos periódicos por criticidad o rotación.',
    },
    {
      label: 'Cómo realizar un inventario físico',
      to: '/recursos/como-realizar-un-inventario-fisico/',
      description: 'Guía paso a paso de preparación, conteo y cierre.',
    },
    {
      label: 'Contactar al equipo',
      to: '/#contacto',
      description: 'Contanos sobre tu operación para evaluar un inventario.',
    },
  ],
  cta: {
    title: '¿Necesitás un inventario físico en tu operación?',
    description:
      'Coordinemos una reunión para analizar alcance, ventanas operativas y la mejor forma de ejecutar el conteo.',
    primaryLabel: 'Solicitar reunión',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios con drones',
    secondaryTo: '/servicios/inventarios-con-drones/',
  },
};
