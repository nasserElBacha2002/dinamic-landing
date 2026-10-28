import type { HubPageContent } from '@/content/types';

/**
 * Dormant hub. Do not register in `publishedRoutes` until there are at least
 * two indexable children (studies, benchmarks, verified cases or datasets).
 * Metodología lives at `/investigacion/metodologia-inventarios/` without this CollectionPage.
 */
export const investigacionHubContent: HubPageContent = {
  kind: 'hub',
  group: 'investigacion',
  eyebrow: 'Investigación',
  h1: 'Investigación sobre inventarios físicos',
  summary:
    'Material metodológico para entender el ciclo de un inventario. No hay aquí benchmarks, estadísticas ni casos: solo se publica lo que se puede sostener sin evidencia inventada.',
  sections: [
    {
      id: 'alcance',
      heading: 'Qué hay —y qué todavía no',
      body: [
        'Hoy el hub concentra la metodología de inventarios. Estudios, datasets y porcentajes de precisión no se publican hasta que exista evidencia verificable en el proyecto.',
      ],
    },
  ],
  relatedLinks: [],
  cta: {
    title: '¿El siguiente paso es aplicar el ciclo en un predio?',
    description: 'La metodología describe el hilo del dato. La ejecución se acuerda con alcance y fechas.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver metodología',
    secondaryTo: '/investigacion/metodologia-inventarios/',
  },
};
