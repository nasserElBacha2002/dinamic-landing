import type { ResourcePageContent } from '@/content/types';

export const comoElegirEmpresaInventariosContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Cómo elegir una empresa de inventarios físicos',
  summary:
    'Elegir un proveedor de inventarios no es armar un ranking de “las mejores empresas”. Es pedir evidencia de método: cómo cuentan, cómo recontraen, qué dejan registrado y cómo se adaptan al sitio. Esta guía lista criterios verificables. No nombra competidores ni declara un ganador.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Pedí que el proveedor explique, con el universo de tu operación, cómo planifica, cómo captura, cuándo recontea, qué trazabilidad deja y qué informe entrega. Desconfiá de superlativos (“líderes”, “los únicos”, “los más precisos”) si no hay un método que se pueda auditar.',
        'Los criterios útiles son experiencia en el tipo de sitio, metodología, trazabilidad, política de reconteo, tecnología como apoyo —no como magia—, cobertura operativa, reportes, tratamiento de diferencias, referencias o casos que se puedan verificar, seguridad en planta y capacidad de adaptarse al layout.',
      ],
    },
    {
      id: 'criterios',
      heading: 'Criterios que sí se pueden pedir',
      body: [
        'Experiencia: depósitos, CD, retail o stock de terceros no se recorren igual. Preguntá por el tipo de operación, no por una lista de marcas.',
        'Metodología: cómo se parten zonas, cómo se evita el doble conteo, quién supervisa, qué pasa si hay un pasillo bloqueado.',
        'Trazabilidad: cada captura debería poder asociarse a ubicación, operador y momento, en la medida en que el sistema del proveedor lo registre. Si no lo registra, el informe es más difícil de defender.',
        'Reconteo: no recontear nada es un riesgo; recontear todo “por las dudas” suele ser costo sin criterio. Pedí la regla.',
        'Tecnología: lectores, móvil, códigos o drones son medios. Preguntá qué pasa cuando la etiqueta no se lee o el pasillo no es volable.',
        'Cobertura: turnos, sucursales, altura, cámaras. Un equipo que no llega al horario real del CD no sirve aunque el método se lea bien en un PDF.',
        'Reportes y diferencias: formato, desglose por ubicación, cómo se informan faltantes y sobrantes, quién valida el cierre.',
        'Referencias: solo las que se puedan contrastar. Un logo en una web no es evidencia.',
        'Seguridad y adaptación: EPP, reglas de planta, inducción, y capacidad de cambiar el plan si el layout no es el que se vio en la visita.',
      ],
    },
    {
      id: 'no-hacer',
      heading: 'Lo que esta guía no hace',
      body: [
        'No hay ranking. No hay “mejores empresas de inventarios en Argentina”. Esas páginas mezclan publicidad con intención informativa y no se pueden verificar desde este sitio.',
        'No se listan competidores. Si necesitás comparar, usá la misma grilla de criterios con cada propuesta y con la opción de hacerlo interno.',
      ],
    },
    {
      id: 'practica',
      heading: 'Cómo usarlo en una evaluación real',
      body: [
        'Armá un breve: tipo de sitio, posiciones, SKU, ventanas, si se detiene o no la operación, y qué entregable necesitás. Pedí que la respuesta describa el plan, no solo el precio.',
        'En la visita o la llamada, recorré un pasillo y preguntá cómo lo contarían. La calidad del proveedor se ve en esa respuesta concreta, no en el eslogan.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Cómo aplica estos criterios Dinamic Systems',
      body: [
        'Dinamic Systems publica en este sitio cómo ejecuta inventarios físicos, cíclicos, auditorías y, cuando el depósito lo permite, modalidad con drones. Eso permite contrastar método: conteo por ubicación, reconteos ante diferencias, trazabilidad de capturas e informe según alcance.',
        'Eso no convierte a Dinamic en “la mejor empresa” de un ranking. Es un ejemplo de cómo un proveedor debería poder explicar su trabajo. La decisión sigue siendo de la operación, con estos criterios y con el costo interno real.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Hay un ranking confiable de empresas de inventarios?',
      answer:
        'En este sitio no. Un ranking exigiría evidencia comparable y autorización. Lo verificable son el método, el entregable y las referencias que se puedan contrastar.',
    },
    {
      question: '¿La tecnología garantiza un mejor inventario?',
      answer:
        'No. Es un medio de captura. Sin plan de zonas, control de movimientos y reconteo, un lector o un dron solo digitaliza el mismo error.',
    },
    {
      question: '¿Qué preguntar en la primera reunión?',
      answer:
        'Cómo parten el predio, qué recontean, qué queda registrado por ubicación y qué pasa si la operación no se puede detener. El precio sin ese plan no se puede comparar.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Qué incluye el servicio que ofrece Dinamic Systems.',
    },
    {
      label: 'Inventario interno vs. tercerizado',
      to: '/recursos/inventario-interno-vs-tercerizado/',
      description: 'Antes de elegir proveedor, decidir si hace falta contratar.',
    },
    {
      label: 'Cotizar un inventario físico',
      to: '/recursos/cotizar-inventario-fisico/',
      description: 'Datos del sitio para pedir propuestas comparables.',
    },
  ],
  cta: {
    title: '¿Querés contrastar estos criterios con tu operación?',
    description: 'Podemos explicar cómo aplicaríamos el plan en tu depósito o red, sin un ranking y sin superlativos.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Comparar interno vs. tercerizado',
    secondaryTo: '/recursos/inventario-interno-vs-tercerizado/',
  },
};
