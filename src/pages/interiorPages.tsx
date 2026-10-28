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
import { getRouteById } from '@/routes';
import { interiorContentByRouteId } from '@/content/registry';
import { HubPageTemplate } from '@/pages/templates/HubPageTemplate';
import { IndustryPageTemplate } from '@/pages/templates/IndustryPageTemplate';
import { ResourcePageTemplate } from '@/pages/templates/ResourcePageTemplate';
import { ServicePageTemplate } from '@/pages/templates/ServicePageTemplate';
import type { ComponentType } from 'react';
import type { HubPageContent, IndustryPageContent, ResourcePageContent, ServicePageContent } from '@/content/types';

function requireRoute(id: string) {
  const route = getRouteById(id);
  if (!route) throw new Error(`Missing published route: ${id}`);
  return route;
}

export function interiorPage(id: string): ComponentType {
  return function InteriorRoutePage() {
    const route = requireRoute(id);
    const content = interiorContentByRouteId[id];
    if (!content) throw new Error(`Missing content registry entry: ${id}`);
    if (content.kind === 'hub') {
      return <HubPageTemplate route={route} content={content as HubPageContent} />;
    }
    if (content.kind === 'resource') {
      return <ResourcePageTemplate route={route} content={content as ResourcePageContent} />;
    }
    if (content.kind === 'service') {
      return <ServicePageTemplate route={route} content={content as ServicePageContent} />;
    }
    if (content.kind === 'industry') {
      return <IndustryPageTemplate route={route} content={content as IndustryPageContent} />;
    }
    throw new Error(`Unsupported content kind for ${id}`);
  };
}

export function ServiciosHubPage() {
  return <HubPageTemplate route={requireRoute('hub-servicios')} content={serviciosHubContent} />;
}

export function IndustriasHubPage() {
  return <HubPageTemplate route={requireRoute('hub-industrias')} content={industriasHubContent} />;
}

export function RecursosHubPage() {
  return <HubPageTemplate route={requireRoute('hub-recursos')} content={recursosHubContent} />;
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
