import logoCarrefour from '@/assets/logos/carrefour.png';
import logoCencosud from '@/assets/logos/cencosud.png';
import logoCdeb from '@/assets/logos/cdeb-sa-express.png';
import logoSbg from '@/assets/logos/sbg.png';
import logoAvenida from '@/assets/logos/avenida.png';
import logoFarmacity from '@/assets/logos/farmacity.png';
import logoDtLogistica from '@/assets/logos/dt-logistica.png';
import logoCebra from '@/assets/logos/cebra.png';
import logoTeaDeportea from '@/assets/logos/tea-deportea.png';
import logoFiore from '@/assets/logos/fiore.png';
import logoMelar from '@/assets/logos/melar.png';
import logoFarmashop from '@/assets/logos/farmashop.png';
import logoLacoste from '@/assets/logos/lacoste.png';
import logoPenguin from '@/assets/logos/penguin.png';
import logoCacharel from '@/assets/logos/cacharel.png';
import type { Client } from '@/types/content';

/**
 * Client logos live in src/assets/logos/ as PNGs.
 */
export const clients: Client[] = [
  { name: 'Carrefour', logo: logoCarrefour, category: 'Retail', logoFile: 'carrefour.png' },
  { name: 'Cencosud', logo: logoCencosud, category: 'Retail', logoFile: 'cencosud.png' },
  { name: 'CDEB SA Express', logo: logoCdeb, category: 'Logística', logoFile: 'cdeb-sa-express.png' },
  { name: 'SBG', logo: logoSbg, category: 'Distribución', logoFile: 'sbg.png' },
  { name: 'Avenida.com', logo: logoAvenida, category: 'Retail', logoFile: 'avenida.png' },
  { name: 'Farmacity', logo: logoFarmacity, category: 'Farmacias', logoFile: 'farmacity.png' },
  { name: 'DT Logística', logo: logoDtLogistica, category: 'Logística', logoFile: 'dt-logistica.png' },
  { name: 'Cebra', logo: logoCebra, category: 'Otro', logoFile: 'cebra.png' },
  { name: 'Tea & Deportea', logo: logoTeaDeportea, category: 'Indumentaria', logoFile: 'tea-deportea.png' },
  { name: 'Fiore', logo: logoFiore, category: 'Indumentaria', logoFile: 'fiore.png' },
  { name: 'Melar', logo: logoMelar, category: 'Consumo masivo', logoFile: 'melar.png' },
  { name: 'Farmashop', logo: logoFarmashop, category: 'Farmacias', logoFile: 'farmashop.png' },
  { name: 'Lacoste', logo: logoLacoste, category: 'Indumentaria', logoFile: 'lacoste.png' },
  { name: 'Penguin', logo: logoPenguin, category: 'Indumentaria', logoFile: 'penguin.png' },
  { name: 'Cacharel', logo: logoCacharel, category: 'Indumentaria', logoFile: 'cacharel.png' },
];
