import { createElement, type ComponentType } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from '@/layouts/SiteLayout';
import { HomePage } from '@/pages/HomePage';
import {
  AuditoriaInventariosPage,
  ComoFuncionaInventarioDronesPage,
  ComoPrepararDepositoPage,
  ComoRealizarInventarioFisicoPage,
  DepositosCdPage,
  IndustriasHubPage,
  InventarioGeneralVsCiclicoPage,
  InventariosCiclicosPage,
  InventariosConDronesPage,
  InventariosFisicosPage,
  OperadoresLogisticosPage,
  RecursosHubPage,
  RetailCadenasPage,
  ServiciosHubPage,
  interiorPage,
} from '@/pages/interiorPages';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { publishedRoutes, type RouteId } from '@/routes';
import { interiorContentByRouteId } from '@/content/registry';

const pageByRouteId = {
  home: HomePage,
  'hub-servicios': ServiciosHubPage,
  'hub-industrias': IndustriasHubPage,
  'hub-recursos': RecursosHubPage,
  'service-inventarios-fisicos': InventariosFisicosPage,
  'service-inventarios-drones': InventariosConDronesPage,
  'service-inventarios-ciclicos': InventariosCiclicosPage,
  'service-auditoria-inventarios': AuditoriaInventariosPage,
  'industry-depositos': DepositosCdPage,
  'industry-retail': RetailCadenasPage,
  'industry-operadores-logisticos': OperadoresLogisticosPage,
  'resource-inventario-fisico': ComoRealizarInventarioFisicoPage,
  'resource-preparar-deposito': ComoPrepararDepositoPage,
  'resource-general-vs-ciclico': InventarioGeneralVsCiclicoPage,
  'resource-como-funcionan-drones': ComoFuncionaInventarioDronesPage,
  'resource-por-que-no-coincide': interiorPage('resource-por-que-no-coincide'),
  'resource-cuanto-tarda': interiorPage('resource-cuanto-tarda'),
  'resource-interno-vs-tercerizado': interiorPage('resource-interno-vs-tercerizado'),
  'resource-elegir-empresa': interiorPage('resource-elegir-empresa'),
  'resource-cuanto-cuesta': interiorPage('resource-cuanto-cuesta'),
  'resource-cotizar': interiorPage('resource-cotizar'),
  'resource-sin-detener': interiorPage('resource-sin-detener'),
  'resource-reducir-diferencias': interiorPage('resource-reducir-diferencias'),
  'resource-manual-vs-tecnologico': interiorPage('resource-manual-vs-tecnologico'),
  'hub-buenas-practicas': interiorPage('hub-buenas-practicas'),
  'practice-reconteos': interiorPage('practice-reconteos'),
  'practice-posiciones': interiorPage('practice-posiciones'),
  'practice-comunicacion': interiorPage('practice-comunicacion'),
  'practice-resultados-auditables': interiorPage('practice-resultados-auditables'),
  'practice-planificacion': interiorPage('practice-planificacion'),
  'practice-equipos': interiorPage('practice-equipos'),
  'practice-duplicados': interiorPage('practice-duplicados'),
  'practice-adaptado': interiorPage('practice-adaptado'),
  'hub-innovacion': interiorPage('hub-innovacion'),
  'innovation-tecnologia-aplicada': interiorPage('innovation-tecnologia-aplicada'),
  'innovation-ia': interiorPage('innovation-ia'),
  'innovation-drones': interiorPage('innovation-drones'),
  'innovation-vision': interiorPage('innovation-vision'),
  'innovation-etiquetas': interiorPage('innovation-etiquetas'),
  'innovation-mobile-offline': interiorPage('innovation-mobile-offline'),
  'innovation-tiempo-real': interiorPage('innovation-tiempo-real'),
  'research-metodologia': interiorPage('research-metodologia'),
} satisfies Record<RouteId, ComponentType>;

for (const route of publishedRoutes) {
  if (route.pageType !== 'home' && !interiorContentByRouteId[route.id]) {
    throw new Error(`App: interior route "${route.id}" missing content registry entry`);
  }
  if (route.pageType === 'service' && interiorContentByRouteId[route.id]?.kind !== 'service') {
    throw new Error(`App: route "${route.id}" expects service content`);
  }
  if (route.pageType === 'industry' && interiorContentByRouteId[route.id]?.kind !== 'industry') {
    throw new Error(`App: route "${route.id}" expects industry content`);
  }
  if (route.pageType === 'resource' && interiorContentByRouteId[route.id]?.kind !== 'resource') {
    throw new Error(`App: route "${route.id}" expects resource content`);
  }
  if (route.pageType === 'hub' && interiorContentByRouteId[route.id]?.kind !== 'hub') {
    throw new Error(`App: route "${route.id}" expects hub content`);
  }
}

/**
 * Public routes are driven by `publishedRoutes` in src/routes.ts.
 * Catch-all renders the shared 404 (also prerendered to dist/404.html).
 */
export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {publishedRoutes.map((route) => (
          <Route key={route.id} path={route.path} element={createElement(pageByRouteId[route.id])} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
