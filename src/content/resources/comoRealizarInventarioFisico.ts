import type { ResourcePageContent } from '@/content/types';

export const comoRealizarInventarioFisicoContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Cómo se realiza un inventario físico empresarial',
  summary:
    'Un inventario físico empresarial es el conteo sistemático de existencias en ubicaciones definidas, con preparación previa, control de movimientos, reconteos y conciliación de resultados. Esta guía resume el proceso paso a paso.',
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'definicion',
      heading: 'Qué es un inventario físico',
      body: [
        'Es el relevamiento presencial (o asistido) de mercadería para contrastar el stock teórico con lo existente en salón, depósito o centro de distribución. No es solo “contar”: incluye alcance, evidencia y cierre documentado.',
        'Sirve para auditoría, ajuste de sistemas, control operativo y mejora de procesos de abastecimiento.',
      ],
    },
    {
      id: 'preparacion',
      heading: 'Preparación y definición del alcance',
      body: [
        'Antes del conteo conviene definir ubicaciones incluidas, unidades de medida, tratamiento de mercadería en tránsito y responsables. Un alcance ambiguo genera diferencias difíciles de interpretar.',
        'También se acuerdan fechas, turnos y cómo se comunicará el operativo al personal del local o depósito.',
      ],
    },
    {
      id: 'espacio',
      heading: 'Organización del espacio y control de movimientos',
      body: [
        'Ordenar pasillos, identificar posiciones y señalizar zonas ayuda a no omitir ni duplicar conteos. Durante el inventario deben existir reglas claras para ingresos, egresos y reubicaciones.',
        'Sin control de movimientos, el resultado mezcla stock real con cambios ocurridos a mitad del operativo.',
      ],
    },
    {
      id: 'conteo',
      heading: 'Conteo, reconteo y conciliación',
      body: [
        'El conteo se ejecuta por ubicación. Ante diferencias se realizan reconteos selectivos. Luego se consolidan capturas y se analizan desvíos respecto del sistema o del archivo de referencia.',
        'El cierre incluye entregables: reportes por zona o sucursal, listados de diferencias y evidencia según el método acordado.',
      ],
    },
  ],
  steps: [
    {
      title: 'Definir objetivo y alcance',
      description: 'Qué se cuenta, dónde y con qué criterio de cierre.',
    },
    {
      title: 'Preparar el sitio',
      description: 'Orden, identificación de ubicaciones y acuerdo de movimientos.',
    },
    {
      title: 'Ejecutar el conteo',
      description: 'Avance por zonas, supervisión y reconteos cuando corresponda.',
    },
    {
      title: 'Conciliar y documentar',
      description: 'Análisis de diferencias y entrega de resultados auditables.',
    },
  ],
  relatedLinks: [
    {
      label: 'Servicio de inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
      description: 'Cómo Dinamic Systems ejecuta inventarios profesionales.',
    },
    {
      label: 'Inventarios en depósitos y CD',
      to: '/industrias/depositos-centros-distribucion/',
      description: 'Particularidades de racks, pallets y altura.',
    },
    {
      label: 'Contacto',
      to: '/#contacto',
      description: 'Consultá por un inventario en tu operación.',
    },
  ],
  cta: {
    title: '¿Preferís que un equipo especializado ejecute el inventario?',
    description:
      'Si necesitás planificación, supervisión y reportes auditables, podemos evaluar tu operación.',
    primaryLabel: 'Conocer el servicio de inventarios físicos',
    primaryTo: '/servicios/inventarios-fisicos/',
    secondaryLabel: 'Escribirnos',
    secondaryTo: '/#contacto',
  },
};
