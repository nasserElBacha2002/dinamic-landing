/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL del backend Express (sin barra final), ej. `http://localhost:3001` */
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
