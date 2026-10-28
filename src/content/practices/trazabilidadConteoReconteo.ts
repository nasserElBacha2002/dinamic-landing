import type { ResourcePageContent } from '@/content/types';

export const trazabilidadConteoReconteoContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Buena práctica',
  h1: 'Trazabilidad entre conteo y reconteo',
  summary:
    'Trazar conteo y reconteo es conservar las dos versiones del dato —quién, dónde, qué valor, por qué se revisó, qué se resolvió— sin pisar la primera captura. No es la regla de cuándo recontear, ni la cualidad de “resultado auditable”.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Si una posición se cuenta dos veces, el cierre tiene que poder mostrar: el primer valor, el operador, la ubicación, el motivo de la revisión, el segundo valor, quién lo tomó, y la resolución (se confirma el primero, se corrige, o se escala a documento). Un único campo sobrescrito no es un reconteo: es un olvido.',
        'Reconteos inteligentes dice cuándo disparar esa segunda medida. Resultados auditables dice si el rastro completo se puede reconstruir. Esta página es el puente entre las dos versiones.',
      ],
    },
    {
      id: 'versiones',
      heading: 'Qué tiene que sobrevivir de cada versión',
      body: [
        'Primer conteo: ubicación, operador, valor capturado, medio (papel, lector, foto), y si hay timestamp, la hora.',
        'Motivo de revisión: diferencia vs master, captura incompleta, zona dudosa, valor crítico, pedido del cliente. Sin motivo, el segundo conteo es capricho.',
        'Segundo conteo: los mismos campos, idealmente otro operador o con supervisión. Si es la misma persona, hay que decirlo.',
        'Resolución: confirmar, corregir, o pasar a investigación de documento/movimiento. El estado de cierre no es “el último número que alguien tipeó”.',
        'Cambio: si el segundo gana, queda escrito por qué falló el primero (unidad, omisión, etiqueta, movimiento). Si confirma, la diferencia ya no es de piso.',
      ],
    },
    {
      id: 'fallas',
      heading: 'Qué rompe el puente',
      body: [
        'Pisar el primer registro. Queda un valor y ninguna historia.',
        'Recontear de memoria, sin volver a la ubicación.',
        'Tres, cuatro, n capturas sin regla de parada: no hay trazabilidad, hay cansancio.',
        'Export que solo muestra el neto. El auditor pregunta por el hueco, no por el total.',
      ],
    },
    {
      id: 'limites',
      heading: 'Límites',
      body: [
        'El medio de captura define cuánto rastro hay. Papel deja hoja, zona y turno —más débil. Un sistema puede guardar ambos eventos; si no los guarda, no se afirma que los guarda.',
        'Dinamic Systems trata conteo y reconteo como hechos distintos cuando el plan lo pide. El detalle de campos se acuerda en el alcance, no como un eslogan de “trazabilidad total”.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Trazar conteo y reconteo es lo mismo que reconteos inteligentes o que un resultado auditable?',
      answer:
        'No. Recontear es la decisión de volver a medir. Auditable es que un tercero pueda reconstruir el cierre. Trazar conteo y reconteo es no perder la relación entre las dos versiones de la misma posición.',
    },
  ],
  relatedLinks: [
    {
      label: 'Reconteos inteligentes',
      to: '/buenas-practicas/reconteos-inteligentes/',
      description: 'Cuándo se dispara la segunda medida.',
    },
    {
      label: 'Resultados auditables',
      to: '/buenas-practicas/resultados-auditables/',
      description: 'La cualidad del rastro completo, de la que este puente es una pieza.',
    },
    {
      label: 'Cómo reducir diferencias de stock',
      to: '/recursos/como-reducir-diferencias-de-stock/',
      description: 'Prevención; acá se trata la diferencia ya vista, versión a versión.',
    },
  ],
  cta: {
    title: '¿El cierre tiene que mostrar por qué cambió un número?',
    description: 'Eso pide dos eventos, no un campo pisado. Se puede evaluar un inventario con reconteo que deje rastro.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver reconteos inteligentes',
    secondaryTo: '/buenas-practicas/reconteos-inteligentes/',
  },
};
