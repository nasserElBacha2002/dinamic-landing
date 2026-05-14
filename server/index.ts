import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { sendContactEmail, isSmtpConfigured } from './mailer.js';
import { contactApiBodySchema } from './schemas/contactSchema.js';

/** Raíz del repo (sirve con `tsx server/index.ts` y con `node server/dist/index.js`). */
const serverDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot =
  path.basename(serverDir) === 'dist' ? path.resolve(serverDir, '..', '..') : path.resolve(serverDir, '..');

dotenv.config({ path: path.join(projectRoot, '.env') });

const PORT = Number(process.env.PORT) || 3001;

const allowedOrigins = new Set([
  'http://localhost:5173',
  'https://dinamicsystems.com',
  'https://www.dinamicsystems.com',
]);

const extra = process.env.FRONTEND_ORIGIN?.trim();
if (extra) allowedOrigins.add(extra);

const app = express();
app.use(express.json({ limit: '64kb' }));

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }
      callback(null, allowedOrigins.has(origin));
    },
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    maxAge: 86400,
  }),
);

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  const parsed = contactApiBodySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: 'Los datos enviados no son válidos.' });
    return;
  }

  const body = parsed.data;
  const trapRaw = body.botTrap ?? '';
  const trapNormalized = trapRaw.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
  if (trapNormalized.length > 0) {
    console.warn('[contact] no mail: honeypot (botTrap) no vacío', { length: trapRaw.length });
    res.status(200).json({ ok: true });
    return;
  }

  if (!isSmtpConfigured()) {
    console.error('[contact] SMTP not configured');
    res.status(503).json({ error: 'Servicio temporalmente no disponible.' });
    return;
  }

  const { botTrap: _honeypot, ...mailPayload } = body;
  void _honeypot;

  try {
    const info = await sendContactEmail(mailPayload);
    console.info('[contact] mail sent', { messageId: info.messageId, to: process.env.CONTACT_TO_EMAIL?.trim() });
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error('[contact] send failed', e instanceof Error ? e.message : 'unknown');
    res.status(502).json({ error: 'No se pudo enviar el mensaje.' });
  }
});

// TODO: add rate limiting (e.g. express-rate-limit) per IP for /api/contact

app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
  if (!isSmtpConfigured()) {
    console.warn(
      `[server] SMTP incompleto — revisá ${path.join(projectRoot, '.env')} (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS o SMTP_PASSWORD, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL). /api/contact responderá 503 hasta entonces.`,
    );
  }
});
