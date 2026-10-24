import { PRECIO_LANDING, PRECIO_SITIO, formatCLP, textoCuotas } from './config';

const landing = formatCLP(PRECIO_LANDING);
const sitio = formatCLP(PRECIO_SITIO);

// Landings por intención para Google Ads. Reutilizan la home y solo cambian
// H1, subtítulo, plan destacado y el mensaje general de WhatsApp.
// `plan` define el plazo de la garantía que se muestra bajo los botones del hero.
export const VARIANTS = {
  home: {
    title: 'Pagelab - Tu página web lista en 3 días',
    description: `Páginas web profesionales listas en 3 días hábiles. Diseño, dominio y hosting incluidos. Desde ${landing} o ${textoCuotas(PRECIO_LANDING)}.`,
    h1: 'Tu página web profesional lista en 3 días',
    sub: `Diseño, dominio y hosting incluidos. Landing page desde ${landing} o ${textoCuotas(PRECIO_LANDING)}. Sin reuniones eternas ni sorpresas.`,
    featured: null,
    plan: 'landing',
    waMensaje: null,
  },
  'landing-page': {
    title: `Landing page en 3 días hábiles por ${landing} | Pagelab`,
    description: `Tu landing page profesional lista en 3 días hábiles. Diseño, dominio y hosting incluidos por ${landing} o ${textoCuotas(PRECIO_LANDING)}.`,
    h1: `Tu landing page lista en 3 días hábiles por ${landing}`,
    sub: `Ideal para campañas, lanzamientos y validar ideas. Diseño, dominio y hosting incluidos. Sin mensualidades, o ${textoCuotas(PRECIO_LANDING)}.`,
    featured: 'landing',
    plan: 'landing',
    waMensaje: 'Hola, vi Pagelab y quiero una landing page. ¿Me ayudan a empezar?',
  },
  'sitio-web': {
    title: 'Sitio web para tu negocio en 5 días hábiles | Pagelab',
    description: `Sitio web profesional de hasta 5 páginas, listo en 5 días hábiles. Dominio y hosting incluidos por ${sitio} o ${textoCuotas(PRECIO_SITIO)}.`,
    h1: 'Sitio web para tu negocio, listo en 5 días hábiles',
    sub: `Hasta 5 páginas para mostrar tus servicios y recibir consultas. Dominio y hosting incluidos. ${sitio} o ${textoCuotas(PRECIO_SITIO)}.`,
    featured: 'sitio',
    plan: 'sitio',
    waMensaje: 'Hola, vi Pagelab y quiero un sitio web para mi negocio. ¿Me ayudan a empezar?',
  },
  portafolio: {
    title: 'Portafolio online profesional en 3 días hábiles | Pagelab',
    description: `Tu portafolio online profesional listo en 3 días hábiles. Muestra tu trabajo y cierra más clientes. Desde ${landing} o ${textoCuotas(PRECIO_LANDING)}.`,
    h1: 'Tu portafolio online profesional en 3 días hábiles',
    sub: `Muestra tu trabajo, cierra más clientes y deja de mandar PDFs. Dominio y hosting incluidos. ${landing} o ${textoCuotas(PRECIO_LANDING)}.`,
    featured: 'landing',
    plan: 'landing',
    waMensaje: 'Hola, vi Pagelab y quiero mi portafolio online. ¿Me ayudan a empezar?',
  },
};
