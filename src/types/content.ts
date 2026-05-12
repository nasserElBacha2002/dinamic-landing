import type { TablerIcon } from '@tabler/icons-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  accent: 'brand' | 'cyan';
  icon: TablerIcon;
}

export interface MethodologyStep {
  id: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export type ClientCategory =
  | 'Retail'
  | 'Logística'
  | 'Distribución'
  | 'Indumentaria'
  | 'Farmacias'
  | 'Consumo masivo'
  | 'Otro';

export interface Client {
  name: string;
  logo: string;
  category: ClientCategory;
  logoFile: string;
}

export const operationTypes = [
  'Retail / Tiendas',
  'Centro Logístico',
  'Depósito Industrial',
  'Otro',
] as const;

export type OperationType = (typeof operationTypes)[number];
