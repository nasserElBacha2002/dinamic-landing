import type { ServicePageContent } from '@/content/types';

export const inventariosConDronesContent: ServicePageContent = {
  kind: 'service',
  eyebrow: 'Servicio tecnológico',
  h1: 'Inventarios de depósitos mediante drones y visión artificial',
  summary:
    'Complementamos el inventario en depósitos y posiciones en altura con captura aérea, lectura de etiquetas y apoyo de visión artificial, siempre con validación operativa del resultado.',
  sections: [
    {
      id: 'proposito',
      heading: 'Para qué sirve el inventario con drones',
      body: [
        'El inventario con drones es una modalidad complementaria orientada a depósitos, racks y ubicaciones elevadas donde el relevamiento tradicional implica mayor exposición o menor velocidad de cobertura visual.',
        'No reemplaza de forma automática a un inventarista en todos los escenarios: se evalúa previamente el entorno, la señalética, la densidad de posiciones y el objetivo del relevamiento.',
      ],
    },
    {
      id: 'captura',
      heading: 'Captura de imágenes y lectura de códigos',
      body: [
        'El operativo aéreo releva posiciones y captura evidencia visual de etiquetas y ubicaciones. Según el caso, se asocia la lectura de códigos o información visible en el frente de pallet o estantería.',
        'La visión artificial y el OCR asisten la detección de elementos visibles; el proceso incluye validación para evitar tratar la detección automática como resultado final sin control.',
      ],
    },
    {
      id: 'validacion',
      heading: 'Trazabilidad y validación de resultados',
      body: [
        'Cada captura queda vinculada al contexto operativo del inventario. Las diferencias o lecturas incompletas se revisan para decidir reconteos, ajustes de alcance o complemento con inventario físico convencional.',
        'El valor del servicio está en ampliar cobertura en altura y generar evidencia, no en afirmar autonomía total ni precisiones no demostradas.',
      ],
    },
    {
      id: 'relacion',
      heading: 'Relación con el inventario físico',
      body: [
        'En muchos operativos el drone se integra a un plan más amplio de inventario físico: zonas de piso y accesibles se relevan con metodología tradicional; zonas elevadas pueden apoyarse con captura aérea.',
        'La evaluación previa define si la tecnología aporta al objetivo, qué restricciones existen y cómo se documentan los resultados para auditoría.',
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
      title: 'Lectura asistida',
      description: 'OCR y visión artificial como soporte, no como único criterio de cierre.',
    },
    {
      title: 'Evaluación previa',
      description: 'Se define viabilidad según el depósito y el objetivo del inventario.',
    },
  ],
  steps: [
    {
      title: 'Evaluación del entorno',
      description: 'Revisamos depositario, altura, etiquetas y condiciones de vuelo o captura.',
    },
    {
      title: 'Diseño del plan',
      description: 'Definimos zonas, secuencia y cómo se combina con conteo físico si aplica.',
    },
    {
      title: 'Captura y detección',
      description: 'Relevamiento aéreo, registro de imágenes y asistencia por visión artificial.',
    },
    {
      title: 'Validación y entrega',
      description: 'Revisión de resultados, evidencia y reportes integrados al inventario.',
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
      description: 'Navegación, captura, OCR, validación y limitaciones.',
    },
    {
      label: 'Contactar al equipo',
      to: '/#contacto',
      description: 'Evaluemos si el inventario con drones aplica a tu operación.',
    },
  ],
  cta: {
    title: '¿Querés evaluar un inventario asistido con drones?',
    description:
      'Revisamos tu depósito, objetivos de cobertura y la combinación más adecuada con inventario físico.',
    primaryLabel: 'Solicitar evaluación',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios físicos',
    secondaryTo: '/servicios/inventarios-fisicos/',
  },
};
