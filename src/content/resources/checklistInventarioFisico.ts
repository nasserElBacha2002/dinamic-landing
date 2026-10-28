import type { ResourcePageContent } from '@/content/types';

export const checklistInventarioFisicoContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Checklist de un inventario físico',
  summary:
    'Lista de control para usar en un operativo real: qué tiene que estar escrito antes de contar, qué no puede faltar durante el turno y qué cierra el dato después. No sustituye preparar el depósito, planificar el operativo ni la metodología del ciclo.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Un checklist de inventario físico es una lista de control por etapa —antes, durante y después— que se puede marcar en campo. Sirve para no olvidar alcance, zona, movimiento, reconteo y entregable. No es el diseño del operativo ni el acondicionamiento del predio: esos tienen página propia.',
        'Si un ítem no se puede tildar, el operativo no está listo para esa etapa. Tildar “después” no arregla un alcance que nunca se escribió.',
      ],
    },
    {
      id: 'diferencia',
      heading: 'Qué no es este checklist',
      body: [
        'Preparar el depósito: orden, etiquetas, devoluciones. El checklist pregunta si eso está hecho; no enseña cómo hacerlo.',
        'Planificación: zonas, calendario, personal. El checklist verifica que el plan exista por escrito.',
        'Metodología: el ciclo captura → validación → reconteo → rastro. El checklist no reemplaza ese hilo; apunta a que cada eslabón tenga dueño.',
      ],
    },
  ],
  checklist: [
    {
      id: 'antes',
      title: 'Antes',
      items: [
        'Alcance escrito: qué entra y qué queda afuera (playa, cuarentena, stock de terceros, bultos a abrir).',
        'Responsable del cliente e interlocutor de piso, con un canal de incidencias.',
        'Layout usable: pasillos, altura, muelles, puntos ciegos. Un croquis gana a un adjetivo.',
        'Zonas que se pueden cerrar en un turno sin que dos equipos se pisen.',
        'Regla para stock en movimiento: documentos, pallets que cruzan zona, freeze lógico si existe.',
        'Ubicaciones identificadas, o explícitamente fuera de alcance.',
        'Unidad de conteo acordada: unidad, caja, pallet, kilo. Una sola por familia, no “la que convenga”.',
        'Etiquetas de ítem y de posición legibles, o recorte documentado donde no lo estén.',
        'Accesos, EPP, inducción y restricciones (foto, dron, no bloquear un muelle).',
        'Horarios y si la operación se detiene o no.',
        'Equipo y supervisión asignados por zona —no “la gente que sobre”.',
        'Archivo maestro o corte de sistema a una hora. Sin corte, no hay contra qué conciliar.',
        'Restricciones del sitio: frío, peligroso, alto valor, no fotografiar.',
      ],
    },
    {
      id: 'durante',
      title: 'Durante',
      items: [
        'Cada equipo recorre una zona asignada. El pasillo no es de quien llega primero.',
        'La captura va atada a ubicación (pasillo, posición, nivel, pallet cuando existe).',
        'La identificación se lee, no se completa de memoria.',
        'Incidencias (etiqueta ilegible, hueco bloqueado, movimiento no acordado) salen por el canal definido.',
        'Reconteos según la regla del plan, no “por las dudas” sobre el universo entero.',
        'Movimientos de la ventana quedan registrados: ingreso, egreso, transferencia, picking.',
        'La supervisión recorre el plan, no el mismo hueco que el operador.',
      ],
    },
    {
      id: 'despues',
      title: 'Después',
      items: [
        'Diferencias listadas con ubicación, no un total suelto.',
        'Conciliación contra el master y contra los movimientos de la ventana.',
        'Qué se investiga, qué se recontea y qué se ajusta —por escrito.',
        'Entregable exportable, con el mismo desglose que se usó para cerrar.',
        'Cierre: alcance cubierto, pendientes, y quién da el OK si el cliente lo pidió.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Este checklist reemplaza la planificación o preparar el depósito?',
      answer:
        'No. Es una lista de control. Planificar diseña el operativo. Preparar el depósito acondiciona el sitio. El checklist verifica que esas piezas existan antes, durante y después del conteo.',
    },
  ],
  relatedLinks: [
    {
      label: 'Cómo preparar un depósito para un inventario',
      to: '/recursos/como-preparar-un-deposito-para-un-inventario/',
      description: 'Acondicionamiento del sitio; el checklist pregunta si está hecho.',
    },
    {
      label: 'Planificación de un inventario',
      to: '/buenas-practicas/planificacion-inventario/',
      description: 'El diseño que este listado controla, no sustituye.',
    },
    {
      label: 'Metodología de inventarios',
      to: '/investigacion/metodologia-inventarios/',
      description: 'El ciclo del dato detrás de cada tilde.',
    },
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'El operativo donde se usa esta lista.',
    },
  ],
  cta: {
    title: '¿El operativo ya tiene alcance y zonas, o todavía es una fecha?',
    description: 'El checklist no arranca el conteo. Sirve cuando hay un sitio real que evaluar.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver planificación',
    secondaryTo: '/buenas-practicas/planificacion-inventario/',
  },
};
