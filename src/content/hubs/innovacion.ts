import type { HubPageContent } from '@/content/types';

export const innovacionHubContent: HubPageContent = {
  kind: 'hub',
  group: 'innovacion',
  eyebrow: 'Innovación',
  h1: 'Tecnología e innovación en inventarios físicos',
  summary:
    'Capas técnicas que pueden entrar en un inventario: captura digital, identificación, visión, drones, asistencia de IA, móvil offline y el sentido real de “tiempo real”. Cada página delimita qué hace y qué no.',
  sections: [
    {
      id: 'alcance',
      heading: 'Qué hay en este hub',
      body: [
        'No es un catálogo de productos ni un roadmap de ciencia ficción. Es el mapa de medios y de límites, para no mezclar un dron con un servicio, ni un tablero de avance con el stock del ERP.',
      ],
    },
  ],
  childGroups: [
    {
      id: 'pilar',
      title: 'Mapa',
      routeIds: ['innovation-tecnologia-aplicada'],
    },
    {
      id: 'captura',
      title: 'Captura e identificación',
      routeIds: [
        'innovation-drones',
        'innovation-vision',
        'innovation-etiquetas',
        'innovation-mobile-offline',
      ],
    },
    {
      id: 'proceso',
      title: 'Procesamiento y “en vivo”',
      routeIds: ['innovation-ia', 'innovation-tiempo-real'],
    },
  ],
  relatedLinks: [],
  cta: {
    title: '¿El pedido es técnico o es ejecutar un conteo?',
    description: 'Estas páginas explican capas. El operativo se evalúa con el sitio, las etiquetas y las ventanas.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver servicios',
    secondaryTo: '/servicios/',
  },
};
