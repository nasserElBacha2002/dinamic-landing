import type { ServicePageContent } from '@/content/types';

export const auditoriaDeInventariosContent: ServicePageContent = {
  kind: 'service',
  eyebrow: 'Servicio',
  h1: 'Auditoría de inventarios para control y evidencia',
  summary:
    'Dinamic Systems realiza auditoría de inventarios con muestreo, revisión de procedimientos, reconteos independientes y reportes con evidencia, para control interno o externo.',
  sections: [
    {
      id: 'proposito',
      heading: 'Qué ofrece la auditoría de inventarios',
      body: [
        'Aporta una mirada independiente sobre el stock y los procedimientos de conteo. Puede enfocarse en un depósito, una red de sucursales o un universo muestral acordado.',
        'No es lo mismo que un inventario operativo completo: el énfasis está en el control, la calidad del proceso y la trazabilidad de las diferencias.',
      ],
    },
    {
      id: 'metodo',
      heading: 'Muestreo, procedimientos y reconteos',
      body: [
        'Según el alcance se define un plan de muestreo o de cobertura parcial, se revisan procedimientos existentes y se ejecutan conteos o reconteos independientes donde corresponde.',
        'Las diferencias se analizan con criterio operativo: errores de ubicación, movimientos no registrados, identificación deficiente o fallas de proceso.',
      ],
    },
    {
      id: 'evidencia',
      heading: 'Evidencia, documentación e informes',
      body: [
        'Cada hallazgo se respalda con registros del operativo y criterios claros de interpretación. Los informes resumen cobertura, desvíos relevantes y recomendaciones de mejora.',
        'La entrega se orienta a auditoría interna, gerencia o terceros que necesiten evidencia del estado del control de inventarios.',
      ],
    },
  ],
  benefits: [
    {
      title: 'Control independiente',
      description: 'Mirada externa al proceso de conteo y al stock relevado.',
    },
    {
      title: 'Evidencia documentada',
      description: 'Registros y reportes útiles para seguimiento y decisión.',
    },
    {
      title: 'Enfoque en procedimientos',
      description: 'Revisión de cómo se cuenta, no solo del número final.',
    },
    {
      title: 'Alcance flexible',
      description: 'Muestreo o cobertura parcial según el objetivo de control.',
    },
  ],
  steps: [
    {
      title: 'Definir objetivo de control',
      description: 'Universo, riesgo y tipo de evidencia requerida.',
    },
    {
      title: 'Plan de auditoría',
      description: 'Muestreo, zonas, criterios y calendario.',
    },
    {
      title: 'Ejecución en campo',
      description: 'Conteos, reconteos y revisión de procedimientos.',
    },
    {
      title: 'Informe y recomendaciones',
      description: 'Hallazgos priorizados y documentación entregable.',
    },
  ],
  faq: [
    {
      question: '¿Cuál es la diferencia entre auditar inventario y realizar un conteo completo?',
      answer:
        'La auditoría toma una muestra o un universo de control y revisa procedimientos con mirada independiente. El inventario físico cubre el alcance operativo acordado, no solo una muestra.',
    },
    {
      question: '¿Qué cubre el muestreo en una auditoría de inventarios?',
      answer:
        'Zonas, SKU o ubicaciones definidas por riesgo. Sobre ese recorte se cuentan o recontraen de forma independiente y se documentan hallazgos.',
    },
    {
      question: '¿Qué evidencia entrega una auditoría?',
      answer:
        'Cobertura del plan, diferencias relevadas, lectura de procedimientos y un informe usable por control interno, gerencia o un tercero.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Relevamiento operativo completo o por alcance acordado.',
    },
    {
      label: 'Inventarios cíclicos',
      to: '/servicios/inventarios-ciclicos/',
      description: 'Programas periódicos de conteo por segmentos.',
    },
    {
      label: 'Cómo realizar un inventario físico',
      to: '/recursos/como-realizar-un-inventario-fisico/',
      description: 'Proceso operativo de conteo completo, distinto del muestreo de auditoría.',
    },
  ],
  cta: {
    title: '¿Necesitás una auditoría de inventarios?',
    description: 'Contanos el alcance y el tipo de evidencia que requiere tu organización.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios físicos',
    secondaryTo: '/servicios/inventarios-fisicos/',
  },
};
