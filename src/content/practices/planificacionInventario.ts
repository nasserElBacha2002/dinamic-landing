import type { ResourcePageContent } from '@/content/types';

export const planificacionInventarioContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Buena práctica',
  h1: 'Planificación de un inventario físico',
  summary:
    'Planificar es diseñar el operativo antes del primer pasillo: alcance, zonas, calendario, personal, layout, stock en movimiento y responsables. No es lo mismo que preparar el depósito: eso es acondicionar el sitio. Acá se decide cómo se va a contar.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'La planificación fija qué universo entra, cómo se parte el predio, cuándo se cuenta, quién cubre cada zona, qué pasa con el stock que se mueve y quién decide una excepción. Sin eso, el equipo improvisa en campo y el cierre no tiene contra qué medirse.',
        'Preparar el depósito (orden, etiquetas, devoluciones) es un insumo de este diseño, no el diseño.',
      ],
    },
    {
      id: 'piezas',
      heading: 'Qué hay que dejar escrito',
      body: [
        'Alcance: SKU, ubicaciones, playa, cuarentena, stock de terceros.',
        'Zonas: recortes que se pueden cerrar en un turno sin pisarse.',
        'Calendario: ventanas, turnos, si la operación se detiene o no.',
        'Personal: cantidad, supervisión, especialización (altura, frío, bultos). Sin ratios universales: el número sale del mapa, no de una fórmula.',
        'Layout: pasillos, altura, muelles, puntos ciegos.',
        'Stock en movimiento: regla de documentos y de pallets que cruzan zonas.',
        'Responsables: interlocutor del cliente, dueño de piso, canal de incidencias.',
      ],
    },
    {
      id: 'relacion',
      heading: 'Relación con la metodología',
      body: [
        'La metodología es el ciclo del dato (captura → reconteo → rastro). La planificación es el encuadre temporal y humano para que ese ciclo quepa. Un plan sin ciclo produce un recuento; un ciclo sin plan produce gente en el pasillo equivocado.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Planificar el inventario es lo mismo que preparar el depósito?',
      answer:
        'No. Preparar el depósito es acondicionar el sitio (orden, identificación, movimientos). Planificar es diseñar alcance, zonas, calendario, personal y responsables. Se necesitan las dos; no se sustituyen.',
    },
  ],
  relatedLinks: [
    {
      label: 'Cómo preparar un depósito para un inventario',
      to: '/recursos/como-preparar-un-deposito-para-un-inventario/',
      description: 'Acondicionamiento del sitio, distinto de este diseño.',
    },
    {
      label: 'Metodología de inventarios',
      to: '/investigacion/metodologia-inventarios/',
      description: 'El ciclo del dato que el plan tiene que hacer posible.',
    },
    {
      label: 'Checklist de inventario físico',
      to: '/recursos/checklist-inventario-fisico/',
      description: 'Lista de control de que este plan exista por escrito.',
    },
  ],
  cta: {
    title: '¿Todavía no está el mapa de zonas ni la ventana?',
    description: 'Eso es planificación, no un detalle de último momento. Se puede armar con el layout y los responsables antes de contar.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver cómo preparar el depósito',
    secondaryTo: '/recursos/como-preparar-un-deposito-para-un-inventario/',
  },
};
