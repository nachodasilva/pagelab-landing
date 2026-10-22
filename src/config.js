// ─── Configuración central de Pagelab ────────────────────────────────────────
// Única fuente de verdad para contacto, precios, pagos y cifras de confianza.

// ── Contacto ────────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '56958465519';
export const WHATSAPP_DISPLAY = '+56 9 5846 5519';
export const CONTACT_EMAIL = 'hola@pagelab.cl';

// ── Formularios (FormSubmit) ────────────────────────────────────────────────
// Alias aleatorio de FormSubmit: no expone el email personal en el código.
export const FORMSUBMIT_ENDPOINT = '8a1e6524a53cc215057870849ee91905';
export const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_ENDPOINT}`;
export const FORMSUBMIT_POST_URL = `https://formsubmit.co/${FORMSUBMIT_ENDPOINT}`;

// ── Pagos (Mercado Pago) ────────────────────────────────────────────────────
export const MP_LINK_LANDING = 'https://mpago.li/2YjR7CK';
export const MP_LINK_SITIO = 'https://mpago.li/2gB57xw';

// [CONFIRMAR] ¿Los links de Mercado Pago permiten pagar en cuotas?
// Si no, cambia a false: se ocultan todas las menciones a cuotas.
export const CUOTAS_DISPONIBLES = true;

// [CONFIRMAR] Link a los términos del servicio. Si es null, el checkbox del
// checkout muestra solo el texto, sin link.
export const TERMS_URL = null;

// Garantía que se muestra en precios, checkout y FAQ.
// [COMPLETAR] Mientras GARANTIA_TEXTO sea null, no se muestra en ningún lado.
// Debe calzar con el monto que cobra cada link de pago.
export const GARANTIA_TITULO = 'Garantía';
export const GARANTIA_TEXTO = null;

// ── Precios y planes ────────────────────────────────────────────────────────
export const PRECIO_LANDING = 200000;
export const PRECIO_SITIO = 400000;

export const PLANES = {
  landing: {
    id: 'landing',
    nombre: 'Landing Page',
    precio: PRECIO_LANDING,
    plazo: '3 días',
    mpLink: MP_LINK_LANDING,
    incluye: [
      '1 página completa, hasta 6 secciones',
      'Dominio 1er año y hosting incluidos',
      'SEO y certificado de seguridad',
      '1 ronda de cambios',
    ],
  },
  sitio: {
    id: 'sitio',
    nombre: 'Sitio Web',
    precio: PRECIO_SITIO,
    plazo: '5 días hábiles',
    mpLink: MP_LINK_SITIO,
    incluye: [
      'Hasta 5 páginas',
      'Dominio 1er año y hosting incluidos',
      'SEO, certificado de seguridad y formulario de contacto',
      '2 rondas de cambios',
    ],
  },
};

export const getPlan = (id) => PLANES[id] ?? null;

export const formatCLP = (n) => `$${n.toLocaleString('es-CL')}`;

// ── Cifras de confianza ─────────────────────────────────────────────────────
export const SITIOS_ENTREGADOS = 47;
export const RATING = 4.9;
export const TIEMPO_RESPUESTA_PROMEDIO = '37 min.';

// ── Google Ads (preparado, desactivado) ─────────────────────────────────────
// Las conversiones se importan desde GA4, así que esto queda vacío.
// Solo si algún día instalas la etiqueta de Google Ads (AW-…), agrega aquí
// el send_to de cada evento, ej: { purchase: 'AW-123456789/AbCdEf' }.
// track() las enviará sin tocar los componentes.
export const GOOGLE_ADS_CONVERSIONS = {};
