import type { ResourcePageContent } from '@/content/types';

export const inteligenciaArtificialContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Innovación',
  h1: 'Inteligencia artificial en inventarios físicos',
  summary:
    'La IA, en un inventario, es asistencia al procesamiento: clasificar, ayudar a leer, marcar inconsistencias y ordenar excepciones. No elimina errores ni automatiza el operativo entero. No es lo mismo que OCR ni que visión artificial.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Usos concretos posibles: clasificar capturas o excepciones, asistir la lectura cuando el código viene sucio o incompleto, comparar un resultado contra reglas (unidad, ubicación vacía con cantidad, doble captura) y priorizar qué revisar. El cierre sigue siendo de una persona con criterio de reconteo.',
        'No se afirma que un modelo “cuente el depósito”. Contar es recorrer e identificar. La IA, cuando existe en el flujo, trabaja sobre datos ya capturados o sobre hipótesis de inconsistencia.',
      ],
    },
    {
      id: 'distincion',
      heading: 'IA, OCR y visión: no son sinónimos',
      body: [
        'OCR convierte imagen de texto o código en caracteres. Es lectura, no juicio.',
        'Visión artificial detecta o localiza objetos, etiquetas o huecos en una imagen. Sigue siendo percepción.',
        'IA, en este contexto, es el criterio estadístico o de reglas sobre esos insumos: ¿esta lectura es plausible?, ¿esta posición se contó dos veces?, ¿este SKU no debería estar en este pasillo según el master? Sin visión o sin captura, no hay sobre qué inferir.',
      ],
    },
    {
      id: 'usos',
      heading: 'Dónde puede aportar —y dónde no',
      body: [
        'Aporta en volumen: miles de lecturas para marcar las raras. Aporta en asistencia: sugerir una ubicación o un código candidato para que el operador confirme.',
        'No aporta si el predio no está etiquetado, si el master está mal o si nadie define qué es una excepción. Tampoco reemplaza el reconteo cuando la evidencia es contradictoria.',
      ],
    },
    {
      id: 'limites',
      heading: 'Lo que esta página no promete',
      body: [
        'No hay “automatización total”. No hay eliminación de errores. No hay un porcentaje de precisión. Si un flujo concreto de Dinamic Systems usa asistencia de este tipo, se describe en el alcance del operativo; no se vende como una IA genérica que resuelve el inventario.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Inteligencia artificial y visión artificial son lo mismo?',
      answer:
        'No. La visión interpreta la imagen (detectar, leer). La IA, aquí, juzga o clasifica a partir de esa lectura o de otras capturas. Se pueden encadenar; no se equivalen.',
    },
  ],
  relatedLinks: [
    {
      label: 'Visión artificial en inventarios',
      to: '/innovacion/vision-artificial/',
      description: 'Captura e interpretación de imagen, con validación humana.',
    },
    {
      label: 'Drones para inventarios',
      to: '/innovacion/drones-inventarios/',
      description: 'Vehículo de cámara; el procesamiento viene después.',
    },
    {
      label: 'OCR en inventarios',
      to: '/innovacion/ocr-inventarios/',
      description: 'Lectura de caracteres; la IA no es OCR.',
    },
  ],
  cta: {
    title: '¿El cuello de botella es validar excepciones, no capturar?',
    description: 'Se puede revisar el flujo de diferencias y reconteo. La IA, si aplica, es un apoyo de ese flujo, no el inventario.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver metodología',
    secondaryTo: '/investigacion/metodologia-inventarios/',
  },
};
