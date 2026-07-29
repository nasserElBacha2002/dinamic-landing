/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL del backend Express (sin barra final), ej. `https://api-landing.dinamiceducation.com` */
  readonly VITE_API_BASE_URL?: string;
  /** Solo `production` habilita fallback de API si falta VITE_API_BASE_URL */
  readonly VITE_DEPLOY_ENV?: string;
  /** `plausible` | `none` — `gtag` bloqueado hasta consent manager */
  readonly VITE_ANALYTICS_PROVIDER?: string;
  /** Plausible site domain, e.g. dinamicsystems.com */
  readonly VITE_PLAUSIBLE_DOMAIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
