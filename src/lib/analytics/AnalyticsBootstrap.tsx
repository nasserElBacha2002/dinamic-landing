import { useEffect } from 'react';
import { getAnalyticsProvider } from '@/lib/analytics/events';

/**
 * Loads analytics scripts after mount (SSR-safe).
 *
 * Supported:
 * - omit / `none` → no scripts
 * - `plausible` + `VITE_PLAUSIBLE_DOMAIN` → Plausible
 *
 * `gtag` / GA4 is blocked until a consent manager exists (see deploy/MEASUREMENT_AND_INDEXING.md).
 */
export function AnalyticsBootstrap() {
  useEffect(() => {
    const provider = getAnalyticsProvider();
    if (provider === 'none') return;

    if (provider === 'plausible') {
      const domain = (import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined)?.trim();
      if (!domain) {
        console.warn(
          '[analytics] VITE_ANALYTICS_PROVIDER=plausible but VITE_PLAUSIBLE_DOMAIN is missing. Script not loaded.',
        );
        return;
      }
      if (document.getElementById('ds-plausible')) return;
      const script = document.createElement('script');
      script.id = 'ds-plausible';
      script.defer = true;
      script.setAttribute('data-domain', domain);
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
