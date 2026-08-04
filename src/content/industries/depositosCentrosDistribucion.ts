import type { IndustryPageContent } from '@/content/types';

export const depositosCentrosDistribucionContent: IndustryPageContent = {
  kind: 'industry',
  eyebrow: 'Industria',
  h1: 'Inventarios para depósitos y centros de distribución',
  summary:
    'Adaptamos el inventario a operaciones con racks, pallets, pasillos y posiciones en altura, combinando conteo físico y, cuando corresponde, apoyo tecnológico para ubicaciones elevadas.',
  sections: [
    {
      id: 'desafio',
      heading: 'El desafío del stock en depósito',
      body: [
        'En depósitos y centros de distribución el stock se organiza por ubicaciones: pasillos, racks, niveles y posiciones. Un inventario útil debe respetar esa estructura y documentar qué se relevó en cada zona.',
        'Los movimientos de ingreso, egreso y reubicación durante el operativo requieren reglas claras para no contaminar el conteo.',
      ],
    },
    {
      id: 'alcance',
      heading: 'Qué relevamos en la operación',
      body: [
        'El alcance típico incluye posiciones, pallets, productos en altura, etiquetas visibles y control por ubicación. La profundidad del relevamiento se define con el cliente según criticidad y ventana operativa.',
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
