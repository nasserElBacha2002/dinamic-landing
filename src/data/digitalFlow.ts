import {
  IconBarcode,
  IconChartHistogram,
  IconLayoutDashboard,
  IconPlug,
  IconShieldCheck,
} from '@tabler/icons-react';

export interface DigitalFlowStep {
  key: string;
  label: string;
  description: string;
  icon: typeof IconBarcode;
  accent: 'brand' | 'cyan';
}

export const digitalFlowSteps: DigitalFlowStep[] = [
  {
    key: 'captura',
    label: 'Captura',
    description: 'App móvil propia para relevamiento.',
    icon: IconBarcode,
    accent: 'cyan',
  },
  {
    key: 'proceso',
    label: 'Proceso',
    description: 'Seguimiento del avance del operativo.',
    icon: IconChartHistogram,
    accent: 'brand',
  },
  {
    key: 'validacion',
    label: 'Validación',
    description: 'Registro y revisión de diferencias.',
    icon: IconShieldCheck,
    accent: 'cyan',
  },
  {
    key: 'reporte',
    label: 'Reporte',
    description: 'Reportes por sector o ubicación.',
    icon: IconLayoutDashboard,
    accent: 'brand',
  },
  {
    key: 'integracion',
    label: 'Integración',
    description: 'Exportación de datos según el alcance.',
    icon: IconPlug,
    accent: 'cyan',
  },
];
