import type { ResourcePageContent } from '@/content/types';

export const cuantoCuestaUnInventarioFisicoContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Cuánto cuesta un inventario físico',
  summary:
    'El costo de un inventario físico no es un precio de lista. Depende del volumen a recorrer, de las ubicaciones, de la duración, del personal, del horario, del desplazamiento, de la complejidad del sitio y de los entregables. Esta guía explica esas variables. No publica tarifas ni rangos inventados.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Cuesta lo que cuesta armar el equipo, recorrer el alcance, recontear lo que haga falta y entregar un cierre usable. Dos sitios con el mismo metraje pueden cotizar distinto si uno es un piso plano en horario diurno y el otro es un CD con altura, cámaras y turno noche.',
        'Sin datos del sitio no hay un número honesto. Cualquier rango publicado “para Argentina” o “por m²” que no esté documentado en una propuesta sería una invención; acá no se usa.',
      ],
    },
    {
      id: 'variables',
      heading: 'Variables de costo',
      body: [
        'Volumen y ubicaciones: más posiciones, más recorrido y más capturas. El SKU importa, pero el mapa de huecos suele pesar más.',
        'Duración y personal: jornadas, turnos y cantidad de operadores más supervisión. Un calendario apretado puede exigir más gente en paralelo.',
        'Horario: noche, feriado o ventana de tienda cerrada cambia disponibilidad y logística del equipo.',
        'Desplazamiento: sede única vs varias sucursales o un predio lejos de la base operativa.',
        'Complejidad: altura, mercadería suelta, bultos a abrir, lotes, stock de terceros, refrigeración, seguridad industrial.',
        'Equipos y tecnología: lectores, dispositivos, drones si el layout lo permite. Son un ítem, no el precio entero.',
        'Entregables y reconteos: un listado plano no cuesta lo mismo que un cierre por ubicación con diferencias validadas. El reconteo selectivo es trabajo extra; recontear todo, más todavía.',
      ],
    },
    {
      id: 'comparar',
      heading: 'Cómo comparar propuestas',
      body: [
        'Pedí que cada propuesta declare alcance, supuestos de preparación, regla de reconteo y formato de informe. Un precio más bajo con universo distinto no es más barato: es otra cosa.',
        'Compará también contra el costo interno real (horas, detención, calidad del cierre), no solo contra otra factura.',
      ],
    },
    {
      id: 'practica',
      heading: 'En una operación real',
      body: [
        'El pedido útil es: “este predio, estas posiciones, esta ventana, este entregable”. Con eso se arma una cotización. Sin eso, el número que alguien ponga en una web no sirve para decidir.',
        'Si el alcance cambia en campo (aparece un mezzanine, hay que abrir más bultos, la operación no se detiene), el costo se revisa. Eso hay que decirlo antes, no después.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Cómo cotiza Dinamic Systems',
      body: [
        'Dinamic Systems evalúa cada inventario con datos del sitio y del objetivo. No publica un tarifario en esta página porque no habría cómo defenderlo sin el alcance.',
        'El siguiente paso concreto es la guía de cotización y el formulario de contacto: ahí se piden localidad, tipo de operación, volumen aproximado y fecha.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Por qué no hay un precio de referencia en esta página?',
      answer:
        'Porque un precio sin universo, layout y ventana sería un número inventado. El costo se arma con datos del sitio.',
    },
    {
      question: '¿El reconteo se cobra aparte?',
      answer:
        'Depende de cómo esté definido el alcance. Lo importante es que la propuesta diga qué reconteo está incluido y qué pasa si el predio no estaba preparado.',
    },
    {
      question: '¿Varias sucursales se cotizan como un solo inventario?',
      answer:
        'Suele ser un plan con varios cierres locales más una consolidación. El costo sigue a la cantidad de sitios, ventanas y desplazamientos, no a un único total abstracto.',
    },
  ],
  relatedLinks: [
    {
      label: 'Cotizar un inventario físico',
      to: '/recursos/cotizar-inventario-fisico/',
      description: 'Qué datos hay que reunir para pedir una propuesta comparable.',
    },
    {
      label: 'Cuánto tarda un inventario físico',
      to: '/recursos/cuanto-tarda-un-inventario-fisico/',
      description: 'La duración es una de las variables que mueve el costo.',
    },
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Qué incluye el operativo que se está cotizando.',
    },
  ],
  cta: {
    title: '¿Querés una cotización con el alcance de tu sitio?',
    description: 'Con localidad, tipo de operación, volumen aproximado y fecha se puede evaluar. Sin eso no hay un precio defendible.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver qué datos reunir para cotizar',
    secondaryTo: '/recursos/cotizar-inventario-fisico/',
  },
};
