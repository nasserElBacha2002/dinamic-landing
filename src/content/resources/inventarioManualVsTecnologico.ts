import type { ResourcePageContent } from '@/content/types';

export const inventarioManualVsTecnologicoContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Inventario manual vs. inventario con tecnología',
  summary:
    'Papel, planilla, lector, código, móvil, QR o visión son medios de captura. Ninguno reemplaza el plan de zonas, el control de movimientos ni el reconteo. Esta comparación sirve para elegir herramienta según el sitio, no para vender tecnología como solución mágica.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Un inventario manual registra cantidades en papel o planilla y después se carga. Es simple de arrancar y frágil: digitación, letra ilegible, hojas que se pierden, poco rastro de quién contó qué ubicación y cuándo.',
        'Un inventario con tecnología captura en el momento (lector, móvil, código, QR; en algunos sitios visión u OCR). Reduce retrabajo de carga y puede dejar más trazabilidad. Sigue dependiendo de que la etiqueta exista, de que el pasillo se recorra y de que alguien valide las diferencias. El proceso no desaparece.',
      ],
    },
    {
      id: 'medios',
      heading: 'Medios, no milagros',
      body: [
        'Papel y planilla: útiles en predios chicos o como respaldo. El error aparece al transcribir y al consolidar.',
        'Lectores y códigos de barras: rápidos cuando el master y las etiquetas están bien. Si el código no está o está mal, el operador improvisa —y esa improvisación hay que diseñarla, no negarla.',
        'Móvil: permite asociar captura a ubicación y operador si la app lo registra. Sin red, hay que haber pensado el modo offline; eso es un tema técnico aparte (no se desarrolla acá).',
        'QR: identifica posición o pallet cuando se imprimió y se mantuvo. Un QR de hace tres mudanzas no es una ubicación.',
        'OCR / visión: puede ayudar a leer etiquetas en altura o a documentar una cara de pallet. No “ve el stock” si la etiqueta no está, si hay oclusión o si el criterio era abrir el bulto. Cuando aplica, es un complemento, no el inventario entero.',
      ],
    },
    {
      id: 'limites',
      heading: 'Lo que la herramienta no resuelve',
      body: [
        'Un lector no ordena un pasillo. Una app no congela un muelle. Un dron no cuenta lo que está tapado o sin etiqueta. El control —quién cuenta, en qué zona, qué se recontea— sigue siendo el trabajo.',
        'Elegir tecnología “porque es más moderna” sin etiquetas, sin mapa y sin regla de movimiento suele digitalizar el desorden.',
      ],
    },
    {
      id: 'criterios',
      heading: 'Cómo elegir el medio',
      body: [
        'Mirar etiquetas reales, no el brochure. Mirar altura y pasillo. Mirar si el cierre necesita trazabilidad por operador. Mirar si hay que abrir bultos. Un mix es habitual: piso con lector, altura con otro medio, excepciones en papel controlado.',
        'El costo de la herramienta es un ítem más del inventario, no el criterio único. Ver cuánto cuesta un inventario físico y cómo funciona un inventario con drones si la pregunta es específicamente aérea.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Contexto de aplicación',
      body: [
        'En operativos de Dinamic Systems el medio de captura se elige según etiquetas, altura y layout. El plan de zonas y el reconteo siguen siendo parte del trabajo; la herramienta no elimina diferencias por sí sola.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Un inventario con lectores es automáticamente más preciso?',
      answer:
        'Es más difícil de transcribir mal. Sigue pudiendo contar el hueco equivocado, omitir un pallet o leer un código que no es el de esa posición. La precisión la cierra el método.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'El método de conteo y reconteo, independiente del medio.',
    },
    {
      label: 'Cómo funciona un inventario con drones',
      to: '/recursos/como-funciona-un-inventario-con-drones/',
      description: 'Un medio específico para altura, con sus límites.',
    },
    {
      label: 'Reconteos inteligentes',
      to: '/buenas-practicas/reconteos-inteligentes/',
      description: 'La validación que ninguna herramienta evita.',
    },
  ],
  cta: {
    title: '¿Estás eligiendo el medio de captura para un inventario?',
    description: 'Se puede evaluar el sitio (etiquetas, altura, layout) antes de decidir papel, lector, móvil o un complemento aéreo.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios físicos',
    secondaryTo: '/servicios/inventarios-fisicos/',
  },
};
