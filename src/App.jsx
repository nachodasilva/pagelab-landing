import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from './assets/hero.jpg';
import heroBg from './assets/hero-bg.webp';
import {
  PLANES, FORMSUBMIT_AJAX_URL, CUOTAS_SIN_INTERES, RAZON_SOCIAL, RUT_EMPRESA, COMUNA,
  DOMINIO_RENOVACION_APROX, PRECIO_CAMBIOS, PRECIO_LANDING, formatCLP, textoCuotas,
} from './config';
import { landing } from './content/landing';
import { VARIANTS } from './variants';
import { track, trackViewPricingOnce } from './lib/track';
import { buildWhatsAppLink, trackWhatsApp } from './lib/whatsapp';
import { usePageMeta } from './lib/meta';
import WhatsAppButton, { WhatsAppIcon } from './components/WhatsAppButton';
import { FormExtras, IconEscudo } from './components/FormExtras';

const LEAD_PLAN = { [PLANES.landing.nombre]: 'landing', [PLANES.sitio.nombre]: 'sitio' };

const HEADLINES = {
  A: 'Tu página web profesional, terminada en 72 horas. Sin escribir una sola línea.',
  B: 'Cuéntanos tu negocio en 10 minutos. En 72 horas tienes tu web terminada.',
};

// ── Datos de src/content/landing.js (vacío = no se muestra) ────────────────
const testimoniosVerificados = landing.testimonios.filter((t) => t.verificado);
const portafolio = landing.portafolio;
const stats = landing.stats;
// Celular del hero: primer proyecto con imagen que no sea propio
const sitioHero = portafolio.find((p) => (p.imagenMovil || p.imagen) && !p.etiqueta);
const antesDespues = landing.antesDespues?.instagram && landing.antesDespues?.web ? landing.antesDespues : null;
const hayCupos = landing.proximoInicio || landing.cuposSemana;

const iniciales = (nombre) => nombre.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

// ── SVG Icons ─────────────────────────────────────────────────────────────
const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);
const IconRedo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 11-3-6.7L21 8"/>
    <path d="M21 3v5h-5"/>
  </svg>
);
const IconKey = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.5" cy="15.5" r="5.5"/>
    <path d="M11.5 11.5L22 1M18 5l3 3M15 8l2 2"/>
  </svg>
);
const IconTick = () => (
  <span className="form-bullet-icon">
    <svg viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const PROBLEMAS = [
  'Un cliente te pide tu página y le mandas el Instagram.',
  'Llevas meses (o años) con la web "pendiente".',
  'Ya le pagaste a alguien que nunca entregó, o te cotizaron $1.000.000 y dos meses.',
  'Probaste Wix un fin de semana y quedó a medias.',
  'Todo tu negocio depende de una cuenta de Instagram que no controlas.',
];

const OFERTA = [
  { t: 'Textos escritos por nosotros.', d: 'Respondes unas preguntas simples y convertimos tus respuestas en textos que venden.' },
  { t: 'Diseño profesional, pensado para el celular.', d: 'Hasta 6 secciones, con botón de WhatsApp y formulario de contacto.' },
  { t: 'Imágenes incluidas.', d: 'Si no tienes fotos, usamos imágenes profesionales acordes a tu rubro.' },
  { t: 'Te ponemos en Google Maps.', d: 'Creamos u optimizamos tu Perfil de Empresa para que te encuentren cerca.' },
  { t: 'Te damos de alta en Google.', d: 'Search Console y SEO básico para que tu web aparezca en búsquedas.' },
  { t: 'Lista para hacer publicidad.', d: 'Pixel de Meta y Google Analytics configurados desde el día uno.' },
  { t: 'Kit de lanzamiento.', d: 'Un post, una historia y un mensaje de WhatsApp listos para anunciar tu web.' },
  { t: '30 días de cambios menores.', d: 'Si algo cambia en tu negocio, lo actualizamos sin costo.' },
  { t: 'Dominio .cl a tu nombre, hosting y SSL sin mensualidades.', d: 'El sitio es tuyo.' },
];

// quien: 'tu' | 'nos'
const LISTA = [
  { l: 'L', resto: 'o cuentas', quien: 'tu', d: 'Respondes un brief guiado de 10 minutos, con preguntas simples. Lo respondes por escrito, por WhatsApp o en una llamada de 15 minutos. Te confirmamos por escrito la fecha y hora en que verás tu web.' },
  { l: 'I', resto: 'nterpretamos', quien: 'nos', d: 'Convertimos tus respuestas en textos que venden.' },
  { l: 'S', resto: 'itio armado', quien: 'nos', d: 'Diseño, imágenes, botón de WhatsApp y formulario funcionando.' },
  { l: 'T', resto: 'ú la revisas', quien: 'tu', d: 'Te llega un link para verla en tu celular y pides los cambios incluidos.' },
  { l: 'A', resto: 'l aire', quien: 'nos', d: 'Apenas la apruebas, la publicamos con tu dominio, Google Maps y el kit de lanzamiento.' },
];

const GARANTIAS = [
  { Icon: IconClock, t: 'Plazo o devolución.', d: 'Si tu web terminada no te llega en la fecha que te dimos, te devolvemos el 100%.' },
  { Icon: IconRedo, t: 'Te encanta o la rehacemos.', d: 'Si al verla terminada no te convence, la rediseñamos desde cero. Si tampoco te gusta, te devolvemos todo.' },
  { Icon: IconKey, t: 'Es tuya.', d: 'Dominio a tu nombre, cero mensualidades y te entregamos los archivos si un día te quieres ir.' },
];

const FAQS = [
  { q: '¿Cómo sé que no van a desaparecer con mi plata?', a: `Pagelab es un servicio de ${RAZON_SOCIAL}${RUT_EMPRESA ? ` (RUT ${RUT_EMPRESA})` : ''}, agencia de marketing digital en ${COMUNA.split(',')[0]}. Pagas por Mercado Pago, emitimos boleta o factura y, si no te mostramos tu web terminada en la fecha comprometida, te devolvemos el 100%.` },
  { q: 'No tengo textos ni fotos, ¿igual se puede?', a: 'Sí, para eso existe el brief. Respondes preguntas simples en 10 minutos (por escrito, por WhatsApp o en una llamada de 15 minutos) y nosotros escribimos todos los textos. Si no tienes fotos, usamos imágenes profesionales acordes a tu rubro.' },
  { q: '¿Desde cuándo corren las 72 horas y cuándo queda publicada?', a: `La landing se entrega terminada en 72 horas corridas (fines de semana incluidos) desde que completas el brief; al terminarlo te confirmamos día y hora. El Sitio Pyme, en ${PLANES.sitio.plazo}. Ese día te mandamos tu web en un link para revisarla, y la publicamos apenas la apruebas.` },
  { q: '¿Y si no me gusta el diseño?', a: 'Tienes cambios incluidos (1 ronda en la landing, 2 en el sitio). Si al verla terminada no te convence, la rediseñamos desde cero una vez; si tampoco te gusta, te devolvemos el 100%. Solo tienes que pedirlo dentro de los 5 días corridos desde que recibes el link.' },
  { q: '¿Hay mensualidades o costos después?', a: `No. El hosting y el certificado SSL no tienen costo mensual. Inscribimos tu dominio .cl a tu nombre y pagamos el primer año; desde el segundo año lo renuevas directo con NIC Chile (aprox. ${formatCLP(DOMINIO_RENOVACION_APROX)} al año). Si ya tienes dominio, lo conectamos sin costo.` },
  { q: '¿Qué pasa si después quiero cambiar algo?', a: `Durante los 30 días siguientes a la publicación hacemos cambios menores sin costo: textos, fotos o datos de contacto. Después, cada ronda de cambios cuesta ${formatCLP(PRECIO_CAMBIOS)}, o puedes optar por una mantención mensual por el mismo valor.` },
  { q: '¿La web me va a traer clientes?', a: 'La web te hace visible y creíble. Para traer más clientes te dejamos listo Google Maps y la publicidad; si quieres, lanzamos tu primera campaña.' },
  { q: '¿La página queda a mi nombre?', a: 'Sí. El dominio se inscribe a tu nombre y, una vez pagado, el sitio es tuyo. Si algún día quieres llevarlo a otro proveedor, te entregamos los archivos sin costo.' },
  { q: '¿Puedo pagar en cuotas?', a: `Sí. Con tarjeta de crédito, hasta ${CUOTAS_SIN_INTERES} cuotas sin interés. También con débito o saldo de Mercado Pago.` },
];

export default function PagelabLanding({ variant = 'home' }) {
  const navigate = useNavigate();
  const v = VARIANTS[variant] ?? VARIANTS.home;
  usePageMeta(v.title, v.description);
  const [openFaq, setOpenFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const heroRef = useRef(null);
  const pricingRef = useRef(null);

  const h1 = v.h1 ?? HEADLINES[landing.heroVariante] ?? HEADLINES.A;

  useEffect(() => { window.scrollTo(0, 0); }, [variant]);

  // Barra fija inferior en móvil: aparece al pasar el hero
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting && e.boundingClientRect.top < 0));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // view_pricing: una vez por sesión
  useEffect(() => {
    const el = pricingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { trackViewPricingOnce(); obs.disconnect(); }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  // "Reservar mi cupo": va al checkout corto (/pagar) y de ahí a Mercado Pago
  const goPay = (plan) => {
    track('select_item', { plan });
    navigate(`/pagar?plan=${plan}`);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const plan = LEAD_PLAN[formData.get('plan')];
    try {
      const res = await fetch(FORMSUBMIT_AJAX_URL, {
        method: 'POST', body: formData, headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        track('generate_lead', { plan });
        setFormSubmitted(true);
      }
    } catch { setFormSubmitted(true); }
  };

  return (
    <div className="landing-page">
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --noir: #121212;
          --charcoal: #2B2B2B;
          --iron: #565656;
          --fog: #848484;
          --silver: #B3B3B3;
          --cloud: #E0E0E0;
          --white: #FFFFFF;
          --accent: #4A90E2;
          --bg-light: #F8F8F8;
          --bg-mid: #F2F2F2;
          --font: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
          font-family: var(--font);
          color: var(--noir);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          letter-spacing: -0.01em;
          background: var(--white);
        }

        /* ── Container más ancho ── */
        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        /* ── Header ── */
        .header {
          padding: 1.125rem 0;
          background: var(--white);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid #F0F0F0;
        }
        .header-inner { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.5rem; font-weight: 700; letter-spacing: -0.03em; text-transform: lowercase; color: var(--noir); }
        .nav { display: flex; gap: 2rem; align-items: center; }
        .nav a { font-size: 0.9375rem; color: var(--iron); text-decoration: none; cursor: pointer; transition: color 0.2s; }
        .nav a:hover { color: var(--noir); }
        .header-actions { display: flex; align-items: center; gap: 2rem; }

        /* ── Buttons ── */
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.875rem 1.75rem; border-radius: 6px; font-weight: 600;
          font-size: 0.9375rem; cursor: pointer; border: none; font-family: var(--font);
          transition: all 0.2s; text-decoration: none; white-space: nowrap;
        }
        .btn-primary { background: var(--noir); color: var(--white); }
        .btn-primary:hover { background: var(--charcoal); transform: translateY(-1px); }
        .btn-secondary { background: transparent; color: var(--noir); border: 2px solid var(--iron); }
        .btn-secondary:hover { border-color: var(--noir); background: var(--bg-light); }

        /* ── Hero ── */
        .hero { padding: 6rem 0 5.5rem; background-color: var(--white); background-size: cover; background-position: center; overflow: hidden; }
        .hero-layout { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 4rem; align-items: center; max-width: 1100px; margin: 0 auto; }
        .hero-content { text-align: left; }
        .hero-hook {
          display: inline-flex; align-items: center;
          background: var(--bg-light); border: 1px solid #E8E8E8;
          padding: 0.3rem 0.875rem; border-radius: 100px;
          font-size: 0.875rem; font-weight: 500; color: var(--noir); margin-bottom: 1.25rem;
        }
        .hero-headline {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 700; line-height: 1.1;
          letter-spacing: -0.04em; margin-bottom: 1.25rem; color: var(--noir);
        }
        .hero-sub { font-size: 1.0625rem; line-height: 1.75; color: var(--iron); margin-bottom: 1.5rem; }
        .hero-checks { list-style: none; display: flex; flex-wrap: wrap; gap: 0.5rem 1.25rem; margin-bottom: 1.5rem; }
        .hero-checks li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9375rem; font-weight: 500; color: var(--noir); }
        .hero-price { font-size: 1rem; color: var(--iron); margin-bottom: 1.5rem; }
        .hero-price strong { color: var(--noir); font-weight: 700; }
        .hero-ctas { display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; margin-bottom: 0.875rem; }
        .cta-note { font-size: 0.8125rem; color: var(--iron); line-height: 1.6; }
        .cta-note svg { vertical-align: -2px; margin-right: 2px; }
        .cta-cupos { font-size: 0.8125rem; color: var(--noir); font-weight: 600; margin-top: 0.25rem; }
        .hero-strip { display: flex; align-items: center; gap: 0.75rem; margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px solid #ECECEC; }
        .hero-strip p { font-size: 0.875rem; font-weight: 600; color: var(--noir); }
        .strip-avatars { display: flex; }
        .strip-avatars .author-avatar { width: 32px; height: 32px; font-size: 0.6875rem; border: 2px solid var(--white); margin-left: -8px; }
        .strip-avatars .author-avatar:first-child { margin-left: 0; }

        /* ── Celular del hero (y antes/después) ── */
        .hero-visual { display: flex; justify-content: center; align-items: flex-end; gap: 1.25rem; }
        .phone {
          position: relative; width: 260px; aspect-ratio: 9 / 19; flex-shrink: 0;
          border: 10px solid var(--noir); border-radius: 40px; overflow: hidden;
          background: var(--white); box-shadow: 0 24px 60px rgba(0,0,0,0.16);
        }
        .phone::before { content: ''; position: absolute; top: 8px; left: 50%; transform: translateX(-50%); width: 34%; height: 18px; border-radius: 100px; background: var(--noir); z-index: 1; }
        .phone img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
        .phone--sm { width: 190px; border-width: 8px; border-radius: 32px; }
        .ba-item { display: flex; flex-direction: column; align-items: center; gap: 0.625rem; }
        .ba-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--fog); }

        /* ── Trust Bar (cifras reales desde config) ── */
        .trust-bar { background: var(--noir); padding: 3rem 0; }
        .trust-grid { display: grid; grid-template-columns: repeat(var(--cols, 4), 1fr); text-align: center; }
        .trust-item { padding: 1rem 1.5rem; border-right: 1px solid rgba(255,255,255,0.07); }
        .trust-item:last-child { border-right: none; }
        .trust-number { font-size: 2.625rem; font-weight: 800; color: var(--white); line-height: 1; margin-bottom: 0.375rem; letter-spacing: -0.04em; }
        .trust-label { font-size: 0.8125rem; color: rgba(255,255,255,0.4); font-weight: 500; }

        /* ── Section base ── */
        .section { padding: 5rem 0; }
        .section-alt { background: var(--bg-light); }
        .section-dark { background: var(--noir); color: var(--white); }
        .section-gray { background: var(--bg-mid); }
        .section-header { text-align: center; margin-bottom: 3rem; }
        .section-eyebrow { font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--fog); margin-bottom: 0.625rem; }
        .section-headline { font-size: clamp(1.625rem, 2.75vw, 2.25rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.03em; margin-bottom: 0.75rem; color: var(--noir); max-width: 760px; margin-left: auto; margin-right: auto; }
        .section-dark .section-headline { color: var(--white); }
        .section-sub { font-size: 1rem; color: var(--iron); max-width: 560px; margin: 0 auto; }
        .section-dark .section-sub { color: var(--silver); }

        /* ── Icon block ── */
        .icon-block {
          width: 44px; height: 44px; background: var(--bg-mid); border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: var(--noir); margin-bottom: 1.25rem; flex-shrink: 0;
        }

        /* ── Problema ── */
        .problem-list { list-style: none; max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: 0.75rem; }
        .problem-item { display: flex; align-items: flex-start; gap: 0.875rem; background: var(--white); border: 1px solid #E8E8E8; border-radius: 10px; padding: 1.125rem 1.25rem; font-size: 1rem; line-height: 1.55; color: var(--charcoal); }
        .problem-mark { flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%; background: var(--bg-mid); color: var(--iron); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; margin-top: 1px; }
        .problem-close { max-width: 720px; margin: 1.75rem auto 0; background: var(--noir); color: var(--white); border-radius: 12px; padding: 1.75rem 2rem; text-align: center; font-size: clamp(1.125rem, 2vw, 1.375rem); font-weight: 700; line-height: 1.4; letter-spacing: -0.02em; }

        /* ── Oferta ── */
        .offer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; max-width: 1100px; margin: 0 auto; }
        .offer-item { display: flex; gap: 0.875rem; align-items: flex-start; padding: 1.5rem; background: var(--white); border: 1px solid #E8E8E8; border-radius: 10px; transition: all 0.2s; }
        .offer-item:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
        .offer-item .form-bullet-icon { width: 22px; height: 22px; }
        .offer-title { font-size: 1rem; font-weight: 700; color: var(--noir); margin-bottom: 0.25rem; line-height: 1.4; }
        .offer-text { font-size: 0.9375rem; line-height: 1.6; color: var(--iron); }
        .offer-anchor { text-align: center; margin-top: 2.5rem; font-size: 1.0625rem; color: var(--iron); }
        .offer-anchor strong { color: var(--noir); }

        /* ── Método LISTA ── */
        .lista-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; max-width: 1180px; margin: 0 auto; }
        .lista-step { position: relative; background: var(--white); border: 1px solid #E8E8E8; border-radius: 10px; padding: 1.5rem 1.25rem; }
        .lista-step.tu { border: 2px solid var(--noir); }
        .lista-letter {
          width: 52px; height: 52px; background: var(--noir); border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem; font-weight: 800; color: var(--white); margin-bottom: 1rem;
        }
        .lista-step.nos .lista-letter { background: var(--bg-mid); color: var(--noir); }
        .lista-who { position: absolute; top: 1.5rem; right: 1.25rem; }
        .lista-title { font-size: 1rem; font-weight: 700; color: var(--noir); margin-bottom: 0.5rem; }
        .lista-title b { font-weight: 800; text-decoration: underline; text-underline-offset: 3px; }
        .lista-desc { font-size: 0.875rem; line-height: 1.6; color: var(--iron); }
        .lista-legend { display: flex; justify-content: center; gap: 1rem; margin-bottom: 1.75rem; font-size: 0.8125rem; color: var(--iron); }
        .lista-legend span { display: inline-flex; align-items: center; gap: 0.375rem; }
        .lista-note { text-align: center; max-width: 620px; margin: 2.25rem auto 0; font-size: 1rem; line-height: 1.7; color: var(--iron); }
        .lista-note strong { color: var(--noir); }

        /* ── Garantías ── */
        .guarantee-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 1000px; margin: 0 auto; }
        .guarantee-card { padding: 2rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; }
        .guarantee-card .icon-block { background: rgba(255,255,255,0.08); color: var(--white); }
        .guarantee-title { font-size: 1.0625rem; font-weight: 700; color: var(--white); margin-bottom: 0.5rem; }
        .guarantee-text { font-size: 0.9375rem; line-height: 1.7; color: var(--silver); }

        /* ── Portfolio ── */
        .portfolio-wrapper { overflow: hidden; padding: 1rem 0; }
        .portfolio-slider { display: flex; gap: 1.5rem; animation: scrollPortfolio 40s linear infinite; width: max-content; }
        .portfolio-slider:hover { animation-play-state: paused; }
        @keyframes scrollPortfolio { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .portfolio-card { background: var(--white); border: 1px solid #E8E8E8; border-radius: 12px; overflow: hidden; min-width: 400px; max-width: 400px; flex-shrink: 0; transition: all 0.3s; }
        .portfolio-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-4px); }
        .portfolio-screenshot { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; }
        .portfolio-screenshot img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
        .portfolio-placeholder { width: 100%; height: 100%; background: var(--noir); display: flex; align-items: center; justify-content: center; color: var(--white); font-weight: 700; font-size: 1.375rem; text-align: center; padding: 2rem; }
        .portfolio-tag { position: absolute; top: 0.75rem; left: 0.75rem; }
        .portfolio-card-content { padding: 1.25rem; }
        .project-live { display: inline-block; margin-top: 0.625rem; font-size: 0.8125rem; font-weight: 600; color: var(--noir); text-decoration: underline; text-underline-offset: 3px; }
        .project-live:hover { color: var(--iron); }
        .project-category { font-size: 0.6875rem; color: var(--fog); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.3rem; font-weight: 600; }
        .project-info h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.375rem; color: var(--noir); }
        .project-description { font-size: 0.875rem; line-height: 1.6; color: var(--iron); }

        /* ── Pricing ── */
        .pricing-section { background: var(--bg-light); }
        /* Filas alineadas entre tarjetas (subgrid): mismo orden para comparar */
        .pricing-cards { display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 1.5rem; max-width: 820px; margin: 0 auto; }
        .pricing-card { background: var(--white); border: 1.5px solid #E0E0E0; border-radius: 12px; padding: 2rem; transition: all 0.2s; display: grid; grid-template-rows: subgrid; grid-row: span 8; align-content: start; }
        .pricing-card:hover { border-color: var(--charcoal); transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.07); }
        .pricing-card.featured { border: 2px solid var(--noir); box-shadow: 0 12px 32px rgba(0,0,0,0.07); }
        .plan-top { min-height: 1.5rem; margin-bottom: 0.75rem; display: flex; gap: 0.375rem; flex-wrap: wrap; align-items: flex-start; }
        .plan-badge { background: var(--noir); color: var(--white); padding: 3px 10px; border-radius: 100px; font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; white-space: nowrap; }
        .plan-badge.soft { background: var(--bg-mid); color: var(--noir); }
        .plan-name { font-size: 1.375rem; font-weight: 700; color: var(--noir); margin-bottom: 0.375rem; }
        .plan-desc { font-size: 0.875rem; color: var(--iron); margin-bottom: 1.5rem; line-height: 1.5; }
        .plan-price { font-size: 2.5rem; font-weight: 700; color: var(--noir); line-height: 1; margin-bottom: 0.375rem; letter-spacing: -0.03em; }
        .plan-price .cur { font-size: 1.25rem; font-weight: 500; color: var(--iron); }
        .plan-price .iva { font-size: 0.75rem; font-weight: 500; color: var(--fog); letter-spacing: 0; margin-left: 0.375rem; }
        .plan-cuotas { font-size: 0.875rem; color: var(--noir); font-weight: 500; margin-bottom: 0.25rem; }
        .plan-period { font-size: 0.8125rem; color: var(--fog); margin-bottom: 1.25rem; }
        .plan-divider { border: none; border-top: 1px solid #F0F0F0; margin-bottom: 1.25rem; }
        .pricing-guarantee { display: flex; gap: 0.5rem; align-items: center; justify-content: center; max-width: 820px; margin: 2rem auto 0; font-size: 0.9375rem; font-weight: 700; color: var(--noir); line-height: 1.4; background: var(--white); border: 1px solid #ECECEC; border-radius: 8px; padding: 0.875rem 1rem; text-align: center; }
        .pricing-guarantee svg { flex-shrink: 0; }
        .plan-pay-note { text-align: center; font-size: 0.8125rem; color: var(--fog); margin-top: 0.875rem; }
        .pricing-help { display: flex; flex-direction: column; align-items: center; gap: 0.875rem; text-align: center; margin-top: 2rem; }
        .pricing-help p { font-size: 1rem; font-weight: 600; color: var(--noir); }
        .features-list { list-style: none; margin-bottom: 1.75rem; }
        .features-list li { padding: 0.3rem 0; padding-left: 1.375rem; position: relative; font-size: 0.875rem; color: var(--iron); line-height: 1.5; }
        .features-list li::before { content: '✓'; position: absolute; left: 0; color: var(--noir); font-weight: 700; font-size: 0.875rem; }

        /* ── Testimonials (solo verificados, sin duplicar) ── */
        .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; max-width: 1100px; margin: 0 auto; }
        .testimonial { background: var(--white); border: 1px solid #E8E8E8; border-radius: 10px; padding: 1.5rem; }
        .testimonial-quote { font-size: 0.9375rem; line-height: 1.7; color: var(--iron); margin-bottom: 1.25rem; }
        .testimonial-author { display: flex; align-items: center; gap: 0.75rem; }
        .author-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--bg-mid); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8125rem; color: var(--iron); flex-shrink: 0; overflow: hidden; }
        .author-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .author-info strong { display: block; font-size: 0.875rem; color: var(--noir); }
        .author-info a { color: inherit; text-decoration: underline; text-underline-offset: 2px; }
        .author-info span { font-size: 0.8125rem; color: var(--fog); }
        .proof-gap { margin-top: 4.5rem; }

        /* ── FAQ ── */
        .faq-list { max-width: 720px; margin: 0 auto; }
        .faq-item { border-bottom: 1px solid #EBEBEB; }
        .faq-question { width: 100%; text-align: left; padding: 1.25rem 0; background: none; border: none; font-family: var(--font); font-weight: 600; font-size: 0.9375rem; color: var(--noir); cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 1rem; transition: color 0.2s; }
        .faq-question:hover { color: var(--iron); }
        .faq-chevron { flex-shrink: 0; width: 18px; height: 18px; transition: transform 0.2s; }
        .faq-chevron.open { transform: rotate(180deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
        .faq-answer.open { max-height: 400px; }
        .faq-answer-content { padding-bottom: 1.25rem; font-size: 0.9375rem; line-height: 1.7; color: var(--iron); }
        .faq-cta { max-width: 720px; margin: 2.5rem auto 0; display: flex; flex-direction: column; align-items: center; gap: 0.875rem; text-align: center; }
        .faq-cta p { font-size: 1rem; font-weight: 600; color: var(--noir); }
        .faq-terms { font-size: 0.875rem; color: var(--iron); text-decoration: underline; text-underline-offset: 3px; cursor: pointer; }
        .faq-terms:hover { color: var(--noir); }

        /* ── CTA Final ── */
        .cta-final-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .cta-final-image img { width: 100%; border-radius: 12px; opacity: 0.88; display: block; }
        .cta-final-headline { font-size: clamp(1.75rem, 2.75vw, 2.5rem); font-weight: 700; line-height: 1.15; letter-spacing: -0.03em; color: var(--white); margin-bottom: 1rem; }
        .cta-final-sub { font-size: 1rem; line-height: 1.75; color: var(--silver); margin-bottom: 1.75rem; }
        .final-ctas { display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; }
        .btn-light { background: var(--white); color: var(--noir); }
        .btn-light:hover { background: var(--bg-mid); transform: translateY(-1px); }
        .wa-btn.wa-on-dark { background: transparent; color: var(--white); border-color: rgba(255,255,255,0.25); }
        .wa-btn.wa-on-dark:hover { border-color: var(--white); background: rgba(255,255,255,0.06); }

        /* ── Form section ── */
        .form-section { background: var(--bg-light); }
        .form-layout { display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: start; max-width: 980px; margin: 0 auto; }
        .form-copy-headline { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.2; color: var(--noir); margin-bottom: 0.75rem; }
        .form-copy-sub { font-size: 0.9375rem; color: var(--iron); margin-bottom: 2rem; line-height: 1.6; }
        .form-copy-bullets { list-style: none; margin-bottom: 2rem; }
        .form-copy-bullets li { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.5rem 0; font-size: 0.9375rem; color: var(--iron); line-height: 1.5; }
        .form-bullet-icon { flex-shrink: 0; width: 20px; height: 20px; background: var(--noir); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
        .form-bullet-icon svg { width: 10px; height: 10px; }
        .brief-form { background: var(--white); border: 1px solid #E8E8E8; border-radius: 12px; padding: 2rem; }
        .form-group { margin-bottom: 1.25rem; }
        .form-group label { display: block; font-size: 0.8125rem; font-weight: 600; color: var(--noir); margin-bottom: 0.375rem; }
        .form-group input, .form-group textarea { width: 100%; padding: 0.6875rem 0.875rem; border: 1.5px solid #E0E0E0; border-radius: 6px; font-size: 0.9375rem; font-family: var(--font); color: var(--noir); background: var(--white); transition: border-color 0.2s; outline: none; }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--noir); }
        .form-group textarea { resize: vertical; }
        .radio-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .radio-group label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9375rem; font-weight: 400; cursor: pointer; }
        .radio-group input[type="radio"] { width: auto; }
        .form-submit { width: 100%; margin-top: 0.25rem; }
        .form-success { text-align: center; padding: 3rem 2rem; background: var(--white); border-radius: 12px; border: 1px solid #E8E8E8; }
        .form-success-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .form-success h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--noir); }
        .form-success p { font-size: 0.9375rem; color: var(--iron); }

        /* ── Footer SEO ── */
        .footer { background: var(--noir); color: var(--silver); padding: 3rem 0 1.5rem; }
        .footer-inner { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; margin-bottom: 2.5rem; }
        .footer-logo { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.03em; text-transform: lowercase; color: var(--white); margin-bottom: 0.875rem; }
        .footer-desc { font-size: 0.875rem; color: var(--silver); line-height: 1.7; max-width: 340px; margin-bottom: 1.25rem; }
        .footer-contact { font-size: 0.8125rem; color: var(--fog); line-height: 1.8; }
        .footer-contact a { color: var(--silver); text-decoration: none; }
        .footer-contact a:hover { color: var(--white); }
        .footer-nav-title { font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--fog); margin-bottom: 1rem; }
        .footer-nav { list-style: none; }
        .footer-nav li { margin-bottom: 0.5rem; }
        .footer-nav a { font-size: 0.875rem; color: var(--silver); text-decoration: none; cursor: pointer; transition: color 0.2s; }
        .footer-nav a:hover { color: var(--white); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .footer-copy { font-size: 0.8125rem; color: var(--fog); }
        .footer-legal { display: flex; gap: 1.5rem; }
        .footer-legal span { font-size: 0.75rem; color: var(--fog); }

        /* ── Animations ── */
        @media (prefers-reduced-motion: no-preference) {
          [data-animate] { opacity: 0; transform: translateY(15px); transition: opacity 0.5s ease, transform 0.5s ease; }
          [data-animate].visible { opacity: 1; transform: translateY(0); }
        }

        /* ── WhatsApp ── */
        .whatsapp-btn { position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px; background: var(--noir); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(0,0,0,0.25); cursor: pointer; transition: all 0.3s; z-index: 1000; text-decoration: none; }
        .whatsapp-btn:hover { transform: scale(1.1); }
        .whatsapp-btn svg { width: 28px; height: 28px; fill: white; }

        /* ── Barra fija inferior (solo móvil) ── */
        .mobile-bar { display: none; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .lista-grid { grid-template-columns: 1fr; max-width: 560px; }
          .lista-step { display: grid; grid-template-columns: 52px 1fr; column-gap: 1rem; padding-right: 6.5rem; }
          .lista-letter { margin-bottom: 0; grid-row: span 2; }
        }
        @media (max-width: 1024px) {
          .form-layout { grid-template-columns: 1fr; gap: 2.5rem; }
          .footer-inner { grid-template-columns: 1fr 1fr; }
          .offer-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .hero-layout { grid-template-columns: 1fr; gap: 3rem; }
          .hero-content { text-align: center; }
          .hero-checks, .hero-ctas, .hero-strip { justify-content: center; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-grid[data-cols="1"] { grid-template-columns: 1fr; }
          .trust-item { border-right: none; }
          .trust-item:nth-child(odd):not(:last-child) { border-right: 1px solid rgba(255,255,255,0.07); }
          .offer-grid { grid-template-columns: 1fr; max-width: 520px; }
          .guarantee-grid { grid-template-columns: 1fr; max-width: 460px; }
          .pricing-cards { grid-template-columns: 1fr; max-width: 420px; }
          .pricing-card + .pricing-card { margin-top: 1.5rem; }
          .footer-inner { grid-template-columns: 1fr; gap: 2rem; }
          .cta-final-layout { grid-template-columns: 1fr; gap: 2.5rem; }
          .cta-final-image { display: none; }
        }
        @media (max-width: 768px) {
          .hero { padding: 3rem 0 3rem; background-size: 100% 100%; }
          .hero-hook { font-size: 0.8125rem; }
          .hero-checks { flex-direction: column; align-items: center; }
          .section { padding: 3.5rem 0; }
          .hero-ctas { flex-direction: column; width: 100%; }
          .hero-ctas .btn, .hero-ctas .wa-btn { width: 100%; }
          .nav { display: none; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .container { padding: 0 1.25rem; }
          .portfolio-card { min-width: 300px; max-width: 300px; }
          .phone { width: 220px; }
          .phone--sm { width: 150px; border-width: 6px; border-radius: 26px; }
          .problem-close { padding: 1.5rem 1.25rem; }
          .lista-step { padding: 1.25rem; grid-template-columns: 44px 1fr; }
          .lista-letter { width: 44px; height: 44px; font-size: 1.25rem; }
          .lista-who { position: static; grid-column: 2; justify-self: start; margin-bottom: 0.375rem; }
          .lista-letter { grid-row: span 3; }
          .final-ctas { flex-direction: column; align-items: stretch; }
          .footer { padding-bottom: calc(1.5rem + 76px + env(safe-area-inset-bottom)); }

          .mobile-bar {
            display: flex; gap: 0.625rem;
            position: fixed; left: 0; right: 0; bottom: 0; z-index: 1000;
            padding: 0.75rem 1.25rem calc(0.75rem + env(safe-area-inset-bottom));
            background: var(--white); border-top: 1px solid #ECECEC;
            box-shadow: 0 -4px 16px rgba(0,0,0,0.06);
            transform: translateY(110%); transition: transform 0.25s ease;
          }
          .mobile-bar.visible { transform: translateY(0); }
          .mobile-bar .wa-btn { flex: 1.4; padding: 0.75rem 1rem; }
          .mobile-bar .btn { flex: 1; padding: 0.75rem 1rem; }
          .whatsapp-btn.hidden-mobile { opacity: 0; pointer-events: none; transform: scale(0.8); }
        }
      `}</style>

      {/* ── Header ── */}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <div className="logo">Pagelab.</div>
            <div className="header-actions">
              <nav className="nav">
                <a onClick={() => scrollToSection('proceso')}>Cómo funciona</a>
                <a onClick={() => scrollToSection('pricing')}>Precios</a>
                <a onClick={() => scrollToSection('faq')}>Preguntas</a>
              </nav>
              <WhatsAppButton origen="header" mensaje={v.waMensaje} compact />
            </div>
          </div>
        </div>
      </header>

      {/* ── 1. Hero ── */}
      <section className="hero" ref={heroRef} style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-hook">¿Te piden tu página y mandas el Instagram?</div>

              <h1 className="hero-headline">{h1}</h1>

              <p className="hero-sub">
                Respondes un brief guiado de 10 minutos (o lo conversamos por teléfono). Escribimos los textos, la diseñamos y te la mostramos en un link. Apenas la apruebas, queda publicada con tu dominio y en Google Maps.
              </p>

              <ul className="hero-checks">
                {['Textos escritos por nosotros', 'Dominio .cl a tu nombre, sin mensualidades', 'Google Maps incluido'].map((c) => (
                  <li key={c}><IconTick />{c}</li>
                ))}
              </ul>

              <p className="hero-price">
                Desde <strong>{formatCLP(PRECIO_LANDING)}</strong> o {textoCuotas(PRECIO_LANDING)}.
              </p>

              <div className="hero-ctas">
                <button className="btn btn-primary" onClick={() => goPay(v.plan)}>Reservar mi cupo →</button>
                <WhatsAppButton origen="hero" mensaje={v.waMensaje} label="Prefiero hablar por WhatsApp" variant="outline" />
              </div>
              <div className="cta-note">
                <IconEscudo size={14} /> Si no te mostramos tu web a tiempo, te devolvemos el 100%.
              </div>
              {hayCupos && (
                <div className="cta-cupos">
                  {[
                    landing.proximoInicio && `Próximo inicio: ${landing.proximoInicio}`,
                    landing.cuposSemana && `Quedan ${landing.cuposSemana} cupos esta semana`,
                  ].filter(Boolean).join(' · ')}
                </div>
              )}

              {landing.pymesConWeb && (
                <div className="hero-strip">
                  {testimoniosVerificados.length > 0 && (
                    <div className="strip-avatars">
                      {testimoniosVerificados.slice(0, 5).map((t) => (
                        <div key={t.nombre} className="author-avatar">{t.foto ? <img src={t.foto} alt={t.nombre} /> : iniciales(t.nombre)}</div>
                      ))}
                    </div>
                  )}
                  <p>{landing.pymesConWeb} pymes ya tienen su web con Pagelab</p>
                </div>
              )}
            </div>

            {/* Antes y después (si está cargado) o celular con un sitio real */}
            {antesDespues ? (
              <div className="hero-visual">
                <div className="ba-item">
                  <div className="phone phone--sm"><img src={antesDespues.instagram} alt={`Instagram de ${antesDespues.negocio || 'un cliente'}`} /></div>
                  <span className="ba-label">Antes</span>
                </div>
                <div className="ba-item">
                  <div className="phone phone--sm"><img src={antesDespues.web} alt={`Web de ${antesDespues.negocio || 'un cliente'} hecha por Pagelab`} /></div>
                  <span className="ba-label">Después</span>
                </div>
              </div>
            ) : sitioHero && (
              <div className="hero-visual">
                <div className="phone"><img src={sitioHero.imagenMovil || sitioHero.imagen} alt={`Sitio de ${sitioHero.nombre} hecho por Pagelab`} /></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Cifras (solo si hay stats reales en config) ── */}
      {stats.length > 0 && (
        <div className="trust-bar">
          <div className="container">
            <div className="trust-grid" data-cols={Math.min(stats.length, 4)} style={{ '--cols': Math.min(stats.length, 4) }}>
              {stats.map((s) => (
                <div key={s.etiqueta} className="trust-item">
                  <div className="trust-number">{s.valor}</div>
                  <div className="trust-label">{s.etiqueta}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── 2. Problema ── */}
      <section className="section section-alt" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">¿Te suena?</h2>
          </div>
          <ul className="problem-list">
            {PROBLEMAS.map((p) => (
              <li key={p} className="problem-item"><span className="problem-mark">✕</span>{p}</li>
            ))}
          </ul>
          <p className="problem-close">No te falta una página. Te falta que alguien la haga por ti, rápido y sin perseguirlo.</p>
        </div>
      </section>

      {/* ── 3. La oferta ── */}
      <section className="section" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Qué recibes</div>
            <h2 className="section-headline">Todo lo que necesitas para verte profesional y aparecer en Google. Sin mover un dedo.</h2>
          </div>
          <div className="offer-grid">
            {OFERTA.map(({ t, d }) => (
              <div key={t} className="offer-item">
                <IconTick />
                <div>
                  <div className="offer-title">{t}</div>
                  <p className="offer-text">{d}</p>
                </div>
              </div>
            ))}
          </div>
          {landing.mostrarAncla && (
            <p className="offer-anchor">Por separado, esto cuesta más de $800.000. En Pagelab: <strong>{formatCLP(PRECIO_LANDING)}</strong>.</p>
          )}
        </div>
      </section>

      {/* ── 4. Cómo funciona: Método LISTA ── */}
      <section className="section section-alt" id="proceso" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Cómo funciona</div>
            <h2 className="section-headline">El Método LISTA</h2>
            <p className="section-sub">Somos rápidos porque tenemos un método, no porque hagamos menos.</p>
          </div>
          <div className="lista-legend">
            <span><span className="plan-badge">Tú</span> lo que haces tú</span>
            <span><span className="plan-badge soft">Nosotros</span> lo que hacemos nosotros</span>
          </div>
          <div className="lista-grid">
            {LISTA.map(({ l, resto, quien, d }) => (
              <div key={l} className={`lista-step ${quien}`}>
                <div className="lista-letter">{l}</div>
                <span className={`lista-who plan-badge${quien === 'nos' ? ' soft' : ''}`}>{quien === 'tu' ? 'Tú' : 'Nosotros'}</span>
                <div className="lista-title"><b>{l}</b>{resto}</div>
                <p className="lista-desc">{d}</p>
              </div>
            ))}
          </div>
          <p className="lista-note"><strong>Si la apruebas a la primera, tu web puede estar en línea en 72 horas.</strong> Desde ahí, el ritmo lo pones tú.</p>
        </div>
      </section>

      {/* ── 5. Garantías ── */}
      <section className="section section-dark" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Garantías</div>
            <h2 className="section-headline">El riesgo es nuestro, no tuyo.</h2>
          </div>
          <div className="guarantee-grid">
            {GARANTIAS.map(({ Icon, t, d }) => (
              <div key={t} className="guarantee-card">
                <div className="icon-block"><Icon /></div>
                <div className="guarantee-title">{t}</div>
                <p className="guarantee-text">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Prueba: portafolio + testimonios verificados ── */}
      {(portafolio.length > 0 || testimoniosVerificados.length > 0) && (
        <section className="section" id="portfolio" data-animate>
          {portafolio.length > 0 && (
            <>
              <div className="container">
                <div className="section-header">
                  <div className="section-eyebrow">Portafolio</div>
                  <h2 className="section-headline">Webs que ya están funcionando</h2>
                </div>
              </div>
              <div className="portfolio-wrapper">
                <div className="portfolio-slider">
                  {[...portafolio, ...portafolio].map((p, i) => (
                    <div key={i} className="portfolio-card" aria-hidden={i >= portafolio.length}>
                      <div className="portfolio-screenshot">
                        {p.imagen
                          ? <img src={p.imagen} alt={p.nombre} />
                          : <div className="portfolio-placeholder">{p.nombre}</div>}
                        {p.etiqueta && <span className="plan-badge soft portfolio-tag">{p.etiqueta}</span>}
                      </div>
                      <div className="portfolio-card-content">
                        <div className="project-category">{p.rubro}</div>
                        <div className="project-info">
                          <h3>{p.nombre}</h3>
                          <p className="project-description">{p.descripcion}</p>
                          {p.url && <a className="project-live" href={p.url} target="_blank" rel="noopener noreferrer">Ver sitio en vivo ↗</a>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {testimoniosVerificados.length > 0 && (
            <div className={`container${portafolio.length > 0 ? ' proof-gap' : ''}`}>
              <div className="section-header">
                <h2 className="section-headline">Lo que dicen nuestros clientes</h2>
              </div>
              <div className="testimonials-grid">
                {testimoniosVerificados.map((t) => (
                  <div key={t.nombre} className="testimonial">
                    <p className="testimonial-quote">"{t.texto}"</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">{t.foto ? <img src={t.foto} alt={t.nombre} /> : iniciales(t.nombre)}</div>
                      <div className="author-info">
                        <strong>{t.nombre}</strong>
                        <span>
                          {t.url ? <a href={t.url} target="_blank" rel="noopener noreferrer">{t.negocio}</a> : t.negocio}
                          {t.rubro && ` · ${t.rubro}`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ── 7. Precios ── */}
      <section className="section pricing-section" id="pricing" ref={pricingRef} data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Precios</div>
            <h2 className="section-headline">Un precio. Sin sorpresas. Sin mensualidades.</h2>
          </div>
          {/* 8 filas por tarjeta, en el mismo orden (ver .pricing-card) */}
          <div className="pricing-cards">
            {Object.values(PLANES).map((p) => (
              <div key={p.id} className={`pricing-card${v.featured === p.id ? ' featured' : ''}`}>
                <div className="plan-top">
                  {p.etiqueta && <span className="plan-badge">{p.etiqueta}</span>}
                  {v.featured === p.id && !p.etiqueta && <span className="plan-badge">Recomendado</span>}
                </div>
                <div className="plan-name">{p.nombre}</div>
                <p className="plan-desc">{p.subtitulo}</p>
                <div className="plan-price">
                  <span className="cur">$</span>{formatCLP(p.precio).slice(1)}<span className="iva">IVA incluido</span>
                </div>
                <div className="plan-cuotas">o {textoCuotas(p.precio)}</div>
                <div className="plan-period">{p.listo}.</div>
                <div>
                  <hr className="plan-divider" />
                  <ul className="features-list">
                    {p.items.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
                <button className="btn btn-primary" onClick={() => goPay(p.id)}>Reservar mi cupo</button>
              </div>
            ))}
          </div>
          <div className="pricing-guarantee"><IconEscudo size={16} />Si no te mostramos tu web terminada en la fecha comprometida, te devolvemos el 100%.</div>
          <div className="plan-pay-note">Pagas a {RAZON_SOCIAL} · Boleta o factura</div>
          <div className="pricing-help">
            <p>¿No sabes cuál? Escríbenos por WhatsApp y te decimos en 5 minutos.</p>
            <WhatsAppButton origen="precios" label="Escríbenos por WhatsApp" />
          </div>
        </div>
      </section>

      {/* ── 8. Preguntas frecuentes ── */}
      <section className="section" id="faq" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Preguntas</div>
            <h2 className="section-headline">Preguntas frecuentes</h2>
          </div>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <svg className={`faq-chevron ${openFaq === i ? 'open' : ''}`} viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                  <div className="faq-answer-content">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-cta">
            <p>¿Otra duda?</p>
            <WhatsAppButton origen="faq" label="Escríbenos por WhatsApp" />
            <a className="faq-terms" onClick={() => navigate('/terminos')}>Lee nuestros Términos y Condiciones</a>
          </div>
        </div>
      </section>

      {/* ── 9. Cierre ── */}
      <section className="section section-dark final-cta" data-animate>
        <div className="container">
          <div className="cta-final-layout">
            <div className="cta-final-image">
              <img src={heroImg} alt="Página web profesional para pymes, terminada en 72 horas — Pagelab" />
            </div>
            <div className="cta-final-content">
              <h2 className="cta-final-headline">El próximo cliente que te pida tu página, mándale un link.</h2>
              <p className="cta-final-sub">Tu web terminada en 72 horas. Textos escritos por nosotros. Dominio a tu nombre. Si no te la mostramos a tiempo, te devolvemos el 100%.</p>
              <div className="final-ctas">
                <button className="btn btn-light" onClick={() => goPay(v.plan)}>Reservar mi cupo →</button>
                <WhatsAppButton origen="cta_final" mensaje={v.waMensaje} variant="light" className="wa-on-dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Formulario de email ── */}
      <section className="section form-section" id="contacto" data-animate>
        <div className="container">
          <div className="form-layout">
            {/* Copy izquierdo */}
            <div className="form-copy">
              <h2 className="form-copy-headline">¿Prefieres escribirnos por email?</h2>
              <p className="form-copy-sub">Déjanos tus datos y te respondemos con la recomendación de plan y el link de pago.</p>
              <ul className="form-copy-bullets">
                {[
                  'Te decimos exactamente qué plan necesitas',
                  'Precio final sin costos ocultos ni letra chica',
                  'Si apruebas, empezamos el mismo día',
                ].map((item, i) => (
                  <li key={i}>
                    <IconTick />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Formulario derecho */}
            <div>
              {formSubmitted ? (
                <div className="form-success">
                  <div className="form-success-icon">✅</div>
                  <h3>¡Solicitud enviada!</h3>
                  <p>Te respondemos con la recomendación de plan y el link de pago.</p>
                </div>
              ) : (
                <form className="brief-form" onSubmit={handleFormSubmit}>
                  <input type="hidden" name="_subject" value="Nueva consulta — Pagelab" />
                  <input type="hidden" name="pagina" value={variant} />
                  <FormExtras />

                  <div className="form-group">
                    <label htmlFor="name">Nombre completo *</label>
                    <input type="text" id="name" name="name" required placeholder="Tu nombre" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required placeholder="tu@email.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">WhatsApp *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+56 9 XXXX XXXX" />
                  </div>
                  <div className="form-group">
                    <label>¿Qué necesitas? *</label>
                    <div className="radio-group">
                      <label><input type="radio" name="plan" value={PLANES.landing.nombre} required /> {PLANES.landing.nombre}</label>
                      <label><input type="radio" name="plan" value={PLANES.sitio.nombre} /> {PLANES.sitio.nombre}</label>
                      <label><input type="radio" name="plan" value="No estoy seguro" /> No estoy seguro</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensaje (opcional)</label>
                    <textarea id="message" name="message" rows="3" placeholder="Cuéntanos brevemente qué necesitas..." />
                  </div>
                  <button type="submit" className="btn btn-primary form-submit">Enviar Solicitud</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer SEO ── */}
      <footer className="footer" itemScope itemType="https://schema.org/Organization">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-logo" itemProp="name">Pagelab.</div>
              <p className="footer-desc" itemProp="description">
                Diseño y desarrollo de páginas web profesionales en Chile. Landing pages, sitios corporativos y portafolios online. Landing en {PLANES.landing.plazo} · Sitio web en {PLANES.sitio.plazo}.
              </p>
              <div className="footer-contact">
                <div>Pagelab es un servicio de {RAZON_SOCIAL} · {COMUNA}{RUT_EMPRESA && ` · RUT ${RUT_EMPRESA}`}</div>
              </div>
            </div>
            <div>
              <div className="footer-nav-title">Servicios</div>
              <ul className="footer-nav">
                <li><a onClick={() => scrollToSection('pricing')}>Landing Pages</a></li>
                <li><a onClick={() => scrollToSection('pricing')}>Sitios Web</a></li>
                {portafolio.length > 0 && <li><a onClick={() => scrollToSection('portfolio')}>Portafolio</a></li>}
                <li><a onClick={() => scrollToSection('pricing')}>Precios</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-nav-title">Información</div>
              <ul className="footer-nav">
                <li><a onClick={() => scrollToSection('proceso')}>Cómo funciona</a></li>
                <li><a onClick={() => scrollToSection('faq')}>Preguntas frecuentes</a></li>
                <li><a onClick={() => scrollToSection('contacto')}>Contacto</a></li>
                <li><a onClick={() => navigate('/terminos')}>Términos y Condiciones</a></li>
                <li><a href={buildWhatsAppLink('footer', null, v.waMensaje)} onClick={() => trackWhatsApp('footer')} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 Pagelab · Páginas web profesionales en Chile · Landing en {PLANES.landing.plazo} · Sitio web en {PLANES.sitio.plazo}</div>
            <div className="footer-legal">
              <span>Diseño web Santiago</span>
              <span>Landing pages Chile</span>
              <span>Sitios web económicos</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WhatsApp flotante (en móvil se reemplaza por la barra al pasar el hero) ── */}
      <a href={buildWhatsAppLink('flotante')} onClick={() => trackWhatsApp('flotante')} target="_blank" rel="noopener noreferrer" className={`whatsapp-btn${pastHero ? ' hidden-mobile' : ''}`} aria-label="Contactar por WhatsApp">
        <WhatsAppIcon size={28} />
      </a>

      {/* ── Barra fija inferior (móvil) ── */}
      <div className={`mobile-bar${pastHero ? ' visible' : ''}`} aria-hidden={!pastHero}>
        <WhatsAppButton origen="barra_movil" mensaje={v.waMensaje} label="WhatsApp" />
        <button className="btn btn-secondary" onClick={() => scrollToSection('pricing')}>Ver precios</button>
      </div>
    </div>
  );
}
