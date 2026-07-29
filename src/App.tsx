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
  InventarioGeneralVsCiclicoPage,
  InventariosCiclicosPage,
  InventariosConDronesPage,
  InventariosFisicosPage,
  OperadoresLogisticosPage,
  RetailCadenasPage,
} from '@/pages/interiorPages';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { publishedRoutes, type RouteId } from '@/routes';
import { interiorContentByRouteId } from '@/content/registry';

const pageByRouteId = {
  home: HomePage,
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
