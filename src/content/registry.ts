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
import { serviciosHubContent } from '@/content/hubs/servicios';
import { industriasHubContent } from '@/content/hubs/industrias';
import { recursosHubContent } from '@/content/hubs/recursos';
import { buenasPracticasHubContent } from '@/content/hubs/buenasPracticas';
import { porQueNoCoincideElStockContent } from '@/content/resources/porQueNoCoincideElStock';
import { cuantoTardaUnInventarioFisicoContent } from '@/content/resources/cuantoTardaUnInventarioFisico';
import { inventarioInternoVsTercerizadoContent } from '@/content/resources/inventarioInternoVsTercerizado';
import { comoElegirEmpresaInventariosContent } from '@/content/resources/comoElegirEmpresaInventarios';
import { cuantoCuestaUnInventarioFisicoContent } from '@/content/resources/cuantoCuestaUnInventarioFisico';
import { cotizarInventarioFisicoContent } from '@/content/resources/cotizarInventarioFisico';
import { inventariosSinDetenerOperacionContent } from '@/content/resources/inventariosSinDetenerOperacion';
import { comoReducirDiferenciasDeStockContent } from '@/content/resources/comoReducirDiferenciasDeStock';
import { inventarioManualVsTecnologicoContent } from '@/content/resources/inventarioManualVsTecnologico';
import { reconteosInteligentesContent } from '@/content/practices/reconteosInteligentes';
import { controlPosicionesPasillosContent } from '@/content/practices/controlPosicionesPasillos';
import { comunicacionClienteInventarioContent } from '@/content/practices/comunicacionClienteInventario';
import { resultadosAuditablesContent } from '@/content/practices/resultadosAuditables';

/**
 * Typed content keyed by published route id.
 * Used by page components, prerender JSON-LD and SEO validation (no React).
 */
export const interiorContentByRouteId: Record<string, InteriorPageContent> = {
  'hub-servicios': serviciosHubContent,
  'hub-industrias': industriasHubContent,
  'hub-recursos': recursosHubContent,
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
  'resource-por-que-no-coincide': porQueNoCoincideElStockContent,
  'resource-cuanto-tarda': cuantoTardaUnInventarioFisicoContent,
  'resource-interno-vs-tercerizado': inventarioInternoVsTercerizadoContent,
  'resource-elegir-empresa': comoElegirEmpresaInventariosContent,
  'resource-cuanto-cuesta': cuantoCuestaUnInventarioFisicoContent,
  'resource-cotizar': cotizarInventarioFisicoContent,
  'resource-sin-detener': inventariosSinDetenerOperacionContent,
  'resource-reducir-diferencias': comoReducirDiferenciasDeStockContent,
  'resource-manual-vs-tecnologico': inventarioManualVsTecnologicoContent,
  'hub-buenas-practicas': buenasPracticasHubContent,
  'practice-reconteos': reconteosInteligentesContent,
  'practice-posiciones': controlPosicionesPasillosContent,
  'practice-comunicacion': comunicacionClienteInventarioContent,
  'practice-resultados-auditables': resultadosAuditablesContent,
};
