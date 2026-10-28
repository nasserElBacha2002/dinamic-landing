import type { IndustryPageContent } from '@/content/types';

export const operadoresLogisticosIndustriaContent: IndustryPageContent = {
  kind: 'industry',
  eyebrow: 'Industria',
  h1: 'Inventarios para operadores logísticos e industria',
  summary:
    'Dinamic Systems realiza inventarios físicos para operadores logísticos e industria, con separación por cliente cuando el stock es de terceros, control por ubicación y trazabilidad documentada.',
  sections: [
    {
      id: 'contexto',
      heading: 'Operaciones multi-cliente y de terceros',
      body: [
        'Los operadores logísticos suelen gestionar mercadería de terceros en depósitos propios o compartidos. El inventario debe respetar la separación por cliente, ubicación y, cuando aplica, lote o condición de stock.',
        'En entornos industriales el foco puede estar en materias primas, semi-elaborados o productos terminados, siempre con un alcance acordado y evidencia por ubicación.',
      ],
    },
    {
      id: 'alcance',
      heading: 'Ubicaciones, pallets y trazabilidad',
      body: [
        'El relevamiento contempla posiciones, pallets y movimientos durante el operativo. La trazabilidad ayuda a reconciliar diferencias sin mezclar inventarios de distintos dueños de stock.',
        'Cuando el depósito es compartido, la planificación reduce cruces entre operaciones concurrentes y deja claro qué queda dentro o fuera del conteo.',
      ],
    },
    {
      id: 'modalidades',
      heading: 'Conteo físico y apoyo tecnológico',
      body: [
        'El inventario físico sigue siendo la base del control. Según la infraestructura, puede evaluarse apoyo con captura asistida o inventarios con drones en zonas aptas, siempre con validación de resultados.',
        'La conciliación entrega información accionable para el operador y para sus clientes, sin afirmar integraciones automáticas con sistemas específicos no demostradas.',
      ],
    },
  ],
  benefits: [
    {
      title: 'Separación por cliente',
      description: 'Alcance y reportes orientados a dueños de stock distintos.',
    },
    {
      title: 'Control por ubicación',
      description: 'Posiciones, pallets y criterios claros de cobertura.',
    },
    {
      title: 'Planificación operativa',
      description: 'Ventanas acordadas para reducir impacto en la operación.',
    },
    {
      title: 'Trazabilidad del relevamiento',
      description: 'Evidencia útil para conciliación y auditoría.',
    },
  ],
  faq: [
    {
      question: '¿Pueden inventariar stock de terceros?',
      answer:
        'Sí. El alcance y los reportes se orientan a no mezclar inventarios de distintos dueños de stock, con control por ubicación.',
    },
    {
      question: '¿Qué incluye el operativo?',
      answer:
        'Planificación de ventanas, conteo por posiciones y pallets, trazabilidad del relevamiento y conciliación para el operador y, cuando corresponde, para sus clientes.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
    },
    {
      label: 'Inventarios con drones',
      to: '/servicios/inventarios-con-drones/',
    },
    {
      label: 'Depósitos y centros de distribución',
      to: '/industrias/depositos-centros-distribucion/',
    },
    {
      label: 'Preparar un depósito para un inventario',
      to: '/recursos/como-preparar-un-deposito-para-un-inventario/',
    },
    {
      label: 'Contacto',
      to: '/#contacto',
    },
  ],
  cta: {
    title: '¿Gestionás stock de terceros o operación industrial?',
    description: 'Evaluemos alcance, ventanas y la modalidad de inventario más adecuada.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios físicos',
    secondaryTo: '/servicios/inventarios-fisicos/',
  },
};
