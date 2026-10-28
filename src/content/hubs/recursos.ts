import type { HubPageContent } from '@/content/types';

export const recursosHubContent: HubPageContent = {
  kind: 'hub',
  group: 'recursos',
  eyebrow: 'Recursos',
  h1: 'Guías sobre inventarios físicos',
  summary:
    'Recursos prácticos para preparar un inventario, entender el proceso de conteo y comparar modalidades, sin convertir el sitio en un portal de contenidos.',
  sections: [
    {
      id: 'uso',
      heading: 'Para qué están estas guías',
      body: [
        'Las páginas de recursos responden preguntas concretas de operación: cómo se realiza un inventario físico, cómo preparar el depósito, cuándo conviene un inventario cíclico y cómo funciona un inventario con drones.',
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
