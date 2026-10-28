import type { ResourcePageContent } from '@/content/types';

export const tecnologiaMovilOfflineContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Innovación',
  h1: 'Tecnología móvil y captura offline en inventarios',
  summary:
    'Offline significa que la captura se guarda en el dispositivo y se sincroniza después, cuando hay red. Reduce la dependencia del Wi-Fi del depósito. No garantiza que ningún dato se pierda ni que el WMS se actualice en el acto.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'En un predio sin cobertura estable, el operador registra en el dispositivo (ubicación, cantidad, excepciones). El almacén local conserva esas capturas hasta que hay red. Entonces se sincronizan hacia el consolidado del inventario. El cierre usable aparece después de esa sincronización y de la validación, no en el momento de cada tap.',
        'Si el dispositivo se pierde antes de sincronizar y no hay respaldo, esas capturas no existen. El plan tiene que decir qué se hace: recuento de la zona, copia de seguridad, o no declarar cerrado el sector.',
      ],
    },
    {
      id: 'ciclo',
      heading: 'Captura, guarda, sincroniza, resuelve',
      body: [
        'Captura: mismas reglas que en línea —posición, operador, cantidad.',
        'Almacén local: el dato vive en el aparato. Hace falta espacio, batería y un criterio de “zona cerrada en el dispositivo”.',
        'Sincronización: puede haber conflictos (la misma posición capturada dos veces en dos equipos). Resolverlos es parte del inventario, no un detalle técnico menor.',
        'Resolución posterior: reconteo o descarte de la captura duplicada. Offline no elimina el doble conteo; a veces lo esconde hasta el merge.',
      ],
    },
    {
      id: 'limites',
      heading: 'Límites',
      body: [
        'No es tiempo real. No es “nunca se pierde un conteo”. No reemplaza el mapa de zonas: dos equipos offline en el mismo pasillo sin asignación se pisan igual que en papel.',
        'La calidad depende del procedimiento de cierre de zona y de cuándo se obliga a sincronizar, no del eslogan offline.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Qué pasa si un dispositivo no llega a sincronizar?',
      answer:
        'Las capturas que solo estaban ahí no entran al consolidado. El plan debe prever respaldo, recuento de esa zona o no cerrar el sector. No hay una garantía absoluta de que “nada se pierde”.',
    },
  ],
  relatedLinks: [
    {
      label: 'Tecnología aplicada a inventarios',
      to: '/innovacion/tecnologia-aplicada-inventarios/',
      description: 'El offline es una capa de sincronización, no todo el stack.',
    },
    {
      label: 'Inventarios físicos en “tiempo real”',
      to: '/innovacion/inventarios-fisicos-tiempo-real/',
      description: 'Por qué sincronizar después no es lo mismo que actualizar al instante.',
    },
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'El operativo que tiene que prever zonas y reconteo, con o sin red.',
    },
  ],
  cta: {
    title: '¿El depósito no tiene red estable?',
    description: 'Se puede planear captura local y un cierre de zona antes de sincronizar. No se promete que el dato ya esté en el ERP.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Qué significa tiempo real',
    secondaryTo: '/innovacion/inventarios-fisicos-tiempo-real/',
  },
};
