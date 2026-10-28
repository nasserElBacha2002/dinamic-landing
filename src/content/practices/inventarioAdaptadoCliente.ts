import type { ResourcePageContent } from '@/content/types';

export const inventarioAdaptadoClienteContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Buena práctica',
  h1: 'Inventario adaptado a cliente o proveedor',
  summary:
    'Adaptar un inventario es cambiar reglas concretas: formatos de archivo, etiquetas, ubicaciones, códigos, layouts y restricciones de planta. No es un discurso sobre flexibilidad. Si la regla no se puede escribir, no está adaptada.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Cliente y proveedor (o dueño de stock en un 3PL) traen su master, sus etiquetas y sus prohibiciones. El operativo se adapta cuando el plan dice, por escrito, en qué unidad se cuenta, qué archivo se entrega, qué pasillos no se bloquean, qué códigos se leen y qué se hace con la mercadería sin etiqueta de ese dueño.',
        '“Nos adaptamos a cada operación” sin esa lista es marketing. La lista es el trabajo.',
      ],
    },
    {
      id: 'ejes',
      heading: 'Ejes de adaptación real',
      body: [
        'Formatos: columnas del export, desglose por cliente, por lote o por sucursal.',
        'Etiquetas y códigos: el código que manda es el del dueño del stock, no el interno del operador, si así se acordó.',
        'Ubicaciones y layouts: un WMS propio vs. uno del cliente; huecos que solo existen en uno de los dos mapas.',
        'Reglas: abrir o no abrir, contar o no playa, incluir o no cuarentena.',
        'Restricciones: no foto, no dron, EPP, horarios de muelle, personal de planta que no se puede mezclar.',
      ],
    },
    {
      id: '3pl',
      heading: 'En un operador logístico',
      body: [
        'La adaptación suele ser por dueño de mercadería, no por “el depósito”. Mezclar clientes en el mismo cierre es un error de inventario y de contrato. Ver inventarios para operadores logísticos.',
      ],
    },
  ],
  relatedLinks: [
    {
      label: 'Comunicación durante el inventario',
      to: '/buenas-practicas/comunicacion-cliente-inventario/',
      description: 'Quién es el interlocutor y cómo se avisan las excepciones.',
    },
    {
      label: 'Planificación de un inventario',
      to: '/buenas-practicas/planificacion-inventario/',
      description: 'Dónde se escriben estas reglas antes del turno.',
    },
    {
      label: 'Operadores logísticos e industria',
      to: '/industrias/operadores-logisticos-industria/',
      description: 'El contexto de stock de terceros.',
    },
  ],
  cta: {
    title: '¿El cierre tiene que respetar el formato de un cliente o un 3PL?',
    description: 'Eso se acuerda en el alcance: unidad, archivo, restricciones. No se resuelve al final del turno.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver comunicación del operativo',
    secondaryTo: '/buenas-practicas/comunicacion-cliente-inventario/',
  },
};
