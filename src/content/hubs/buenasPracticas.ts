import type { HubPageContent } from '@/content/types';

export const buenasPracticasHubContent: HubPageContent = {
  kind: 'hub',
  group: 'buenas-practicas',
  eyebrow: 'Buenas prácticas',
  h1: 'Buenas prácticas de inventario físico',
  summary:
    'Prácticas operativas para reconteos, control de posiciones, comunicación durante el inventario y un cierre que se pueda reconstruir. No es un blog: son páginas con una intención cada una, publicadas cuando hay contenido real.',
  sections: [
    {
      id: 'alcance',
      heading: 'Qué cubren estas prácticas',
      body: [
        'Recontear con criterio, registrar pasillo y posición, hablar con el interlocutor del operativo y dejar un resultado auditable. Cada URL responde una pregunta distinta; no se copian entre sí.',
        'No reemplazan el servicio de inventarios físicos ni la auditoría. Si el objetivo es ejecutar un conteo, el siguiente paso sigue siendo evaluar alcance y fechas.',
      ],
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
