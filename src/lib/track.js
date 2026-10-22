// Seguimiento de conversiones: Meta Pixel + GA4 (y Google Ads si se configura).
// Uso: track('begin_checkout', { plan: 'landing' })
// Los nombres de evento son los de GA4, que se importarán a Google Ads.

import { getPlan, GOOGLE_ADS_CONVERSIONS } from '../config';

const CURRENCY = 'CLP';

const meta = (...args) => { try { window.fbq?.(...args); } catch { /* pixel no cargó */ } };
const ga = (...args) => { try { window.gtag?.(...args); } catch { /* GA4 no cargó */ } };

const item = (plan) => ({ item_id: plan.id, item_name: plan.nombre, price: plan.precio, quantity: 1 });

const EVENTS = {
  contact_whatsapp: ({ origen, plan }) => {
    meta('track', 'Contact', { content_name: origen, content_category: plan || 'general' });
    ga('event', 'contact_whatsapp', { origen, plan: plan || 'general' });
  },
  select_item: ({ plan: id }) => {
    const plan = getPlan(id);
    if (plan) {
      meta('track', 'ViewContent', { content_name: plan.id, content_ids: [plan.id], value: plan.precio, currency: CURRENCY });
      ga('event', 'select_item', { item_list_name: 'planes', items: [item(plan)], value: plan.precio, currency: CURRENCY });
    } else {
      meta('track', 'ViewContent', { content_name: 'planes' });
      ga('event', 'select_item', { item_list_name: 'planes', items: [] });
    }
  },
  generate_lead: ({ plan: id }) => {
    const value = getPlan(id)?.precio ?? 0;
    meta('track', 'Lead', { value, currency: CURRENCY, content_name: id || 'no_seguro' });
    ga('event', 'generate_lead', { value, currency: CURRENCY });
  },
  begin_checkout: ({ plan: id }) => {
    const plan = getPlan(id);
    meta('track', 'InitiateCheckout', { value: plan.precio, currency: CURRENCY, content_ids: [plan.id], content_type: 'product' });
    ga('event', 'begin_checkout', { value: plan.precio, currency: CURRENCY, items: [item(plan)] });
  },
  purchase: ({ plan: id, transaction_id }) => {
    const plan = getPlan(id);
    // eventID = payment_id para que Meta deduplique.
    meta('track', 'Purchase', { value: plan.precio, currency: CURRENCY, content_ids: [plan.id], content_type: 'product' }, { eventID: transaction_id });
    ga('event', 'purchase', { transaction_id, value: plan.precio, currency: CURRENCY, items: [item(plan)] });
  },
  brief_submitted: ({ plan }) => {
    meta('track', 'CompleteRegistration', { content_name: plan || 'desconocido' });
    ga('event', 'brief_submitted', { plan: plan || 'desconocido' });
  },
  view_pricing: () => {
    meta('trackCustom', 'ViewPricing');
    ga('event', 'view_pricing');
  },
};

export function track(evento, datos = {}) {
  const send = EVENTS[evento];
  if (!send) return;
  try { send(datos); } catch { /* nunca romper la página por tracking */ }

  const sendTo = GOOGLE_ADS_CONVERSIONS[evento];
  if (sendTo) {
    const plan = getPlan(datos.plan);
    ga('event', 'conversion', {
      send_to: sendTo,
      ...(plan && { value: plan.precio, currency: CURRENCY }),
      ...(datos.transaction_id && { transaction_id: datos.transaction_id }),
    });
  }

  if (import.meta.env.DEV) console.debug('[track]', evento, datos);
}

// view_pricing se dispara una sola vez por sesión.
export function trackViewPricingOnce() {
  try {
    if (sessionStorage.getItem('pl_view_pricing')) return;
    sessionStorage.setItem('pl_view_pricing', '1');
  } catch { /* sessionStorage bloqueado: igual lo enviamos */ }
  track('view_pricing');
}
