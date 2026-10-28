import type { ResourcePageContent } from '@/content/types';

export const comunicacionClienteInventarioContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Buena práctica',
  h1: 'Comunicación con el cliente durante un inventario',
  summary:
    'La comunicación útil en un inventario no es un boletín corporativo: es quién prepara el sitio, quién autoriza un movimiento, cómo se avisa una incidencia, cómo se muestran las diferencias y qué se entrega al cierre. Esta práctica describe ese hilo operativo.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Antes del conteo hay que acordar responsables, alcance, reglas de movimiento y canal de incidencias. Durante, hay que avisar bloqueos, mercadería sin identificar y desvíos grandes sin esperar al informe final. Al cierre, hay que decir qué se reconteó, qué quedó pendiente y en qué formato llega el entregable.',
        '“Acompañamos al cliente” no es un procedimiento. El procedimiento es una lista de contactos, horarios y decisiones que alguien puede tomar a las 2 de la mañana.',
      ],
    },
    {
      id: 'antes',
      heading: 'Preparación: qué hay que dejar escrito',
      body: [
        'Dueño del inventario del lado del cliente (operaciones, auditoría o ambos). Interlocutor en piso. Qué se cuenta y qué no. Qué pasa con playa, cuarentena y devoluciones. Quién puede autorizar un despacho de excepción. Dónde se publica el avance (un chat, un tablero, un mail al cierre de turno).',
        'Si eso no está, el equipo de conteo improvisa y el cliente se entera por un faltante en el WMS al día siguiente.',
      ],
    },
    {
      id: 'durante',
      heading: 'Durante: incidencias, diferencias y avances',
      body: [
        'Incidencias: pasillo bloqueado, etiqueta ilegible, pallet inestable, personal de planta que mueve un hueco ya contado. Se avisa al interlocutor, se registra, se decide si se espera o se salta con marca.',
        'Diferencias: no todas merecen una llamada. Las que sí —alto valor, cliente tercero, cero contra hueco lleno— se muestran en caliente para recontear o para buscar el documento, no para “no asustar”.',
        'Avances: porcentaje de zonas cerradas, no de “productividad inspiradora”. Sirve para saber si el turno llega o si hay que recortar alcance a tiempo.',
      ],
    },
    {
      id: 'cierre',
      heading: 'Cierre y entregables',
      body: [
        'El cliente debería saber cuándo deja de ser “borrador” el archivo, qué reconteos quedaron hechos, qué ítems se escalaron y quién firma el cierre. Un PDF sin esa lectura no cierra la conversación: la posterga.',
        'Si hay varias sucursales, cada local tiene su interlocutor y su cierre; la consolidación no mezcla evidencias.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Cómo lo practica Dinamic Systems',
      body: [
        'En los operativos contratados se define un interlocutor, se acuerdan ventanas y se entregan resultados según el alcance. Esta página no vende “experiencia de cliente”: describe el hilo que hay que tener para que el inventario no se caiga por un movimiento no avisado.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Quién es el interlocutor en un operador logístico?',
      answer:
        'Hay que decirlo antes: el operador, el dueño de la mercadería, o ambos con reportes distintos. Mezclarlos es un error de comunicación y de inventario.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Qué incluye el operativo que hay que comunicar.',
    },
    {
      label: 'Resultados auditables',
      to: '/buenas-practicas/resultados-auditables/',
      description: 'El cierre es parte de la comunicación, no un archivo suelto.',
    },
    {
      label: 'Cómo preparar un depósito para un inventario',
      to: '/recursos/como-preparar-un-deposito-para-un-inventario/',
      description: 'Lo que el cliente tiene que dejar listo antes del primer pasillo.',
    },
  ],
  cta: {
    title: '¿El próximo inventario necesita un interlocutor y un canal claros?',
    description: 'Se puede evaluar el operativo y acordar responsables, ventanas e incidencias antes de contar.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver cómo preparar el depósito',
    secondaryTo: '/recursos/como-preparar-un-deposito-para-un-inventario/',
  },
};
