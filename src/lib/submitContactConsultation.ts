import type { ContactFormValues, OperationActiveDuringCount } from '@/lib/contactFormSchema';
import { operationActiveDuringCountValues } from '@/lib/contactFormSchema';

export class ContactSubmissionError extends Error {
  readonly status: number;
  readonly payload: unknown;

  constructor(message: string, status: number, payload?: unknown) {
    super(message);
    this.name = 'ContactSubmissionError';
    this.status = status;
    this.payload = payload;
  }
}

/** Production API host — only used when VITE_DEPLOY_ENV=production and VITE_API_BASE_URL is unset. */
export const PRODUCTION_API_BASE_URL = 'https://api-landing.dinamiceducation.com';

/**
 * Resolve the contact API base URL (no trailing slash).
 *
 * Order:
 * 1. `VITE_API_BASE_URL` if set at build time (required for local, staging, preview).
 * 2. If unset and `VITE_DEPLOY_ENV=production` → production fallback (explicit Hostinger prod only).
 * 3. Otherwise throw — never treat `import.meta.env.PROD` as production deploy.
 */
export function resolveContactApiBaseUrl(): { base: string; source: 'env' | 'production-fallback' } {
  const raw = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim();
  if (raw) {
    return { base: raw.replace(/\/$/, ''), source: 'env' };
  }
  const deployEnv = (import.meta.env.VITE_DEPLOY_ENV as string | undefined)?.trim().toLowerCase();
  if (deployEnv === 'production') {
    return { base: PRODUCTION_API_BASE_URL, source: 'production-fallback' };
  }
  throw new ContactSubmissionError(
    'Falta configurar VITE_API_BASE_URL (o VITE_DEPLOY_ENV=production para el fallback de Hostinger)',
    0,
  );
}

function getContactPostUrl(): string {
  const { base, source } = resolveContactApiBaseUrl();
  if (source === 'production-fallback' && typeof console !== 'undefined') {
    console.warn(
      `[contact] VITE_API_BASE_URL unset with VITE_DEPLOY_ENV=production; using ${PRODUCTION_API_BASE_URL}`,
    );
  }
  return `${base}/api/contact`;
}

type ApiErrorBody = { error?: string };

export type ContactApiPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  operationType: string;
  message: string;
  locality?: string;
  operationActiveDuringCount?: OperationActiveDuringCount;
  /** Honeypot: debe ir vacío; el servidor ignora el envío si tiene contenido. */
  botTrap?: string;
};

function isOperationActiveValue(value: string): value is OperationActiveDuringCount {
  return (operationActiveDuringCountValues as readonly string[]).includes(value);
}

export function toApiPayload(data: ContactFormValues): ContactApiPayload {
  const locality = data.locality?.trim();
  const active = data.operationActiveDuringCount?.trim() ?? '';
  return {
    name: data.fullName,
    company: data.company,
    email: data.email,
    phone: data.phone,
    operationType: data.operation,
    message: data.message,
    ...(locality ? { locality } : {}),
    ...(isOperationActiveValue(active) ? { operationActiveDuringCount: active } : {}),
    botTrap: data.honeypot ?? '',
  };
}

/**
 * POST JSON al backend Express (`resolveContactApiBaseUrl()` + `/api/contact`).
 */
export async function submitContactConsultation(data: ContactFormValues): Promise<void> {
  const url = getContactPostUrl();
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toApiPayload(data)),
  });

  let body: unknown;
  try {
    body = await response.json();
  } catch {
    body = undefined;
  }

  if (!response.ok) {
    const msg =
      typeof body === 'object' && body !== null && 'error' in body && typeof (body as ApiErrorBody).error === 'string'
        ? (body as ApiErrorBody).error!
        : 'No se pudo enviar la solicitud';
    throw new ContactSubmissionError(msg, response.status, body);
  }
}
