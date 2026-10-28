import type { ResourcePageContent } from '@/content/types';

export const controlPosicionesPasillosContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Buena práctica',
  h1: 'Control de posiciones y pasillos en el inventario',
  summary:
    'El dato útil de un inventario de depósito no es solo cuántas unidades hay, sino en qué pasillo, rack, nivel o pallet se encontraron. Sin esa posición, el reconteo no sabe a dónde ir y el duplicado no se ve. Esta práctica explica el control posicional, no reemplaza la landing de depósitos.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Hay que contar y registrar contra una ubicación: pasillo, posición, nivel, pallet y, cuando el negocio lo exige, lote. Si el operador anota solo el SKU y la cantidad, el sistema no puede decir si el faltante es merma o está dos metros más allá.',
        'Eso vale para un depósito de reserva y para un CD: cambia la densidad y la altura, no el principio.',
      ],
    },
    {
      id: 'por-que',
      heading: 'Por qué la posición evita errores típicos',
      body: [
        'Duplicados: la misma cara de pallet se cuenta desde dos pasillos si no hay un ID de hueco. Con posición, el segundo conteo choca contra un hueco ya cerrado.',
        'Falsos faltantes: el SKU está en el predio, mal ubicado. El total por código se pelea; el mapa de huecos lo muestra.',
        'Reconteo: se vuelve al hueco, no a “buscar el producto en todo el depósito”.',
        'Stock de terceros y lotes: mezclar dueños o vencimientos en el mismo total es un error de posición lógica, aunque el pallet esté bien apilado.',
      ],
    },
    {
      id: 'niveles',
      heading: 'Qué conviene identificar',
      body: [
        'Pasillo y posición: el recorte mínimo para partir zonas y no pisarse.',
        'Nivel y pallet: en altura, “estaba en el pasillo 12” no alcanza para recontear ni para un dron o un picker.',
        'Lote o serie: cuando el negocio vende, retira o audita por ese atributo. Si no aplica, no hay que inventarlo en el informe.',
        'Ubicación exacta vs. zona: una zona (cámara, mezzanine) sirve para planificar el turno; el cierre defendible pide el hueco.',
      ],
    },
    {
      id: 'practica',
      heading: 'Cómo se sostiene en campo',
      body: [
        'Etiquetas de ubicación visibles, mapa previo, regla de “no dejar pallets en el pasillo de tránsito” y un criterio para mercadería en playa (¿es una ubicación o está en tránsito?). Durante el inventario, un pallet que cambia de hueco es un movimiento, no un detalle.',
        'Si el predio no tiene mapa, el primer entregable útil puede ser construir esa grilla mientras se cuenta —más lento, más honesto que fingir posiciones que no existen.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Cómo lo usa Dinamic Systems',
      body: [
        'Los inventarios físicos para depósitos y centros de distribución se organizan por ubicación. Es el mismo criterio de esta práctica, aplicado al servicio. La página de industria describe el contexto (racks, pallets, altura); acá está el hábito operativo.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Alcanza con contar el total por SKU?',
      answer:
        'Para un ajuste grosero, a veces. Para recontear, para encontrar duplicados y para un cierre auditable, no: hace falta la posición.',
    },
    {
      question: '¿Hay que registrar lote siempre?',
      answer:
        'Cuando el negocio o el cliente tercero lo exigen. Si el master no trabaja por lote, inventarlo en el inventario crea un dato que nadie va a mantener.',
    },
    {
      question: '¿Esta práctica reemplaza la página de depósitos?',
      answer:
        'No. Depósitos y CD es la landing de industria. Esta URL es el control posicional como método, reutilizable también en un operador logístico.',
    },
  ],
  relatedLinks: [
    {
      label: 'Por qué no coincide el stock',
      to: '/recursos/por-que-no-coincide-el-stock/',
      description: 'La ubicación mal registrada es una causa típica de desvío.',
    },
    {
      label: 'Inventarios para depósitos y CD',
      to: '/industrias/depositos-centros-distribucion/',
      description: 'Contexto de racks, pallets y altura.',
    },
    {
      label: 'Cómo reducir diferencias de stock',
      to: '/recursos/como-reducir-diferencias-de-stock/',
      description: 'Mantener la posición también entre inventarios.',
    },
  ],
  cta: {
    title: '¿El problema es que el stock “está, pero no se encuentra”?',
    description: 'Un inventario por ubicación deja el mapa para recontear y para corregir el hábito de dejar pallets donde hay lugar.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios para depósitos',
    secondaryTo: '/industrias/depositos-centros-distribucion/',
  },
};
