import type { ResourcePageContent } from '@/content/types';

export const comoFuncionaInventarioDronesContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Cómo funciona un inventario con drones',
  summary:
    'Un inventario con drones combina navegación interior, captura de imágenes, lectura de códigos o etiquetas y validación humana de resultados. No reemplaza automáticamente al inventarista en todos los depósitos.',
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'El dron se desplaza por zonas aptas del depósito, captura imágenes de posiciones o pallets, el software interpreta códigos y texto mediante visión artificial u OCR, y los resultados se validan antes de usarse para conciliación. La seguridad y la evaluación previa del entorno son parte del proceso.',
      ],
    },
    {
      id: 'captura',
      heading: 'Navegación, cámaras y captura',
      body: [
        'En interiores se evalúa espacio libre, iluminación, obstáculos y altura. Las cámaras registran etiquetas y contexto visual necesarios para la interpretación posterior.',
        'No todos los depósitos son aptos: pasillos estrechos, obstáculos o condiciones de seguridad pueden limitar o descartar el uso de drones.',
      ],
    },
    {
      id: 'vision',
      heading: 'Códigos, OCR y visión artificial',
      body: [
        'La lectura de códigos y el OCR ayudan a asociar capturas con ubicaciones o identificadores. La visión artificial contribuye a procesar grandes volúmenes de imagen de forma consistente.',
        'Los resultados requieren validación: etiquetas dañadas, reflejos o ángulos difíciles pueden generar lecturas incompletas que deben revisarse.',
      ],
    },
    {
      id: 'cierre',
      heading: 'Validación, seguridad y sistemas',
      body: [
        'El cierre combina trazabilidad de capturas, revisión de excepciones y entrega de información para conciliar con el sistema de la empresa (WMS u otros) de manera genérica, sin afirmar integraciones automáticas específicas no demostradas.',
        'La seguridad operativa —perímetro, personal en zona y reglas de vuelo interior— se define en la evaluación previa junto con el alcance del inventario.',
      ],
    },
  ],
  steps: [
    {
      title: 'Evaluar el depósito',
      description: 'Aptitud espacial, seguridad y objetivos del conteo.',
    },
    {
      title: 'Planificar la captura',
      description: 'Zonas, alturas y criterios de cobertura.',
    },
    {
      title: 'Procesar y validar',
      description: 'Lectura de etiquetas, excepciones y revisión humana.',
    },
    {
      title: 'Conciliar resultados',
      description: 'Entrega trazable para análisis de diferencias.',
    },
  ],
  relatedLinks: [
    {
      label: 'Servicio de inventarios con drones',
      to: '/servicios/inventarios-con-drones/',
    },
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
    },
    {
      label: 'Depósitos y centros de distribución',
      to: '/industrias/depositos-centros-distribucion/',
    },
    {
      label: 'Contacto',
      to: '/#contacto',
    },
  ],
  cta: {
    title: '¿Querés evaluar un inventario con drones?',
    description: 'El primer paso es entender si tu depósito es apto y qué validación necesita.',
    primaryLabel: 'Ver el servicio con drones',
    primaryTo: '/servicios/inventarios-con-drones/',
    secondaryLabel: 'Escribirnos',
    secondaryTo: '/#contacto',
  },
};
