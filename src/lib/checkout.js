// Datos del checkout corto, guardados antes de ir a Mercado Pago.
// Los usan /gracias (plan del Purchase) y /brief (precarga de campos).

const KEY = 'pl_checkout';

export function saveCheckout(data) {
  try { localStorage.setItem(KEY, JSON.stringify({ ...data, ts: new Date().toISOString() })); } catch { /* almacenamiento bloqueado */ }
}

export function readCheckout() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}
