import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  // Multipage SSG: do not fall back unknown URLs to dist/index.html (would mismatch 404.html).
  appType: 'mpa',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Needed so prerender can map /src/assets/* → hashed /assets/* for Hostinger.
    manifest: true,
  },
  ssr: {
    // Bundle Mantine/Framer for SSR so CSS-in-JS and ESM resolve cleanly during prerender.
    noExternal: ['@mantine/core', '@mantine/hooks', '@mantine/notifications', 'framer-motion', '@emotion/react'],
  },
});
