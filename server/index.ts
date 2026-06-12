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
const isProduction = process.env.NODE_ENV === 'production';

const DEV_ORIGINS = ['http://localhost:5173', 'http://localhost:3000'] as const;

/** Frontend (Hostinger); el API vive en api-landing.dinamiceducation.com — no incluir ese dominio aquí. */
const DEFAULT_PRODUCTION_ORIGINS = [
  'https://dinamicsystems.com',
  'https://www.dinamicsystems.com',
] as const;

function parseCorsOrigins(): Set<string> {
  const origins = new Set<string>();
  const raw = process.env.CORS_ALLOWED_ORIGINS?.trim();

  if (raw) {
    for (const entry of raw.split(',')) {
      const origin = entry.trim();
      if (origin) origins.add(origin);
    }
  } else {
    for (const origin of DEFAULT_PRODUCTION_ORIGINS) origins.add(origin);
  }

  if (!isProduction) {
    for (const origin of DEV_ORIGINS) origins.add(origin);
  }

  const legacyExtra = process.env.FRONTEND_ORIGIN?.trim();
  if (legacyExtra) origins.add(legacyExtra);

  return origins;
}

const allowedOrigins = parseCorsOrigins();

const app = express();

if (isProduction) {
  app.set('trust proxy', 1);
}

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
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
  }),
);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[server] API running on port ${PORT} (0.0.0.0), NODE_ENV=${process.env.NODE_ENV ?? 'undefined'}`);
  console.log(`[server] CORS: ${allowedOrigins.size} allowed origin(s)`);
  if (!isSmtpConfigured()) {
    console.warn(
      `[server] SMTP incompleto — revisá variables SMTP_* y CONTACT_* en el entorno. /api/contact responderá 503 hasta entonces.`,
    );
  }
});
