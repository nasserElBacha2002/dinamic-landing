import type { ResourcePageContent } from '@/content/types';

export const porQueNoCoincideElStockContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Por qué no coincide el stock teórico con el físico',
  summary:
    'El desvío entre el sistema y lo que hay en el depósito suele tener causas concretas: movimientos no registrados, errores de ubicación, unidades distintas, conteos incompletos o mercadería que el sistema todavía considera disponible. Esta guía ordena esas causas para investigarlas, no para estimar un porcentaje universal.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'El stock no coincide cuando el registro y la realidad se desfasaron. Las causas más frecuentes son movimientos no cargados, mercadería en una ubicación distinta a la del sistema, diferencias de unidad de medida, duplicados, conteos incompletos o incorrectos, ingresos o egresos pendientes, ajustes de sistema mal aplicados, producto dañado o no disponible, y quiebre de trazabilidad (lote, serie o dueño de stock).',
        'Ninguna de esas causas es “el inventario mal hecho” por sí sola: a veces el conteo está bien y el archivo de referencia no. La investigación empieza por separar error de captura, error de ubicación y error de master data.',
      ],
    },
    {
      id: 'contexto',
      heading: 'Cuándo aparece el desvío',
      body: [
        'El desvío se ve al cerrar un inventario, al preparar un despacho o cuando un cíclico puntual no cierra. También aparece en operadores logísticos si se mezclan clientes, o en retail si salón y depósito interno se cuentan con reglas distintas.',
        'Cuanto más tiempo pasó desde el último relevamiento confiable, más se acumulan causas distintas en el mismo número. Por eso un total por SKU, sin ubicación, rara vez alcanza para explicar el hueco.',
      ],
    },
    {
      id: 'causas',
      heading: 'Causas concretas a revisar',
      body: [
        'Movimientos no registrados: picking, devoluciones, transferencias entre depósitos o ajustes de producción que no llegaron al sistema antes o durante el conteo.',
        'Errores de ubicación: el producto existe, pero está en otro pasillo, rack, nivel o pallet. El sistema lo da por faltante en A y sobrante en B.',
        'Diferencias de unidad: se cuenta caja cuando el master está en unidades, o se mezcla kilos con piezas. El número “cierra” mal aunque nadie haya robado ni perdido mercadería.',
        'Duplicados: la misma posición se cuenta dos veces, o dos etiquetas apuntan al mismo pallet.',
        'Conteos incorrectos u omitidos: zona sin recorrer, altura no cubierta, bulto sin abrir cuando el criterio era abrir, o captura mal digitada.',
        'Ingresos y egresos pendientes: camiones en playa, mercadería en cuarentena, pedidos reservados o facturados no despachados.',
        'Errores de sistema: doble carga, ítem dado de baja, conversión de unidad, corte de stock en fecha distinta a la del operativo.',
        'Producto dañado, vencido o no disponible: está en el predio pero no debería formar parte del stock vendible.',
        'Trazabilidad: lote, serie, vencimiento o cliente mal asociado. El total puede coincidir y el detalle, no.',
      ],
    },
    {
      id: 'practica',
      heading: 'Cómo se investiga en una operación real',
      body: [
        'Se parte de las diferencias más grandes o más críticas, no de recontear todo. Cada diferencia se mira con su ubicación, su timestamp de conteo y el movimiento más cercano. Si el hueco es de ubicación, se busca el pallet; si es de unidad, se revisa el master; si es de movimiento, se reconcilia el documento, no el estante.',
        'El reconteo tiene sentido cuando la evidencia del primer conteo es débil o contradictoria. Si la evidencia es sólida, el ajuste es de proceso o de sistema, no de volver a contar la misma posición.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Cómo lo aborda Dinamic Systems',
      body: [
        'En los inventarios físicos que ejecuta Dinamic Systems el conteo se registra por ubicación, con reconteo cuando la diferencia lo justifica, para poder distinguir “no está” de “está en otro lado”. Eso no elimina las causas de origen —recepción, despacho, master data—, pero deja un resultado investigable.',
        'La auditoría de inventarios, cuando el objetivo es control independiente, usa un recorte o muestra; no reemplaza el diagnóstico operativo de todas las causas listadas acá.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Una diferencia de stock siempre significa un error de conteo?',
      answer:
        'No. Puede ser un movimiento no registrado, una ubicación distinta, una unidad de medida o un documento pendiente. El conteo es una hipótesis más, no la única.',
    },
    {
      question: '¿El inventario físico corrige las causas de origen?',
      answer:
        'El inventario documenta el estado a una fecha. Las causas de origen se atacan en recepción, ubicación, despacho y disciplina de movimientos.',
    },
  ],
  relatedLinks: [
    {
      label: 'Cómo reducir diferencias de stock',
      to: '/recursos/como-reducir-diferencias-de-stock/',
      description: 'Prevención en recepción, ubicación, despacho y cíclicos.',
    },
    {
      label: 'Reconteos inteligentes',
      to: '/buenas-practicas/reconteos-inteligentes/',
      description: 'Cuándo recontear una diferencia y cuándo no recontear todo.',
    },
    {
      label: 'Auditoría de inventarios',
      to: '/servicios/auditoria-de-inventarios/',
      description: 'Control independiente sobre un recorte o muestra.',
    },
    {
      label: 'Inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Conteo por ubicación y conciliación del operativo.',
    },
  ],
  cta: {
    title: '¿Necesitás un inventario para investigar diferencias?',
    description: 'Podemos evaluar un conteo por ubicación o una auditoría sobre el recorte que te preocupa.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver cómo reducir diferencias',
    secondaryTo: '/recursos/como-reducir-diferencias-de-stock/',
  },
};
