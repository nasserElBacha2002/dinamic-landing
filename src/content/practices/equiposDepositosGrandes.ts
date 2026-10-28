import type { ResourcePageContent } from '@/content/types';

export const equiposDepositosGrandesContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Buena práctica',
  h1: 'Equipos de inventario en depósitos grandes',
  summary:
    'En un predio grande el problema no es “más gente”, es cómo se parte, se supervisa y se coordina. Esta página cubre dimensionamiento, zonas, especialización y control. No publica ratios de operadores por SKU: ese número no es transferible.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Un depósito grande se inventaría con equipos asignados a zonas cerrables, con supervisión que no cuenta el mismo hueco, y con un canal para cuando un pallet cruza de zona. Meter más operadores en el mismo pasillo acelera el desorden, no el cierre.',
        'El tamaño del equipo sale del mapa (posiciones, altura, bultos, ventana), no de una regla “X personas cada Y SKU”.',
      ],
    },
    {
      id: 'diseno',
      heading: 'Distribución, supervisión, especialización',
      body: [
        'Distribución: un equipo, una zona, un criterio de “zona cerrada”. Sin eso, el reconteo no sabe a quién preguntar.',
        'Supervisión: alguien recorre el plan, no el pallet. Libera reconteos y decide excepciones.',
        'Especialización: altura, frío, mercadería suelta, stock de terceros. Mezclar esos oficios en la misma cuadrilla sin regla suele omitir el trabajo más lento.',
        'Coordinación: horarios de muelle, relevos, y qué pasa si una zona no termina en el turno —se recorta alcance o se extiende, no se “termina igual”.',
      ],
    },
    {
      id: 'limites',
      heading: 'Por qué no hay un ratio universal',
      body: [
        'Dos CDs con el mismo número de posiciones no se recorren igual si uno es selectivo alto y el otro es piso. Publicar un operador-por-SKU sería un dato falso. El dimensionamiento es un resultado del plan, no un input mágico.',
      ],
    },
  ],
  relatedLinks: [
    {
      label: 'Planificación de un inventario',
      to: '/buenas-practicas/planificacion-inventario/',
      description: 'De dónde sale el mapa que dimensiona el equipo.',
    },
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'El operativo que hay que staffear.',
    },
    {
      label: 'Cómo calcular el personal de un inventario',
      to: '/recursos/como-calcular-personal-inventario/',
      description: 'Cómo se estima el tamaño; acá se parte y se supervisa.',
    },
  ],
  cta: {
    title: '¿El predio no entra en una sola cuadrilla?',
    description: 'Se parte en zonas cerrables y se dimensiona con el layout, no con una fórmula de SKU.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver planificación',
    secondaryTo: '/buenas-practicas/planificacion-inventario/',
  },
};
