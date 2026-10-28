import type { ServicePageContent } from '@/content/types';

export const inventariosFisicosContent: ServicePageContent = {
  kind: 'service',
  eyebrow: 'Servicio',
  h1: 'Inventarios físicos profesionales para empresas',
  summary:
    'Dinamic Systems realiza inventarios físicos para depósitos, centros de distribución, retail y operaciones logísticas, con planificación, conteo por ubicación, reconteos, trazabilidad y entrega de resultados auditables.',
  sections: [
    {
      id: 'que-es',
      heading: 'Qué ofrece Dinamic Systems',
      body: [
        'Planificamos y ejecutamos el inventario físico según el alcance de cada operación: qué se cuenta, en qué ubicaciones y con qué reglas de movimiento. El trabajo está pensado para empresas que necesitan exactitud de stock y evidencia para control interno o auditoría.',
        'El servicio se aplica a depósitos y centros de distribución, cadenas de retail y operaciones logísticas. El conteo se organiza por ubicación; cuando aparecen diferencias se validan con reconteos acotados antes del cierre.',
      ],
    },
    {
      id: 'planificacion',
      heading: 'Qué incluye el operativo',
      body: [
        'Antes del conteo relevamos infraestructura, tipos de carga, zonas críticas y ventanas horarias. Con esa información se define cronograma, dotación y criterios de cobertura.',
        'La planificación busca reducir interrupciones: se acuerdan cortes de movimiento, zonas prioritarias y el orden de avance para mantener el control durante el inventario.',
      ],
    },
    {
      id: 'ejecucion',
      heading: 'Cómo se ejecuta: conteo, reconteo y supervisión',
      body: [
        'El conteo se ejecuta por ubicación con personal capacitado y captura digital. La supervisión en campo controla avance, cobertura y calidad del registro.',
        'Cuando aparecen diferencias, se activan reconteos acotados para validar el dato antes del cierre. El objetivo es un relevamiento consistente, no un número promocional de precisión.',
      ],
    },
    {
      id: 'cierre',
      heading: 'Qué recibe el cliente',
      body: [
        'El servicio integra plan de trabajo, ejecución supervisada, validación de diferencias e informe final. Al cierre se consolidan capturas y se entregan reportes orientados a auditoría y decisión operativa, con trazabilidad por sector o ubicación según el alcance acordado.',
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
  faq: [
    {
      question: '¿Qué incluye un inventario físico profesional?',
      answer:
        'Planificación del alcance, conteo por ubicación, supervisión en campo, reconteos cuando aparecen diferencias, trazabilidad de capturas y un informe según lo acordado.',
    },
    {
      question: '¿En qué tipos de operación se aplica?',
      answer:
        'Depósitos, centros de distribución, retail y operaciones logísticas. El plan se arma según layout, volumen y ventanas horarias de cada sitio.',
    },
    {
      question: '¿Qué recibe la empresa al cierre?',
      answer:
        'Resultados consolidables por sector o ubicación, con las diferencias validadas en reconteo cuando correspondió, para conciliar stock y auditoría.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios para depósitos y centros de distribución',
      to: '/industrias/depositos-centros-distribucion/',
      description: 'Cómo se adapta el inventario físico a racks, pallets y posiciones.',
    },
    {
      label: 'Inventarios con drones',
      to: '/servicios/inventarios-con-drones/',
      description: 'Modalidad complementaria para posiciones en altura.',
    },
    {
      label: 'Inventarios cíclicos',
      to: '/servicios/inventarios-ciclicos/',
      description: 'Conteos periódicos por criticidad o rotación.',
    },
    {
      label: 'Auditoría de inventarios',
      to: '/servicios/auditoria-de-inventarios/',
      description: 'Control independiente y evidencia documentada.',
    },
  ],
  cta: {
    title: '¿Necesitás un inventario físico en tu operación?',
    description:
      'Coordinemos una reunión para analizar alcance, ventanas operativas y la mejor forma de ejecutar el conteo.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios para depósitos',
    secondaryTo: '/industrias/depositos-centros-distribucion/',
  },
};
