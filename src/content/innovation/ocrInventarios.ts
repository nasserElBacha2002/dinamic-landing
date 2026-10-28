import type { ResourcePageContent } from '@/content/types';

export const ocrInventariosContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Innovación',
  h1: 'OCR en inventarios físicos',
  summary:
    'OCR convierte imagen de texto o de código impreso en caracteres que se pueden asociar a un ítem o a una ubicación. No es inteligencia artificial, no es visión artificial completa y no es un inventario automático. Falla con luz, tipo, movimiento y etiquetas rotas; el cierre sigue siendo humano.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'En un inventario, el OCR lee lo que una cámara ya encuadró: una leyenda, un código impreso como texto, a veces un identificador que el lector de barras no tomó. Entrega una cadena de caracteres y, si el flujo lo tiene, un indicio de confianza. No decide stock.',
        'Si la etiqueta no se ve, el OCR no inventa el SKU. Marca excepción y alguien recontea o omite con causa.',
      ],
    },
    {
      id: 'distincion',
      heading: 'OCR, visión e IA',
      body: [
        'OCR: lectura de caracteres. Es percepción de texto.',
        'Visión artificial: detectar si hay etiqueta, cuántas, dónde está el hueco. El OCR suele ser un paso dentro de ese pipeline, no el pipeline.',
        'IA: criterio sobre lecturas o excepciones (¿es plausible?, ¿está duplicada?). Puede asistir cuando el OCR sale sucio; no lo reemplaza como “el inventario”.',
        'Un lector de código de barras no es OCR: decodifica un simbología. OCR entra cuando hay que leer texto o un código que la cámara ve como imagen, no como scan limpio.',
      ],
    },
    {
      id: 'fallas',
      heading: 'Dónde ayuda y dónde falla',
      body: [
        'Ayuda en altura o en volumen de etiquetas visibles, y para dejar evidencia de lo leído. En drones o fotos de piso, es el puente entre la imagen y el identificador.',
        'Falla con iluminación pobre o reflejo, tipografía destrozada, movimiento (cámara o pallet), etiqueta deteriorada, bajo contraste, oclusión, varios textos en el mismo recuadro.',
        'La “confianza” del motor no es precisión del inventario: es una pista para filtrar. Un umbral alto deja huecos sin dato; uno bajo mete lecturas falsas al cierre. El fallback es validación humana y, si hace falta, reconteo.',
      ],
    },
    {
      id: 'limites',
      heading: 'Límites',
      body: [
        'No hay en este sitio un porcentaje de acierto publicable. No se afirma que el OCR cuente bultos sin etiqueta ni que reemplace al inventarista.',
        'Dinamic Systems usa lectura óptica cuando el predio tiene etiquetas visibles y el plan lo incluye —en captura móvil o en imagen, a veces aérea. El alcance lo dice; no hay un OCR universal.',
      ],
    },
  ],
  faq: [
    {
      question: '¿OCR es lo mismo que inteligencia artificial o que visión artificial?',
      answer:
        'No. OCR lee caracteres en una imagen. La visión detecta y localiza. La IA, aquí, clasifica o valida a partir de esas lecturas. Se pueden encadenar; no se equivalen, y ninguna es un inventario automático.',
    },
  ],
  relatedLinks: [
    {
      label: 'Visión artificial en inventarios',
      to: '/innovacion/vision-artificial/',
      description: 'El pipeline donde el OCR suele ser un paso, no el inventario.',
    },
    {
      label: 'Inteligencia artificial en inventarios',
      to: '/innovacion/inteligencia-artificial-inventarios/',
      description: 'Qué se hace con lecturas y excepciones después de leer.',
    },
    {
      label: 'Tecnología aplicada a inventarios',
      to: '/innovacion/tecnologia-aplicada-inventarios/',
      description: 'Dónde encaja la lectura óptica en el mapa de capas.',
    },
    {
      label: 'Etiquetas e identificación',
      to: '/innovacion/etiquetas-inteligentes/',
      description: 'Sin etiqueta legible, el OCR no tiene insumo.',
    },
  ],
  cta: {
    title: '¿El cuello es leer etiquetas, o recorrer el piso?',
    description: 'Son trabajos distintos. El OCR ayuda al primero cuando hay texto visible; el segundo sigue siendo un plan de zonas.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver visión artificial',
    secondaryTo: '/innovacion/vision-artificial/',
  },
};
