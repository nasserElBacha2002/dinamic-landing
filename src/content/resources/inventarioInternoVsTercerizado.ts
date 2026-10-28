import type { ResourcePageContent } from '@/content/types';

export const inventarioInternoVsTercerizadoContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Inventario interno vs. inventario tercerizado',
  summary:
    'Hacer el inventario con el propio equipo o contratar un tercero no es una decisión automática. Cambia el conocimiento del sitio, el sesgo, el costo visible, la escalabilidad y quién responde por la evidencia. Esta comparación es para elegir con criterios, no para declarar un ganador.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'El inventario interno aprovecha gente que ya conoce el depósito, puede estar más disponible y muestra un costo de horas propio. También arrastra sesgo (quien opera el stock cuenta el stock), distrae la operación y limita la escala si el universo es grande o hay que cubrir varios turnos.',
        'El inventario tercerizado aporta independencia, metodología repetible y capacidad de armar un equipo ad hoc. A cambio exige contratación, coordinación, acceso al sitio y un costo explícito. Ningún modelo es mejor en todos los casos.',
      ],
    },
    {
      id: 'interno',
      heading: 'Qué implica hacerlo adentro',
      body: [
        'Conocimiento operativo: el equipo sabe dónde “se esconde” la mercadería y cómo se mueve el turno. Eso acelera el recorrido si hay disciplina; también puede ocultar atajos (no abrir bultos, no contar altura, no registrar un faltante incómodo).',
        'Disponibilidad y costo aparente: no hay factura de un proveedor, pero hay horas que no se usan en picking, recepción o tienda. El costo real es el de oportunidad más el de un cierre débil si no hay método.',
        'Sesgo y evidencia: un inventario usado para auditoría, due diligence o conciliación con un tercero suele pedir mirada independiente. El equipo interno puede ser perfectamente honesto y, aun así, no ser la evidencia que pide gerencia o un cliente.',
      ],
    },
    {
      id: 'tercerizado',
      heading: 'Qué implica contratarlo',
      body: [
        'Independencia y método: un tercero llega con un plan de zonas, capturas y reconteos que no depende del turno del depósito. La calidad sigue dependiendo de la preparación del sitio y de las reglas de movimiento.',
        'Escala y experiencia: sirve cuando hay que cubrir volumen, altura, varias sucursales o una ventana corta. No reemplaza al dueño de la operación: hay que coordinar accesos, sistemas de referencia y responsables.',
        'Costo de contratación: se ve en la propuesta. Hay que compararlo con el costo interno real y con el costo de un resultado que no se pueda defender.',
      ],
    },
    {
      id: 'criterios',
      heading: 'Criterios de decisión',
      body: [
        'Conviene mirar objetivo (ajuste operativo vs evidencia para un tercero), tamaño y complejidad del universo, ventana calendario, sesgo tolerable, capacidad interna real —no teórica— y qué entregable se necesita.',
        'Muchas operaciones combinan: cíclicos internos sobre familias críticas y un general o una auditoría contratada cuando el riesgo o el requerimiento lo piden. Tercerizar “siempre” no es un criterio.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Dónde entra Dinamic Systems',
      body: [
        'Dinamic Systems es un tercero que ejecuta inventarios físicos, cíclicos y auditorías. En esta página no se afirma que contratar sea siempre mejor: si el equipo interno tiene método, tiempo y un objetivo puramente operativo, puede ser la opción adecuada.',
        'Cuando el pedido es independencia, cobertura o un informe defendible, el servicio se evalúa con alcance, fechas y condiciones del sitio —los mismos criterios que debería usar cualquier proveedor.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Tercerizar el inventario elimina el trabajo interno?',
      answer:
        'No. Sigue haciendo falta preparar el sitio, definir alcance, controlar movimientos y nombrar responsables. El tercero cuenta y documenta; no reemplaza a la operación.',
    },
    {
      question: '¿Un inventario interno sirve para una auditoría externa?',
      answer:
        'A veces no es la evidencia que pide el tercero, justamente porque quien opera el stock es quien cuenta. Si el objetivo es independencia, hay que decirlo antes de elegir el modelo.',
    },
    {
      question: '¿Se pueden combinar ambos modelos?',
      answer:
        'Sí. Es habitual sostener cíclicos internos y contratar un general, una cobertura de sucursales o una auditoría cuando el universo o el riesgo lo justifican.',
    },
  ],
  relatedLinks: [
    {
      label: 'Cómo elegir una empresa de inventarios',
      to: '/recursos/como-elegir-empresa-inventarios/',
      description: 'Criterios de proveedor, sin ranking.',
    },
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Qué incluye un operativo contratado.',
    },
    {
      label: 'Cotizar un inventario físico',
      to: '/recursos/cotizar-inventario-fisico/',
      description: 'Datos del sitio para comparar contra el costo interno real.',
    },
  ],
  cta: {
    title: '¿Estás evaluando hacerlo adentro o contratarlo?',
    description: 'Podemos revisar alcance y ventanas para que compares con tu capacidad interna, sin asumir que tercerizar gana siempre.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver criterios para elegir proveedor',
    secondaryTo: '/recursos/como-elegir-empresa-inventarios/',
  },
};
