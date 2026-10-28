import type { ResourcePageContent } from '@/content/types';

export const cuantoTardaUnInventarioFisicoContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Cuánto tarda un inventario físico',
  summary:
    'No existe una duración universal. El tiempo depende del volumen, de las ubicaciones, de la preparación, del personal y de si hace falta reconteo —y de si la operación sigue activa.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Un inventario físico tarda lo que exija recorrer y registrar el alcance acordado, con supervisión y reconteos. Dos depósitos con el mismo número de SKU pueden tardar muy distinto si uno tiene pasillos angostos y altura, y el otro es un piso plano con etiquetas visibles.',
        'Para estimar hay que pedir: cantidad de SKU, cantidad de ubicaciones, tamaño físico, layout, calidad de preparación, medio de captura, cantidad de operadores, necesidad probable de reconteo y si la operación se detiene o no.',
      ],
    },
    {
      id: 'contexto',
      heading: 'Por qué la pregunta no tiene una sola cifra',
      body: [
        'La duración es un resultado operativo, no una tarifa. Un cíclico de una familia crítica puede cerrar en un turno; un general de un centro de distribución puede exigir varios turnos o jornadas. Publicar “X horas para cualquier depósito” sería un dato falso.',
        'También cambia el reloj según se mida: tiempo de conteo en piso, tiempo de reconteo, tiempo de conciliación e informe. El cliente suele preguntar por el cierre usable, no solo por el último pallet contado.',
      ],
    },
    {
      id: 'variables',
      heading: 'Variables que mueven el tiempo',
      body: [
        'SKU y ubicaciones: más posiciones suelen pesar más que más códigos en una sola estantería. Contar 200 pallets etiquetados no es lo mismo que contar 200 huecos sueltos.',
        'Tamaño físico y layout: metros, altura, pasillos ciegos, cámaras, mezzanine o cross-dock cambian el recorrido.',
        'Preparación: identificadores visibles, devoluciones separadas y movimientos controlados acortan omisiones y reconteos. Un depósito desordenado alarga el operativo aunque el volumen sea menor.',
        'Tecnología: lecturas de código o captura móvil evitan digitación; no eliminan el recorrido ni la validación.',
        'Dotación: más operadores en paralelo reducen calendario si hay supervisión y zonas bien partidas. Sin eso, se pisan y aparecen duplicados.',
        'Reconteo: las diferencias grandes o contradictorias vuelven a ocupar gente en las mismas posiciones.',
        'Operación detenida vs activa: contar con picking en curso obliga a ventanas, congelamiento lógico y reconciliación de movimientos; eso suma tiempo de control, no solo de pasos.',
      ],
    },
    {
      id: 'ejemplos',
      heading: 'Ejemplos conceptuales (sin números inventados)',
      body: [
        'Un local de retail con salón y depósito interno chico, bien identificado y con horario de cierre, suele ser un operativo concentrado en una ventana corta. Un CD con racks altos, varias cámaras y despacho nocturno no se estima igual: hay que partir zonas y turnos.',
        'Si el objetivo es un cíclico de un pasillo crítico, la pregunta correcta no es “cuánto tarda un inventario” sino “cuánto tarda este recorte, con esta regla de movimiento”.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Cómo lo estima Dinamic Systems',
      body: [
        'La evaluación parte de datos del sitio —ubicaciones, layout, ventanas, tipo de mercadería— no de un estándar publicado. Hasta no tener ese recorte, cualquier plazo sería una suposición.',
        'Por eso la cotización y la planificación se piden juntas: el tiempo posible está atado al alcance y a si se puede o no detener la operación.',
      ],
    },
  ],
  faq: [
    {
      question: '¿El reconteo alarga siempre el operativo?',
      answer:
        'Alarga cuando hay diferencias que hay que volver a ver. Un plan de reconteo selectivo suele ser más corto que recontear todo el universo “por las dudas”.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Cómo se planifica y ejecuta el operativo.',
    },
    {
      label: 'Cómo preparar un depósito para un inventario',
      to: '/recursos/como-preparar-un-deposito-para-un-inventario/',
      description: 'La preparación es una de las variables que más mueve el tiempo.',
    },
    {
      label: 'Inventarios sin detener la operación',
      to: '/recursos/inventarios-sin-detener-operacion/',
      description: 'Qué cambia el reloj cuando el depósito sigue despachando.',
    },
    {
      label: 'Cotizar un inventario físico',
      to: '/recursos/cotizar-inventario-fisico/',
      description: 'Datos del sitio que también sirven para estimar duración.',
    },
  ],
  cta: {
    title: '¿Querés estimar un inventario con datos de tu sitio?',
    description: 'Con ubicaciones, layout y ventanas se puede hablar de alcance y calendario. Sin eso, no hay un plazo honesto.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver qué datos hacen falta para cotizar',
    secondaryTo: '/recursos/cotizar-inventario-fisico/',
  },
};
