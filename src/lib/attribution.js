// Captura de origen de campaña (UTM, gclid, fbclid) con primer y último toque.

const KEY = 'pl_attribution';
const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];

const read = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
};

// Con HashRouter los parámetros pueden venir antes del # (Google Ads, 404.html)
// o dentro del hash (/#/landing-page?utm_source=google). Leemos ambos.
function paramsFromUrl() {
  const { search, hash } = window.location;
  const hashQuery = hash.includes('?') ? hash.slice(hash.indexOf('?')) : '';
  const merged = {};
  for (const qs of [search, hashQuery]) {
    new URLSearchParams(qs).forEach((v, k) => { if (PARAMS.includes(k) && v) merged[k] = v; });
  }
  return merged;
}

export function captureAttribution() {
  const found = paramsFromUrl();
  if (!Object.keys(found).length) return;
  const touch = { ...found, landing: window.location.href, ts: new Date().toISOString() };
  const data = read();
  if (!data.first) data.first = touch;
  data.last = touch;
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* almacenamiento bloqueado */ }
}

export const getAttribution = () => read();

// Campos planos para adjuntar a formularios: último toque sin prefijo,
// primer toque con prefijo "primer_". Solo los que tienen valor.
export function attributionFields() {
  const { first, last } = read();
  const out = {};
  for (const k of PARAMS) {
    if (last?.[k]) out[k] = last[k];
    if (first?.[k]) out[`primer_${k}`] = first[k];
  }
  if (first?.landing) out.primer_landing = first.landing;
  return out;
}

// Referencia corta para el mensaje de WhatsApp: "google", "meta" o el utm_source.
export function getRefTag() {
  const last = read().last;
  if (!last) return null;
  const src = (last.utm_source || '').toLowerCase();
  if (last.gclid || /google|adwords/.test(src)) return 'google';
  if (last.fbclid || /facebook|instagram|^fb$|^ig$|meta/.test(src)) return 'meta';
  return src || null;
}
