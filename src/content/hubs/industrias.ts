import type { HubPageContent } from '@/content/types';

export const industriasHubContent: HubPageContent = {
  kind: 'hub',
  group: 'industrias',
  eyebrow: 'Industrias',
  h1: 'Inventarios físicos por tipo de operación',
  summary:
    'La metodología se adapta a depósitos y centros de distribución, retail y cadenas de sucursales, y operadores logísticos o industria.',
  sections: [
    {
      id: 'enfoque',
      heading: 'Por qué cambia el enfoque según la operación',
      body: [
        'Un depósito con racks y pallets no se inventaría igual que un salón de venta o un stock de terceros. El alcance, las ventanas horarias y el control por ubicación se definen con cada cliente.',
        'Estas páginas describen cómo se aplica el inventario físico en cada tipo de operación, sin reemplazar la evaluación puntual del sitio.',
      ],
    },
  ],
  relatedLinks: [
    {
      label: 'Depósitos y centros de distribución',
      to: '/industrias/depositos-centros-distribucion/',
      description: 'Racks, pallets, pasillos, altura y control por ubicación.',
    },
    {
      label: 'Retail y cadenas de sucursales',
      to: '/industrias/retail-cadenas-sucursales/',
      description: 'Salón, depósito interno, coordinación por sucursal y consolidación de resultados.',
    },
    {
      label: 'Operadores logísticos e industria',
      to: '/industrias/operadores-logisticos-industria/',
      description: 'Stock de terceros, lotes, trazabilidad y conciliación documentada.',
    },
  ],
  cta: {
    title: '¿Querés evaluar un inventario en tu operación?',
    description: 'Indicá el tipo de sitio, el almacenamiento y el volumen aproximado.',
    primaryLabel: 'Solicitar evaluación de inventario',
    primaryTo: '/#contacto',
    secondaryLabel: 'Ver servicios',
    secondaryTo: '/servicios/',
  },
};
