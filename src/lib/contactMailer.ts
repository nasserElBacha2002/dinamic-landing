import type { ContactFormValues } from './contactFormSchema';
import { contactFormSchema } from './contactFormSchema';

export type ContactMailerEnv = {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  /** Ej: `Dinamic <consultas@tudominio.com>` — debe ser un remitente verificado en Resend */
  CONTACT_FROM_EMAIL?: string;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildConsultationHtml(data: ContactFormValues): string {
  const rows: [string, string][] = [
    ['Nombre', data.fullName],
    ['Empresa', data.company],
    ['Email', data.email],
    ['Teléfono', data.phone],
    ['Operación', data.operation],
    ['Mensaje', data.message],
  ];
  const body = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;width:140px">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${escapeHtml(value).replace(/\n/g, '<br/>')}</td></tr>`,
    )
    .join('');
  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;font-size:14px;color:#111"><p>Nueva consulta desde el sitio web.</p><table style="border-collapse:collapse;max-width:640px">${body}</table></body></html>`;
}

function jsonResponse(body: unknown, status: number, extraHeaders?: HeadersInit): Response {
  const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
  if (extraHeaders) new Headers(extraHeaders).forEach((v, k) => headers.set(k, v));
  return new Response(JSON.stringify(body), { status, headers });
}

function corsHeaders(request: Request): HeadersInit {
  const origin = request.headers.get('Origin');
  return {
    'Access-Control-Allow-Origin': origin ?? '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

/**
 * Valida el cuerpo, envía el correo vía Resend y devuelve una `Response` HTTP estándar.
 * Sirve para Vercel Edge y para el middleware de desarrollo de Vite.
 */
export async function handleContactRequest(request: Request, env: ContactMailerEnv): Promise<Response> {
  const cors = corsHeaders(request);

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors });
  }

  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Método no permitido' }, 405, cors);
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return jsonResponse({ error: 'Cuerpo JSON inválido' }, 400, cors);
  }

  const parsed = contactFormSchema.safeParse(raw);
  if (!parsed.success) {
    return jsonResponse({ error: 'Validación fallida', issues: parsed.error.flatten() }, 400, cors);
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = env;
  if (!RESEND_API_KEY?.trim() || !CONTACT_TO_EMAIL?.trim()) {
    return jsonResponse({ error: 'Servicio de correo no configurado en el servidor' }, 503, cors);
  }

  const from = CONTACT_FROM_EMAIL?.trim() || 'Dinamic <onboarding@resend.dev>';
  const subject = `Consulta web: ${parsed.data.operation} — ${parsed.data.company}`;

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY.trim()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_TO_EMAIL.trim()],
      reply_to: parsed.data.email,
      subject,
      html: buildConsultationHtml(parsed.data),
    }),
  });

  if (!resendRes.ok) {
    const errText = await resendRes.text().catch(() => '');
    console.error('[contactMailer] Resend error', resendRes.status, errText);
    return jsonResponse({ error: 'No se pudo enviar el correo. Intentá de nuevo más tarde.' }, 502, cors);
  }

  return jsonResponse({ ok: true }, 200, cors);
}
