import type { IndustryPageContent } from '@/content/types';

export const depositosCentrosDistribucionContent: IndustryPageContent = {
  kind: 'industry',
  eyebrow: 'Industria',
  h1: 'Inventarios para depósitos y centros de distribución',
  summary:
    'Dinamic Systems realiza inventarios físicos en depósitos y centros de distribución, organizando el conteo por racks, pallets, pasillos, posiciones y sectores, con trazabilidad de lo relevado.',
  sections: [
    {
      id: 'desafio',
      heading: 'Por qué un depósito o CD no se inventaría como una tienda',
      body: [
        'En depósitos y centros de distribución el stock se organiza por ubicaciones: pasillos, racks, niveles, pallets y posiciones de piso. Un inventario útil relaciona el producto con esa estructura y documenta qué se relevó en cada zona.',
        'Recepciones, despachos y reubicaciones durante el operativo requieren reglas claras. El total por SKU no siempre alcanza: hace falta saber dónde fue contado.',
      ],
    },
    {
      id: 'alcance',
      heading: 'Qué relevamos en la operación',
      body: [
        'El alcance típico incluye racks por pasillo, módulo y nivel, pallets, posiciones de picking, zonas de piso, staging, recepción o expedición, y productos en altura. La profundidad se define con el cliente según criticidad y ventana operativa.',
        'Cuando hay altura o densidad elevada, evaluamos modalidades asistidas —incluida captura con drones— como complemento del inventario físico, no como reemplazo universal.',
      ],
    },
    {
      id: 'plan',
      heading: 'Planificación para reducir interrupciones',
      body: [
        'Acordamos zonas, turnos y cortes de movimiento para mantener el flujo donde sea posible. El plan prioriza cobertura y trazabilidad sin improvisar el cierre.',
        'Los resultados se consolidan para análisis de diferencias y seguimiento posterior del control de inventarios.',
      ],
    },
  ],
  benefits: [
    {
      title: 'Enfoque por ubicación',
      description: 'El conteo sigue la lógica de pasillos, racks y posiciones del depósito.',
    },
    {
      title: 'Altura contemplada',
      description: 'Se evalúa cómo relevar productos en altura con seguridad y evidencia.',
    },
    {
      title: 'Modalidades combinables',
      description: 'Inventario físico y apoyo tecnológico según el entorno.',
    },
  ],
  faq: [
    {
      question: '¿Por qué el inventario de un depósito se organiza por ubicación?',
      answer:
        'Porque el dato útil no es solo cuántas unidades hay, sino en qué pasillo, rack, nivel o pallet se encontraron. Eso permite reconteos focalizados y detectar mercadería fuera de posición.',
    },
    {
      question: '¿Un centro de distribución se inventaría igual que un depósito de reserva?',
      answer:
        'La base es la misma —conteo por ubicación— pero un CD suele sumar más zonas, altura, picking y movimiento durante el operativo. El plan se parte en sectores controlables.',
    },
    {
      question: '¿Cuándo se evalúa captura en altura con drones?',
      answer:
        'Cuando hay racks elevados y etiquetas visibles, como complemento del conteo físico, no como reemplazo de las zonas de piso.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Conteo, reconteo, supervisión y conciliación.',
    },
    {
      label: 'Inventarios con drones',
      to: '/servicios/inventarios-con-drones/',
      description: 'Captura aérea y visión artificial para zonas elevadas.',
    },
    {
      label: 'Operadores logísticos e industria',
      to: '/industrias/operadores-logisticos-industria/',
      description: 'Stock de terceros, lotes y conciliación documentada.',
    },
    {
      label: 'Cómo preparar un depósito para un inventario',
      to: '/recursos/como-preparar-un-deposito-para-un-inventario/',
      description: 'Orden, identificación y control de movimientos previos.',
    },
  ],
  cta: {
    title: '¿Planeás un inventario en tu depósito o CD?',
    description: 'Contanos sobre ubicaciones, altura y ventanas horarias para diseñar el operativo.',
    primaryLabel: 'Evaluar un inventario para esta operación',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios físicos',
    secondaryTo: '/servicios/inventarios-fisicos/',
  },
};
