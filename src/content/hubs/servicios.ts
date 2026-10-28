import type { HubPageContent } from '@/content/types';

export const serviciosHubContent: HubPageContent = {
  kind: 'hub',
  group: 'servicios',
  eyebrow: 'Servicios',
  h1: 'Servicios de inventarios físicos',
  summary:
    'Dinamic Systems planifica y ejecuta inventarios físicos, cíclicos y auditorías, con modalidad complementaria de drones cuando el depósito y el objetivo lo justifican.',
  sections: [
    {
      id: 'alcance',
      heading: 'Qué cubren estos servicios',
      body: [
        'Los servicios se definen según el alcance de cada operación: inventario general o parcial, conteos periódicos, revisión de procedimientos o apoyo tecnológico en altura.',
        'En todos los casos el trabajo incluye planificación, registro de capturas, reconteos cuando aparecen diferencias y entrega de resultados con trazabilidad.',
      ],
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Planificación, conteo, reconteos y reportes auditables para depósitos, retail y logística.',
    },
    {
      label: 'Inventarios con drones',
      to: '/servicios/inventarios-con-drones/',
      description: 'Modalidad complementaria para racks y posiciones en altura, con validación operativa.',
    },
    {
      label: 'Inventarios cíclicos',
      to: '/servicios/inventarios-ciclicos/',
      description: 'Conteos periódicos por criticidad, rotación o ubicación, complementarios al inventario general.',
    },
    {
      label: 'Auditoría de inventarios',
      to: '/servicios/auditoria-de-inventarios/',
      description: 'Muestreo, revisión de procedimientos, reconteos y evidencia documentada.',
    },
  ],
  cta: {
    title: '¿Necesitás evaluar un inventario?',
    description: 'Contanos el tipo de operación, el volumen aproximado y la fecha objetivo.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios por industria',
    secondaryTo: '/industrias/',
  },
};
