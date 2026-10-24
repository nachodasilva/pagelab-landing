import { WHATSAPP_NUMBER, getPlan, formatCLP } from '../config';
import { getRefTag } from './attribution';
import { track } from './track';

const MENSAJE_GENERAL = 'Hola, vi Pagelab y quiero una página web. ¿Me ayudan a elegir el plan?';

const MENSAJES = {
  hero: MENSAJE_GENERAL,
  flotante: 'Hola, tengo una consulta sobre Pagelab',
  faq: 'Hola, tengo una duda sobre Pagelab',
  precios: 'Hola, no sé qué plan elegir. ¿Me ayudan?',
  caso_validar: 'Hola, quiero validar una idea con una landing page. ¿Me ayudan?',
  caso_negocio: 'Hola, tengo un negocio sin página web y quiero un sitio. ¿Me ayudan?',
  caso_portafolio: 'Hola, quiero mi portafolio online. ¿Me ayudan?',
};

const mensajePlan = (plan) =>
  `Hola, me interesa el plan ${plan.nombre} de ${formatCLP(plan.precio)}. ¿Podemos conversar?`;

const mensajeCheckout = (plan) =>
  `Hola, tengo dudas antes de pagar el plan ${plan.nombre}. ¿Me ayudan?`;

// Orden: mensaje explícito > mensaje del origen > mensaje del plan > general.
export function buildWhatsAppLink(origen, plan, mensaje) {
  const p = getPlan(plan);
  let text = mensaje
    || (origen === 'checkout' && p && mensajeCheckout(p))
    || (origen === 'plan' && p && mensajePlan(p))
    || MENSAJES[origen]
    || (p && mensajePlan(p))
    || MENSAJE_GENERAL;
  const ref = getRefTag();
  if (ref) text += ` (ref: ${ref})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const trackWhatsApp = (origen, plan) => track('contact_whatsapp', { origen, plan });
