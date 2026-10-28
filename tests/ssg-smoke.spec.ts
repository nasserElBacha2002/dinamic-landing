import { expect, test, type Page } from '@playwright/test';

async function collectErrors(page: Page) {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  page.on('pageerror', (err) => pageErrors.push(err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  return { pageErrors, consoleErrors };
}

function assertClean(pageErrors: string[], consoleErrors: string[]) {
  const allErrors = [...pageErrors, ...consoleErrors];
  const hydrationNoise = allErrors.filter((text) =>
    /hydrat|minified react error #41|minified react error #418|minified react error #423|did not match/i.test(text),
  );
  expect(hydrationNoise, `hydration issues: ${hydrationNoise.join('\n')}`).toEqual([]);
  expect(pageErrors, `page errors: ${pageErrors.join('\n')}`).toEqual([]);
  expect(consoleErrors, `console errors: ${consoleErrors.join('\n')}`).toEqual([]);
}

test.describe('SSG multipage smoke', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });
  });

  test('home hydrates, anchors and form', async ({ page }) => {
    const { pageErrors, consoleErrors } = await collectErrors(page);
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    await page.locator('header a[href="/#contacto"]').first().click();
    await expect(page.locator('#contacto')).toBeInViewport();
    await expect(page.locator('#contacto form')).toBeVisible();
    assertClean(pageErrors, consoleErrors);
  });

  test('service page + contact hash from interior', async ({ page }) => {
    const { pageErrors, consoleErrors } = await collectErrors(page);
    await page.goto('/servicios/inventarios-fisicos/', { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle(/Inventarios físicos para empresas/);
    await expect(page.locator('h1')).toContainText(/Inventarios físicos profesionales/i);
    await expect(page.getByRole('navigation', { name: 'Miga de pan' })).toBeVisible();
    await page.locator('header a[href="/#contacto"]').first().click();
    await expect(page).toHaveURL(/\/#contacto/);
    await expect(page.locator('#contacto')).toBeInViewport({ timeout: 10_000 });
    assertClean(pageErrors, consoleErrors);
  });

  test('industry and resource pages', async ({ page }) => {
    const { pageErrors, consoleErrors } = await collectErrors(page);
    await page.goto('/industrias/depositos-centros-distribucion/', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText(/depósitos y centros de distribución/i);
    await page.goto('/recursos/como-realizar-un-inventario-fisico/', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText(/inventario físico empresarial/i);
    await expect(page.getByText(/Contenido técnico de Dinamic Systems/i)).toBeVisible();
    assertClean(pageErrors, consoleErrors);
  });

  test('404 is noindex and linked', async ({ page }) => {
    const { pageErrors, consoleErrors } = await collectErrors(page);
    // Hostinger serves dist/404.html for missing URLs; preview uses the static file directly.
    await page.goto('/404.html', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText(/No encontramos/i);
    const robots = await page.locator('meta[name="robots"]').getAttribute('content');
    expect(robots).toContain('noindex');
    await expect(page.getByRole('link', { name: /Ir al inicio/i })).toBeVisible();
    assertClean(pageErrors, consoleErrors);
  });

  test('mobile drawer lists primary services', async ({ page }) => {
    const { pageErrors, consoleErrors } = await collectErrors(page);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.getByLabel('Abrir menú').click();
    const drawer = page.getByRole('dialog');
    await expect(drawer.getByRole('link', { name: 'Inventarios físicos' })).toBeVisible();
    await expect(drawer.getByRole('link', { name: 'Inventarios con drones' })).toBeVisible();
    await drawer.getByRole('link', { name: 'Inventarios físicos' }).click();
    await expect(page).toHaveURL(/inventarios-fisicos/);
    assertClean(pageErrors, consoleErrors);
  });

  test('indexable hubs list children and keep header commercial', async ({ page }) => {
    const { pageErrors, consoleErrors } = await collectErrors(page);
    await page.goto('/servicios/', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText(/Servicios de inventarios físicos/i);
    await expect(page.getByRole('navigation', { name: 'Miga de pan' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Inventarios físicos' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Inventarios cíclicos' }).first()).toBeVisible();

    await page.goto('/industrias/', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText(/Inventarios físicos por tipo de operación/i);
    await expect(page.getByRole('link', { name: 'Depósitos y centros de distribución' }).first()).toBeVisible();

    await page.goto('/recursos/', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText(/Guías sobre inventarios físicos/i);
    await expect(page.getByRole('link', { name: 'Cómo realizar un inventario físico' }).first()).toBeVisible();

    await page.goto('/', { waitUntil: 'networkidle' });
    const header = page.locator('header').first();
    await expect(header.getByRole('link', { name: 'Inicio' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'Quiénes Somos' })).toBeVisible();
    await expect(header.getByRole('button', { name: /Servicios/ })).toBeVisible();
    await expect(header.getByRole('button', { name: /Industrias/ })).toBeVisible();
    await expect(header.getByRole('button', { name: /Recursos/ })).toHaveCount(0);
    await expect(header.getByRole('link', { name: /Buenas prácticas/i })).toHaveCount(0);
    await expect(header.getByRole('link', { name: /Innovación/i })).toHaveCount(0);
    await expect(header.getByRole('link', { name: /Investigación/i })).toHaveCount(0);
    assertClean(pageErrors, consoleErrors);
  });

  test('child breadcrumb links to published hub', async ({ page }) => {
    const { pageErrors, consoleErrors } = await collectErrors(page);
    await page.goto('/servicios/inventarios-fisicos/', { waitUntil: 'networkidle' });
    const crumbs = page.getByRole('navigation', { name: 'Miga de pan' });
    const hubLink = crumbs.getByRole('link', { name: 'Servicios' });
    await expect(hubLink).toHaveAttribute('href', '/servicios/');
    await page.goto('/servicios/', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText(/Servicios de inventarios físicos/i);
    assertClean(pageErrors, consoleErrors);
  });

  test('innovación hub is published; investigación hub stays unpublished', async ({ page }) => {
    const innovacion = await page.goto('/innovacion/', { waitUntil: 'domcontentloaded' });
    expect(innovacion?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText(/Tecnología e innovación/i);
    const header = page.locator('header').first();
    await expect(header.getByRole('link', { name: /Innovación/i })).toHaveCount(0);
    await expect(header.getByRole('link', { name: /Investigación/i })).toHaveCount(0);
    await expect(header.getByRole('button', { name: /Recursos/ })).toHaveCount(0);

    const investigacionHub = await page.goto('/investigacion/', { waitUntil: 'domcontentloaded' });
    expect(investigacionHub?.status(), '/investigacion/ must not be an indexable hub').toBeGreaterThanOrEqual(400);

    const metodologia = await page.goto('/investigacion/metodologia-inventarios/', {
      waitUntil: 'domcontentloaded',
    });
    expect(metodologia?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText(/Metodología de un inventario físico/i);
    const crumbs = page.getByRole('navigation', { name: 'Miga de pan' });
    await expect(crumbs.getByRole('link', { name: 'Investigación' })).toHaveCount(0);
    await expect(crumbs.getByText('Metodología de inventarios')).toBeVisible();
    await expect(page.locator('footer a[href="/investigacion/"]')).toHaveCount(0);
  });

  test('all sitemap URLs prerender with canonical and one H1', async ({ page, request }) => {
    test.setTimeout(180_000);
    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.ok()).toBeTruthy();
    const xml = await sitemap.text();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
      const abs = match[1] ?? '';
      return abs.replace('https://dinamicsystems.com', '') || '/';
    });
    expect(locs.length).toBe(47);
    expect(locs).toContain('/buenas-practicas/');
    expect(locs).toContain('/recursos/por-que-no-coincide-el-stock/');
    expect(locs).toContain('/recursos/checklist-inventario-fisico/');
    expect(locs).toContain('/recursos/como-calcular-personal-inventario/');
    expect(locs).toContain('/buenas-practicas/control-stock-en-movimiento/');
    expect(locs).toContain('/buenas-practicas/trazabilidad-conteo-reconteo/');
    expect(locs).toContain('/innovacion/ocr-inventarios/');
    expect(locs).toContain('/innovacion/');
    expect(locs).toContain('/investigacion/metodologia-inventarios/');
    expect(locs).not.toContain('/investigacion/');
    expect(locs).not.toContain('/herramientas/estimador-inventario/');
    for (const loc of locs) {
      const response = await page.goto(loc, { waitUntil: 'domcontentloaded' });
      expect(response?.status(), loc).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical, loc).toBe(`https://dinamicsystems.com${loc}`);
      const header = page.locator('header').first();
      await expect(header.getByRole('button', { name: /Recursos/ })).toHaveCount(0);
      await expect(header.getByRole('link', { name: /Buenas prácticas/i })).toHaveCount(0);
      await expect(header.getByRole('link', { name: /Innovación/i })).toHaveCount(0);
      await expect(header.getByRole('link', { name: /Investigación/i })).toHaveCount(0);
    }
  });

  test('buenas prácticas hub is indexable and lists published practices', async ({ page }) => {
    const response = await page.goto('/buenas-practicas/', { waitUntil: 'networkidle' });
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText(/Buenas prácticas de inventario físico/i);
    await expect(page.getByRole('link', { name: 'Reconteos inteligentes' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Control de posiciones y pasillos' }).first()).toBeVisible();
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://dinamicsystems.com/buenas-practicas/');
    const header = page.locator('header').first();
    await expect(header.getByRole('link', { name: /Buenas prácticas/i })).toHaveCount(0);
  });

  test('phase 1 commercial landings stay canonical and commercial', async ({ page }) => {
    const { pageErrors, consoleErrors } = await collectErrors(page);
    const commercial = [
      '/servicios/inventarios-fisicos/',
      '/servicios/inventarios-con-drones/',
      '/servicios/inventarios-ciclicos/',
      '/servicios/auditoria-de-inventarios/',
      '/industrias/depositos-centros-distribucion/',
      '/industrias/retail-cadenas-sucursales/',
      '/industrias/operadores-logisticos-industria/',
    ];
    for (const path of commercial) {
      const response = await page.goto(path, { waitUntil: 'networkidle' });
      expect(response?.status(), path).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://dinamicsystems.com${path}`);
      const header = page.locator('header').first();
      await expect(header.getByRole('link', { name: 'Inicio' })).toBeVisible();
      await expect(header.getByRole('button', { name: /Recursos/ })).toHaveCount(0);
    }
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText(/Inventarios físicos para depósitos/i);
    const homeHeader = page.locator('header').first();
    await expect(homeHeader.getByRole('link', { name: /Buenas prácticas/i })).toHaveCount(0);
    assertClean(pageErrors, consoleErrors);
  });

  test('internal redirect sources are not prerendered documents', async ({ request }) => {
    const sources = [
      '/inventarios-fisicos-argentina',
      '/inventarios-fisicos-argentina/',
      '/inventarios-fisicos-argentina.html',
      '/inventarios-con-drones-depositos/',
      '/inventarios-depositos/',
      '/inventarios-depositos-algo',
      '/empresa-inventarios-depositos-argentina/',
      '/inventarios-centros-distribucion-argentina/',
      '/buenas-practicas/servicio-inventario-fisico-que-recibe-cliente/',
      '/buenas-practicas/compromiso-cumplimiento-inventario-confiable/',
      '/mejores-empresas-inventarios-argentina/',
      '/inventarios-innovadores-argentina/',
      '/tecnologia-inventarios/',
      '/buenas-practicas/metodologia-operativa-inventarios-fisicos/',
      '/innovacion/drones-vision-artificial-inventarios/',
      '/investigacion/',
    ];
    for (const path of sources) {
      const response = await request.get(path);
      expect(response.status(), `${path} must not be an indexable prerendered page`).toBeGreaterThanOrEqual(400);
    }
  });

  test('phase 1 commercial FAQ is visible and page-specific', async ({ page }) => {
    const pages = [
      {
        path: '/servicios/inventarios-con-drones/',
        question: '¿En qué condiciones puede utilizarse un dron dentro de un depósito?',
      },
      {
        path: '/servicios/inventarios-ciclicos/',
        question: '¿Un inventario cíclico reemplaza a un inventario general?',
      },
      {
        path: '/servicios/auditoria-de-inventarios/',
        question: '¿Cuál es la diferencia entre auditar inventario y realizar un conteo completo?',
      },
    ];
    const seen = new Set<string>();
    for (const item of pages) {
      await page.goto(item.path, { waitUntil: 'networkidle' });
      const faq = page.locator('#faq');
      await expect(faq).toBeVisible();
      await expect(faq.getByText(item.question)).toBeVisible();
      await expect(faq.getByText(/Por qué elegir Dinamic/i)).toHaveCount(0);
      expect(seen.has(item.question)).toBe(false);
      seen.add(item.question);
    }
  });

  test('phase 5 authority pages keep distinct intents and stay out of the header', async ({ page }) => {
    const pages = [
      {
        path: '/recursos/checklist-inventario-fisico/',
        h1: /Checklist de un inventario físico/i,
      },
      {
        path: '/recursos/como-calcular-personal-inventario/',
        h1: /Cómo calcular el personal de un inventario físico/i,
      },
      {
        path: '/buenas-practicas/control-stock-en-movimiento/',
        h1: /Control de stock en movimiento/i,
      },
      {
        path: '/buenas-practicas/trazabilidad-conteo-reconteo/',
        h1: /Trazabilidad entre conteo y reconteo/i,
      },
      {
        path: '/innovacion/ocr-inventarios/',
        h1: /OCR en inventarios físicos/i,
      },
    ];
    for (const item of pages) {
      const response = await page.goto(item.path, { waitUntil: 'domcontentloaded' });
      expect(response?.status(), item.path).toBe(200);
      await expect(page.locator('h1')).toContainText(item.h1);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://dinamicsystems.com${item.path}`);
      await expect(page.getByText(/Contenido técnico de Dinamic Systems/i)).toBeVisible();
      const header = page.locator('header').first();
      await expect(header.getByRole('button', { name: /Recursos/ })).toHaveCount(0);
      await expect(header.getByRole('link', { name: /Buenas prácticas/i })).toHaveCount(0);
      await expect(header.getByRole('link', { name: /Innovación/i })).toHaveCount(0);
    }
    await page.goto('/recursos/checklist-inventario-fisico/', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('#checklist')).toBeVisible();
    await expect(page.getByRole('button', { name: /Imprimir checklist/i })).toBeVisible();
  });

  test('drones cluster keeps three distinct intents', async ({ page }) => {
    await page.goto('/servicios/inventarios-con-drones/', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toContainText(/Inventarios con drones para depósitos/i);
    await expect(page.locator('h1')).toHaveCount(1);
    await page.goto('/recursos/como-funciona-un-inventario-con-drones/', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toContainText(/Cómo funciona un inventario con drones/i);
    await page.goto('/innovacion/drones-inventarios/', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toContainText(/integración técnica y límites/i);
    await expect(page.getByRole('link', { name: /Servicio de inventarios con drones/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Cómo funciona un inventario con drones/i }).first()).toBeVisible();
  });

  test('secondary service and resource pages', async ({ page }) => {
    const { pageErrors, consoleErrors } = await collectErrors(page);
    await page.goto('/servicios/inventarios-ciclicos/', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText(/Inventarios cíclicos/i);
    await page.goto('/recursos/inventario-general-vs-inventario-ciclico/', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText(/Inventario general vs/i);
    await page.goto('/recursos/como-funciona-un-inventario-con-drones/', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText(/inventario con drones/i);
    assertClean(pageErrors, consoleErrors);
  });
});
