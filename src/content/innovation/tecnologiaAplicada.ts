import type { ResourcePageContent } from '@/content/types';

export const tecnologiaAplicadaContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Innovación',
  h1: 'Tecnología aplicada a inventarios físicos',
  summary:
    'En un inventario, la tecnología es el conjunto de medios para capturar, identificar, validar y sincronizar datos de existencias. No reemplaza el plan de zonas ni el reconteo. Esta página mapea esas piezas y enlaza a cada una.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'La tecnología aplicada a un inventario cubre, en capas: captura digital (lector o dispositivo móvil), identificación (código, QR, etiqueta de ítem o de ubicación), procesamiento de imagen cuando hay que leer lo que una cámara ve (OCR, visión, a veces dron), validación humana de excepciones, y sincronización —en línea o después, si el predio estuvo offline.',
        'Ninguna capa cuenta sola. Si falta el mapa de posiciones o la regla de movimiento, el dato digital sigue siendo un dato mal ubicado.',
      ],
    },
    {
      id: 'capas',
      heading: 'Capas, no un producto único',
      body: [
        'Captura: el operador o el dispositivo registra cantidad y, si el diseño lo pide, ubicación. Papel sigue existiendo como contingencia; no es el eje de esta página —eso está en inventario manual vs. tecnológico.',
        'Identificación: el código tiene que corresponder al ítem o al hueco real. Una etiqueta vieja o un QR de otra mudanza rompe la cadena antes de cualquier algoritmo.',
        'Imagen: OCR y visión interpretan lo capturado; el dron, cuando el pasillo lo permite, es un vehículo de cámara para altura. La lectura incompleta se trata como excepción, no como stock.',
        'Validación: alguien decide qué hacer con la excepción (reconteo, omisión documentada, corrección de unidad).',
        'Offline y sincronización: el dato puede nacer sin red y consolidarse después. “Después” no es “en el acto”.',
      ],
    },
    {
      id: 'limites',
      heading: 'Límites de este mapa',
      body: [
        'Esta URL no profundiza cada subtema. IA, visión, drones, etiquetas, móvil/offline y “tiempo real” tienen página propia. Acá importa el orden: identificar → capturar → validar → sincronizar.',
        'No se afirma un stack propietario ni una integración automática con cualquier ERP. Eso se define por operativo.',
      ],
    },
  ],
  relatedLinks: [
    {
      label: 'Inteligencia artificial en inventarios',
      to: '/innovacion/inteligencia-artificial-inventarios/',
      description: 'Clasificación, validación y detección de inconsistencias —no es visión.',
    },
    {
      label: 'Visión artificial',
      to: '/innovacion/vision-artificial/',
      description: 'Qué hace una cámara con una etiqueta, y qué no.',
    },
    {
      label: 'Tecnología móvil y offline',
      to: '/innovacion/tecnologia-movil-offline/',
      description: 'Captura sin red y sincronización posterior.',
    },
    {
      label: 'OCR en inventarios',
      to: '/innovacion/ocr-inventarios/',
      description: 'Lectura de caracteres: un paso, no el inventario.',
    },
  ],
  cta: {
    title: '¿El sitio pide un mix de captura digital y conteo en piso?',
    description: 'Se evalúa etiquetas, altura, conectividad y layout antes de armar el plan. No hay un stack único.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios físicos',
    secondaryTo: '/servicios/inventarios-fisicos/',
  },
};
