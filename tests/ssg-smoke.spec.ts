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
    await expect(page.getByText(/Publicado por Dinamic Systems/i)).toBeVisible();
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
