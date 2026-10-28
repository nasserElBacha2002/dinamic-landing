import type { HubPageContent } from '@/content/types';

export const recursosHubContent: HubPageContent = {
  kind: 'hub',
  group: 'recursos',
  eyebrow: 'Recursos',
  h1: 'Guías sobre inventarios físicos',
  summary:
    'Guías para preguntas concretas de operación: cómo se cuenta, por qué no cierra el stock, de qué dependen tiempo y costo, y cuándo conviene contratar. Cada URL responde una intención distinta.',
  sections: [
    {
      id: 'uso',
      heading: 'Cómo usar estas guías',
      body: [
        'Están agrupadas por tipo de decisión: preparar el operativo, controlar diferencias, estimar tiempo, personal y costo, elegir si contratar, y elegir medio de captura.',
        'No reemplazan un relevamiento a medida. Si el siguiente paso es ejecutar un inventario, hay que evaluar alcance, fechas y condiciones del sitio.',
      ],
    },
  ],
  childGroups: [
    {
      id: 'preparacion',
      title: 'Planificación y preparación',
      routeIds: [
        'resource-inventario-fisico',
        'resource-preparar-deposito',
        'resource-checklist',
        'resource-general-vs-ciclico',
      ],
    },
    {
      id: 'diferencias',
      title: 'Diferencias y control',
      routeIds: ['resource-por-que-no-coincide', 'resource-reducir-diferencias'],
    },
    {
      id: 'costos',
      title: 'Costos y tiempos',
      routeIds: [
        'resource-cuanto-tarda',
        'resource-calcular-personal',
        'resource-cuanto-cuesta',
        'resource-cotizar',
        'resource-sin-detener',
      ],
    },
    {
      id: 'contratacion',
      title: 'Decisiones de contratación',
      routeIds: ['resource-interno-vs-tercerizado', 'resource-elegir-empresa'],
    },
    {
      id: 'tecnologia',
      title: 'Tecnología',
      routeIds: ['resource-como-funcionan-drones', 'resource-manual-vs-tecnologico'],
    },
  ],
  relatedLinks: [],
  cta: {
    title: '¿Preferís evaluar el inventario con el equipo?',
    description: 'Las guías explican el proceso; la ejecución se define según cada depósito u operación.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver servicios',
    secondaryTo: '/servicios/',
  },
};
