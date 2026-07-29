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
import { getRouteById } from '@/routes';
import { IndustryPageTemplate } from '@/pages/templates/IndustryPageTemplate';
import { ResourcePageTemplate } from '@/pages/templates/ResourcePageTemplate';
import { ServicePageTemplate } from '@/pages/templates/ServicePageTemplate';

function requireRoute(id: string) {
  const route = getRouteById(id);
  if (!route) throw new Error(`Missing published route: ${id}`);
  return route;
}

export function InventariosFisicosPage() {
  return <ServicePageTemplate route={requireRoute('service-inventarios-fisicos')} content={inventariosFisicosContent} />;
}

export function InventariosConDronesPage() {
  return (
    <ServicePageTemplate route={requireRoute('service-inventarios-drones')} content={inventariosConDronesContent} />
  );
}

export function InventariosCiclicosPage() {
  return (
    <ServicePageTemplate route={requireRoute('service-inventarios-ciclicos')} content={inventariosCiclicosContent} />
  );
}

export function AuditoriaInventariosPage() {
  return (
    <ServicePageTemplate route={requireRoute('service-auditoria-inventarios')} content={auditoriaDeInventariosContent} />
  );
}

export function DepositosCdPage() {
  return (
    <IndustryPageTemplate route={requireRoute('industry-depositos')} content={depositosCentrosDistribucionContent} />
  );
}

export function RetailCadenasPage() {
  return <IndustryPageTemplate route={requireRoute('industry-retail')} content={retailCadenasSucursalesContent} />;
}

export function OperadoresLogisticosPage() {
  return (
    <IndustryPageTemplate
      route={requireRoute('industry-operadores-logisticos')}
      content={operadoresLogisticosIndustriaContent}
    />
  );
}

export function ComoRealizarInventarioFisicoPage() {
  return (
    <ResourcePageTemplate
      route={requireRoute('resource-inventario-fisico')}
      content={comoRealizarInventarioFisicoContent}
    />
  );
}

export function ComoPrepararDepositoPage() {
  return (
    <ResourcePageTemplate route={requireRoute('resource-preparar-deposito')} content={comoPrepararDepositoContent} />
  );
}

export function InventarioGeneralVsCiclicoPage() {
  return (
    <ResourcePageTemplate
      route={requireRoute('resource-general-vs-ciclico')}
      content={inventarioGeneralVsCiclicoContent}
    />
  );
}

export function ComoFuncionaInventarioDronesPage() {
  return (
    <ResourcePageTemplate
      route={requireRoute('resource-como-funcionan-drones')}
      content={comoFuncionaInventarioDronesContent}
    />
  );
}
