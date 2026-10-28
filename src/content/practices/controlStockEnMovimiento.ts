import type { ResourcePageContent } from '@/content/types';

export const controlStockEnMovimientoContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Buena práctica',
  h1: 'Control de stock en movimiento durante el inventario',
  summary:
    'El stock que se mueve mientras se cuenta —ingresos, egresos, picking, reposición, transferencias, producción— contamina el cierre si no deja rastro. Esta práctica dice cómo controlarlo. Distinto de preguntarse si se puede inventariar sin detener la operación.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Controlar stock en movimiento es registrar y conciliar cada cambio de existencia que ocurre en la ventana del conteo, para que un pallet no se cuente dos veces, cero veces, o contra un master que ya no vale. El mecanismo es: segregación o freeze, timestamp, documento, y cruce al cierre.',
        'La guía de inventarios sin detener la operación responde si ese modo es viable. Acá se responde qué hacer con el ítem que igual se mueve.',
      ],
    },
    {
      id: 'tipos',
      heading: 'Qué movimientos suelen romper el conteo',
      body: [
        'Ingresos: mercadería que entra al muelle después del corte y se ubica en un pasillo ya contado —o todavía no.',
        'Egresos y picking: un hueco contado a las 10 que a las 11 ya despachó; el faltante es un pedido, no un error de operador.',
        'Transferencias entre zonas: el mismo pallet aparece en dos equipos si cruza el límite sin marca.',
        'Reposición: de reserva a picking. Cambia la foto del hueco sin cambiar el SKU del master.',
        'Producción o kitting: entra y sale de “en proceso”. Si no está en alcance, hay que dejarlo escrito; si está, hay que congelar el criterio de unidad.',
      ],
    },
    {
      id: 'controles',
      heading: 'Controles que sí se pueden acordar',
      body: [
        'Congelamiento lógico: el sistema corta el universo a una hora aunque el piso siga. Sin corte, el archivo de referencia no sirve.',
        'Ventanas: un sector cuenta mientras otro despacha. El pasaje entre sectores es un movimiento, no un milagro.',
        'Segregación: playa de recibo, cuarentena y “no contar” señalizadas. Lo que no está en el mapa no se improvisa.',
        'Timestamps: hora de captura y hora de documento. Permiten preguntar qué pasó primero.',
        'Conciliación: lista de movimientos de la ventana junto a la de diferencias. Un faltante sin documento y un documento sin faltante son dos problemas distintos.',
      ],
    },
    {
      id: 'limites',
      heading: 'Límites',
      body: [
        'Si el flujo no se puede sectorizar ni documentar, el control de movimiento no existe: hay que detener, achicar el universo o aceptar un cierre no auditable. No se promete un freeze mágico en cualquier WMS.',
        'Dinamic Systems pregunta en la evaluación qué movimientos siguen vivos y quién los autoriza. Esa respuesta cambia el plan; no se improvisa en el pasillo.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Esto es lo mismo que inventariar sin detener la operación?',
      answer:
        'No. Esa guía decide si el modo es viable. Esta práctica cubre cómo tratar ingresos, egresos, picking, reposición y transferencias que ocurren igual durante el conteo.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios sin detener la operación',
      to: '/recursos/inventarios-sin-detener-operacion/',
      description: 'Cuándo el modo activo es razonable; acá está el cómo del movimiento.',
    },
    {
      label: 'Control de posiciones y pasillos',
      to: '/buenas-practicas/control-posiciones-pasillos/',
      description: 'La unidad espacial que el pallet en tránsito también tiene que respetar.',
    },
    {
      label: 'Por qué no coincide el stock',
      to: '/recursos/por-que-no-coincide-el-stock/',
      description: 'El movimiento no registrado es una causa clásica de desvío.',
    },
    {
      label: 'Planificación de un inventario',
      to: '/buenas-practicas/planificacion-inventario/',
      description: 'Dónde se escribe la regla de movimiento antes del turno.',
    },
  ],
  cta: {
    title: '¿El predio no puede parar el muelle?',
    description: 'Se evalúa si hay zonas, freeze y dueño de documentos. Si no, el cierre se contamina.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver si se puede contar con operación activa',
    secondaryTo: '/recursos/inventarios-sin-detener-operacion/',
  },
};
