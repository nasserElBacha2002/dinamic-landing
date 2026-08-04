import {
  IconAnalyze,
  IconClipboardCheck,
  IconDrone,
  IconRefresh,
} from '@tabler/icons-react';
import type { ServiceItem } from '@/types/content';

export const services: ServiceItem[] = [
  {
    id: 'inventarios-fisicos',
    title: 'Inventarios físicos',
    description: 'Planificación, conteo, reconteos y entrega de resultados auditables.',
    bullets: ['CONTEO', 'RECONTEOS'],
    accent: 'brand',
    icon: IconClipboardCheck,
    to: '/servicios/inventarios-fisicos/',
  },
  {
    id: 'inventarios-ciclicos',
    title: 'Inventarios cíclicos',
    description: 'Conteos periódicos por criticidad, rotación o ubicación.',
    bullets: ['PERIODICIDAD', 'PRIORIZACIÓN'],
    accent: 'cyan',
    icon: IconRefresh,
    to: '/servicios/inventarios-ciclicos/',
  },
  {
    id: 'auditoria-inventarios',
    title: 'Auditoría de inventarios',
    description: 'Revisión de procedimientos, conteos, reconteos y evidencia documentada.',
    bullets: ['EVIDENCIA', 'MUESTREO'],
    accent: 'brand',
    icon: IconAnalyze,
    to: '/servicios/auditoria-de-inventarios/',
  },
  {
    id: 'inventarios-drones',
    title: 'Inventarios con drones',
    description: 'Modalidad complementaria para depósitos y posiciones en altura.',
    bullets: ['ALTURA', 'COMPLEMENTARIO'],
    accent: 'cyan',
    icon: IconDrone,
    to: '/servicios/inventarios-con-drones/',
  },
];
