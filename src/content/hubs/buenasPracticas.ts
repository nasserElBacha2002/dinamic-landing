import type { HubPageContent } from '@/content/types';

export const buenasPracticasHubContent: HubPageContent = {
  kind: 'hub',
  group: 'buenas-practicas',
  eyebrow: 'Buenas prácticas',
  h1: 'Buenas prácticas de inventario físico',
  summary:
    'Hábitos de un inventario físico: cómo se planifica, cómo se recorre, cómo se controlan diferencias y cómo se cierra un resultado que se pueda reconstruir. Cada URL cubre un problema operativo distinto.',
  sections: [
    {
      id: 'alcance',
      heading: 'Qué cubren estas prácticas',
      body: [
        'No reemplazan el servicio de inventarios físicos ni la auditoría. Si el objetivo es ejecutar un conteo, el siguiente paso sigue siendo evaluar alcance y fechas.',
      ],
    },
  ],
  childGroups: [
    {
      id: 'planificacion',
      title: 'Planificación',
      routeIds: ['practice-planificacion', 'practice-equipos', 'practice-adaptado'],
    },
    {
      id: 'ejecucion',
      title: 'Ejecución',
      routeIds: ['practice-posiciones', 'practice-duplicados', 'practice-comunicacion'],
    },
    {
      id: 'control',
      title: 'Control y cierre',
      routeIds: ['practice-reconteos', 'practice-resultados-auditables'],
    },
  ],
  relatedLinks: [],
  cta: {
    title: '¿Querés aplicar estas prácticas en un operativo?',
    description: 'Las páginas explican el hábito; la ejecución se define con el sitio, las ventanas y el entregable.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver servicios',
    secondaryTo: '/servicios/',
  },
};
