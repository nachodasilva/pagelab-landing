import { CUOTAS_DISPONIBLES, PRECIO_LANDING, PRECIO_SITIO, formatCLP } from './config';

const cuotas = CUOTAS_DISPONIBLES ? ' o en cuotas con Mercado Pago' : '';

// Landings por intención para Google Ads. Reutilizan la home y solo cambian
// H1, subtítulo, plan destacado y el mensaje general de WhatsApp.
export const VARIANTS = {
  home: {
    title: 'Pagelab - Tu página web lista en 3 días',
    description: 'Páginas web profesionales listas en 3 días. Diseño, desarrollo y hosting incluido. Desde $200.000.',
    h1: 'Tu página web profesional lista en 3 días',
    sub: `Diseño, dominio y hosting incluidos. Landing page desde ${formatCLP(PRECIO_LANDING)}${cuotas}. Sin reuniones eternas ni sorpresas.`,
    featured: null,
    waMensaje: null,
  },
  'landing-page': {
    title: 'Landing page en 3 días hábiles por $200.000 | Pagelab',
    description: `Tu landing page profesional lista en 3 días hábiles. Diseño, dominio y hosting incluidos por ${formatCLP(PRECIO_LANDING)}.`,
    h1: `Tu landing page lista en 3 días hábiles por ${formatCLP(PRECIO_LANDING)}`,
    sub: `Ideal para campañas, lanzamientos y validar ideas. Diseño, dominio y hosting incluidos. Pago único${cuotas}.`,
    featured: 'landing',
    waMensaje: 'Hola, vi Pagelab y quiero una landing page. ¿Me ayudan a empezar?',
  },
  'sitio-web': {
    title: 'Sitio web para tu negocio en 5 días hábiles | Pagelab',
    description: `Sitio web profesional de hasta 5 páginas, listo en 5 días hábiles. Dominio y hosting incluidos por ${formatCLP(PRECIO_SITIO)}.`,
    h1: 'Sitio web para tu negocio, listo en 5 días hábiles',
    sub: `Hasta 5 páginas para mostrar tus servicios y recibir consultas. Dominio y hosting incluidos. ${formatCLP(PRECIO_SITIO)}${cuotas}.`,
    featured: 'sitio',
    waMensaje: 'Hola, vi Pagelab y quiero un sitio web para mi negocio. ¿Me ayudan a empezar?',
  },
  portafolio: {
    title: 'Portafolio online profesional en 3 días hábiles | Pagelab',
    description: `Tu portafolio online profesional listo en 3 días hábiles. Muestra tu trabajo y cierra más clientes. Desde ${formatCLP(PRECIO_LANDING)}.`,
    h1: 'Tu portafolio online profesional en 3 días hábiles',
    sub: `Muestra tu trabajo, cierra más clientes y deja de mandar PDFs. Dominio y hosting incluidos. ${formatCLP(PRECIO_LANDING)}${cuotas}.`,
    featured: 'landing',
    waMensaje: 'Hola, vi Pagelab y quiero mi portafolio online. ¿Me ayudan a empezar?',
  },
};
