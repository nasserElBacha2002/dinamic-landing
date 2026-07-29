import type { InteriorPageContent } from '@/content/types';
import { inventariosConDronesContent } from '@/content/services/inventariosConDrones';
import { inventariosFisicosContent } from '@/content/services/inventariosFisicos';
import { inventariosCiclicosContent } from '@/content/services/inventariosCiclicos';
import { auditoriaDeInventariosContent } from '@/content/services/auditoriaDeInventarios';
import { depositosCentrosDistribucionContent } from '@/content/industries/depositosCentrosDistribucion';
import { retailCadenasSucursalesContent } from '@/content/industries/retailCadenasSucursales';
import { operadoresLogisticosIndustriaContent } from '@/content/industries/operadoresLogisticosIndustria';
import { comoRealizarInventarioFisicoContent } from '@/content/resources/comoRealizarInventarioFisico';
import { comoPrepararDepositoContent } from '@/content/resources/comoPrepararDeposito';
import { inventarioGeneralVsCiclicoContent } from '@/content/resources/inventarioGeneralVsCiclico';
import { comoFuncionaInventarioDronesContent } from '@/content/resources/comoFuncionaInventarioDrones';

/**
 * Typed content keyed by published route id.
 * Used by page components, prerender JSON-LD and SEO validation (no React).
 */
export const interiorContentByRouteId: Record<string, InteriorPageContent> = {
  'service-inventarios-fisicos': inventariosFisicosContent,
  'service-inventarios-drones': inventariosConDronesContent,
  'service-inventarios-ciclicos': inventariosCiclicosContent,
  'service-auditoria-inventarios': auditoriaDeInventariosContent,
  'industry-depositos': depositosCentrosDistribucionContent,
  'industry-retail': retailCadenasSucursalesContent,
  'industry-operadores-logisticos': operadoresLogisticosIndustriaContent,
  'resource-inventario-fisico': comoRealizarInventarioFisicoContent,
  'resource-preparar-deposito': comoPrepararDepositoContent,
  'resource-general-vs-ciclico': inventarioGeneralVsCiclicoContent,
  'resource-como-funcionan-drones': comoFuncionaInventarioDronesContent,
};
