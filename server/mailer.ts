import nodemailer from 'nodemailer';
import type { ContactApiBody } from './schemas/contactSchema.js';

export type ContactMailPayload = Omit<ContactApiBody, 'botTrap'>;

const OPERATION_ACTIVE_LABELS: Record<string, string> = {
  yes: 'Sí',
  no: 'No',
  to_define: 'A definir',
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildText(data: ContactMailPayload): string {
  const lines = [
    'Nueva solicitud de evaluación de inventario — Dinamic Systems',
    '',
    `Nombre completo: ${data.name}`,
    `Empresa: ${data.company}`,
    `Email: ${data.email}`,
    `Teléfono: ${data.phone?.trim() ? data.phone : '(no informado)'}`,
    `Tipo de operación: ${data.operationType}`,
    `Localidad o provincia: ${data.locality?.trim() ? data.locality.trim() : '(no informado)'}`,
    `Operación activa durante el conteo: ${
      data.operationActiveDuringCount
        ? OPERATION_ACTIVE_LABELS[data.operationActiveDuringCount] ?? data.operationActiveDuringCount
        : '(no informado)'
    }`,
    '',
    'Mensaje:',
    data.message,
  ];
  return lines.join('\n');
}

function buildHtml(data: ContactMailPayload): string {
  const rows: [string, string][] = [
    ['Nombre completo', data.name],
    ['Empresa', data.company],
    ['Email', data.email],
    ['Teléfono', data.phone?.trim() ? data.phone : '(no informado)'],
    ['Tipo de operación', data.operationType],
    ['Localidad o provincia', data.locality?.trim() ? data.locality.trim() : '(no informado)'],
    [
      'Operación activa durante el conteo',
      data.operationActiveDuringCount
        ? OPERATION_ACTIVE_LABELS[data.operationActiveDuringCount] ?? data.operationActiveDuringCount
        : '(no informado)',
    ],
    ['Mensaje', data.message],
  ];
  const body = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 14px;border:1px solid #e5e7eb;font-weight:600;width:180px;background:#f8fafc">${escapeHtml(label)}</td><td style="padding:10px 14px;border:1px solid #e5e7eb">${escapeHtml(value).replace(/\n/g, '<br/>')}</td></tr>`,
    )
    .join('');
  return `<!DOCTYPE html><html><body style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;color:#0f172a;line-height:1.5"><p style="margin:0 0 16px;font-weight:700">Nueva solicitud de evaluación de inventario — Dinamic Systems</p><table style="border-collapse:collapse;max-width:640px">${body}</table></body></html>`;
}

let transporter: nodemailer.Transporter | null = null;

/** Gmail y otros suelen mostrar la app password con espacios; el auth va sin ellos. */
function resolveSmtpPassword(): string | undefined {
  const raw = process.env.SMTP_PASS?.trim() || process.env.SMTP_PASSWORD?.trim();
  return raw ? raw.replace(/\s+/g, '') : undefined;
}

function getTransporter(): nodemailer.Transporter {
  if (transporter) return transporter;
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = resolveSmtpPassword();
  if (!host || !Number.isFinite(port) || !user || !pass) {
    throw new Error('SMTP configuration incomplete');
  }
  transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass },
  });
  return transporter;
}

export function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_PORT?.trim() &&
      process.env.SMTP_USER?.trim() &&
      resolveSmtpPassword() &&
      process.env.CONTACT_TO_EMAIL?.trim() &&
      process.env.CONTACT_FROM_EMAIL?.trim(),
  );
}

export async function sendContactEmail(data: ContactMailPayload): Promise<{ messageId?: string }> {
  const to = process.env.CONTACT_TO_EMAIL!.trim();
  const from = process.env.CONTACT_FROM_EMAIL!.trim();
  const transport = getTransporter();
  const info = await transport.sendMail({
    from,
    to,
    replyTo: data.email,
    subject: 'Nueva solicitud de evaluación de inventario — Dinamic Systems',
    text: buildText(data),
    html: buildHtml(data),
  });
  return { messageId: info.messageId };
}
