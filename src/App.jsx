import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from './assets/hero.jpg';
import imgKivo from './assets/Kivo.webp';
import imgFloresta from './assets/Floresta la ermita.webp';
import imgAcerca from './assets/Acerca Consultores.webp';
import imgConecta from './assets/Conecta Franquicias.webp';

const FORM_EMAIL = 'silvapignacio@gmail.com';

const DAYS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

function getDeliveryDays() {
  const today = new Date();
  const delivery = new Date();
  delivery.setDate(today.getDate() + 3);
  return { todayDay: DAYS[today.getDay()], deliveryDay: DAYS[delivery.getDay()] };
}

// ── SVG Icons ─────────────────────────────────────────────────────────────
const IconClipboard = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <path d="M9 12h6M9 16h4"/>
  </svg>
);
const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);
const IconCheck = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <path d="M22 4L12 14.01l-3-3"/>
  </svg>
);
const IconRocket = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);
const IconBuilding = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M9 22V12h6v10M3 9h18M9 3v6M15 3v6"/>
  </svg>
);
const IconBriefcase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
  </svg>
);

export default function PagelabLanding() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { todayDay, deliveryDay } = getDeliveryDays();

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST', body: formData, headers: { 'Accept': 'application/json' }
      });
      if (res.ok) setFormSubmitted(true);
    } catch { setFormSubmitted(true); }
  };

  const faqs = [
    { q: '¿Realmente puedo tener mi página en 3 días?', a: 'Sí. Una vez que nos envías tu información comenzamos de inmediato. Plan Landing listo en 48-72 horas, Sitio Web en 3-5 días. Incluye tiempo para ajustes.' },
    { q: '¿Puedo pagar directo o necesito consultar primero?', a: 'Puedes elegir. Si ya sabes qué necesitas, pagas directamente y empezamos hoy. Si tienes dudas, completa el formulario y te respondemos en menos de 2 horas.' },
    { q: '¿Qué pasa después de llenar el formulario?', a: 'Te respondemos por email en menos de 2 horas con un plan personalizado y link de pago. Una vez pagas, te enviamos un formulario de brief donde nos cuentas sobre tu negocio y envías fotos/logos.' },
    { q: '¿Puedo ver el sitio antes de que quede público?', a: 'Sí. Te enviamos un preview para que lo revises. Tienes rondas de cambios incluidas. Solo publicamos cuando estés 100% conforme.' },
    { q: '¿Puedo ver ejemplos antes de decidir?', a: 'Sí, revisa la sección "Trabajos más recientes" con sitios reales que hemos creado.' },
    { q: '¿Qué pasa si no me gusta el resultado?', a: 'Revisas el preview antes de publicar y pedís los cambios incluidos. Solo publicamos cuando estés conforme.' },
    { q: '¿Necesito conocimientos técnicos?', a: 'Para nada. Solo necesitas tus textos, imágenes y logo. Nosotros nos encargamos del diseño, programación, publicación y seguridad.' },
    { q: '¿Tengo que pagar hosting o dominio aparte?', a: 'El hosting está incluido sin costo mensual. El dominio lo puedes traer si ya tienes uno, o te ayudamos a comprarlo (aprox $15-20k/año). Sin costos ocultos.' },
  ];

  const portfolioItems = [
    { img: imgKivo, objPos: 'top', cat: 'Marketing Digital', title: 'KIVO', desc: 'Plataforma de gestión de Google Ads con IA. Landing enfocada en conversión.' },
    { img: imgFloresta, objPos: 'top', cat: 'Eventos & Turismo', title: 'Floresta La Ermita', desc: 'Centro de eventos en la cordillera. Diseño elegante con galería y cotización.' },
    { img: imgAcerca, objPos: 'center', cat: 'Consultoría', title: 'Acerca Consultores', desc: 'Cotización online para consultoría empresarial. Formularios inteligentes.' },
    { bg: 'linear-gradient(135deg, #d32f2f, #f57c00)', label: 'CONTIGO PAN\nY CEBOLLA', cat: 'Gastronomía', title: 'Contigo Pan y Cebolla', desc: 'Emprendimiento gastronómico. Menú digital y reservas online.' },
    { img: imgConecta, objPos: 'center', cat: 'Negocios', title: 'Conecta Franquicias', desc: 'Marketplace de franquicias. Buscador avanzado y sistema de matching.' },
  ];

  const testimonials = [
    { quote: '"Después de gastar $1.5M en una agencia que nunca entregó, Pagelab me hizo la página en 4 días. Funciona, se ve bien, y no tuve que perseguir a nadie."', init: 'NC', name: 'Nicolás Chocaír', role: 'Acerca Consultores' },
    { quote: '"Llevaba 3 semanas peleando con Wix. Les pagué un viernes, el martes ya estaba publicado. La única vez que algo salió como prometieron."', init: 'NR', name: 'Nicolás Rodríguez', role: 'Contigo Pan y Cebolla' },
    { quote: '"Necesitaba una página para una campaña urgente. Todos me dijeron imposible. Pagelab lo hizo en 4 días. Salvaron mi lanzamiento."', init: 'BC', name: 'Bruno Calderón', role: 'KIVO' },
    { quote: '"Proceso súper simple. Llené el formulario, me respondieron en 1 hora, y 3 días después tenía mi sitio listo. Exactamente lo que prometieron."', init: 'SO', name: 'Sebastián Ortíz', role: 'Conecta Franquicias' },
    { quote: '"Sin jerga técnica, sin reuniones. Me explicaron todo en simple y entregaron exactamente lo que necesitaba a tiempo."', init: 'RS', name: 'Rodrigo Silva', role: 'Chef & Emprendedor' },
  ];

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
          --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
          font-family: var(--font);
          color: var(--noir);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
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
        .nav-cta { background: var(--noir); color: var(--white) !important; padding: 0.5rem 1.125rem; border-radius: 6px; font-weight: 500; }
        .nav-cta:hover { background: var(--charcoal); }

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
        .hero { padding: 5rem 0 4rem; background: var(--white); overflow: hidden; }
        .hero-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .hero-content { text-align: left; }
        .hero-headline {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 700; line-height: 1.1;
          letter-spacing: -0.03em; margin-bottom: 1.25rem; color: var(--noir);
        }
        .hero-sub { font-size: 1.0625rem; line-height: 1.75; color: var(--iron); margin-bottom: 1.75rem; }
        .hero-sub strong { color: var(--noir); font-weight: 600; }
        .hero-proof {
          display: flex; align-items: center; gap: 0.625rem;
          margin-bottom: 2rem; flex-wrap: wrap;
        }
        .proof-badge {
          display: inline-flex; align-items: center; gap: 0.375rem;
          background: var(--bg-light); border: 1px solid #E8E8E8;
          padding: 0.3rem 0.75rem; border-radius: 100px;
          font-size: 0.8125rem; font-weight: 500; color: var(--noir);
        }
        .hero-ctas { display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; margin-bottom: 0.625rem; }
        .cta-note { font-size: 0.8125rem; color: var(--fog); margin-bottom: 1.25rem; }
        .hero-link { font-size: 0.875rem; color: var(--iron); text-decoration: underline; cursor: pointer; background: none; border: none; font-family: var(--font); }
        .hero-link:hover { color: var(--noir); }

        @keyframes heroSlideIn { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes heroFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .hero-image-wrapper { animation: heroSlideIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both; }
        .hero-image-wrapper img {
          width: 100%; height: auto; border-radius: 16px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.12);
          animation: heroFloat 5s ease-in-out 1.1s infinite; display: block;
        }

        /* ── Trust Bar ── */
        .trust-bar { background: var(--bg-light); border-top: 1px solid #EBEBEB; border-bottom: 1px solid #EBEBEB; padding: 2.25rem 0; }
        .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; text-align: center; }
        .trust-number { font-size: 1.875rem; font-weight: 700; color: var(--noir); line-height: 1; margin-bottom: 0.25rem; }
        .trust-label { font-size: 0.8125rem; color: var(--iron); }

        /* ── Section base ── */
        .section { padding: 5rem 0; }
        .section-alt { background: var(--bg-light); }
        .section-dark { background: var(--noir); color: var(--white); }
        .section-gray { background: var(--bg-mid); }
        .section-header { text-align: center; margin-bottom: 3rem; }
        .section-eyebrow { font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--fog); margin-bottom: 0.625rem; }
        .section-headline { font-size: clamp(1.625rem, 2.75vw, 2.25rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; margin-bottom: 0.75rem; color: var(--noir); }
        .section-dark .section-headline { color: var(--white); }
        .section-sub { font-size: 1rem; color: var(--iron); max-width: 560px; margin: 0 auto; }
        .section-dark .section-sub { color: var(--silver); }

        /* ── Icon block ── */
        .icon-block {
          width: 44px; height: 44px; background: var(--bg-mid); border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: var(--noir); margin-bottom: 1.25rem; flex-shrink: 0;
        }

        /* ── Por qué funciona ── */
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 1000px; margin: 0 auto; }
        .why-card { padding: 2rem; background: var(--white); border: 1px solid #E8E8E8; border-radius: 10px; transition: all 0.2s; }
        .why-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
        .why-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.625rem; color: var(--noir); }
        .why-text { font-size: 0.9375rem; line-height: 1.7; color: var(--iron); }

        /* ── Proceso ── */
        .process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; max-width: 900px; margin: 0 auto; }
        .process-step { text-align: center; }
        .step-num {
          width: 48px; height: 48px; background: var(--noir); border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.125rem; font-weight: 700; color: var(--white); margin: 0 auto 1.25rem;
        }
        .step-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--noir); }
        .step-desc { font-size: 0.9375rem; line-height: 1.6; color: var(--iron); margin-bottom: 0.375rem; }
        .step-time { font-size: 0.8125rem; color: var(--fog); }

        /* ── ¿Cómo prefieres empezar? ── */
        .start-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; max-width: 860px; margin: 0 auto; }
        .start-card { padding: 2rem; border: 2px solid #E8E8E8; border-radius: 10px; background: var(--white); transition: all 0.2s; }
        .start-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.07); }
        /* .start-card.recommended removed */
        .start-badge {
          display: inline-block; background: var(--noir); color: var(--white);
          padding: 3px 10px; border-radius: 100px; font-size: 0.6875rem;
          font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 1rem;
        }
        .start-title { font-size: 1.1875rem; font-weight: 700; margin-bottom: 0.625rem; color: var(--noir); }
        .start-desc { font-size: 0.9375rem; line-height: 1.7; color: var(--iron); margin-bottom: 1.25rem; }
        .start-benefits { list-style: none; margin-bottom: 1.5rem; }
        .start-benefits li { font-size: 0.875rem; color: var(--iron); padding: 0.3rem 0; }
        .start-timing { font-size: 0.75rem; color: var(--fog); margin-top: 0.75rem; font-weight: 500; }

        /* ── Para quién ── */
        .cases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 1000px; margin: 0 auto; }
        .case-card { padding: 2rem; background: var(--white); border: 1px solid #E8E8E8; border-radius: 10px; transition: all 0.2s; }
        .case-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.06); transform: translateY(-3px); }
        .case-title { font-size: 1.0625rem; font-weight: 700; margin-bottom: 0.625rem; color: var(--noir); }
        .case-desc { font-size: 0.9375rem; line-height: 1.7; color: var(--iron); margin-bottom: 1.5rem; }
        .case-ctas { display: flex; flex-direction: column; gap: 0.625rem; }
        .case-ctas .btn { width: 100%; }

        /* ── Portfolio ── */
        .portfolio-wrapper { overflow: hidden; padding: 1rem 0; }
        .portfolio-slider { display: flex; gap: 1.5rem; animation: scrollPortfolio 40s linear infinite; width: max-content; }
        .portfolio-slider:hover { animation-play-state: paused; }
        @keyframes scrollPortfolio { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .portfolio-card { background: var(--white); border: 1px solid #E8E8E8; border-radius: 12px; overflow: hidden; min-width: 400px; max-width: 400px; flex-shrink: 0; transition: all 0.3s; }
        .portfolio-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-4px); }
        .portfolio-screenshot { width: 100%; aspect-ratio: 16/9; overflow: hidden; }
        .portfolio-card-content { padding: 1.25rem; }
        .project-category { font-size: 0.6875rem; color: var(--fog); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.3rem; font-weight: 600; }
        .project-info h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.375rem; color: var(--noir); }
        .project-description { font-size: 0.875rem; line-height: 1.6; color: var(--iron); }

        /* ── Pricing ── */
        .pricing-section { background: var(--bg-light); }
        .pricing-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; max-width: 800px; margin: 0 auto; }
        .pricing-card { background: var(--white); border: 1.5px solid #E0E0E0; border-radius: 12px; padding: 2rem; transition: all 0.2s; }
        .pricing-card:hover { border-color: var(--charcoal); transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.07); }
        .plan-label { font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--fog); margin-bottom: 0.75rem; }
        .plan-name { font-size: 1.375rem; font-weight: 700; color: var(--noir); margin-bottom: 0.375rem; }
        .plan-desc { font-size: 0.875rem; color: var(--iron); margin-bottom: 1.5rem; line-height: 1.5; }
        .plan-price { font-size: 2.5rem; font-weight: 700; color: var(--noir); line-height: 1; margin-bottom: 0.25rem; }
        .plan-price span { font-size: 1.25rem; font-weight: 500; color: var(--iron); }
        .plan-period { font-size: 0.8125rem; color: var(--fog); margin-bottom: 1.5rem; }
        .plan-divider { border: none; border-top: 1px solid #F0F0F0; margin-bottom: 1.5rem; }
        .features-list { list-style: none; margin-bottom: 1.75rem; }
        .features-list li { padding: 0.3rem 0; padding-left: 1.375rem; position: relative; font-size: 0.875rem; color: var(--iron); line-height: 1.5; }
        .features-list li::before { content: '✓'; position: absolute; left: 0; color: var(--noir); font-weight: 700; font-size: 0.875rem; }
        .plan-ctas { display: flex; flex-direction: column; gap: 0.625rem; }
        .plan-ctas .btn { width: 100%; }
        .plan-link { display: block; text-align: center; font-size: 0.8125rem; color: var(--fog); text-decoration: underline; cursor: pointer; background: none; border: none; font-family: var(--font); margin-top: 0.375rem; }
        .plan-link:hover { color: var(--iron); }

        /* ── Testimonials ── */
        .testimonials-wrapper { overflow: hidden; padding: 1rem 0; }
        .testimonials { display: flex; gap: 1.5rem; animation: scrollTestimonials 30s linear infinite; width: max-content; }
        .testimonials:hover { animation-play-state: paused; }
        @keyframes scrollTestimonials { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .testimonial { background: var(--white); border: 1px solid #E8E8E8; border-radius: 10px; padding: 1.5rem; min-width: 360px; max-width: 360px; flex-shrink: 0; }
        .testimonial-quote { font-size: 0.9375rem; line-height: 1.7; color: var(--iron); margin-bottom: 1.25rem; }
        .testimonial-author { display: flex; align-items: center; gap: 0.75rem; }
        .author-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--bg-mid); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8125rem; color: var(--iron); flex-shrink: 0; }
        .author-info strong { display: block; font-size: 0.875rem; color: var(--noir); }
        .author-info span { font-size: 0.8125rem; color: var(--fog); }

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

        /* ── CTA Final ── */
        .final-cta {}
        .cta-final-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .cta-final-image img { width: 100%; border-radius: 12px; opacity: 0.88; display: block; }
        .cta-final-content {}
        .cta-final-headline { font-size: clamp(1.75rem, 2.75vw, 2.5rem); font-weight: 700; line-height: 1.15; letter-spacing: -0.02em; color: var(--white); margin-bottom: 1rem; }
        .cta-final-sub { font-size: 1rem; line-height: 1.75; color: var(--silver); margin-bottom: 1.75rem; }
        .final-ctas { display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; }
        .cta-fine-print { font-size: 0.8125rem; color: rgba(255,255,255,0.4); margin-top: 1.25rem; }

        /* ── Form section ── */
        .form-section { background: var(--bg-light); }
        .form-layout { display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: start; max-width: 980px; margin: 0 auto; }
        .form-copy {}
        .form-copy-headline { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 700; letter-spacing: -0.02em; line-height: 1.2; color: var(--noir); margin-bottom: 0.75rem; }
        .form-copy-sub { font-size: 0.9375rem; color: var(--iron); margin-bottom: 2rem; line-height: 1.6; }
        .form-copy-bullets { list-style: none; margin-bottom: 2rem; }
        .form-copy-bullets li { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.5rem 0; font-size: 0.9375rem; color: var(--iron); line-height: 1.5; }
        .form-bullet-icon { flex-shrink: 0; width: 20px; height: 20px; background: var(--noir); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
        .form-bullet-icon svg { width: 10px; height: 10px; }
        .form-trust { font-size: 0.8125rem; color: var(--fog); padding-top: 1.25rem; border-top: 1px solid #E8E8E8; }
        .form-trust strong { color: var(--iron); }
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
        .form-note { text-align: center; font-size: 0.8125rem; color: var(--fog); margin-top: 0.625rem; }
        .form-success { text-align: center; padding: 3rem 2rem; background: var(--white); border-radius: 12px; border: 1px solid #E8E8E8; }
        .form-success-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .form-success h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--noir); }
        .form-success p { font-size: 0.9375rem; color: var(--iron); }

        /* ── Footer SEO ── */
        .footer { background: var(--noir); color: var(--silver); padding: 3rem 0 1.5rem; }
        .footer-inner { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; margin-bottom: 2.5rem; }
        .footer-brand {}
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
        .whatsapp-btn { position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px; background: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(37,211,102,0.4); cursor: pointer; transition: all 0.3s; z-index: 1000; text-decoration: none; }
        .whatsapp-btn:hover { transform: scale(1.1); }
        .whatsapp-btn svg { width: 28px; height: 28px; fill: white; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .form-layout { grid-template-columns: 1fr; gap: 2.5rem; }
          .footer-inner { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 900px) {
          .hero-layout { grid-template-columns: 1fr; }
          .hero-content { text-align: center; }
          .hero-ctas { justify-content: center; }
          .hero-proof { justify-content: center; }
          .hero-image-wrapper { max-width: 520px; margin: 0 auto; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: 1fr; max-width: 440px; }
          .process-grid { grid-template-columns: 1fr; max-width: 380px; }
          .start-grid { grid-template-columns: 1fr; max-width: 460px; }
          .cases-grid { grid-template-columns: 1fr; max-width: 440px; }
          .pricing-cards { grid-template-columns: 1fr; max-width: 420px; }
          .footer-inner { grid-template-columns: 1fr; gap: 2rem; }
          .cta-final-layout { grid-template-columns: 1fr; gap: 2.5rem; }
          .cta-final-image { display: none; }
        }
        @media (max-width: 768px) {
          .hero { padding: 3.5rem 0 2.5rem; }
          .section { padding: 3.5rem 0; }
          .hero-ctas { flex-direction: column; width: 100%; }
          .hero-ctas .btn { width: 100%; }
          .nav { display: none; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .container { padding: 0 1.25rem; }
        }
      `}</style>

      {/* ── Header ── */}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <div className="logo">Pagelab.</div>
            <nav className="nav">
              <a onClick={() => scrollToSection('proceso')}>Proceso</a>
              <a onClick={() => scrollToSection('pricing')}>Precios</a>
              <a onClick={() => scrollToSection('faq')}>FAQ</a>
              <a className="nav-cta" onClick={() => navigate('/brief')}>Comenzar</a>
            </nav>
          </div>
        </div>
      </header>

      {/* ── 1. Hero ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <h1 className="hero-headline">Tu página web profesional lista en 3 días</h1>

              <p className="hero-sub">
                Envías tu contenido hoy <strong>{todayDay}</strong>. Recibes tu sitio
                funcionando el <strong>{deliveryDay}</strong>.<br />
                Sin complicaciones, sin reuniones interminables, sin esperas.
              </p>

              <div className="hero-proof">
                <span className="proof-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  4.9/5 rating
                </span>
                <span className="proof-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                  47 sitios entregados
                </span>
                <span className="proof-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  2.8 días promedio
                </span>
              </div>

              <div className="hero-ctas">
                <button className="btn btn-primary" onClick={() => navigate('/brief')}>Comienza Ahora</button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('pricing')}>Ver Planes</button>
              </div>
              <div className="cta-note">Te respondemos en menos de 2 horas</div>
              <button className="hero-link" onClick={() => scrollToSection('portfolio')}>Ver ejemplos →</button>
            </div>

            <div className="hero-image-wrapper">
              <img src={heroImg} alt="Ejemplos de páginas web y sitios corporativos creados por Pagelab" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Trust Bar ── */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-grid">
            <div><div className="trust-number">47</div><div className="trust-label">sitios entregados</div></div>
            <div><div className="trust-number">2.8 días</div><div className="trust-label">promedio de entrega</div></div>
            <div><div className="trust-number">4.9 / 5</div><div className="trust-label">rating de clientes</div></div>
            <div><div className="trust-number">100%</div><div className="trust-label">sitios activos</div></div>
          </div>
        </div>
      </div>

      {/* ── 3. Por qué Pagelab funciona ── */}
      <section className="section" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Por qué funciona</div>
            <h2 className="section-headline">Por qué Pagelab funciona</h2>
          </div>
          <div className="why-grid">
            {[
              { Icon: IconClipboard, title: 'Proceso claro', text: 'Sabes exactamente qué va a pasar. Completas un formulario simple, nosotros creamos tu sitio, lo apruebas y queda en vivo. Sin pasos confusos, sin sorpresas.' },
              { Icon: IconClock, title: 'Tiempo real', text: '3 días es un compromiso, no una estimación. Lunes envías el brief, jueves tu sitio está funcionando. Puedes planificar tu lanzamiento con certeza.' },
              { Icon: IconCheck, title: 'Todo resuelto', text: 'Diseño, código, dominio, hosting. Todo incluido en el precio. No tienes que contratar nada más ni aprender nada técnico. Solo envías tu contenido.' },
            ].map(({ Icon, title, text }, i) => (
              <div key={i} className="why-card">
                <div className="icon-block"><Icon /></div>
                <div className="why-title">{title}</div>
                <p className="why-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Cómo funciona ── */}
      <section className="section section-alt" id="proceso" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">El proceso</div>
            <h2 className="section-headline">Cómo funciona</h2>
            <p className="section-sub">3 pasos. Menos de una semana. Tu página publicada.</p>
          </div>
          <div className="process-grid">
            {[
              { n: '01', title: 'Envías tu contenido', desc: 'Llenas un formulario simple: qué hace tu negocio, qué quieres mostrar, fotos si las tienes. 10 minutos máximo.', time: '⏱ 10 minutos' },
              { n: '02', title: 'Nosotros creamos tu sitio', desc: 'En 48-72 horas diseñamos, programamos y configuramos todo. Te enviamos un preview para que lo revises.', time: '⏱ 48-72 horas' },
              { n: '03', title: 'Tu sitio está en vivo', desc: 'Apruebas el preview, nosotros lo subimos con tu dominio. Quedas con tu sitio funcionando y accesos a todo.', time: '⏱ Total: 3-5 días' },
            ].map(({ n, title, desc, time }, i) => (
              <div key={i} className="process-step">
                <div className="step-num">{n}</div>
                <div className="step-title">{title}</div>
                <p className="step-desc">{desc}</p>
                <div className="step-time">{time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ¿Cómo prefieres empezar? ── */}
      <section className="section" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">¿Cómo prefieres empezar?</h2>
            <p className="section-sub">Puedes comenzar de 2 formas. Elige la que te haga más sentido:</p>
          </div>
          <div className="start-grid">
            <div className="start-card">
              <div className="start-title">Cuéntanos qué necesitas</div>
              <p className="start-desc">Completas un formulario rápido con la info de tu negocio. Te respondemos en menos de 2 horas con tu plan personalizado y link de pago.</p>
              <ul className="start-benefits">
                <li>✓ Aclaramos todas tus dudas antes</li>
                <li>✓ Te ayudamos a elegir el plan correcto</li>
                <li>✓ Confirmamos que tenemos todo lo necesario</li>
              </ul>
              <button className="btn btn-primary" onClick={() => navigate('/brief')}>Comienza Ahora</button>
              <div className="start-timing">Respuesta en menos de 2 horas</div>
            </div>
            <div className="start-card">
              <div className="start-title">Ya sé lo que quiero</div>
              <p className="start-desc">Tienes claro si necesitas landing page o sitio web. Pagas ahora, llenas el brief, y empezamos inmediatamente.</p>
              <ul className="start-benefits">
                <li>✓ Empezamos hoy mismo</li>
                <li>✓ Sin esperar respuesta</li>
                <li>✓ Proceso 100% online</li>
              </ul>
              <button className="btn btn-secondary" onClick={() => scrollToSection('pricing')}>Ver Planes</button>
              <div className="start-timing">Inicio inmediato</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Para quién es esto ── */}
      <section className="section section-gray" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Casos de uso</div>
            <h2 className="section-headline">¿Para quién es Pagelab?</h2>
          </div>
          <div className="cases-grid">
            {[
              { Icon: IconRocket, title: '¿Validando una idea?', desc: 'Tu landing page lista en 3 días por $200.000. Lanza rápido, valida con usuarios reales, itera después.' },
              { Icon: IconBuilding, title: '¿Negocio sin web?', desc: 'Sitio corporativo completo por $400.000. Muestra tus servicios, genera confianza, recibe consultas. Sin depender de Instagram o Facebook.' },
              { Icon: IconBriefcase, title: '¿Portfolio profesional?', desc: 'Tu portafolio online en 3 días por $200.000. Destaca tu trabajo, cierra más clientes, deja de mandar PDFs.' },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="case-card">
                <div className="icon-block"><Icon /></div>
                <div className="case-title">{title}</div>
                <p className="case-desc">{desc}</p>
                <div className="case-ctas">
                  <button className="btn btn-primary" onClick={() => navigate('/brief')}>Comienza Ahora</button>
                  <button className="btn btn-secondary" onClick={() => scrollToSection('pricing')}>Ver Planes</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Portfolio ── */}
      <section className="section section-alt" id="portfolio" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Portafolio</div>
            <h2 className="section-headline">Trabajos más recientes</h2>
            <p className="section-sub">Páginas reales que generan resultados reales para negocios como el tuyo</p>
          </div>
        </div>
        <div className="portfolio-wrapper">
          <div className="portfolio-slider">
            {[...portfolioItems, ...portfolioItems].map((p, i) => (
              <div key={i} className="portfolio-card">
                <div className="portfolio-screenshot">
                  {p.img
                    ? <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.objPos || 'top' }} />
                    : <div style={{ width: '100%', height: '100%', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.375rem', textAlign: 'center', padding: '2rem', whiteSpace: 'pre-line' }}>{p.label}</div>
                  }
                </div>
                <div className="portfolio-card-content">
                  <div className="project-category">{p.cat}</div>
                  <div className="project-info">
                    <h3>{p.title}</h3>
                    <p className="project-description">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Pricing ── */}
      <section className="section pricing-section" id="pricing" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Precios</div>
            <h2 className="section-headline">Precios honestos. Sin sorpresas.</h2>
            <p className="section-sub">Dos opciones. Precio único. Sin letra chica.</p>
          </div>
          <div className="pricing-cards">
            {/* Landing Page */}
            <div className="pricing-card">
              <div className="plan-label">Plan</div>
              <div className="plan-name">Landing Page</div>
              <p className="plan-desc">Perfecto para validar tu idea o lanzar una campaña específica</p>
              <div className="plan-price"><span>$</span>200.000</div>
              <div className="plan-period">Pago único · Entrega en 3 días</div>
              <hr className="plan-divider" />
              <ul className="features-list">
                <li>1 página completa</li>
                <li>Hasta 6 secciones</li>
                <li>Diseño profesional</li>
                <li>SEO optimizado</li>
                <li>Dominio incluido 1er año</li>
                <li>Hosting gratis para siempre</li>
                <li>Certificado de seguridad incluido</li>
                <li>1 ronda de cambios</li>
                <li>Entrega en 3 días</li>
              </ul>
              <div className="plan-ctas">
                <button className="btn btn-primary" onClick={() => navigate('/brief?plan=landing')}>Comienza Ahora</button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('contacto')}>Consultar primero</button>
                <button className="plan-link" onClick={() => scrollToSection('contacto')}>Tengo preguntas →</button>
              </div>
            </div>

            {/* Sitio Web */}
            <div className="pricing-card">
              <div className="plan-label">Plan</div>
              <div className="plan-name">Sitio Web</div>
              <p className="plan-desc">Para negocios que necesitan explicar su propuesta y convertir visitantes</p>
              <div className="plan-price"><span>$</span>400.000</div>
              <div className="plan-period">Pago único · Entrega en 5 días</div>
              <hr className="plan-divider" />
              <ul className="features-list">
                <li>Hasta 5 páginas</li>
                <li>Diseño profesional</li>
                <li>SEO optimizado</li>
                <li>Dominio incluido 1er año</li>
                <li>Hosting gratis para siempre</li>
                <li>Certificado de seguridad incluido</li>
                <li>Formulario de contacto</li>
                <li>2 rondas de cambios</li>
                <li>Entrega en 5 días</li>
              </ul>
              <div className="plan-ctas">
                <button className="btn btn-primary" onClick={() => navigate('/brief?plan=sitio')}>Comienza Ahora</button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('contacto')}>Consultar primero</button>
                <button className="plan-link" onClick={() => scrollToSection('contacto')}>Tengo preguntas →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Testimonials ── */}
      <section className="section" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">Lo que dicen nuestros clientes</h2>
          </div>
        </div>
        <div className="testimonials-wrapper">
          <div className="testimonials">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="testimonial">
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.init}</div>
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ── */}
      <section className="section section-alt" id="faq" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">Las preguntas que todos hacen</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
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
        </div>
      </section>

      {/* ── 11. CTA Final ── */}
      <section className="section section-dark final-cta" data-animate>
        <div className="container">
          <div className="cta-final-layout">
            <div className="cta-final-image">
              <img src={heroImg} alt="Páginas web profesionales listas en 3 días — Pagelab" />
            </div>
            <div className="cta-final-content">
              <h2 className="cta-final-headline">Tu web lista antes de que termine la semana</h2>
              <p className="cta-final-sub">Más de 47 negocios ya dejaron de depender de Instagram para conseguir clientes. Landing page desde $200.000, sitio web desde $400.000. Entrega en 3 días, hosting incluido para siempre.</p>
              <div className="final-ctas">
                <button className="btn" style={{ background: 'var(--white)', color: 'var(--noir)', fontWeight: 600 }} onClick={() => navigate('/brief')}>
                  Comienza Ahora
                </button>
                <button className="btn" style={{ background: 'transparent', color: 'var(--white)', border: '2px solid rgba(255,255,255,0.25)' }} onClick={() => scrollToSection('pricing')}>
                  Ver precios
                </button>
              </div>
              <p className="cta-fine-print">Respondemos en menos de 2 horas · Sin compromiso</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. Formulario ── */}
      <section className="section form-section" id="contacto" data-animate>
        <div className="container">
          <div className="form-layout">
            {/* Copy izquierdo */}
            <div className="form-copy">
              <h2 className="form-copy-headline">Escríbenos y empezamos hoy</h2>
              <p className="form-copy-sub">Cuéntanos qué necesitas. Te respondemos en menos de 2 horas con toda la información para comenzar.</p>
              <ul className="form-copy-bullets">
                {[
                  'Te decimos exactamente qué plan necesitas',
                  'Precio final sin costos ocultos ni letra chica',
                  'Si apruebas, empezamos el mismo día',
                  'Respuesta garantizada en menos de 2 horas',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="form-bullet-icon">
                      <svg viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="form-trust">
                <strong>47 negocios</strong> ya confiaron en Pagelab para tener su presencia online. Tiempo promedio de respuesta: <strong>38 minutos</strong>.
              </div>
            </div>

            {/* Formulario derecho */}
            <div>
              {formSubmitted ? (
                <div className="form-success">
                  <div className="form-success-icon">✅</div>
                  <h3>¡Solicitud enviada!</h3>
                  <p>Te respondemos en menos de 2 horas con tu plan personalizado y link de pago.</p>
                </div>
              ) : (
                <form className="brief-form" onSubmit={handleFormSubmit}>
                  <input type="hidden" name="_subject" value="Nueva consulta — Pagelab" />
                  <input type="hidden" name="_captcha" value="false" />

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
                      <label><input type="radio" name="plan" value="Landing Page" required /> Landing Page</label>
                      <label><input type="radio" name="plan" value="Sitio Web" /> Sitio Web</label>
                      <label><input type="radio" name="plan" value="No estoy seguro" /> No estoy seguro</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="business">¿Qué hace tu negocio/proyecto? *</label>
                    <textarea id="business" name="business" rows="3" required placeholder="Cuéntanos brevemente..." />
                  </div>
                  <div className="form-group">
                    <label>¿Tienes contenido listo? (textos, fotos, logo) *</label>
                    <div className="radio-group">
                      <label><input type="radio" name="content" value="Sí, todo listo" required /> Sí, todo listo</label>
                      <label><input type="radio" name="content" value="Tengo algo, falta completar" /> Tengo algo, falta completar</label>
                      <label><input type="radio" name="content" value="No tengo nada aún" /> No tengo nada aún</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="comments">Comentarios adicionales (opcional)</label>
                    <textarea id="comments" name="comments" rows="2" placeholder="Algún detalle extra..." />
                  </div>
                  <button type="submit" className="btn btn-primary form-submit">Enviar Solicitud</button>
                  <p className="form-note">Te respondemos en menos de 2 horas</p>
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
                Diseño y desarrollo de páginas web profesionales en Chile. Landing pages, sitios corporativos y portafolios online. Entrega garantizada en 3 días hábiles.
              </p>
              <div className="footer-contact">
                <div>Santiago, Chile</div>
              </div>
            </div>
            <div>
              <div className="footer-nav-title">Servicios</div>
              <ul className="footer-nav">
                <li><a onClick={() => scrollToSection('pricing')}>Landing Pages</a></li>
                <li><a onClick={() => scrollToSection('pricing')}>Sitios Web</a></li>
                <li><a onClick={() => scrollToSection('portfolio')}>Portafolio</a></li>
                <li><a onClick={() => scrollToSection('pricing')}>Precios</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-nav-title">Información</div>
              <ul className="footer-nav">
                <li><a onClick={() => scrollToSection('proceso')}>Cómo funciona</a></li>
                <li><a onClick={() => scrollToSection('faq')}>Preguntas frecuentes</a></li>
                <li><a onClick={() => scrollToSection('contacto')}>Contacto</a></li>
                <li><a href={`https://wa.me/56900000000`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 Pagelab · Páginas web profesionales en Chile · Entrega en 3 días</div>
            <div className="footer-legal">
              <span>Diseño web Santiago</span>
              <span>Landing pages Chile</span>
              <span>Sitios web económicos</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WhatsApp ── */}
      <a href="https://wa.me/56900000000" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" aria-label="Contactar por WhatsApp">
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
