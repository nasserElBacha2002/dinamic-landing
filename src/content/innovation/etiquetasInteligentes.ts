import type { ResourcePageContent } from '@/content/types';

export const etiquetasInteligentesContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Innovación',
  h1: 'Etiquetas e identificación en el inventario',
  summary:
    'Una etiqueta “inteligente” en este contexto es una identificación estable de ítem o de ubicación —código, texto, QR— que se puede volver a leer. No se afirma RFID, NFC ni sensores que el proyecto no documenta. La inteligencia está en la consistencia, no en el material.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'El inventario necesita dos identificaciones que no se mezclen: qué es la mercadería y dónde está. Códigos de barras, etiquetas impresas de posición y QR bien mantenidos sirven si coinciden con el master y con el hueco real. Una etiqueta de otra campaña, un pallet sin código o un QR apuntando a un pasillo que ya no existe rompen el dato antes del conteo.',
        '“Inteligente” acá significa reutilizable y consistente, no un hardware no descrito en este sitio.',
      ],
    },
    {
      id: 'relacion',
      heading: 'Ítem, ubicación y consistencia',
      body: [
        'Ítem: SKU, lote o serie cuando el negocio los usa. Si el master está en cajas y la etiqueta está en unidades, la lectura “correcta” sigue siendo una diferencia.',
        'Ubicación: pasillo, rack, nivel, pallet. Es el mismo principio que el control de posiciones; esta página se ocupa del identificador, no del hábito de dejar el pallet en el pasillo.',
        'Consistencia: imprimir, pegar, no reciclar etiquetas de otro hueco, reponer las que se destrozan. Sin ese mantenimiento, ni el lector ni la visión tienen qué leer.',
      ],
    },
    {
      id: 'limites',
      heading: 'Qué no se inventa acá',
      body: [
        'No se describe RFID, UWB ni “etiquetas con chip” como parte del servicio, porque no hay evidencia de producto en este proyecto. Si un cliente ya las tiene, el operativo se adapta a lo que se pueda leer; no se vende esa capa.',
      ],
    },
  ],
  relatedLinks: [
    {
      label: 'Control de posiciones y pasillos',
      to: '/buenas-practicas/control-posiciones-pasillos/',
      description: 'El hábito de contar contra el hueco, no solo contra el código.',
    },
    {
      label: 'Tecnología aplicada a inventarios',
      to: '/innovacion/tecnologia-aplicada-inventarios/',
      description: 'La identificación es una capa del mapa, no todo el stack.',
    },
    {
      label: 'Evitar duplicados y cantidades incorrectas',
      to: '/buenas-practicas/evitar-duplicados-cantidades/',
      description: 'Qué pasa cuando dos etiquetas o dos lecturas apuntan al mismo pallet.',
    },
  ],
  cta: {
    title: '¿Las etiquetas del predio coinciden con el master?',
    description: 'Si no coinciden, el inventario digitaliza el desorden. Se puede evaluar el sitio antes de elegir el medio de captura.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver control de posiciones',
    secondaryTo: '/buenas-practicas/control-posiciones-pasillos/',
  },
};
