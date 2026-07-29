import type { ResourcePageContent } from '@/content/types';

export const comoPrepararDepositoContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Recurso',
  h1: 'Cómo preparar un depósito para un inventario',
  summary:
    'Preparar el depósito antes del conteo mejora la cobertura, reduce omisiones y facilita la conciliación. Esta guía resume acciones prácticas de orden, identificación y control de movimientos.',
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Para preparar un depósito hay que ordenar ubicaciones, identificar mercadería, separar devoluciones y dañados, definir responsables, congelar o controlar movimientos y dejar claros los archivos o listados de referencia que se usarán en la conciliación.',
      ],
    },
    {
      id: 'orden',
      heading: 'Orden, ubicaciones e identificación',
      body: [
        'Pasillos transitables, posiciones etiquetadas y mercadería identificable reducen conteos duplicados u omitidos. Conviene revisar etiquetas ilegibles y unificar criterios de ubicación.',
        'Las zonas sin identificar deben resolverse antes del inicio del operativo o quedar explícitamente fuera de alcance.',
      ],
    },
    {
      id: 'condiciones',
      heading: 'Devoluciones, dañados y pendientes',
      body: [
        'Separan devoluciones, mercadería dañada, pendientes de ingreso o egreso y cualquier stock en tránsito que pueda distorsionar el conteo.',
        'Documentar el tratamiento de cada condición evita discutir después si un pallet “contaba” o no.',
      ],
    },
    {
      id: 'movimientos',
      heading: 'Movimientos, responsables y zonas bloqueadas',
      body: [
        'Acordá ventanas de corte, responsables por sector y zonas bloqueadas durante el inventario. Sin reglas de movimiento, el resultado mezcla stock real con cambios a mitad del conteo.',
        'También conviene preparar archivos de referencia (si se usarán) y un canal claro de escalamiento ante hallazgos en campo.',
      ],
    },
  ],
  steps: [
    {
      title: 'Relevar el layout',
      description: 'Posiciones, pasillos, altura y zonas especiales.',
    },
    {
      title: 'Ordenar e identificar',
      description: 'Etiquetas, devoluciones, dañados y pendientes.',
    },
    {
      title: 'Definir reglas de movimiento',
      description: 'Cortes, responsables y zonas bloqueadas.',
    },
    {
      title: 'Confirmar alcance y referencias',
      description: 'Qué se cuenta y con qué se concilia.',
    },
  ],
  relatedLinks: [
    {
      label: 'Inventarios para depósitos y CD',
      to: '/industrias/depositos-centros-distribucion/',
    },
    {
      label: 'Servicio de inventarios físicos',
      to: '/servicios/inventarios-fisicos/',
    },
    {
      label: 'Cómo realizar un inventario físico',
      to: '/recursos/como-realizar-un-inventario-fisico/',
    },
    {
      label: 'Contacto',
      to: '/#contacto',
    },
  ],
  cta: {
    title: '¿Vas a inventariar un depósito pronto?',
    description: 'Podemos ayudarte a planificar el operativo y la preparación previa.',
    primaryLabel: 'Ver inventarios físicos',
    primaryTo: '/servicios/inventarios-fisicos/',
    secondaryLabel: 'Escribirnos',
    secondaryTo: '/#contacto',
  },
};
