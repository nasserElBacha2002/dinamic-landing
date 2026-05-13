/// <reference types="node" />
import type { IncomingMessage, IncomingHttpHeaders, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';
import { handleContactRequest } from '../src/lib/contactMailer';

function readBody(req: IncomingMessage): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

/** Convierte cabeceras Node a `Headers` válidos para el constructor estándar `Request`. */
function toWebHeaders(headers: IncomingHttpHeaders): Headers {
  const out = new Headers();
  for (const [rawKey, rawVal] of Object.entries(headers)) {
    if (rawVal == null) continue;
    if (Array.isArray(rawVal)) {
      for (const v of rawVal) out.append(rawKey, v);
    } else {
      out.set(rawKey, rawVal);
    }
  }
  return out;
}

/**
 * En desarrollo, atiende POST/OPTIONS en `/api/contact` con la misma lógica que el Edge handler de Vercel.
 */
export function contactDevApiPlugin(env: Record<string, string | undefined>): Plugin {
  return {
    name: 'contact-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = (req.url ?? '').split('?')[0];
        if (pathname !== '/api/contact') {
          next();
          return;
        }

        const reqHttp = req as IncomingMessage;
        const resHttp = res as ServerResponse;

        try {
          const origin = `http://${reqHttp.headers.host ?? 'localhost'}`;
          const url = `${origin}${req.url ?? '/api/contact'}`;
          const hdrs = toWebHeaders(reqHttp.headers);

          let webReq: Request;
          if (reqHttp.method === 'POST') {
            const buf = await readBody(reqHttp);
            webReq = new Request(url, {
              method: 'POST',
              headers: hdrs,
              body: buf.length > 0 ? new Uint8Array(buf) : undefined,
            });
          } else {
            webReq = new Request(url, { method: reqHttp.method ?? 'GET', headers: hdrs });
          }

          const response = await handleContactRequest(webReq, {
            RESEND_API_KEY: env.RESEND_API_KEY,
            CONTACT_TO_EMAIL: env.CONTACT_TO_EMAIL,
            CONTACT_FROM_EMAIL: env.CONTACT_FROM_EMAIL,
          });

          resHttp.statusCode = response.status;
          response.headers.forEach((value, key) => {
            resHttp.setHeader(key, value);
          });
          const ab = await response.arrayBuffer();
          resHttp.end(Buffer.from(new Uint8Array(ab)));
        } catch (e) {
          console.error('[contact-dev-api]', e);
          resHttp.statusCode = 500;
          resHttp.setHeader('Content-Type', 'application/json; charset=utf-8');
          resHttp.end(JSON.stringify({ error: 'Error interno del servidor de desarrollo' }));
        }
      });
    },
  };
}
