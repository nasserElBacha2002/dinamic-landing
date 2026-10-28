import type { ResourcePageContent } from '@/content/types';

export const inventariosTiempoRealContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Innovación',
  h1: 'Qué significa un inventario físico “en tiempo real”',
  summary:
    '“Tiempo real” no es una sola cosa. Puede ser captura durante la operación, actualización cercana al evento, un inventario continuo, el stock del ERP/WMS, o una consolidación posterior. Esta página separa esos sentidos. No promete sincronización instantánea con el sistema de la empresa.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'En un inventario físico, “en tiempo real” suele usarse para cuatro hechos distintos: (1) se cuenta mientras el predio sigue despachando; (2) cada captura se ve en un tablero poco después de registrarse; (3) hay un programa continuo de cíclicos; (4) el ERP/WMS se considera “el stock actual”. Ninguno de esos hechos implica que el otro sea verdad.',
        'La consolidación —reconteo, movimientos de la ventana, archivo de cierre— ocurre después. Tratar esa consolidación como si ya hubiera actualizado el ERP es un error de lenguaje, no una feature.',
      ],
    },
    {
      id: 'sentidos',
      heading: 'Cinco sentidos que no se deben mezclar',
      body: [
        'Captura durante operación: el piso se mueve. Hace falta congelamiento lógico y reconciliación. Ver inventarios sin detener la operación.',
        'Actualización cercana al evento: un supervisor ve avances de zona con minutos de demora. Es monitoreo del operativo, no el stock maestro.',
        'Inventario continuo: cíclicos. El universo no está cerrado en un instante.',
        'ERP/WMS: el sistema de la empresa. Solo refleja el inventario físico cuando alguien carga o integra el resultado —y con los supuestos de esa carga.',
        'Consolidación posterior: el cierre defendible. Puede ser horas después del último pallet. Offline agranda esa brecha.',
      ],
    },
    {
      id: 'limites',
      heading: 'Lo que no se afirma',
      body: [
        'No hay en este sitio evidencia de una integración nativa que deje el ERP actualizado al segundo de cada lectura. Si un operativo muestra avance en un tablero, eso se describe como avance del conteo, no como stock maestro en vivo.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Un tablero de avance es un inventario en tiempo real?',
      answer:
        'Es un monitoreo del operativo, cercano al evento de captura. No es, por sí solo, el stock del ERP ni un cierre consolidado. Mezclar los tres genera expectativas que el dato no cumple.',
    },
  ],
  relatedLinks: [
    {
      label: 'Tecnología móvil y offline',
      to: '/innovacion/tecnologia-movil-offline/',
      description: 'Por qué mucha captura ni siquiera está en red durante el turno.',
    },
    {
      label: 'Metodología de inventarios',
      to: '/investigacion/metodologia-inventarios/',
      description: 'Dónde cae la consolidación en el ciclo.',
    },
    {
      label: 'Inventarios sin detener la operación',
      to: '/recursos/inventarios-sin-detener-operacion/',
      description: 'Contar con el predio activo no es lo mismo que stock en vivo.',
    },
  ],
  cta: {
    title: '¿Necesitás avance del conteo, o el stock maestro actualizado?',
    description: 'Son pedidos distintos. Se acuerda en el alcance qué se ve durante el turno y qué se entrega al cierre.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver metodología',
    secondaryTo: '/investigacion/metodologia-inventarios/',
  },
};
