import type { ResourcePageContent } from '@/content/types';

export const inventarioGeneralVsCiclicoContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Inventario general vs. inventario cíclico',
  summary:
    'Ambos enfoques controlan el stock, pero difieren en alcance, frecuencia e interrupción operativa. Esta comparación ayuda a elegir —o combinar— según el contexto, sin declarar un ganador universal.',
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'definiciones',
      heading: 'Definiciones breves',
      body: [
        'El inventario general releva un universo amplio acordado (por ejemplo, un depósito completo o una red de locales) en un operativo concentrado. El cíclico reparte conteos periódicos sobre segmentos priorizados.',
        'Ninguno garantiza por sí solo “precisión total”: la calidad depende de preparación, control de movimientos, cobertura y conciliación.',
      ],
    },
    {
      id: 'comparacion',
      heading: 'Alcance, frecuencia e interrupción',
      body: [
        'El general concentra esfuerzo e interrupción en una ventana; ofrece un cierre integral del alcance. El cíclico diluye el esfuerzo en el tiempo y suele interrumpir menos, a cambio de no cubrir todo el universo en cada ciclo.',
        'El costo operativo y la preparación también cambian: el general exige más coordinación puntual; el cíclico exige disciplina de calendario y seguimiento del programa.',
      ],
    },
    {
      id: 'casos',
      heading: 'Cuándo conviene cada uno',
      body: [
        'Un inventario general suele preferirse ante auditorías, cambios de sistema, cierres o cuando hay incertidumbre alta sobre el stock total. El cíclico aporta control continuo sobre SKU o zonas críticas.',
        'En la práctica muchas operaciones combinan ambos: cíclicos para seguimiento y un general cuando el riesgo o el requerimiento lo justifican.',
      ],
    },
    {
      id: 'limites',
      heading: 'Ventajas y limitaciones',
      body: [
        'Ventaja del general: foto integral del alcance. Limitación: mayor impacto puntual. Ventaja del cíclico: continuidad y menor disrupción por ciclo. Limitación: cobertura parcial en cada conteo y dependencia de la priorización.',
        'La decisión correcta es contextual: sector, criticidad, capacidad operativa y requisitos de evidencia.',
      ],
    },
  ],
  steps: [
    {
      title: 'Clarificar el objetivo',
      description: 'Auditoría, control continuo, cierre o mejora operativa.',
    },
    {
      title: 'Evaluar interrupción aceptable',
      description: 'Ventanas, personal y movimiento de mercadería.',
    },
    {
      title: 'Definir universo y prioridad',
      description: 'Qué debe cubrirse ahora y qué puede ciclarse.',
    },
    {
      title: 'Elegir o combinar modalidades',
      description: 'General, cíclico o un programa mixto.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios cíclicos',
      to: '/servicios/inventarios-ciclicos/',
    },
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
    },
    {
      label: 'Cómo realizar un inventario físico',
      to: '/recursos/como-realizar-un-inventario-fisico/',
    },
    {
      label: 'Contacto',
      to: '/#contacto',
    },
  ],
  cta: {
    title: '¿No estás seguro qué modalidad usar?',
    description: 'Revisemos juntos el alcance, el riesgo y la ventana operativa disponible.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios cíclicos',
    secondaryTo: '/servicios/inventarios-ciclicos/',
  },
};
