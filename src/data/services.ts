import {
  IconAnalyze,
  IconBuildingWarehouse,
  IconForklift,
  IconShoppingBag,
} from '@tabler/icons-react';
import type { ServiceItem } from '@/types/content';

export const services: ServiceItem[] = [
  {
    id: 'tiendas',
    title: 'Tiendas',
    description:
      'Inventario físico integral en piso de venta y depósitos internos de retail. Especialistas en control operativo real.',
    bullets: ['CONTEO CIEGO', 'TRAZABILIDAD'],
    accent: 'brand',
    icon: IconShoppingBag,
  },
  {
    id: 'cd-logistica',
    title: 'CD & Logística',
    description:
      'Inventarios masivos de alta rotación con relevamiento por ubicación en superficies industriales.',
    bullets: ['AUDITORÍA PICKING', 'VALIDACIÓN PALLETS'],
    accent: 'cyan',
    icon: IconForklift,
  },
  {
    id: 'depositos',
    title: 'Depósitos',
    description:
      'Integridad de stock y gestión de ubicaciones críticas mediante mapeo dinámico de racks y control físico.',
    bullets: ['MAPEO DE RACKS', 'RELEVAMIENTO'],
    accent: 'brand',
    icon: IconBuildingWarehouse,
  },
  {
    id: 'consultoria',
    title: 'Consultoría',
    description:
      'Relevamientos estructurados y mapeo para la optimización de trazabilidad y activos logísticos.',
    bullets: ['AUDITORÍA ACTIVOS', 'OPTIMIZACIÓN'],
    accent: 'cyan',
    icon: IconAnalyze,
  },
];
