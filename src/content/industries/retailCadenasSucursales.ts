import type { IndustryPageContent } from '@/content/types';

export const retailCadenasSucursalesContent: IndustryPageContent = {
  kind: 'industry',
  eyebrow: 'Industria',
  h1: 'Inventarios para retail y cadenas de sucursales',
  summary:
    'Organizamos inventarios físicos en salón de ventas y depósitos internos, con coordinación por local y consolidación de resultados para cadenas que operan múltiples sucursales.',
  sections: [
    {
      id: 'contexto',
      heading: 'Retail con múltiples puntos de venta',
      body: [
        'En retail el inventario suele abarcar piso de venta y depósito interno. Cuando hay varias sucursales, la coordinación de fechas, equipos y criterios de conteo es parte del servicio.',
        'Trabajamos con la operación del cliente para definir alcance por local, horarios de menor impacto y reglas de movimiento durante el conteo.',
      ],
    },
    {
      id: 'operativo',
      heading: 'Conteos, reconteos y horarios',
      body: [
        'El operativo combina conteo ciego o controlado según acuerdo, supervisión y reconteos en ítems o zonas con diferencias. El objetivo es un cierre consistente por sucursal.',
        'La trazabilidad por local permite consolidar resultados y analizar desvíos sin mezclar evidencias entre puntos de venta.',
      ],
    },
    {
      id: 'entrega',
      heading: 'Consolidación de resultados',
      body: [
        'Entregamos información orientada a auditoría y control de stock. La lectura de resultados ayuda a priorizar ajustes y mejorar el proceso para próximos inventarios.',
        'El servicio principal para este tipo de operación es el inventario físico profesional; otras tecnologías se evalúan solo si el entorno lo justifica.',
      ],
    },
  ],
  benefits: [
    {
      title: 'Salón y depósito',
      description: 'Alcance definido para piso de venta y reserva interna.',
    },
    {
      title: 'Coordinación multi-local',
      description: 'Planificación por sucursal con criterios homogéneos de conteo.',
    },
    {
      title: 'Resultados por punto de venta',
      description: 'Trazabilidad que permite consolidar sin perder el detalle local.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Metodología de conteo y conciliación para retail.',
    },
    {
      label: 'Cómo realizar un inventario físico',
      to: '/recursos/como-realizar-un-inventario-fisico/',
      description: 'Pasos de preparación, ejecución y cierre.',
    },
  ],
  cta: {
    title: '¿Necesitás inventariar una o varias sucursales?',
    description: 'Revisamos alcance, calendario y coordinación operativa con tu equipo.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios físicos',
    secondaryTo: '/servicios/inventarios-fisicos/',
  },
};
