import type { IndustryPageContent } from '@/content/types';

export const operadoresLogisticosIndustriaContent: IndustryPageContent = {
  kind: 'industry',
  eyebrow: 'Industria',
  h1: 'Inventarios para operadores logísticos e industria',
  summary:
    'En depósitos de operadores logísticos e industria el stock puede pertenecer a distintos clientes, con ubicaciones, pallets, lotes y reglas de trazabilidad que exigen un inventario planificado y documentado.',
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
    primaryLabel: 'Solicitar reunión',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios físicos',
    secondaryTo: '/servicios/inventarios-fisicos/',
  },
};
