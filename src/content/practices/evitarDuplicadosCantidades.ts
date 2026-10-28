import type { ResourcePageContent } from '@/content/types';

export const evitarDuplicadosCantidadesContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Buena práctica',
  h1: 'Cómo evitar duplicados y cantidades incorrectas',
  summary:
    'Un duplicado es la misma posición o el mismo pallet contado más de una vez. Una cantidad incorrecta es una captura que no coincide con lo que hay —unidad, dígito, bulto no abierto. Se cortan con identificación, posición, relectura y reconteo, no con “poner más atención”.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'El duplicado aparece cuando dos operadores recorren el mismo hueco, cuando un pallet se mueve a un pasillo ya cerrado, o cuando dos etiquetas apuntan al mismo bulto. La cantidad incorrecta aparece al digitar mal, al mezclar unidad, al no abrir cuando el criterio era abrir, o al leer el código del pallet de atrás.',
        'La prevención es: un ID de posición, un dueño de zona, relectura cuando el medio lo permite, y reconteo solo del recorte dudoso. Trazabilidad para saber quién capturó qué.',
      ],
    },
    {
      id: 'mecanismos',
      heading: 'Mecanismos, no eslóganes',
      body: [
        'Identificación: ítem y hueco etiquetados. Ver etiquetas e identificación.',
        'Posición: contar contra el mapa. Ver control de posiciones.',
        'Relectura y múltiples capturas: un segundo scan no es un reconteo; es confirmar que el código es el de ese hueco. El reconteo vuelve a medir la cantidad.',
        'Validación: reglas simples (cero contra hueco lleno, dos capturas de la misma posición) antes de llegar al informe.',
        'Reconteo: cuando la evidencia se contradice. Ver reconteos inteligentes.',
      ],
    },
    {
      id: 'relacion',
      heading: 'Relación con diferencias de stock',
      body: [
        'El duplicado fabrica un sobrante en un lado y un faltante en otro, o infla el total. Es una causa concreta en por qué no coincide el stock. Esta página es cómo se evita en el acto de contar, no el diagnóstico completo ni el programa de prevención mensual.',
      ],
    },
  ],
  relatedLinks: [
    {
      label: 'Control de posiciones y pasillos',
      to: '/buenas-practicas/control-posiciones-pasillos/',
      description: 'Sin ID de hueco, el duplicado no se ve.',
    },
    {
      label: 'Por qué no coincide el stock',
      to: '/recursos/por-que-no-coincide-el-stock/',
      description: 'El duplicado como causa, junto a las demás.',
    },
    {
      label: 'Reconteos inteligentes',
      to: '/buenas-practicas/reconteos-inteligentes/',
      description: 'Qué hacer cuando la cantidad ya quedó en duda.',
    },
  ],
  cta: {
    title: '¿El cierre muestra el mismo pallet en dos pasillos?',
    description: 'Eso se ataja con mapa de huecos y dueño de zona, no con un segundo inventario completo.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver control de posiciones',
    secondaryTo: '/buenas-practicas/control-posiciones-pasillos/',
  },
};
