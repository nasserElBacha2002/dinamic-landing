import type { ResourcePageContent } from '@/content/types';

export const inventariosSinDetenerOperacionContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Inventarios físicos sin detener la operación',
  summary:
    'Contar con el depósito o la tienda en actividad es posible en algunos casos, no en todos. Introduce control de movimientos, ventanas, zonas y riesgo de doble conteo. Esta guía explica cuándo aplica y qué hay que acordar. No promete que siempre se pueda hacer.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Se puede inventariar sin parar la operación cuando el predio se puede partir en zonas, hay reglas claras para lo que entra y sale durante el conteo, y existe una forma de reconciliar esos movimientos al cierre. Si el flujo es continuo, el layout no se puede sectorizar o no hay freeze lógico, el resultado se contamina.',
        'No es un modo “gratis” ni siempre más rápido: se cambia detención por complejidad de control.',
      ],
    },
    {
      id: 'cuando',
      heading: 'Cuándo es razonable y cuándo no',
      body: [
        'Es razonable en CD o depósitos que no pueden cerrar un turno completo, en operadores con SLA de despacho, o en retail que solo cierra salón y mantiene un flujo mínimo en depósito interno. Hace falta un responsable de movimientos y un corte de documentos.',
        'No es razonable si cada posición cambia de contenido varias veces por hora, si no hay mapa de ubicaciones, o si el objetivo es un cierre auditable “a las 00:00” y nadie puede congelar el stock teórico. En esos casos o se detiene, o se achica el universo (cíclico, zona, familia).',
      ],
    },
    {
      id: 'dificultades',
      heading: 'Qué dificultades introduce',
      body: [
        'Control de movimientos: hay que registrar qué se recibió, despachó o reubicó mientras se contaba. Sin eso, el faltante puede ser un pedido que salió diez minutos después del pasillo.',
        'Congelamiento lógico: el sistema puede “cerrar” un universo aunque el piso siga moviéndose. Si ese corte no existe o no se respeta, el archivo de referencia no sirve.',
        'Ventanas y zonas: se cuenta un sector mientras otro despacha. El pasaje de mercadería entre zonas hay que tratarlo como movimiento, no como milagro.',
        'Doble conteo u omisión: un pallet que viaja del muelle al rack puede contarse dos veces o ninguna. La trazabilidad de ubicación reduce ese riesgo; no lo elimina sola.',
        'Reconciliación: el cierre suma conteo + movimientos de la ventana. Ese trabajo es parte del inventario, no un extra opcional.',
      ],
    },
    {
      id: 'practica',
      heading: 'Cómo se acuerda en campo',
      body: [
        'Antes: mapa de zonas, horarios de muelle, qué documentos se congelan, quién autoriza un movimiento de excepción. Durante: señalización de pasillos en conteo y un canal corto para incidencias. Al cierre: listado de movimientos de la ventana junto al de diferencias.',
        'Si en la visita se ve que no hay cómo sectorizar, hay que decirlo y cambiar el plan (detener, achicar alcance o correr la fecha). Prometer que “se cuenta igual” es el origen de un cierre indefendible.',
      ],
    },
    {
      id: 'dinamic',
      heading: 'Cómo lo evalúa Dinamic Systems',
      body: [
        'En la evaluación se pregunta si la operación puede detenerse y, si no, qué ventanas y zonas son reales. Dinamic Systems planifica inventarios físicos con esas restricciones cuando el sitio lo permite; no ofrece un modo universal “sin parar”.',
        'Los cíclicos, al ser un recorte, a veces son la vía más honesta cuando el general no entra en la ventana disponible.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Qué es el congelamiento lógico en un inventario?',
      answer:
        'Un corte del stock teórico o de documentos a una hora acordada, aunque el piso siga moviéndose. Sin un corte así, no hay contra qué conciliar el conteo.',
    },
  ],
  relatedLinks: [
    {
      label: 'Cuánto tarda un inventario físico',
      to: '/recursos/cuanto-tarda-un-inventario-fisico/',
      description: 'La operación activa es una de las variables de duración.',
    },
    {
      label: 'Inventarios cíclicos',
      to: '/servicios/inventarios-ciclicos/',
      description: 'Cuando el recorte periódico encaja mejor que un general en actividad.',
    },
    {
      label: 'Control de stock en movimiento',
      to: '/buenas-practicas/control-stock-en-movimiento/',
      description: 'Cómo tratar el ítem que se mueve durante el conteo.',
    },
  ],
  cta: {
    title: '¿Tu operación no puede detenerse?',
    description: 'Se puede evaluar si hay zonas y ventanas reales. Si no las hay, hay que decirlo antes de contar.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios cíclicos',
    secondaryTo: '/servicios/inventarios-ciclicos/',
  },
};
