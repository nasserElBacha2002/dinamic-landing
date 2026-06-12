# Despliegue del API — Dinamic Systems Landing

Backend Express (TypeScript) expuesto en `https://api-landing.dinamiceducation.com`, detrás de Nginx en Ubuntu.

El frontend estático vive en Hostinger y consume este API desde un **dominio distinto**:

| Rol | Dominio |
|-----|---------|
| Frontend | `https://dinamicsystems.com`, `https://www.dinamicsystems.com` |
| Backend (API) | `https://api-landing.dinamiceducation.com` |

Por eso CORS debe permitir los orígenes del frontend (`dinamicsystems.com`), no el dominio del API (`dinamiceducation.com`), salvo que también sirvas una página en ese dominio que llame al API.

## Requisitos previos

- Ubuntu con acceso `sudo`
- Git
- Docker y el plugin Docker Compose
- Nginx y Certbot
- Registro DNS apuntando `api-landing.dinamiceducation.com` al servidor (ver [DNS](#dns))

### Instalar dependencias del sistema

```bash
sudo apt update
sudo apt install -y git nginx certbot python3-certbot-nginx
```

### Verificar Docker

Si Docker no está instalado, seguí la [documentación oficial de Docker Engine para Ubuntu](https://docs.docker.com/engine/install/ubuntu/) e instalá también el [plugin Compose](https://docs.docker.com/compose/install/linux/).

```bash
docker --version
docker compose version
```

Ambos comandos deben responder con una versión. Si fallan, instalá Docker antes de continuar.

---

## Despliegue inicial

### 1. Clonar el repositorio

```bash
sudo mkdir -p /opt/dinamic-systems-landing-api
sudo chown -R "$USER":"$USER" /opt/dinamic-systems-landing-api
cd /opt/dinamic-systems-landing-api
git clone <REPOSITORY_URL> .
```

Reemplazá `<REPOSITORY_URL>` por la URL real del repositorio (HTTPS o SSH).

### 2. Configurar variables de entorno

```bash
cp .env.example .env
nano .env
```

Completá al menos:

| Variable | Descripción |
|----------|-------------|
| `NODE_ENV` | Debe ser `production` en el servidor |
| `PORT` | `3001` (coincide con Docker y Nginx) |
| `CORS_ALLOWED_ORIGINS` | Orígenes del frontend: `https://dinamicsystems.com,https://www.dinamicsystems.com` |
| `SMTP_*` | Credenciales del servidor de correo |
| `CONTACT_TO_EMAIL` | Destino de consultas del formulario |
| `CONTACT_FROM_EMAIL` | Remitente autorizado en SMTP |

No commitees `.env`. Contiene secretos (contraseña SMTP, etc.).

**No incluyas `VITE_API_BASE_URL` en el `.env` del servidor.** Esa variable es solo para el build del frontend React (ver [paso 7](#7-frontend-react-hostinger)).

Ejemplo mínimo del `.env` del backend:

```env
NODE_ENV=production
PORT=3001
CORS_ALLOWED_ORIGINS=https://dinamicsystems.com,https://www.dinamicsystems.com
# + SMTP_* y CONTACT_* con valores reales
```

### 3. Levantar el backend con Docker Compose

```bash
docker compose up -d --build
docker compose ps
docker compose logs -f api
```

El puerto **solo** se publica en `127.0.0.1:3001` (no expuesto directamente a Internet).

### 4. Validación local en el servidor

```bash
curl --fail http://127.0.0.1:3001/health
```

Respuesta esperada:

```json
{"status":"ok"}
```

Si SMTP no está configurado, `/health` sigue respondiendo; `/api/contact` devolverá `503`.

**No continúes con Nginx hasta que esta prueba funcione.**

---

## Nginx

### Copiar la plantilla del repositorio

```bash
sudo cp deploy/nginx/api-landing.dinamiceducation.com.conf \
  /etc/nginx/sites-available/api-landing.dinamiceducation.com
```

### Habilitar el sitio

```bash
sudo ln -sfn \
  /etc/nginx/sites-available/api-landing.dinamiceducation.com \
  /etc/nginx/sites-enabled/api-landing.dinamiceducation.com
```

### Validar y recargar

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Probá por HTTP antes de Certbot:

```bash
curl http://api-landing.dinamiceducation.com/health
```

---

## DNS

Creá el registro en la zona DNS de **`dinamiceducation.com`** (no en `dinamicsystems.com`), **antes** de ejecutar Certbot:

| Campo | Valor |
|-------|--------|
| Tipo | A |
| Nombre | `api-landing` |
| Valor | `<SERVER_PUBLIC_IP>` |
| TTL | `300` o automático |

Reemplazá `<SERVER_PUBLIC_IP>` por la IP pública de tu VPS.

Comprobación (desde tu computadora, cuando propague):

```bash
nslookup api-landing.dinamiceducation.com
```

La IP devuelta debe coincidir con la del servidor.

---

## HTTPS con Certbot

Con Nginx sirviendo HTTP en el puerto 80 y el DNS resuelto:

```bash
sudo certbot --nginx -d api-landing.dinamiceducation.com
```

Certbot modificará la configuración de Nginx para TLS. No incluimos rutas de certificados en la plantilla del repo a propósito.

---

## Validación pública

```bash
curl --fail https://api-landing.dinamiceducation.com/health
```

Respuesta esperada:

```json
{"status":"ok"}
```

### Probar el formulario de contacto

El formulario del frontend en `dinamicsystems.com` envía a:

```text
https://api-landing.dinamiceducation.com/api/contact
```

Contrato del endpoint (`POST /api/contact`, validado con Zod en `server/schemas/contactSchema.ts`):

| Campo | Tipo | Requerido |
|-------|------|-----------|
| `name` | string | sí |
| `company` | string | sí |
| `email` | string (email) | sí |
| `phone` | string | no |
| `operationType` | string | sí |
| `message` | string | sí |
| `botTrap` | string | no (honeypot; debe ir vacío u omitirse) |

Ejemplo (requiere SMTP configurado; el header `Origin` simula la petición desde el frontend):

```bash
curl --fail -X POST https://api-landing.dinamiceducation.com/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://dinamicsystems.com" \
  -d '{
    "name": "Jane Doe",
    "company": "Acme Corp",
    "email": "jane@example.com",
    "phone": "+598 99 123 456",
    "operationType": "Inventario con visión artificial",
    "message": "Quisiera agendar una demo.",
    "botTrap": ""
  }'
```

Respuesta exitosa: `{"ok":true}` con HTTP `200`.

Errores habituales:

- `400` — body inválido
- `502` — fallo al enviar correo
- `503` — SMTP no configurado

---

## 7. Frontend React (Hostinger)

En **tu máquina de desarrollo** (no en el servidor backend), antes de `npm run build`:

```bash
cp .env.frontend.example .env
# o agregá manualmente a .env:
```

```env
VITE_API_BASE_URL=https://api-landing.dinamiceducation.com
```

Generá el build:

```bash
npm install
npm run build
```

Subí el contenido de `dist/` a `public_html` en Hostinger, reemplazando al menos `index.html` y `assets/`.

Vite embebe `VITE_API_BASE_URL` en el bundle en tiempo de build. Si el build se hizo con `http://localhost:3001`, el formulario seguirá apuntando ahí aunque el backend en producción esté bien.

### 8. Validación final del formulario

En DevTools (pestaña Network), la solicitud debe ir a:

```text
https://api-landing.dinamiceducation.com/api/contact
```

No debe aparecer `localhost:3001`.

Verificá CORS:

```bash
curl -i \
  -H "Origin: https://dinamicsystems.com" \
  https://api-landing.dinamiceducation.com/health
```

Debe incluir:

```text
Access-Control-Allow-Origin: https://dinamicsystems.com
```

---

## Actualizar producción

```bash
cd /opt/dinamic-systems-landing-api
git pull
docker compose up -d --build
docker image prune -f
```

### Rollback

Si un despliegue falla:

```bash
cd /opt/dinamic-systems-landing-api
git log --oneline -5          # identificar el commit anterior estable
git checkout <COMMIT_SHA>     # o git revert según tu flujo
docker compose up -d --build
```

Volvé a la rama principal cuando el fix esté en `main`/`master`.

### Logs e inspección

```bash
docker compose ps
docker compose logs --tail=100 api
docker compose logs -f api
docker inspect --format='{{json .State.Health}}' dinamic_systems_landing_api
```

---

## Desarrollo local (referencia)

Desde la raíz del repo, sin Docker:

```bash
npm install
cp .env.example .env
echo 'VITE_API_BASE_URL=http://localhost:3001' > .env.local
# ajustar SMTP en .env para el backend local
npm run server:dev     # tsx watch en puerto 3001
# en otra terminal: npm run dev
```

Con `NODE_ENV` distinto de `production`, se permiten automáticamente `http://localhost:5173` y `http://localhost:3000` además de `CORS_ALLOWED_ORIGINS`.

Build y arranque de producción local:

```bash
npm run server:build
npm run server:start
```

---

## Arquitectura resumida

```text
Browser (dinamicsystems.com / www.dinamicsystems.com)
    → POST /api/contact (HTTPS, CORS desde dinamicsystems.com)
        → Nginx (api-landing.dinamiceducation.com:443)
            → 127.0.0.1:3001 (Docker / Express)
                → SMTP (consultas por email)
```
