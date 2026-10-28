import type { ResourcePageContent } from '@/content/types';

export const reconteosInteligentesContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Buena práctica',
  h1: 'Reconteos inteligentes en un inventario físico',
  summary:
    'Recontear es volver a medir una diferencia, no repetir el inventario entero. Se dispara cuando el primer conteo es débil, contradictorio o crítico. No hay un umbral universal de “X por ciento”. Esta práctica explica cuándo recontear, cómo priorizar y cómo dejar rastro.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Se recontea cuando una diferencia no se puede explicar con el movimiento, la ubicación o la unidad, o cuando el primer conteo no tiene evidencia suficiente (sin operador, sin timestamp, sin foto o lectura, zona recorrida con duda). No se recontea todo “por las dudas”: eso duplica el operativo y no enseña nada.',
        'La regla se acuerda antes: qué tipo de diferencia entra a revisión, quién la ejecuta (idealmente no el mismo operador sin supervisión) y cómo se cierra (se confirma el primer número, se corrige, o se escala a investigación de documento).',
      ],
    },
    {
      id: 'cuando',
      heading: 'Qué diferencia dispara una revisión',
      body: [
        'Señales típicas: cantidad cero contra un hueco visiblemente ocupado; sobrante y faltante del mismo SKU en pasillos vecinos; captura sin ubicación; dos conteos distintos de la misma posición en el primer paso; ítem de alto valor o de cliente tercero; lectura de código que no matchea la etiqueta física.',
        'Un umbral fijo (“más de 5 %”) no se publica acá porque no es transferible entre un local de retail y un CD de pallets. El umbral, si existe, es del operativo concreto y hay que documentarlo en el plan.',
      ],
    },
    {
      id: 'priorizar',
      heading: 'Por qué no recontear todo y cómo priorizar',
      body: [
        'Recontear el universo entero convierte el segundo paso en un primer conteo peor: hay cansancio, hay menos tiempo y se pisan zonas ya cerradas. La priorización suele ser valor, criticidad del cliente, tamaño del desvío y calidad de la evidencia original.',
        'Un listado ordenado de posiciones a recontear, con dueño y horario, es más útil que un “revisen lo que puedan”.',
      ],
    },
    {
      id: 'trazabilidad',
      heading: 'Trazabilidad y cierre',
      body: [
        'El reconteo debería dejar el mismo rastro que el conteo: ubicación, operador, momento, cantidad. Si el segundo número gana, hay que saber por qué el primero falló (omisión, unidad, etiqueta). Si el segundo confirma el primero, la diferencia pasa a investigación de sistema o de documento, no a un tercer conteo infinito.',
        'Ese cierre es lo que hace auditable el resultado. Ver resultados auditables.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Cómo lo aplica Dinamic Systems',
      body: [
        'En los inventarios que ejecuta Dinamic Systems las diferencias se recontraen cuando el plan lo indica, no como un porcentaje publicitario. La auditoría, cuando se contrata como servicio, puede incluir reconteos independientes sobre una muestra: es otro objetivo, no esta práctica del operativo general.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Quién debería ejecutar el reconteo?',
      answer:
        'Conviene que no sea el mismo operador sin supervisión, sobre todo si el primer número ya está en disputa. La regla se acuerda antes del turno.',
    },
  ],
  relatedLinks: [
    {
      label: 'Cómo reducir diferencias de stock',
      to: '/recursos/como-reducir-diferencias-de-stock/',
      description: 'Prevención; el reconteo trata la diferencia ya vista.',
    },
    {
      label: 'Auditoría de inventarios',
      to: '/servicios/auditoria-de-inventarios/',
      description: 'Revisión independiente, distinta del reconteo del operativo.',
    },
    {
      label: 'Resultados auditables',
      to: '/buenas-practicas/resultados-auditables/',
      description: 'Qué rastro deja un conteo y un reconteo defendibles.',
    },
  ],
  cta: {
    title: '¿El cuello de botella es cómo se cierran las diferencias?',
    description: 'Se puede evaluar un inventario con reconteo selectivo y trazabilidad por ubicación.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver resultados auditables',
    secondaryTo: '/buenas-practicas/resultados-auditables/',
  },
};
