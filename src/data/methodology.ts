import type { MethodologyStep } from '@/types/content';

export const methodologySteps: MethodologyStep[] = [
  {
    id: '01',
    title: 'Relevamiento',
    description:
      'Relevamos la operación, las ubicaciones, el tipo de almacenamiento y los requerimientos del inventario.',
  },
  {
    id: '02',
    title: 'Planificación',
    description: 'Definimos alcance, cronograma, recursos y reglas de movimiento durante el conteo.',
    highlight: true,
  },
  {
    id: '03',
    title: 'Conteo',
    description: 'Ejecutamos el conteo por ubicación con captura digital y supervisión en campo.',
  },
  {
    id: '04',
    title: 'Reconteos',
    description: 'Ante diferencias, realizamos reconteos acotados para validar el dato antes del cierre.',
    highlight: true,
  },
  {
    id: '05',
    title: 'Entrega de resultados',
    description:
      'Consolidamos capturas, analizamos desvíos y entregamos reportes orientados a auditoría y decisión operativa.',
  },
];
