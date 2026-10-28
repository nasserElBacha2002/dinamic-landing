import type { ResourcePageContent } from '@/content/types';

export const cotizarInventarioFisicoContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Qué datos hacen falta para cotizar un inventario físico',
  summary:
    'Una cotización usable parte de datos del sitio, no de un formulario genérico. Esta guía lista qué conviene tener a mano antes de pedir una propuesta: ubicación, tamaño, posiciones, SKU, layout, horarios y entregables. No reemplaza el contacto comercial.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Para cotizar bien hace falta describir el predio y el objetivo: dónde está, qué tan grande es, cuántas posiciones o pallets hay, cuántos SKU, en qué unidad se cuenta, cómo es el layout, en qué horarios se puede trabajar, si hay varias sedes, qué tecnología o restricciones hay y qué informe se espera.',
        'Con tres renglones (“un depósito en el AMBA, para la semana que viene”) se puede abrir una conversación, pero no se puede defender un número. Esta página es la preparación de esa conversación.',
      ],
    },
    {
      id: 'datos',
      heading: 'Datos que suelen pedir las propuestas',
      body: [
        'Ubicación y acceso: localidad, cantidad de sedes, restricciones de ingreso, EPP, inductión.',
        'Tamaño y mapa: metros, altura, pasillos, cámaras, mezzanine, playa. Un croquis o fotos de un pasillo típico ayudan más que un adjetivo (“grande”).',
        'Posiciones, SKU y unidades: huecos, pallets, bultos sueltos; si el master está en unidades, cajas o kilos; si hay que abrir bultos.',
        'Layout y operación: racks selectivos, drive-in, piso, picking, cross-dock, stock de terceros, lotes.',
        'Horarios y ventanas: si se detiene el depósito, si hay turno noche, si la tienda cierra un domingo.',
        'Tecnología y entregables: si hay Wi-Fi, si se espera archivo para el ERP, desglose por ubicación, plazos de informe.',
        'Restricciones: mercadería peligrosa, frío, alto valor, no fotografiar, no usar drones, no bloquear un muelle.',
      ],
    },
    {
      id: 'minimo',
      heading: 'Qué alcanza para el primer contacto',
      body: [
        'Si todavía no está el mapa completo, alcanzán localidad, tipo de operación (depósito, CD, retail, operador), volumen aproximado en posiciones o pallets, fecha objetivo y si la operación puede detenerse. Eso permite decir si el pedido es evaluable y qué falta para cotizar en serio.',
        'El formulario de contacto del sitio pide exactamente ese mínimo. Esta guía no lo duplica: explica por qué esos campos existen y qué conviene agregar después.',
      ],
    },
    {
      id: 'calidad',
      heading: 'Cómo se usa en una cotización real',
      body: [
        'Con esos datos se arma un supuesto de recorrido, dotación y reconteo. Si en la visita el predio no coincide (más altura, más suelto, menos preparación), la propuesta se revisa. Es preferible decirlo antes que pelear el alcance a mitad del conteo.',
        'Si hay varias sucursales, listarlas. Un “más o menos veinte locales” no permite ni calendario ni desplazamiento.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Cómo lo usa Dinamic Systems',
      body: [
        'La evaluación comercial de Dinamic Systems parte de esos mismos datos. No se cotiza un inventario “genérico argentino”. El siguiente paso es el formulario o un mail con el breve; no un precio publicado en esta URL.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Esta guía reemplaza el formulario de contacto?',
      answer:
        'No. Es la preparación del pedido. La solicitud sigue en el formulario o en el mail, con localidad, tipo de operación, volumen aproximado y fecha.',
    },
  ],
  relatedLinks: [
    {
      label: 'Cuánto cuesta un inventario físico',
      to: '/recursos/cuanto-cuesta-un-inventario-fisico/',
      description: 'Variables de costo una vez que el alcance está descrito.',
    },
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Qué se está cotizando como servicio.',
    },
    {
      label: 'Cómo calcular el personal de un inventario',
      to: '/recursos/como-calcular-personal-inventario/',
      description: 'La dotación se estima; no se cotiza con un ratio genérico.',
    },
  ],
  cta: {
    title: '¿Ya tenés el breve del sitio?',
    description: 'Con localidad, tipo de operación, volumen aproximado y fecha se puede evaluar el alcance.',
    primaryLabel: 'Ir al formulario de contacto',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver variables de costo',
    secondaryTo: '/recursos/cuanto-cuesta-un-inventario-fisico/',
  },
};
