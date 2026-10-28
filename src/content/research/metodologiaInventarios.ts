import type { ResourcePageContent } from '@/content/types';

export const metodologiaInventariosContent: ResourcePageContent = {
  kind: 'resource',
  eyebrow: 'Metodología',
  h1: 'Metodología de un inventario físico',
  summary:
    'La metodología es el ciclo que hace defendible un conteo: preparar, definir alcance, partir zonas, asignar, capturar, validar, recontear, resolver diferencias, dejar rastro y entregar. No es una certificación ni un método patentado. Es el procedimiento que se acuerda con cada sitio.',
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  authorName: 'Dinamic Systems',
  sections: [
    {
      id: 'respuesta',
      heading: 'Respuesta directa',
      body: [
        'Un inventario metodológico no empieza en el primer pallet ni termina en un total. Recorre, en orden: preparación del predio, alcance (qué entra y qué no), mapa de zonas y posiciones, asignación de gente, captura por ubicación, validación, reconteo selectivo, resolución de diferencias contra movimientos y master, trazabilidad de cada paso y un entregable exportable.',
        'Si se salta un eslabón —por ejemplo, capturar sin alcance, o ajustar el sistema sin reconteo— el número final no se puede reconstruir.',
      ],
    },
    {
      id: 'ciclo',
      heading: 'El ciclo, paso por paso',
      body: [
        'Preparación: acondicionar el sitio (eso se detalla en cómo preparar un depósito). La metodología exige que esté hecha, no la sustituye.',
        'Alcance: universo, unidades, playa, cuarentena, stock de terceros. Lo que no está escrito no se puede cerrar.',
        'Zonas y posiciones: el predio partido para no pisarse. Ver control de posiciones.',
        'Asignación: quién recorre qué, con qué supervisión. En predios grandes, ver equipos.',
        'Captura: el medio (papel, lector, móvil, imagen) no cambia la obligación de atar cantidad a ubicación.',
        'Validación: lecturas incompletas, unidades raras, huecos vacíos contra master lleno.',
        'Reconteo: solo el recorte que lo justifica. Ver reconteos inteligentes.',
        'Resolución de diferencias: documento, ubicación o master —no un ajuste ciego.',
        'Trazabilidad y entregables: origen del dato, operador, conteo vs reconteo, archivo que un tercero pueda leer. Ver resultados auditables.',
      ],
    },
    {
      id: 'planificacion',
      heading: 'Relación con la planificación del operativo',
      body: [
        'La planificación diseña calendario, personal y layout antes del turno. La metodología es el hilo del dato durante y después. Se necesitan las dos; no son la misma URL.',
      ],
    },
    {
      id: 'limites',
      heading: 'Lo que no es',
      body: [
        'No hay en este sitio una metodología certificada por un organismo, ni un procedimiento patentado. Dinamic Systems aplica este ciclo en los inventarios que ejecuta, adaptado al alcance acordado. Si un cliente pide otro recorte (solo auditoría, solo cíclico), el ciclo se achica; no se finge cobertura total.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Esta metodología está certificada o patentada?',
      answer:
        'No. Es un procedimiento operativo documentado: alcance, zonas, captura, validación, reconteo, rastro y entrega. No se usa como sello ni como propiedad intelectual en este sitio.',
    },
  ],
  relatedLinks: [
    {
      label: 'Planificación de un inventario',
      to: '/buenas-practicas/planificacion-inventario/',
      description: 'El diseño previo del operativo, distinto de este ciclo del dato.',
    },
    {
      label: 'Reconteos inteligentes',
      to: '/buenas-practicas/reconteos-inteligentes/',
      description: 'Cómo se trata una diferencia dentro del ciclo.',
    },
    {
      label: 'Control de posiciones y pasillos',
      to: '/buenas-practicas/control-posiciones-pasillos/',
      description: 'La unidad espacial sobre la que se captura.',
    },
    {
      label: 'Checklist de inventario físico',
      to: '/recursos/checklist-inventario-fisico/',
      description: 'Lista de control de cada eslabón del ciclo.',
    },
  ],
  cta: {
    title: '¿Necesitás un operativo con este ciclo, o solo un recorte?',
    description: 'Alcance, zonas y entregable se acuerdan antes. El ciclo se achica si el pedido es una auditoría o un cíclico.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver inventarios físicos',
    secondaryTo: '/servicios/inventarios-fisicos/',
  },
};
