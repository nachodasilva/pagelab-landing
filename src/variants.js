import { PRECIO_LANDING, PRECIO_SITIO, formatCLP, textoCuotas } from './config';

const landing = formatCLP(PRECIO_LANDING);
const sitio = formatCLP(PRECIO_SITIO);

// Landings por intención para Google Ads. Reutilizan la home y solo cambian
// title, description, H1, plan destacado y el mensaje general de WhatsApp.
// h1: null = usa el titular A/B de src/content/landing.js.
// `plan` define el plan al que lleva "Reservar mi cupo" del hero.
export const VARIANTS = {
  home: {
    title: 'Página web para pymes, terminada en 72 horas | Pagelab',
    description: `Tu página web profesional en 72 horas, sin escribir una línea. Textos, diseño, dominio .cl a tu nombre y Google Maps incluidos. Desde ${landing} o ${textoCuotas(PRECIO_LANDING)}.`,
    h1: null,
    featured: 'landing',
    plan: 'landing',
    waMensaje: null,
  },
  'landing-page': {
    title: `Landing page terminada en 72 horas por ${landing} | Pagelab`,
    description: `Tu landing page profesional terminada en 72 horas, sin escribir una línea. Textos, diseño y dominio .cl incluidos por ${landing} o ${textoCuotas(PRECIO_LANDING)}.`,
    h1: `Tu landing page terminada en 72 horas por ${landing}`,
    featured: 'landing',
    plan: 'landing',
    waMensaje: 'Hola, vi Pagelab y quiero una landing page. ¿Me ayudan a empezar?',
  },
  'sitio-web': {
    title: 'Sitio web para tu pyme en 5 días hábiles | Pagelab',
    description: `Sitio web profesional de hasta 5 páginas, terminado en 5 días hábiles. Textos, dominio .cl y hosting incluidos por ${sitio} o ${textoCuotas(PRECIO_SITIO)}.`,
    h1: 'Sitio web para tu pyme, terminado en 5 días hábiles',
    featured: 'sitio',
    plan: 'sitio',
    waMensaje: 'Hola, vi Pagelab y quiero un sitio web para mi negocio. ¿Me ayudan a empezar?',
  },
  portafolio: {
    title: 'Portafolio online profesional en 72 horas | Pagelab',
    description: `Tu portafolio online profesional terminado en 72 horas. Muestra tu trabajo y cierra más clientes. Desde ${landing} o ${textoCuotas(PRECIO_LANDING)}.`,
    h1: 'Tu portafolio online profesional, terminado en 72 horas',
    featured: 'landing',
    plan: 'landing',
    waMensaje: 'Hola, vi Pagelab y quiero mi portafolio online. ¿Me ayudan a empezar?',
  },
};
