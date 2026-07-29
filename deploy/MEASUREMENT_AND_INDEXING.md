# Medición, indexación y GEO — Fase 5

## Google Search Console

1. Verificar propiedad de dominio `dinamicsystems.com` (DNS TXT o HTML file).
2. Enviar sitemap: `https://dinamicsystems.com/sitemap.xml` (12 URLs indexables).
3. Inspeccionar URLs prioritarias (home + servicios).
4. Revisar cobertura, CWV, consultas, CTR y posición mensualmente.
5. **No** guardar claves privadas en el repositorio.

## Bing Webmaster Tools

1. Verificar el sitio (o importar desde GSC si aplica).
2. Enviar el mismo sitemap.
3. Evaluar IndexNow solo si la clave puede gestionarse fuera del repo público. No commitear la clave.

## Analítica

| Variable | Uso |
|----------|-----|
| `VITE_ANALYTICS_PROVIDER` | `plausible` \| `none` / omitido |
| `VITE_PLAUSIBLE_DOMAIN` | Dominio Plausible (obligatorio si provider=plausible) |

**Restricción:** `gtag` / GA4 está **bloqueado** en el código hasta implementar un consent manager. Si se configura `gtag`, no se cargan scripts.

Eventos (sin PII ni texto libre del formulario):

- `contact_form_started` (una vez por montaje)
- `contact_form_submitted` / `contact_form_error`
- `contact_email_clicked` / `contact_phone_clicked`
- `service_cta_clicked`

### Privacidad / cookies

- **Plausible**: sin cookies propias típicas; banner no obligatorio por defecto (confirmar con asesoría local).
- **GA4**: no activar sin consentimiento y política aprobada.
- **Páginas legales públicas:** no publicadas hasta texto aprobado. Ver `deploy/CONTENT_EVIDENCE.md` / backlog legal. No usar placeholders `noindex` en producción.

## Monitoreo GEO manual

Plantilla: `deploy/GEO_MONITORING_TEMPLATE.md`.

## Performance

- Lighthouse en home + servicio + recurso
- `twitter:card=summary` mientras el asset OG sea el logo
- Bundle JS > 500 kB (aviso Vite)

## CI

`.github/workflows/ci.yml`:

```bash
npm ci
npm run typecheck
npm run build:validated
npx playwright install --with-deps chromium
npx playwright test --list
npm run test:ssg-smoke
```

`build:validated` ya incluye `validate:links` (no duplicar).
