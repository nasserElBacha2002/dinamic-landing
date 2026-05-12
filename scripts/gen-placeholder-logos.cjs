const fs = require('node:fs');
const path = require('node:path');

const dir = path.join(__dirname, '../src/assets/logos');
fs.mkdirSync(dir, { recursive: true });

const items = [
  ['carrefour.svg', 'Carrefour'],
  ['cencosud.svg', 'Cencosud'],
  ['cdeb-sa-express.svg', 'CDEB SA Express'],
  ['sbg.svg', 'SBG'],
  ['avenida.svg', 'Avenida.com'],
  ['farmacity.svg', 'Farmacity'],
  ['dt-logistica.svg', 'DT Logística'],
  ['cebra.svg', 'Cebra'],
  ['tea-deportea.svg', 'Tea & Deportea'],
  ['fiore.svg', 'Fiore'],
  ['melar.svg', 'Melar'],
  ['farmashop.svg', 'Farmashop'],
  ['lacoste.svg', 'Lacoste'],
  ['penguin.svg', 'Penguin'],
  ['cacharel.svg', 'Cacharel'],
];

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function tpl(label) {
  const e = esc(label);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 64" role="img"><title>${e}</title><rect width="220" height="64" rx="10" fill="#f8f9fa" stroke="#c4c6cf"/><text x="110" y="38" text-anchor="middle" font-family="Plus Jakarta Sans,Inter,sans-serif" font-size="13" font-weight="700" fill="#44474e">${e}</text></svg>`;
}

for (const [f, l] of items) {
  fs.writeFileSync(path.join(dir, f), tpl(l));
}
