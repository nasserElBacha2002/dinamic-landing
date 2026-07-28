import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppProviders } from '@/AppProviders';
import App from '@/App';

/**
 * SSR entry used only by scripts/prerender.ts (not shipped to the browser).
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppProviders>
        <App />
      </AppProviders>
    </StaticRouter>,
  );
}
