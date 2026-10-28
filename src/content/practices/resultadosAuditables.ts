import type { ResourcePageContent } from '@/content/types';

export const resultadosAuditablesContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Buena práctica',
  h1: 'Qué hace auditable el resultado de un inventario',
  summary:
    'Un inventario es auditable cuando se puede reconstruir de dónde salió cada número: ubicación, operador, conteo, reconteo si hubo, y el archivo exportable. No es un eslogan. Esta página describe ese rastro. No afirma capacidades de software que el proyecto no documenta, ni reemplaza el servicio de auditoría.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Auditable significa que un tercero —control interno, auditor, cliente dueño del stock— puede seguir el dato hasta una captura concreta. Mínimo: qué se contó, dónde, quién, en qué paso (conteo o reconteo) y cómo se exportó. Si hay timestamps u otros campos en el sistema usado, se informan; si no están, no se inventan.',
        'Un total en una planilla sin hueco ni operador puede servir para un ajuste interno. No suele alcanzar cuando alguien pregunta “¿quién dijo que en el nivel 3 había 12?”.',
      ],
    },
    {
      id: 'rastro',
      heading: 'Qué rastro conviene dejar',
      body: [
        'Origen del dato: captura en piso, no un número tipeado después de memoria.',
        'Usuario u operador: quién contó y, si aplica, quién reconteó.',
        'Ubicación: pasillo, posición, nivel, pallet cuando existe.',
        'Conteo y reconteo: dos eventos distintos, no un único campo pisado.',
        'Timestamps: cuando el medio de captura los registra. Si el medio es papel, el rastro es de hoja, zona y turno —más débil, hay que decirlo.',
        'Cambios: quién corrigió una captura y por qué (etiqueta mala, unidad, movimiento).',
        'Exportable: archivo que otro sistema o un auditor pueda leer, con el mismo desglose que se usó para cerrar.',
      ],
    },
    {
      id: 'limites',
      heading: 'Límites (qué no se afirma acá)',
      body: [
        'Esta web no documenta, con evidencia de producto, cada campo de cada app o integración. No se afirma “trazabilidad total”, “tiempo real” ni “conexión nativa con cualquier ERP” como hecho técnico universal.',
        'Lo que sí se puede afirmar del servicio de Dinamic Systems es que el inventario se registra por ubicación, con reconteos cuando corresponde, y se entrega un informe según el alcance acordado. El detalle de campos se define en ese alcance.',
      ],
    },
    {
      id: 'relacion',
      heading: 'Relación con la auditoría como servicio',
      body: [
        'La auditoría de inventarios es un recorte o muestra con mirada independiente. Esta práctica habla de cómo debería verse el resultado de cualquier conteo —interno o contratado— para poder auditarse después.',
        'Se puede tener un inventario auditable sin haber contratado una auditoría, y se puede contratar una auditoría sobre un proceso que todavía no deja rastro. Son piezas distintas.',
      ],
    },
    {
      id: 'practica',
      heading: 'Cómo se pide en un operativo real',
      body: [
        'En el brief: “el cierre tiene que poder reconstruirse por ubicación y operador”. En la visita: mirar una captura de ejemplo, no el slide. Al final: abrir el export y seguir un faltante hasta el hueco. Si eso no se puede hacer, el resultado no es auditable, aunque el PDF se vea prolijo.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Un inventario auditable es lo mismo que una auditoría de inventarios?',
      answer:
        'No. Lo auditable es una cualidad del dato (se puede reconstruir). La auditoría es un servicio de control independiente sobre un recorte o muestra. Se complementan; no se sustituyen.',
    },
  ],
  relatedLinks: [
    {
      label: 'Auditoría de inventarios',
      to: '/servicios/auditoria-de-inventarios/',
      description: 'Servicio de control independiente sobre un recorte o muestra.',
    },
    {
      label: 'Reconteos inteligentes',
      to: '/buenas-practicas/reconteos-inteligentes/',
      description: 'El segundo conteo también tiene que dejar rastro.',
    },
    {
      label: 'Trazabilidad entre conteo y reconteo',
      to: '/buenas-practicas/trazabilidad-conteo-reconteo/',
      description: 'El puente entre las dos versiones de una misma posición.',
    },
  ],
  cta: {
    title: '¿Necesitás un cierre que se pueda reconstruir?',
    description: 'Se puede evaluar un inventario por ubicación, con reconteo e informe según el alcance, o una auditoría independiente.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver auditoría de inventarios',
    secondaryTo: '/servicios/auditoria-de-inventarios/',
  },
};
