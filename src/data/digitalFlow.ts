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
    description: 'Validación en tiempo real.',
    icon: IconChartHistogram,
    accent: 'brand',
  },
  {
    key: 'validacion',
    label: 'Validación',
    description: 'Chequeo automático de discrepancias.',
    icon: IconShieldCheck,
    accent: 'cyan',
  },
  {
    key: 'reporte',
    label: 'Reporte',
    description: 'Paneles operativos en vivo.',
    icon: IconLayoutDashboard,
    accent: 'brand',
  },
  {
    key: 'integracion',
    label: 'Integración',
    description: 'Conexión con su ERP.',
    icon: IconPlug,
    accent: 'cyan',
  },
];
