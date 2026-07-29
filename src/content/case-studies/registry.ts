import type { CaseStudyPageContent } from '@/content/types';

/**
 * Published case studies must be listed here AND registered in `publishedRoutes`
 * with a renderable page. Do not add sitemap URLs for drafts.
 *
 * Audit (2026-07-28): logos de clientes existen en `src/data/clients.ts`, pero
 * no hay métricas, alcance, duración, testimonios autorizados ni narrativas de
 * proyecto verificables en el repositorio. Por eso la lista está vacía.
 */
export const publishedCaseStudies: readonly CaseStudyPageContent[] = [];

export function getPublishableCaseStudies(): CaseStudyPageContent[] {
  return publishedCaseStudies.filter((study) => {
    if (study.clientNamed === false && !study.clientLabel.trim()) return false;
    if (study.testimonial && !study.testimonial.authorized) return false;
    const hasUnverified = study.evidence.some((e) => !e.verified);
    return !hasUnverified && study.evidence.length > 0;
  });
}
