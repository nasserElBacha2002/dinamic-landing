# Release validation — Landing principal (Etapas 1–4 + hardening)

**Fecha:** 2026-08-03  
**Rama:** `main` (ahead of origin)

## Commits de release
```
8ba47e9 perf(landing): optimize images and preload strategy
2ec7854 fix(landing): align CTAs accessibility and SSR behavior
703592c feat(seo): add homepage FAQ and structured data graph
94a13f5 feat(contact): improve inventory evaluation conversion flow
2d1274e feat(landing): restructure homepage content for warehouse inventory intent
b218144 feat(landing): reposition homepage around physical inventory services
```

## Pruebas ejecutadas

| Comando | Resultado | Notas |
|---------|-----------|-------|
| `npm run typecheck` | PASS | |
| `npm run build:validated` | PASS | SEO + links + FAQ schema match |
| `npm run test:ssg-smoke` | PASS 6/6 | ~12s |
| Rate limiter unit smoke | PASS | 3rd call blocked |
| HTML checks | PASS | FAQ, schema types, no Review |
| Preload count | PASS | 2 |
| SSR focus warning | PASS | eliminado |

## Checklist DoD (extracto)
- [x] Inventarios físicos = categoría principal  
- [x] Argentina + depósitos en fold  
- [x] Tech complemento  
- [x] FAQ HTML + FAQPage espejo  
- [x] Form evaluación + opcionales  
- [x] API backward compatible  
- [x] Rate limit documentado (in-memory)  
- [x] Analytics sin PII  
- [x] Schema graph sin ratings  
- [x] CTAs alineados  
- [x] SSR warning propio resuelto  
- [x] WebP + preloads  
- [x] Build/smoke/links PASS  

## Pendientes no bloqueantes
- Rate limit distribuido (Redis) si multi-instancia  
- Política de privacidad legal aprobada + checkbox  
- Casos/testimonios (bloqueados por evidencia)  
- Verificación live GEO externo / Search Console  
- Lighthouse CWV formal  
- Code-splitting del bundle JS  

## Smoke producción (Hostinger) — checklist manual
1. Home 200 + H1 + FAQ  
2. Formulario test marcado  
3. 429 tras spam rate limit  
4. Sitemap/robots  
5. Deep links trailing slash  
6. WebP Content-Type  
7. Sin mixed content  

## Veredicto
**READY_TO_DEPLOY_WITH_NON_BLOCKING_FOLLOW_UPS**
