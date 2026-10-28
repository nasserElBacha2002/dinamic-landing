import type { ResourcePageContent } from '@/content/types';

export const comoReducirDiferenciasDeStockContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Cómo reducir diferencias de stock',
  summary:
    'Reducir diferencias es trabajo de prevención: ubicación, recepción, despacho, transferencias, unidades y disciplina de movimientos. El inventario las encuentra; no las fabrica todas. Esta guía no repite el diagnóstico de causas: apunta a qué cambiar en el día a día.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Se reducen diferencias cuando cada unidad tiene una ubicación, cuando recepción y despacho se registran a tiempo, cuando las transferencias no viajan “en la cabeza de alguien”, cuando la unidad de medida es la misma en el piso y en el sistema, y cuando hay conteos periódicos más análisis de causas —no solo ajustes a ciegas.',
        'Contar más seguido ayuda si se investiga el hueco. Contar más seguido y ajustar el master sin mirar recepción o ubicación solo esconde el mismo error hasta el próximo ciclo.',
      ],
    },
    {
      id: 'distincion',
      heading: 'Diagnóstico vs. prevención',
      body: [
        'La página Por qué no coincide el stock lista causas (movimientos, ubicación, unidades, duplicados, pendientes, daño, trazabilidad). Esta página asume esa lista y pregunta qué proceso las corta.',
        'Si todavía no sabés si el hueco es de ubicación o de documento, empecé por el diagnóstico. Si ya ves el patrón (siempre el mismo pasillo, siempre el mismo proveedor, siempre la misma unidad), acá está el trabajo.',
      ],
    },
    {
      id: 'procesos',
      heading: 'Dónde actúa la prevención',
      body: [
        'Ubicaciones: un SKU sin posición es un faltante futuro. Pasillo, rack, nivel y pallet cuando aplica; lote si el negocio lo exige.',
        'Recepción: no mezclar playa con stock vendible; no dar ingreso antes de ubicar; no aceptar una unidad distinta a la del master sin corregir el documento.',
        'Despacho y transferencias: el documento tiene que salir con la misma ubicación que se pickeó. Una transferencia “después lo cargo” es una diferencia programada.',
        'Unidades: caja vs. unidad vs. kilo. Un cartel en el hueco no alcanza si el WMS convierte mal.',
        'Cíclicos: recortes por rotación, valor o historial de diferencias. Sirven para ver el problema mientras todavía es chico.',
        'Reconteos: cuando una diferencia aparece, decidir si se vuelve a contar o si se investiga el movimiento. Recontear todo no es un programa de reducción.',
        'Análisis de causas: agrupar diferencias por zona, por documento, por turno. El ajuste contable sin esa lectura no mejora el próximo mes.',
        'Disciplina: reglas de movimiento durante el inventario y también fuera de él. El inventario es un corte; la reducción pasa entre cortes.',
      ],
    },
    {
      id: 'practica',
      heading: 'Cómo se ve en una operación real',
      body: [
        'Un patrón típico: sobrante en un pasillo y faltante del mismo SKU en otro. No es merma; es ubicación. La acción es reubicar y corregir el hábito de “dejar el pallet donde hay lugar”, no comprar más conteos.',
        'Otro patrón: diferencias siempre después de un proveedor o de un turno de picking. Ahí el inventario solo confirma; el arreglo está en recepción o en el proceso de salida.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Qué puede aportar un inventario contratado',
      body: [
        'Un inventario físico o cíclico de Dinamic Systems deja diferencias por ubicación, que es el insumo para este trabajo. No reemplaza la disciplina interna de recepción y despacho.',
        'Una auditoría sirve cuando hace falta una mirada independiente sobre el procedimiento, no como plan mensual de reducción.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Hacer más inventarios reduce las diferencias?',
      answer:
        'Reduce la demora en verlas. La reducción real aparece cuando se corrige ubicación, documentos y unidades. Si solo se ajusta el sistema, el próximo conteo vuelve a mostrar el mismo hueco.',
    },
  ],
  relatedLinks: [
    {
      label: 'Por qué no coincide el stock',
      to: '/recursos/por-que-no-coincide-el-stock/',
      description: 'Diagnóstico de causas; esta página es la prevención.',
    },
    {
      label: 'Reconteos inteligentes',
      to: '/buenas-practicas/reconteos-inteligentes/',
      description: 'Cómo tratar una diferencia cuando ya apareció.',
    },
    {
      label: 'Inventarios cíclicos',
      to: '/servicios/inventarios-ciclicos/',
      description: 'Conteos periódicos sobre un recorte priorizado.',
    },
  ],
  cta: {
    title: '¿Las diferencias ya están medidas y no bajan?',
    description: 'Un conteo por ubicación o un cíclico sobre el recorte crítico dejan material para atacar el proceso, no solo el ajuste.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver causas de desvío de stock',
    secondaryTo: '/recursos/por-que-no-coincide-el-stock/',
  },
};
