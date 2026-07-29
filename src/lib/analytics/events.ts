/**
 * Client-only analytics helpers. No PII / form free-text.
 * Disabled by default. GA4 (`gtag`) is intentionally unsupported until a consent manager exists.
 */

export type AnalyticsEventName =
  | 'contact_form_started'
  | 'contact_form_submitted'
  | 'contact_form_error'
  | 'contact_email_clicked'
  | 'contact_phone_clicked'
  | 'service_cta_clicked'
  | 'case_study_clicked'
  | 'resource_to_service_clicked';

export type AnalyticsProvider = 'none' | 'plausible';

function readProvider(): AnalyticsProvider {
  const raw = (import.meta.env.VITE_ANALYTICS_PROVIDER as string | undefined)?.toLowerCase()?.trim();
  if (!raw || raw === 'none') return 'none';
  if (raw === 'plausible') return 'plausible';
  if (raw === 'gtag') {
    if (typeof console !== 'undefined') {
      console.warn(
        '[analytics] VITE_ANALYTICS_PROVIDER=gtag is blocked until a consent manager is implemented. No scripts loaded.',
      );
    }
    return 'none';
  }
  if (typeof console !== 'undefined') {
    console.warn(`[analytics] Unknown VITE_ANALYTICS_PROVIDER="${raw}". Using none.`);
  }
  return 'none';
}

export function getAnalyticsProvider(): AnalyticsProvider {
  return readProvider();
}

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

/** Never pass email, phone, names, or free-text message content. */
export function trackEvent(name: AnalyticsEventName, props?: Record<string, string>): void {
  if (typeof window === 'undefined') return;
  const provider = readProvider();
  if (provider === 'none') return;

  try {
    if (provider === 'plausible' && typeof window.plausible === 'function') {
      window.plausible(name, props ? { props } : undefined);
    }
  } catch {
    // Never break UX for analytics failures
  }
}
