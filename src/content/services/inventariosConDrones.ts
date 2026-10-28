import type { ServicePageContent } from '@/content/types';

export const inventariosConDronesContent: ServicePageContent = {
  kind: 'service',
  eyebrow: 'Servicio',
  h1: 'Inventarios con drones para depósitos',
  summary:
    'Complementamos el inventario físico en depósitos y posiciones en altura con captura aérea y lectura de etiquetas, integrada al plan de conteo y siempre con validación operativa del resultado.',
  sections: [
    {
      id: 'proposito',
      heading: 'Qué problema resuelve',
      body: [
        'En depósitos con racks altos, parte del relevamiento exige acceder visualmente a posiciones elevadas. Los drones incorporan una capa de captura aérea para leer etiquetas, registrar evidencia y relacionar ubicaciones con el stock encontrado.',
        'No reemplazan de forma automática a un inventarista en todos los escenarios. Se evalúa el layout, las etiquetas, la densidad de posiciones y el objetivo del inventario antes de incluir esta modalidad.',
      ],
    },
    {
      id: 'condiciones',
      heading: 'Condiciones de uso en el depósito',
      body: [
        'La aplicación depende del pasillo, la altura, los obstáculos, las etiquetas visibles y las condiciones de operación. Si el entorno no permite un vuelo o una captura útil, el plan se apoya en inventario físico convencional.',
        'El dron funciona mejor integrado a una metodología que ya conoce el layout y las ubicaciones a verificar: no se trata como un inventario aislado del resto del operativo.',
      ],
    },
    {
      id: 'captura',
      heading: 'Lectura en altura e integración con el inventario',
      body: [
        'El relevamiento aéreo recorre las posiciones definidas y captura evidencia visual de etiquetas y ubicaciones. Esa información se asocia al proceso general de inventario para comparación y generación de evidencia.',
        'Las lecturas incompletas o las diferencias se revisan para decidir reconteos, ajuste de alcance o complemento con conteo físico en piso y posiciones accesibles.',
      ],
    },
    {
      id: 'relacion',
      heading: 'Relación con el inventario físico',
      body: [
        'En muchos operativos el drone se suma a un plan de inventario físico: zonas de piso y accesibles se relevan con metodología tradicional; zonas elevadas pueden apoyarse con captura aérea.',
        'La evaluación previa define si la modalidad aporta al objetivo, qué restricciones existen y cómo se documentan los resultados.',
      ],
    },
  ],
  benefits: [
    {
      title: 'Cobertura en altura',
      description: 'Apoyo para racks y posiciones elevadas con menor exposición operativa.',
    },
    {
      title: 'Evidencia visual',
      description: 'Imágenes asociadas al relevamiento para validación y seguimiento.',
    },
    {
      title: 'Integrado al conteo',
      description: 'Los resultados entran al mismo proceso de inventario, no a un circuito paralelo.',
    },
    {
      title: 'Evaluación previa',
      description: 'Se define viabilidad según el depósito y el objetivo del inventario.',
    },
  ],
  steps: [
    {
      title: 'Evaluación del entorno',
      description: 'Revisamos depósito, altura, etiquetas y condiciones de captura.',
    },
    {
      title: 'Diseño del plan',
      description: 'Definimos zonas, secuencia y cómo se combina con conteo físico.',
    },
    {
      title: 'Captura en altura',
      description: 'Relevamiento aéreo y registro de evidencia en las posiciones definidas.',
    },
    {
      title: 'Validación y entrega',
      description: 'Revisión de resultados e integración al informe del inventario.',
    },
  ],
  faq: [
    {
      question: '¿Los drones reemplazan el inventario físico?',
      answer:
        'No de forma universal. Son una modalidad complementaria para depósitos y altura, evaluada según layout, etiquetas y objetivo del inventario.',
    },
    {
      question: '¿En qué operaciones se usa?',
      answer:
        'Principalmente depósitos y centros de distribución con racks o posiciones elevadas donde la captura aérea aporta cobertura o evidencia.',
    },
    {
      question: '¿Qué recibe la empresa?',
      answer:
        'Un plan que combina, cuando aplica, conteo físico y captura en altura, con validación de resultados e integración al informe del inventario.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Metodología de conteo, reconteo y conciliación en campo.',
    },
    {
      label: 'Depósitos y centros de distribución',
      to: '/industrias/depositos-centros-distribucion/',
      description: 'Contextos donde la captura en altura suele aportar más valor.',
    },
    {
      label: 'Cómo funciona un inventario con drones',
      to: '/recursos/como-funciona-un-inventario-con-drones/',
      description: 'Explicación del proceso, validación y limitaciones.',
    },
  ],
  cta: {
    title: '¿Querés evaluar un inventario asistido con drones?',
    description:
      'Revisamos tu depósito, objetivos de cobertura y la combinación más adecuada con inventario físico.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios físicos',
    secondaryTo: '/servicios/inventarios-fisicos/',
  },
};
