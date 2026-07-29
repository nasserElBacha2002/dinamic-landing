/**
 * Fail fast when Node is below the repo engines requirement.
 */
const REQUIRED = '20.18.1';

function parse(v) {
  const parts = v.split('.').map((p) => Number.parseInt(p, 10));
  return [parts[0] || 0, parts[1] || 0, parts[2] || 0];
}

function gte(current, required) {
  const c = parse(current);
  const r = parse(required);
  for (let i = 0; i < 3; i += 1) {
    if (c[i] > r[i]) return true;
    if (c[i] < r[i]) return false;
  }
  return true;
}

const current = process.versions.node;
if (!gte(current, REQUIRED)) {
  console.error(
    `[check-node] Node ${current} is below the required minimum ${REQUIRED}. Use nvm/fnm with .nvmrc (20.18.1+).`,
  );
  process.exit(1);
}

console.log(`[check-node] Node ${current} OK (>= ${REQUIRED})`);
