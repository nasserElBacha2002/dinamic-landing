import type { HubPageContent } from '@/content/types';

export const recursosHubContent: HubPageContent = {
  kind: 'hub',
  group: 'recursos',
  eyebrow: 'Recursos',
  h1: 'Guías sobre inventarios físicos',
  summary:
    'Guías de proceso y de decisión sobre inventarios físicos: cómo se cuenta, cómo se prepara el depósito, por qué no cierra el stock, cuánto tarda o cuesta, y cuándo conviene contratar. Cada URL responde una pregunta distinta.',
  sections: [
    {
      id: 'uso',
      heading: 'Cómo está ordenado este listado',
      body: [
        'Primero están las guías de proceso ya publicadas: cómo realizar un inventario, cómo preparar el depósito, la comparación entre general y cíclico, y cómo funciona un inventario con drones.',
        'Después, las preguntas de operación: causas de desvío, tiempos, costo, cotización, interno vs. tercerizado, cómo elegir proveedor, contar sin detener, reducir diferencias y medios de captura. El listado se actualiza con cada guía publicada.',
        'No reemplazan un relevamiento a medida. Si necesitás ejecutar un inventario, el siguiente paso es evaluar alcance, fechas y condiciones del sitio.',
      ],
    },
  ],
  relatedLinks: [
    {
      label: 'Cómo realizar un inventario físico',
      to: '/recursos/como-realizar-un-inventario-fisico/',
      description: 'Preparación, alcance, conteo, reconteo, conciliación y cierre documentado.',
    },
    {
      label: 'Cómo preparar un depósito para un inventario',
      to: '/recursos/como-preparar-un-deposito-para-un-inventario/',
      description: 'Orden, ubicaciones, identificación, devoluciones, movimientos y responsables.',
    },
    {
      label: 'Inventario general vs. inventario cíclico',
      to: '/recursos/inventario-general-vs-inventario-ciclico/',
      description: 'Alcance, frecuencia, interrupción, costo operativo, ventajas y limitaciones.',
    },
    {
      label: 'Cómo funciona un inventario con drones',
      to: '/recursos/como-funciona-un-inventario-con-drones/',
      description: 'Captura, códigos, OCR, visión artificial, validación, seguridad y limitaciones.',
    },
  ],
  cta: {
    title: '¿Preferís evaluar el inventario con el equipo?',
    description: 'Las guías explican el proceso; la ejecución se define según cada depósito u operación.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver servicios',
    secondaryTo: '/servicios/',
  },
};
