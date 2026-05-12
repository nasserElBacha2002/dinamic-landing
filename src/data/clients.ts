import logoCarrefour from '@/assets/logos/carrefour.svg?url';
import logoCencosud from '@/assets/logos/cencosud.svg?url';
import logoCdeb from '@/assets/logos/cdeb-sa-express.svg?url';
import logoSbg from '@/assets/logos/sbg.svg?url';
import logoAvenida from '@/assets/logos/avenida.svg?url';
import logoFarmacity from '@/assets/logos/farmacity.svg?url';
import logoDtLogistica from '@/assets/logos/dt-logistica.svg?url';
import logoCebra from '@/assets/logos/cebra.svg?url';
import logoTeaDeportea from '@/assets/logos/tea-deportea.svg?url';
import logoFiore from '@/assets/logos/fiore.svg?url';
import logoMelar from '@/assets/logos/melar.svg?url';
import logoFarmashop from '@/assets/logos/farmashop.svg?url';
import logoLacoste from '@/assets/logos/lacoste.svg?url';
import logoPenguin from '@/assets/logos/penguin.svg?url';
import logoCacharel from '@/assets/logos/cacharel.svg?url';
import type { Client } from '@/types/content';

/**
 * Logos are vector placeholders until official brand assets are supplied.
 * TODO: Replace each file in src/assets/logos/ with the official monochrome/color logo from the client brand kit (SVG or transparent PNG), keeping similar viewBox aspect for layout consistency.
 */
export const clients: Client[] = [
  { name: 'Carrefour', logo: logoCarrefour, category: 'Retail', logoFile: 'carrefour.svg' },
  { name: 'Cencosud', logo: logoCencosud, category: 'Retail', logoFile: 'cencosud.svg' },
  { name: 'CDEB SA Express', logo: logoCdeb, category: 'Logística', logoFile: 'cdeb-sa-express.svg' },
  { name: 'SBG', logo: logoSbg, category: 'Distribución', logoFile: 'sbg.svg' },
  { name: 'Avenida.com', logo: logoAvenida, category: 'Retail', logoFile: 'avenida.svg' },
  { name: 'Farmacity', logo: logoFarmacity, category: 'Farmacias', logoFile: 'farmacity.svg' },
  { name: 'DT Logística', logo: logoDtLogistica, category: 'Logística', logoFile: 'dt-logistica.svg' },
  { name: 'Cebra', logo: logoCebra, category: 'Otro', logoFile: 'cebra.svg' },
  { name: 'Tea & Deportea', logo: logoTeaDeportea, category: 'Indumentaria', logoFile: 'tea-deportea.svg' },
  { name: 'Fiore', logo: logoFiore, category: 'Indumentaria', logoFile: 'fiore.svg' },
  { name: 'Melar', logo: logoMelar, category: 'Consumo masivo', logoFile: 'melar.svg' },
  { name: 'Farmashop', logo: logoFarmashop, category: 'Farmacias', logoFile: 'farmashop.svg' },
  { name: 'Lacoste', logo: logoLacoste, category: 'Indumentaria', logoFile: 'lacoste.svg' },
  { name: 'Penguin', logo: logoPenguin, category: 'Indumentaria', logoFile: 'penguin.svg' },
  { name: 'Cacharel', logo: logoCacharel, category: 'Indumentaria', logoFile: 'cacharel.svg' },
];
