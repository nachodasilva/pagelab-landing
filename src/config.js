// ─── Configuración central de Pagelab ────────────────────────────────────────
// Única fuente de verdad para contacto, empresa, precios, pagos y cifras.

// ── Contacto ────────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '56958465519';
export const WHATSAPP_DISPLAY = '+56 9 5846 5519';
export const CONTACT_EMAIL = 'hola@pagelab.cl';

// ── Empresa ─────────────────────────────────────────────────────────────────
export const RAZON_SOCIAL = 'Nitro Group SpA';
// RUT de la empresa. Vacío = no se muestra en el footer.
export const RUT_EMPRESA = '77.476.895-5';
export const COMUNA = 'Providencia, Santiago';

// ── Formularios (FormSubmit) ────────────────────────────────────────────────
// Alias aleatorio de FormSubmit: no expone el email personal en el código.
export const FORMSUBMIT_ENDPOINT = '8a1e6524a53cc215057870849ee91905';
export const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_ENDPOINT}`;
export const FORMSUBMIT_POST_URL = `https://formsubmit.co/${FORMSUBMIT_ENDPOINT}`;

// ── Pagos (Mercado Pago) ────────────────────────────────────────────────────
// Links de pago con 3 cuotas sin interés habilitadas.
export const MP_LINK_LANDING = 'https://mpago.li/2YjR7CK';
export const MP_LINK_SITIO = 'https://mpago.li/2gB57xw';

// Cuotas sin interés con tarjeta de crédito (se configuran en Mercado Pago).
export const CUOTAS_SIN_INTERES = 3;

// ── Formato ─────────────────────────────────────────────────────────────────
// $199.990 (sin depender del locale del navegador ni de Node)
export const formatCLP = (n) => `$${Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

// Valor de cada cuota, redondeado hacia abajo
export const valorCuota = (precio) => Math.floor(precio / CUOTAS_SIN_INTERES);

// ── Precios y planes ────────────────────────────────────────────────────────
export const PRECIO_LANDING = 199990;
export const PRECIO_SITIO = 399990;

// Renovación del dominio .cl desde el 2º año (la paga el cliente a NIC Chile).
export const DOMINIO_RENOVACION_APROX = 10000;

const ITEMS_COMUNES = [
  'Botón de WhatsApp y formulario de contacto',
  'Pixel de Meta y Google Analytics listos para publicidad',
];
const ITEMS_PROPIEDAD = [
  'Dominio .cl a tu nombre (1er año incluido)',
  'Hosting y certificado SSL incluidos, sin mensualidades',
  'El sitio es tuyo',
];

export const PLANES = {
  landing: {
    id: 'landing',
    nombre: 'Landing Page',
    precio: PRECIO_LANDING,
    plazo: '3 días hábiles',
    mpLink: MP_LINK_LANDING,
    etiqueta: 'Más elegido',
    subtitulo: 'Para emprendedores sin sitio web que necesitan más clientes.',
    listo: 'Lista en 3 días hábiles',
    garantia: 'Tu landing en 3 días hábiles o te devolvemos el 100%',
    garantiaTarjeta: 'Lista en 3 días hábiles o te devolvemos el 100%',
    items: ['1 página, hasta 6 secciones', ...ITEMS_COMUNES, '1 ronda de cambios', ...ITEMS_PROPIEDAD],
  },
  sitio: {
    id: 'sitio',
    nombre: 'Sitio Web',
    precio: PRECIO_SITIO,
    plazo: '5 días hábiles',
    mpLink: MP_LINK_SITIO,
    etiqueta: null,
    subtitulo: 'Para negocios que necesitan explicar su propuesta y convertir visitantes.',
    listo: 'Listo en 5 días hábiles',
    garantia: 'Tu sitio web en 5 días hábiles o te devolvemos el 100%',
    garantiaTarjeta: 'Preview en 5 días hábiles o te devolvemos el 100%',
    items: ['Hasta 5 páginas', ...ITEMS_COMUNES, '2 rondas de cambios', ...ITEMS_PROPIEDAD],
  },
};

export const getPlan = (id) => PLANES[id] ?? null;

// Se muestra en /gracias y /brief-recibido
export const AVISO_FECHA_ENTREGA = 'Cuando tengamos todo tu material, te confirmaremos por WhatsApp la fecha exacta de entrega de tu preview.';

// Línea de cuotas: "3 cuotas sin interés de $66.663"
export const textoCuotas = (precio) => `${CUOTAS_SIN_INTERES} cuotas sin interés de ${formatCLP(valorCuota(precio))}`;

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
