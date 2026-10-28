import type { ResourcePageContent } from '@/content/types';

export const comoCalcularPersonalInventarioContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Cómo calcular el personal de un inventario físico',
  summary:
    'La dotación se estima como trabajo a recorrer dividido por la capacidad que el sitio realmente da en la ventana. No hay un ratio universal de operadores por posición ni por SKU. Esta guía lista las variables y los límites de cualquier fórmula.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Para estimar gente hay que dimensionar el trabajo (posiciones, unidades, densidad, layout, accesibilidad, complejidad, reconteo probable) y la capacidad (horas de ventana, ritmo plausible en ESE predio, supervisión, tecnología). El cociente es un punto de partida, no una cotización.',
        'Publicar “1 operador = X posiciones/hora” sería un dato falso: un piso de pallets etiquetados no se recorre igual que un selectivo alto o un picking denso.',
      ],
    },
    {
      id: 'formula',
      heading: 'Fórmula conceptual —y por qué no cierra sola',
      body: [
        'Trabajo estimado: cuánto hay que ver y registrar (posiciones × dificultad de cada una, no SKU sueltos).',
        'Capacidad operativa: operadores de captura × horas netas × un ritmo que el layout permite. Hay que restar inducción, muelle cerrado, almuerzo y el tiempo que se come el reconteo.',
        'Dotación de captura ≈ trabajo ÷ capacidad. Después se suma supervisión (quien no cuenta el mismo hueco) y un margen de incidencias. Si el cociente pide más gente de la que cabe en el pasillo, se parte en zonas o se alarga el calendario: no se apilan operadores.',
        'El ritmo no se publica acá porque no está medido como evidencia de este sitio. Se acuerda en la evaluación del predio.',
      ],
    },
    {
      id: 'variables',
      heading: 'Variables que mueven el número',
      body: [
        'Posiciones y unidades: más huecos pesan más que más códigos en un solo pallet.',
        'SKU y densidad: muchas referencias sueltas en poco metro lineal alargan identificación.',
        'Layout y distancia entre zonas: el traslado es tiempo que no captura.',
        'Accesibilidad: altura, pasillo angosto, frío, EPP, hidrante en el medio del rack.',
        'Tecnología: lector o móvil evitan digitación; no evitan caminar ni validar.',
        'Complejidad: bultos a abrir, lotes, stock de terceros, dos unidades en el mismo hueco.',
        'Supervisión y reconteos: si la regla dispara muchas revisiones, esa gente no está en el primer pasillo.',
        'Ventana: un domingo de tienda cerrada no es un CD que no puede parar el despacho.',
      ],
    },
    {
      id: 'escenarios',
      heading: 'Escenarios (sin cifras de productividad)',
      body: [
        'Ventana corta y muchas zonas: el cuello suele ser supervisión y no pisarse, no “más contadores en el mismo pasillo”.',
        'Pocas posiciones, alta complejidad (suelto, etiquetas dudosas): el cociente de captura engaña; hay que presupuestar identificación y reconteo.',
        'Predio grande, layout claro, etiquetas visibles: se puede paralelizar por zonas cerrables. Ver equipos en depósitos grandes.',
        'Operación activa: parte de la capacidad se va a controlar movimientos, no a contar. Eso también es personal.',
      ],
    },
    {
      id: 'limites',
      heading: 'Límites',
      body: [
        'Esta página no entrega una plantilla de Excel ni un headcount “exacto”. Tampoco un precio. Cotizar pide otros datos (sedes, restricciones, entregable). Cuánto tarda responde al calendario, no a la nómina.',
        'Dinamic Systems dimensiona con el mapa del sitio. Hasta no ver posiciones, altura y ventana, cualquier plantilla sería una suposición.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Hay un ratio de operadores por posición o por SKU?',
      answer:
        'No uno publicable ni transferible. Dos depósitos con las mismas posiciones no se recorren igual si cambia altura, densidad o si la operación sigue activa. El número sale del mapa, no de una tabla.',
    },
  ],
  relatedLinks: [
    {
      label: 'Equipos de inventario en depósitos grandes',
      to: '/buenas-practicas/equipos-inventario-depositos-grandes/',
      description: 'Cómo se parte y se supervisa, una vez estimado el tamaño.',
    },
    {
      label: 'Cuánto tarda un inventario físico',
      to: '/recursos/cuanto-tarda-un-inventario-fisico/',
      description: 'El calendario; esta URL es la nómina que alimenta ese reloj.',
    },
    {
      label: 'Planificación de un inventario',
      to: '/buenas-practicas/planificacion-inventario/',
      description: 'De dónde salen zonas y ventana, insumos de la estimación.',
    },
    {
      label: 'Cotizar un inventario físico',
      to: '/recursos/cotizar-inventario-fisico/',
      description: 'Datos del sitio para una propuesta; no es esta fórmula.',
    },
  ],
  cta: {
    title: '¿Hace falta estimar un predio concreto?',
    description: 'Con posiciones, layout y ventana se puede hablar de dotación. Sin eso, no hay un número honesto.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver qué datos hacen falta para cotizar',
    secondaryTo: '/recursos/cotizar-inventario-fisico/',
  },
};
