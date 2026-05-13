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

function getContactPostUrl(): string {
  const configured = import.meta.env.VITE_CONTACT_API_URL as string | undefined;
  if (configured?.trim()) return configured.trim();
  return '/api/contact';
}

type ApiErrorBody = { error?: string };

/**
 * POST de la consulta al endpoint `/api/contact` (o `VITE_CONTACT_API_URL`).
 */
export async function submitContactConsultation(data: ContactFormValues): Promise<void> {
  const url = getContactPostUrl();
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
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
