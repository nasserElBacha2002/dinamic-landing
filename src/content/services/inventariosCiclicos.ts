import type { ServicePageContent } from '@/content/types';

export const inventariosCiclicosContent: ServicePageContent = {
  kind: 'service',
  eyebrow: 'Servicio',
  h1: 'Inventarios cíclicos para control continuo de stock',
  summary:
    'Los inventarios cíclicos permiten contar de forma periódica segmentos definidos del stock —por criticidad, rotación o ubicación— para detectar desvíos sin esperar un inventario general completo.',
  sections: [
    {
      id: 'que-es',
      heading: 'Qué es un inventario cíclico',
      body: [
        'Es un programa de conteos periódicos sobre un alcance acotado: familias, ubicaciones, clientes o SKU críticos. Cada ciclo genera evidencia de cobertura y permite comparar el resultado con el sistema de referencia.',
        'No reemplaza automáticamente a un inventario general: lo complementa. En muchas operaciones conviven ambos según el riesgo, la estacionalidad y los requisitos de auditoría.',
      ],
    },
    {
      id: 'alcance',
      heading: 'Alcance y clasificación',
      body: [
        'El alcance se define con la empresa: qué se cuenta, con qué frecuencia y bajo qué criterios de prioridad (rotación, valor, historial de diferencias o criticidad operativa).',
        'Una clasificación clara evita contar siempre lo mismo y dejar sin cobertura zonas o productos de alto impacto.',
      ],
    },
    {
      id: 'planificacion',
      heading: 'Planificación y menor interrupción',
      body: [
        'Los ciclos se calendarian para reducir impacto en picking, recepción y despacho. Se acuerdan ventanas, zonas y reglas de movimiento durante el conteo.',
        'El seguimiento del programa permite ver avance, pendientes y reprogramaciones sin perder trazabilidad de lo ya relevado.',
      ],
    },
    {
      id: 'diferencias',
      heading: 'Diferencias y relación con el inventario general',
      body: [
        'Ante diferencias se aplican reconteos y análisis acotados. Los hallazgos alimentan ajustes operativos y, cuando corresponde, la planificación de un inventario general.',
        'El inventario cíclico aporta control continuo; el general aporta un cierre integral del universo acordado. La combinación depende del contexto de cada empresa.',
      ],
    },
  ],
  benefits: [
    {
      title: 'Cobertura periódica',
      description: 'Conteos reiterados sobre segmentos priorizados del stock.',
    },
    {
      title: 'Menor disrupción',
      description: 'Alcances acotados y ventanas acordadas con la operación.',
    },
    {
      title: 'Seguimiento del programa',
      description: 'Visibilidad de avance, pendientes y evidencias por ciclo.',
    },
    {
      title: 'Complemento del inventario general',
      description: 'Control continuo sin afirmar un reemplazo universal.',
    },
  ],
  steps: [
    {
      title: 'Definir universo y prioridad',
      description: 'Clasificar ubicaciones o SKU según riesgo y rotación.',
    },
    {
      title: 'Calendario de ciclos',
      description: 'Frecuencia, recursos y reglas de movimiento.',
    },
    {
      title: 'Ejecutar y recontear',
      description: 'Conteo del segmento y validación de diferencias.',
    },
    {
      title: 'Reportar y ajustar',
      description: 'Entrega de resultados y mejora del próximo ciclo.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios físicos profesionales',
      to: '/servicios/inventarios-fisicos/',
      description: 'Cuando el alcance requiere un relevamiento integral.',
    },
    {
      label: 'Inventario general vs. inventario cíclico',
      to: '/recursos/inventario-general-vs-inventario-ciclico/',
      description: 'Comparación de alcance, frecuencia e interrupción.',
    },
    {
      label: 'Auditoría de inventarios',
      to: '/servicios/auditoria-de-inventarios/',
      description: 'Control independiente y evidencia documentada.',
    },
    {
      label: 'Contactar al equipo',
      to: '/#contacto',
    },
  ],
  cta: {
    title: '¿Querés diseñar un programa de inventarios cíclicos?',
    description:
      'Podemos ayudarte a definir alcance, frecuencia y la forma de ejecutar los conteos con trazabilidad.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Comparar general y cíclico',
    secondaryTo: '/recursos/inventario-general-vs-inventario-ciclico/',
  },
};
