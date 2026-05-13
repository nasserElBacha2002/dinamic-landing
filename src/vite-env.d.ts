/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL absoluta del endpoint de contacto (por defecto `/api/contact` en el mismo origen). */
  readonly VITE_CONTACT_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
