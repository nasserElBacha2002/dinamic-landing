import type { MethodologyStep } from '@/types/content';

export const methodologySteps: MethodologyStep[] = [
  {
    id: '01',
    title: 'Diagnóstico y relevamiento',
    description:
      'Análisis de infraestructura logística, tipos de carga y requerimientos específicos.',
  },
  {
    id: '02',
    title: 'Planificación operativa',
    description:
      'Cronograma detallado, despliegue de recursos humanos y preparación tecnológica.',
    highlight: true,
  },
  {
    id: '03',
    title: 'Ejecución tecnológica',
    description:
      'Conteo físico y captura digital mediante personal experto y herramientas de precisión.',
  },
  {
    id: '04',
    title: 'Análisis y mejora continua',
    description:
      'Reportes auditables, análisis de desvíos y propuestas de optimización de stock.',
    highlight: true,
  },
];
