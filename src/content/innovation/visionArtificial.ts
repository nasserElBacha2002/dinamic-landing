import type { ResourcePageContent } from '@/content/types';

export const visionArtificialContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Innovación',
  h1: 'Visión artificial en inventarios físicos',
  summary:
    'La visión artificial interpreta una imagen de depósito: detectar una etiqueta, leerla, asociarla a una ubicación y dejar una excepción si no puede. No equivale a un inventario completo. La validación humana cierra lo que la imagen no resuelve.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Una cámara —en mano, fija o en un dron— captura un hueco o un pallet. El software intenta detectar la etiqueta, leer código o texto, y asociar esa lectura a la posición del plan. Si no hay etiqueta, hay oclusión o el criterio era abrir el bulto, la visión no “ve el stock”: marca un faltante de evidencia.',
        'Ese faltante de evidencia es trabajo de reconteo o de conteo en piso, no un número que el modelo deba inventar.',
      ],
    },
    {
      id: 'pipeline',
      heading: 'De la imagen al dato',
      body: [
        'Captura: encuadre, luz, distancia. Una foto mala no se arregla en el modelo.',
        'Detección: ¿hay una etiqueta en el recuadro? ¿hay más de una?',
        'Lectura: código o OCR. Es percepción, no IA de negocio —aunque después una regla o un modelo clasifique la excepción.',
        'Asociación: la lectura se ata a una ubicación del mapa. Sin mapa, la foto es un archivo suelto.',
        'Validación humana: confirmar, rechazar o recontear. Sin este paso, un falso positivo entra al cierre como stock.',
      ],
    },
    {
      id: 'limites',
      heading: 'Qué no hace',
      body: [
        'No recorre sola un depósito sin plan de zonas. No abre cajas. No distingue lote si la etiqueta no lo trae. No reemplaza el inventario de piso ni el de bultos sin identificar.',
        'Tampoco es inteligencia artificial: puede alimentarla, pero el juicio sobre inconsistencias es otra capa.',
      ],
    },
  ],
  faq: [
    {
      question: '¿La visión artificial reemplaza el conteo en piso?',
      answer:
        'No de forma general. Complementa altura o evidencia visual cuando la etiqueta se ve. Piso, bultos y lo no etiquetado siguen pidiendo un criterio de conteo.',
    },
  ],
  relatedLinks: [
    {
      label: 'OCR en inventarios',
      to: '/innovacion/ocr-inventarios/',
      description: 'La lectura de caracteres dentro del pipeline de imagen.',
    },
    {
      label: 'Inteligencia artificial en inventarios',
      to: '/innovacion/inteligencia-artificial-inventarios/',
      description: 'Qué se hace con las lecturas y las excepciones después de ver.',
    },
    {
      label: 'Drones en inventarios',
      to: '/innovacion/drones-inventarios/',
      description: 'Una forma de llevar la cámara a la altura.',
    },
    {
      label: 'Tecnología aplicada a inventarios',
      to: '/innovacion/tecnologia-aplicada-inventarios/',
      description: 'Dónde encaja la visión en el mapa de capas.',
    },
  ],
  cta: {
    title: '¿El problema es leer etiquetas en altura, o contar el piso?',
    description: 'Son trabajos distintos. La visión ayuda al primero cuando hay etiqueta visible; el segundo sigue siendo recorrido.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver tecnología aplicada',
    secondaryTo: '/innovacion/tecnologia-aplicada-inventarios/',
  },
};
