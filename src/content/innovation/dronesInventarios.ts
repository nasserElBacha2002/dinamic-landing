import type { ResourcePageContent } from '@/content/types';

export const dronesInventariosContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Innovación',
  h1: 'Drones en inventarios: integración técnica y límites',
  summary:
    'El dron es un vehículo de cámara para posiciones que el piso no ve bien. Esta página cubre integración con visión, validación y el resto del inventario —no la contratación del servicio ni el paso a paso de un vuelo.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Un dron de inventario no “cuenta solo el depósito”. Vuela un recorte apto, entrega imagen o lectura de etiqueta, y esa evidencia entra al mismo plan de zonas y reconteo que el resto del operativo. Si el pasillo no es volable o la etiqueta no se ve, el dato no existe: hay que contar en piso o declarar la posición fuera de cobertura.',
        'La evolución técnica está en encadenar vuelo → imagen → lectura → excepción → reconteo, no en reemplazar al inventarista.',
      ],
    },
    {
      id: 'roles',
      heading: 'Qué no es esta página',
      body: [
        'La contratación de la modalidad (cuándo se ofrece, cómo se evalúa un depósito) está en Inventarios con drones. El funcionamiento de navegación, cámara y OCR está en Cómo funciona un inventario con drones. Acá: encaje con visión, con el WMS como destino de conciliación —sin afirmar conectores automáticos— y con los límites de interiores.',
      ],
    },
    {
      id: 'integracion',
      heading: 'Integración y casos de aplicación',
      body: [
        'Aplica cuando hay altura, etiquetas visibles y pasillo con claro de vuelo. No aplica como inventario de bultos sueltos, de picking denso o de cámaras sin evaluación de seguridad.',
        'La imagen del dron alimenta el mismo tipo de validación que una foto de piso: lectura incompleta, oclusión, etiqueta girada. La visión y, si hay, asistencia de IA trabajan sobre ese insumo. El dron no es un sistema de stock en tiempo real.',
      ],
    },
    {
      id: 'limites',
      heading: 'Límites que no cambian con “más tecnología”',
      body: [
        'Obstáculos, gente en pasillo, polvo, poca luz, etiquetas de papel destruido. Un modelo más nuevo no inventa una etiqueta que no está. El plan tiene que decir qué pasa en esas posiciones: conteo convencional, omisión documentada o recorte de alcance.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Esta página reemplaza el servicio o la guía de funcionamiento?',
      answer:
        'No. El servicio explica la modalidad contratable. La guía explica cómo vuela y cómo se lee. Esta URL cubre integración técnica y límites de aplicación. Si la pregunta es “¿lo puedo contratar?”, ir al servicio.',
    },
  ],
  relatedLinks: [
    {
      label: 'Servicio de inventarios con drones',
      to: '/servicios/inventarios-con-drones/',
      description: 'Modalidad comercial: cuándo se evalúa y cómo se integra al conteo físico.',
    },
    {
      label: 'Cómo funciona un inventario con drones',
      to: '/recursos/como-funciona-un-inventario-con-drones/',
      description: 'Navegación, captura, OCR y validación del vuelo.',
    },
    {
      label: 'Visión artificial',
      to: '/innovacion/vision-artificial/',
      description: 'Qué se hace con la imagen una vez capturada.',
    },
  ],
  cta: {
    title: '¿Hay racks altos y etiquetas visibles?',
    description: 'Se evalúa el pasillo antes de incluir captura aérea. Si no es volable, el plan se queda en piso.',
    primaryLabel: 'Evaluar modalidad con drones',
    primaryTo: '/servicios/inventarios-con-drones/',
    secondaryLabel: 'Cómo funciona el vuelo',
    secondaryTo: '/recursos/como-funciona-un-inventario-con-drones/',
  },
};
