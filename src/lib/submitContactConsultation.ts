import type { ContactFormValues } from '@/lib/contactFormSchema';

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

const PRODUCTION_API_BASE_URL = 'https://api-landing.dinamiceducation.com';

function getContactPostUrl(): string {
  const raw = import.meta.env.VITE_API_BASE_URL as string | undefined;
  const base = (raw?.trim() || (import.meta.env.PROD ? PRODUCTION_API_BASE_URL : undefined))?.replace(
    /\/$/,
    '',
  );
  if (!base) {
    throw new ContactSubmissionError('Falta configurar VITE_API_BASE_URL', 0);
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
  /** Honeypot: debe ir vacío; el servidor ignora el envío si tiene contenido. */
  botTrap?: string;
};

function toApiPayload(data: ContactFormValues): ContactApiPayload {
  return {
    name: data.fullName,
    company: data.company,
    email: data.email,
    phone: data.phone,
    operationType: data.operation,
    message: data.message,
    botTrap: data.honeypot ?? '',
  };
}

/**
 * POST JSON al backend Express (`VITE_API_BASE_URL` + `/api/contact`).
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
        : 'No se pudo enviar la consulta';
    throw new ContactSubmissionError(msg, response.status, body);
  }
}
