import { useState, useEffect } from 'react';
import heroImg from './assets/hero.jpg';

const FORM_EMAIL = 'silvapignacio@gmail.com';

export default function PagelabLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    }
  };

  const faqs = [
    {
      q: '¿Realmente puedo tener mi página en 3 días?',
      a: 'Sí. Una vez que nos envías tu información (textos, imágenes, colores), comenzamos de inmediato. Plan Landing listo en 48-72 horas, Plan Sitio Web en 3-5 días. Incluye tiempo para ajustes.'
    },
    {
      q: '¿Puedo pagar directo o necesito consultar primero?',
      a: 'Puedes elegir. Si ya sabes que necesitas una landing page o sitio web, puedes pagar directamente y empezamos hoy. Si tienes dudas sobre cuál plan elegir o qué incluir, mejor completa el formulario y te respondemos en menos de 2 horas.'
    },
    {
      q: '¿Qué pasa después de llenar el formulario?',
      a: 'Te respondemos por email en menos de 2 horas con un plan personalizado y link de pago. Una vez pagas, te enviamos un formulario de brief detallado donde nos cuentas sobre tu negocio y envías fotos/logos.'
    },
    {
      q: '¿Puedo ver el sitio antes de que quede público?',
      a: 'Sí. Te enviamos un preview del sitio para que lo revises. Tienes 1 ronda de cambios incluida. Una vez apruebes, lo subimos con tu dominio.'
    },
    {
      q: '¿Puedo ver ejemplos antes de decidir?',
      a: 'Sí, revisa la sección "Nuestros Trabajos" más arriba con sitios reales que hemos creado.'
    },
    {
      q: '¿Qué pasa si no me gusta el resultado?',
      a: 'Ambos planes incluyen 1 ronda de ajustes. Revisas el preview antes de publicar y pedís los cambios que necesites. Solo publicamos cuando estés 100% conforme.'
    },
    {
      q: '¿Necesito conocimientos técnicos?',
      a: 'Para nada. Solo necesitas enviarnos tus textos (o ideas para que los redactemos), imágenes y logo. Nosotros nos encargamos de todo lo técnico: diseño, programación, publicación y seguridad.'
    },
    {
      q: '¿Tengo que pagar hosting o dominio aparte?',
      a: 'El hosting está incluido sin costo mensual. El dominio (tu-negocio.cl) lo puedes traer si ya tienes uno, o te ayudamos a comprarlo (cuesta aprox $15-20k/año). No hay costos ocultos.'
    }
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
          --bg-mid: #F5F5F5;
          --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
          font-family: var(--font);
          color: var(--noir);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          background: var(--white);
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* ── Header ── */
        .header {
          padding: 1.25rem 0;
          background: var(--white);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid #F0F0F0;
        }
        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          text-transform: lowercase;
          color: var(--noir);
        }
        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav a {
          font-size: 0.9375rem;
          color: var(--iron);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s;
        }
        .nav a:hover { color: var(--noir); }
        .nav-cta {
          background: var(--noir);
          color: var(--white) !important;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 500;
        }
        .nav-cta:hover { background: var(--charcoal); }

        /* ── Buttons ── */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9375rem;
          cursor: pointer;
          border: none;
          font-family: var(--font);
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-primary {
          background: var(--noir);
          color: var(--white);
        }
        .btn-primary:hover {
          background: var(--charcoal);
          transform: translateY(-1px);
        }
        .btn-secondary {
          background: transparent;
          color: var(--noir);
          border: 2px solid var(--iron);
        }
        .btn-secondary:hover {
          border-color: var(--noir);
          background: var(--bg-light);
        }

        /* ── Hero ── */
        .hero {
          padding: 5rem 0 4rem;
          background: var(--white);
          overflow: hidden;
        }
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .hero-content { text-align: left; }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 1rem;
          background: var(--bg-mid);
          border-radius: 100px;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--iron);
          margin-bottom: 1.5rem;
        }
        .hero-headline {
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
          color: var(--noir);
        }
        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.125rem);
          line-height: 1.7;
          color: var(--iron);
          margin-bottom: 1.75rem;
        }
        .hero-proof {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          font-size: 0.875rem;
          color: var(--iron);
          flex-wrap: wrap;
        }
        .hero-proof span { white-space: nowrap; }
        .hero-proof .sep { color: var(--cloud); }
        .hero-ctas {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }
        .cta-note {
          font-size: 0.8125rem;
          color: var(--fog);
          margin-bottom: 1.25rem;
        }
        .hero-link {
          font-size: 0.875rem;
          color: var(--iron);
          text-decoration: underline;
          cursor: pointer;
          background: none;
          border: none;
          font-family: var(--font);
        }
        .hero-link:hover { color: var(--noir); }

        @keyframes heroSlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        .hero-image-wrapper {
          animation: heroSlideIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
        }
        .hero-image-wrapper img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.12);
          animation: heroFloat 5s ease-in-out 1.1s infinite;
          display: block;
        }

        /* ── Trust Bar ── */
        .trust-bar {
          background: var(--bg-light);
          border-top: 1px solid #ECECEC;
          border-bottom: 1px solid #ECECEC;
          padding: 2.5rem 0;
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }
        .trust-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--noir);
          line-height: 1;
          margin-bottom: 0.375rem;
        }
        .trust-label {
          font-size: 0.875rem;
          color: var(--iron);
        }

        /* ── Section base ── */
        .section { padding: 5rem 0; }
        .section-alt { background: var(--bg-light); }
        .section-dark { background: var(--noir); color: var(--white); }
        .section-gray { background: var(--bg-mid); }
        .section-header { text-align: center; margin-bottom: 3rem; }
        .section-eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--fog);
          margin-bottom: 0.75rem;
        }
        .section-headline {
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          color: var(--noir);
        }
        .section-dark .section-headline { color: var(--white); }
        .section-sub {
          font-size: 1.0625rem;
          color: var(--iron);
          max-width: 560px;
          margin: 0 auto;
        }
        .section-dark .section-sub { color: var(--silver); }

        /* ── Por qué Pagelab funciona ── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 960px;
          margin: 0 auto;
        }
        .why-card {
          padding: 2rem;
          background: var(--white);
          border: 1px solid #ECECEC;
          border-radius: 10px;
          transition: all 0.2s;
        }
        .why-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }
        .why-icon {
          width: 44px;
          height: 44px;
          background: var(--bg-mid);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .why-title {
          font-size: 1.0625rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--noir);
        }
        .why-text {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--iron);
        }

        /* ── Diferenciadores ── */
        .diff-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 960px;
          margin: 0 auto;
        }
        .diff-card {
          padding: 2rem;
          border-radius: 10px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          transition: all 0.2s;
        }
        .diff-card:hover { background: rgba(255,255,255,0.1); }
        .diff-icon {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }
        .diff-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--white);
        }
        .diff-text {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--silver);
        }

        /* ── Proceso ── */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .process-step { text-align: center; }
        .step-num {
          width: 48px;
          height: 48px;
          background: var(--noir);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--white);
          margin: 0 auto 1.25rem;
        }
        .step-title {
          font-size: 1.0625rem;
          font-weight: 700;
          margin-bottom: 0.625rem;
          color: var(--noir);
        }
        .step-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--iron);
          margin-bottom: 0.5rem;
        }
        .step-time { font-size: 0.8125rem; color: var(--fog); }

        /* ── ¿Cómo prefieres empezar? ── */
        .start-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 880px;
          margin: 0 auto;
        }
        .start-card {
          padding: 2rem;
          border: 2px solid #ECECEC;
          border-radius: 10px;
          background: var(--white);
          position: relative;
          transition: all 0.2s;
        }
        .start-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
        }
        .start-card.recommended { border-color: var(--accent); }
        .start-badge {
          display: inline-block;
          background: var(--accent);
          color: var(--white);
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1rem;
        }
        .start-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--noir);
        }
        .start-desc {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--iron);
          margin-bottom: 1.5rem;
        }
        .start-benefits {
          list-style: none;
          margin-bottom: 1.75rem;
        }
        .start-benefits li {
          font-size: 0.875rem;
          color: var(--iron);
          padding: 0.375rem 0;
        }
        .start-timing {
          font-size: 0.75rem;
          color: var(--fog);
          margin-top: 0.75rem;
          font-weight: 500;
        }

        /* ── Para quién es esto ── */
        .cases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 960px;
          margin: 0 auto;
        }
        .case-card {
          padding: 2rem;
          background: var(--white);
          border: 1px solid #ECECEC;
          border-radius: 10px;
          transition: all 0.2s;
        }
        .case-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          transform: translateY(-3px);
        }
        .case-icon { font-size: 2rem; margin-bottom: 1rem; }
        .case-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--noir);
        }
        .case-desc {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--iron);
          margin-bottom: 1.5rem;
        }
        .case-ctas {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        .case-ctas .btn { width: 100%; }

        /* ── Portfolio ── */
        .portfolio-wrapper {
          overflow: hidden;
          padding: 1rem 0;
        }
        .portfolio-slider {
          display: flex;
          gap: 1.5rem;
          animation: scrollPortfolio 40s linear infinite;
          width: max-content;
        }
        .portfolio-slider:hover { animation-play-state: paused; }
        @keyframes scrollPortfolio {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .portfolio-card {
          background: var(--white);
          border: 1px solid #ECECEC;
          border-radius: 12px;
          overflow: hidden;
          min-width: 400px;
          max-width: 400px;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        .portfolio-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }
        .portfolio-screenshot {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
        }
        .portfolio-card-content { padding: 1.25rem; }
        .project-category {
          font-size: 0.75rem;
          color: var(--fog);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.375rem;
          font-weight: 600;
        }
        .project-info h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--noir);
        }
        .project-description {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--iron);
        }

        /* ── Pricing ── */
        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 780px;
          margin: 0 auto;
        }
        .pricing-card {
          background: var(--white);
          border: 2px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.2s;
        }
        .pricing-card:hover {
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-4px);
        }
        .pricing-card.featured { border-color: var(--accent); }
        .plan-badge {
          display: inline-block;
          padding: 3px 10px;
          background: rgba(255,255,255,0.1);
          border-radius: 100px;
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--silver);
          margin-bottom: 1rem;
        }
        .pricing-card.featured .plan-badge {
          background: var(--accent);
          color: var(--white);
        }
        .plan-name {
          font-size: 1.375rem;
          font-weight: 700;
          margin-bottom: 0.375rem;
          color: var(--white);
        }
        .plan-desc {
          font-size: 0.875rem;
          color: var(--silver);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .plan-price {
          font-size: 2.75rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .plan-price span {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--silver);
        }
        .plan-period {
          font-size: 0.875rem;
          color: var(--fog);
          margin-bottom: 1.5rem;
        }
        .features-list {
          list-style: none;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 1.5rem;
          margin-bottom: 1.75rem;
        }
        .features-list li {
          padding: 0.375rem 0;
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.875rem;
          color: var(--silver);
          line-height: 1.5;
        }
        .features-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 700;
        }
        .plan-ctas { display: flex; flex-direction: column; gap: 0.625rem; }
        .plan-ctas .btn { width: 100%; }
        .plan-ctas .btn-secondary {
          border-color: rgba(255,255,255,0.2);
          color: var(--white);
        }
        .plan-ctas .btn-secondary:hover {
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.05);
        }
        .plan-link {
          display: block;
          text-align: center;
          font-size: 0.8125rem;
          color: var(--fog);
          text-decoration: underline;
          cursor: pointer;
          background: none;
          border: none;
          font-family: var(--font);
          margin-top: 0.5rem;
        }
        .plan-link:hover { color: var(--silver); }

        /* ── Testimonials ── */
        .testimonials-wrapper {
          overflow: hidden;
          padding: 1rem 0;
        }
        .testimonials {
          display: flex;
          gap: 1.5rem;
          animation: scrollTestimonials 30s linear infinite;
          width: max-content;
        }
        .testimonials:hover { animation-play-state: paused; }
        @keyframes scrollTestimonials {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonial {
          background: var(--white);
          border: 1px solid #ECECEC;
          border-radius: 10px;
          padding: 1.5rem;
          min-width: 360px;
          max-width: 360px;
          flex-shrink: 0;
        }
        .testimonial-quote {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--iron);
          margin-bottom: 1.25rem;
        }
        .testimonial-author { display: flex; align-items: center; gap: 0.75rem; }
        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-mid);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.875rem;
          color: var(--iron);
          flex-shrink: 0;
        }
        .author-info strong { display: block; font-size: 0.875rem; color: var(--noir); }
        .author-info span { font-size: 0.8125rem; color: var(--fog); }

        /* ── FAQ ── */
        .faq-list { max-width: 720px; margin: 0 auto; }
        .faq-item { border-bottom: 1px solid #ECECEC; }
        .faq-question {
          width: 100%;
          text-align: left;
          padding: 1.25rem 0;
          background: none;
          border: none;
          font-family: var(--font);
          font-weight: 600;
          font-size: 1rem;
          color: var(--noir);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          transition: color 0.2s;
        }
        .faq-question:hover { color: var(--iron); }
        .faq-chevron {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          transition: transform 0.2s;
        }
        .faq-chevron.open { transform: rotate(180deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
        .faq-answer.open { max-height: 400px; }
        .faq-answer-content {
          padding-bottom: 1.25rem;
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--iron);
        }

        /* ── Contact Form ── */
        .form-section { background: var(--bg-light); }
        .form-wrapper {
          max-width: 680px;
          margin: 0 auto;
        }
        .form-success {
          text-align: center;
          padding: 3rem 2rem;
          background: var(--white);
          border-radius: 12px;
          border: 1px solid #ECECEC;
        }
        .form-success-icon { font-size: 3rem; margin-bottom: 1rem; }
        .form-success h3 {
          font-size: 1.375rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--noir);
        }
        .form-success p { color: var(--iron); }
        .brief-form {
          background: var(--white);
          border: 1px solid #ECECEC;
          border-radius: 12px;
          padding: 2.5rem;
        }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--noir);
          margin-bottom: 0.5rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid #ECECEC;
          border-radius: 6px;
          font-size: 0.9375rem;
          font-family: var(--font);
          color: var(--noir);
          background: var(--white);
          transition: border-color 0.2s;
          outline: none;
        }
        .form-group input:focus,
        .form-group textarea:focus { border-color: var(--accent); }
        .form-group textarea { resize: vertical; }
        .radio-group { display: flex; flex-direction: column; gap: 0.625rem; }
        .radio-group label {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-weight: 400;
          cursor: pointer;
        }
        .radio-group input[type="radio"] { width: auto; }
        .form-submit { width: 100%; margin-top: 0.5rem; }
        .form-note {
          text-align: center;
          font-size: 0.8125rem;
          color: var(--fog);
          margin-top: 0.75rem;
        }

        /* ── CTA Final ── */
        .final-cta { text-align: center; }
        .final-ctas {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        /* ── Footer ── */
        .footer {
          background: var(--noir);
          color: var(--silver);
          padding: 2.5rem 0 1.5rem;
          text-align: center;
        }
        .footer-stats {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer-stat { font-size: 0.875rem; }
        .footer-text { font-size: 0.8125rem; color: var(--fog); }

        /* ── Animations ── */
        @media (prefers-reduced-motion: no-preference) {
          [data-animate] {
            opacity: 0;
            transform: translateY(15px);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }
          [data-animate].visible {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── WhatsApp ── */
        .whatsapp-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(37,211,102,0.4);
          cursor: pointer;
          transition: all 0.3s;
          z-index: 1000;
          text-decoration: none;
        }
        .whatsapp-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(37,211,102,0.5);
        }
        .whatsapp-btn svg { width: 32px; height: 32px; fill: white; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-layout { grid-template-columns: 1fr; }
          .hero-content { text-align: center; }
          .hero-ctas { justify-content: center; }
          .hero-proof { justify-content: center; }
          .hero-image-wrapper { max-width: 520px; margin: 0 auto; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: 1fr; max-width: 480px; }
          .diff-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: 1fr; max-width: 400px; }
          .start-grid { grid-template-columns: 1fr; max-width: 480px; }
          .cases-grid { grid-template-columns: 1fr; max-width: 480px; }
          .pricing-cards { grid-template-columns: 1fr; max-width: 440px; }
        }

        @media (max-width: 768px) {
          .hero { padding: 4rem 0 3rem; }
          .section { padding: 3.5rem 0; }
          .hero-ctas { flex-direction: column; width: 100%; }
          .hero-ctas .btn { width: 100%; }
          .nav { display: none; }
          .footer-stats { flex-direction: column; gap: 1rem; }
          .brief-form { padding: 1.5rem; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
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
              <a className="nav-cta" onClick={() => scrollToSection('contacto')}>Comenzar</a>
            </nav>
          </div>
        </div>
      </header>

      {/* ── 1. Hero ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-badge">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L8.545 5.13L13 5.545L9.5 8.635L10.545 13L7 10.635L3.455 13L4.5 8.635L1 5.545L5.455 5.13L7 1Z" fill="currentColor"/>
                </svg>
                Entrega en 48-72 horas · Sin costos ocultos
              </div>

              <h1 className="hero-headline">
                Tu página web profesional lista en 3 días
              </h1>

              <p className="hero-sub">
                Envías tu contenido hoy. Recibes tu sitio funcionando en 72 horas.<br />
                Sin complicaciones, sin reuniones interminables, sin esperas.
              </p>

              <div className="hero-proof">
                <span>✓ 47 sitios entregados</span>
                <span className="sep">|</span>
                <span>✓ 4.9/5 rating</span>
                <span className="sep">|</span>
                <span>✓ 2.8 días promedio</span>
              </div>

              <div className="hero-ctas">
                <button className="btn btn-primary" onClick={() => scrollToSection('contacto')}>
                  Comienza Ahora
                </button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('pricing')}>
                  Ver Planes
                </button>
              </div>
              <div className="cta-note">Te respondemos en menos de 2 horas</div>

              <button className="hero-link" onClick={() => scrollToSection('portfolio')}>
                Ver ejemplos →
              </button>
            </div>

            <div className="hero-image-wrapper">
              <img src={heroImg} alt="Ejemplos de páginas web creadas por Pagelab" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Trust Bar ── */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-grid">
            <div>
              <div className="trust-number">47</div>
              <div className="trust-label">sitios entregados</div>
            </div>
            <div>
              <div className="trust-number">2.8 días</div>
              <div className="trust-label">promedio de entrega</div>
            </div>
            <div>
              <div className="trust-number">4.9/5 ★</div>
              <div className="trust-label">rating de clientes</div>
            </div>
            <div>
              <div className="trust-number">100%</div>
              <div className="trust-label">sitios activos</div>
            </div>
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
            <div className="why-card">
              <div className="why-icon">📋</div>
              <div className="why-title">Proceso claro</div>
              <p className="why-text">
                Sabes exactamente qué va a pasar. Completas un formulario simple, nosotros
                creamos tu sitio, lo apruebas y queda en vivo. Sin pasos confusos, sin sorpresas.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <div className="why-title">Tiempo real</div>
              <p className="why-text">
                3 días es un compromiso, no una estimación. Lunes envías el brief, jueves tu
                sitio está funcionando. Puedes planificar tu lanzamiento con certeza.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">✅</div>
              <div className="why-title">Todo resuelto</div>
              <p className="why-text">
                Diseño, código, dominio, hosting. Todo incluido en el precio. No tienes que
                contratar nada más ni aprender nada técnico. Solo envías tu contenido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Los 3 Diferenciadores ── */}
      <section className="section section-dark" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">Así de simple debería ser siempre</h2>
          </div>
          <div className="diff-grid">
            <div className="diff-card">
              <div className="diff-icon">⚡</div>
              <div className="diff-title">3 días, no 3 semanas</div>
              <p className="diff-text">
                Lunes envías el brief. Jueves tu sitio está en vivo. Sin reuniones,
                sin idas y vueltas, sin esperas.
              </p>
            </div>
            <div className="diff-card">
              <div className="diff-icon">💰</div>
              <div className="diff-title">$200k, no $2 millones</div>
              <p className="diff-text">
                Landing page completa por $200.000. Sitio web hasta 5 páginas por $400.000.
                Sin costos ocultos, sin letra chica.
              </p>
            </div>
            <div className="diff-card">
              <div className="diff-icon">🎯</div>
              <div className="diff-title">Todo incluido, cero jerga</div>
              <p className="diff-text">
                Diseño, código, dominio, hosting, deploy. Todo resuelto. Tú solo envías tu
                contenido y nosotros entregamos tu sitio funcionando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Cómo Funciona ── */}
      <section className="section section-alt" id="proceso" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">El proceso</div>
            <h2 className="section-headline">Cómo funciona</h2>
            <p className="section-sub">3 pasos. Menos de una semana. Tu página publicada.</p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-title">Envías tu contenido</div>
              <p className="step-desc">
                Llenas un formulario simple: qué hace tu negocio, qué quieres mostrar,
                fotos si las tienes. 10 minutos máximo.
              </p>
              <div className="step-time">⏱ 10 minutos</div>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-title">Nosotros creamos tu sitio</div>
              <p className="step-desc">
                En 48-72 horas diseñamos, programamos y configuramos todo.
                Te enviamos un preview para que lo revises.
              </p>
              <div className="step-time">⏱ 48-72 horas</div>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-title">Tu sitio está en vivo</div>
              <p className="step-desc">
                Apruebas el preview, nosotros lo subimos con tu dominio.
                Quedas con tu sitio funcionando y accesos a todo.
              </p>
              <div className="step-time">⏱ Total: 3-5 días</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. ¿Cómo prefieres empezar? ── */}
      <section className="section" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">¿Cómo prefieres empezar?</h2>
            <p className="section-sub">Puedes comenzar de 2 formas. Elige la que te haga más sentido:</p>
          </div>
          <div className="start-grid">
            <div className="start-card recommended">
              <div className="start-badge">Más común</div>
              <div className="start-title">Cuéntanos qué necesitas</div>
              <p className="start-desc">
                Completas un formulario rápido con la info de tu negocio. Te respondemos en
                menos de 2 horas con tu plan personalizado y link de pago.
              </p>
              <ul className="start-benefits">
                <li>✓ Aclaramos todas tus dudas antes</li>
                <li>✓ Te ayudamos a elegir el plan correcto</li>
                <li>✓ Confirmamos que tenemos todo lo necesario</li>
              </ul>
              <button className="btn btn-primary" onClick={() => scrollToSection('contacto')}>
                Comienza Ahora
              </button>
              <div className="start-timing">Respuesta en menos de 2 horas</div>
            </div>
            <div className="start-card">
              <div className="start-title">Ya sé lo que quiero</div>
              <p className="start-desc">
                Tienes claro si necesitas landing page o sitio web. Pagas ahora, llenas el
                brief, y empezamos inmediatamente.
              </p>
              <ul className="start-benefits">
                <li>✓ Empezamos hoy mismo</li>
                <li>✓ Sin esperar respuesta</li>
                <li>✓ Proceso 100% online</li>
              </ul>
              <button className="btn btn-secondary" onClick={() => scrollToSection('pricing')}>
                Ver Planes
              </button>
              <div className="start-timing">Inicio inmediato</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Para quién es esto ── */}
      <section className="section section-gray" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Casos de uso</div>
            <h2 className="section-headline">¿Para quién es Pagelab?</h2>
          </div>
          <div className="cases-grid">
            <div className="case-card">
              <div className="case-icon">🚀</div>
              <div className="case-title">¿Validando una idea?</div>
              <p className="case-desc">
                Tu landing page lista en 3 días por $200k. Lanza rápido, valida con
                usuarios reales, itera después.
              </p>
              <div className="case-ctas">
                <button className="btn btn-primary" onClick={() => scrollToSection('contacto')}>Comienza Ahora</button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('pricing')}>Ver Planes</button>
              </div>
            </div>
            <div className="case-card">
              <div className="case-icon">🏢</div>
              <div className="case-title">¿Negocio sin web?</div>
              <p className="case-desc">
                Sitio corporativo completo por $400k. Muestra tus servicios, genera confianza,
                recibe consultas. Sin depender de Instagram o Facebook.
              </p>
              <div className="case-ctas">
                <button className="btn btn-primary" onClick={() => scrollToSection('contacto')}>Comienza Ahora</button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('pricing')}>Ver Planes</button>
              </div>
            </div>
            <div className="case-card">
              <div className="case-icon">💼</div>
              <div className="case-title">¿Portfolio profesional?</div>
              <p className="case-desc">
                Tu portafolio online en 3 días por $200k. Destaca tu trabajo, cierra más
                clientes, deja de mandar PDFs.
              </p>
              <div className="case-ctas">
                <button className="btn btn-primary" onClick={() => scrollToSection('contacto')}>Comienza Ahora</button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('pricing')}>Ver Planes</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Portfolio ── */}
      <section className="section section-alt" id="portfolio" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Portafolio</div>
            <h2 className="section-headline">Nuestros Trabajos</h2>
            <p className="section-sub">Páginas reales que generan resultados reales</p>
          </div>
        </div>
        <div className="portfolio-wrapper">
          <div className="portfolio-slider">
            {[
              { bg: 'linear-gradient(135deg, #0273ef 0%, #0056b3 100%)', label: 'KIVO', cat: 'Marketing Digital', title: 'KIVO', desc: 'Plataforma de gestión de Google Ads con IA. Landing enfocada en conversión con planes, testimonios y FAQ interactivo.' },
              { bg: 'linear-gradient(180deg, #2d5016 0%, #4a7c2a 100%)', label: 'FLORESTA\nLA ERMITA', cat: 'Eventos & Turismo', title: 'Floresta La Ermita', desc: 'Centro de eventos en la cordillera. Diseño elegante con galería, formularios de cotización y experiencia inmersiva.' },
              { bg: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)', label: 'ACERCA\nCONSULTORES', cat: 'Consultoría', title: 'Acerca Consultores', desc: 'Sistema de cotización online para consultoría empresarial. Formularios inteligentes y cálculo automático.' },
              { bg: 'linear-gradient(135deg, #d32f2f 0%, #f57c00 100%)', label: 'CONTIGO PAN\nY CEBOLLA', cat: 'Gastronomía', title: 'Contigo Pan y Cebolla', desc: 'Sitio para emprendimiento gastronómico. Menú digital, reservas online y galería de platos.' },
              { bg: 'linear-gradient(135deg, #00695c 0%, #00897b 100%)', label: 'CONECTA\nFRANQUICIAS', cat: 'Negocios', title: 'Conecta Franquicias', desc: 'Marketplace de franquicias. Buscador avanzado, fichas de negocios y sistema de matching.' },
            ].flatMap((p, i) => [p, { ...p, key: `dup-${i}` }]).map((p, i) => (
              <div className="portfolio-card" key={i}>
                <div className="portfolio-screenshot">
                  <div style={{ width: '100%', height: '100%', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.5rem', textAlign: 'center', padding: '2rem', whiteSpace: 'pre-line' }}>
                    {p.label}
                  </div>
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

      {/* ── 9. Pricing ── */}
      <section className="section section-dark" id="pricing" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">Precios honestos. Sin sorpresas.</h2>
            <p className="section-sub">Dos opciones. Sin trampas. Sin letra chica.</p>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="plan-badge">Landing Page</div>
              <div className="plan-name">Landing Page</div>
              <p className="plan-desc">Perfecto para validar tu idea o lanzar una campaña</p>
              <div className="plan-price"><span>$</span>200.000</div>
              <div className="plan-period">Pago único · Entrega en 3 días</div>
              <ul className="features-list">
                <li>1 página completa</li>
                <li>Diseño profesional</li>
                <li>Código optimizado</li>
                <li>Dominio incluido 1er año</li>
                <li>Hosting gratis para siempre</li>
                <li>Deploy automático</li>
                <li>SSL/HTTPS incluido</li>
                <li>1 ronda de cambios</li>
                <li>Entrega en 3 días</li>
              </ul>
              <div className="plan-ctas">
                <button className="btn btn-primary" onClick={() => scrollToSection('contacto')}>Comienza Ahora</button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('contacto')}>Ver Planes</button>
                <button className="plan-link" onClick={() => scrollToSection('contacto')}>Tengo preguntas →</button>
              </div>
            </div>
            <div className="pricing-card featured">
              <div className="plan-badge">Más popular</div>
              <div className="plan-name">Sitio Web</div>
              <p className="plan-desc">Para negocios que necesitan mostrar todo lo que ofrecen</p>
              <div className="plan-price"><span>$</span>400.000</div>
              <div className="plan-period">Pago único · Entrega en 5 días</div>
              <ul className="features-list">
                <li>Hasta 5 páginas</li>
                <li>Diseño profesional</li>
                <li>Código optimizado</li>
                <li>Dominio incluido 1er año</li>
                <li>Hosting gratis para siempre</li>
                <li>Deploy automático</li>
                <li>SSL/HTTPS incluido</li>
                <li>Formulario de contacto</li>
                <li>1 ronda de cambios</li>
                <li>Entrega en 5 días</li>
              </ul>
              <div className="plan-ctas">
                <button className="btn btn-primary" onClick={() => scrollToSection('contacto')}>Comienza Ahora</button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('contacto')}>Ver Planes</button>
                <button className="plan-link" onClick={() => scrollToSection('contacto')}>Tengo preguntas →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Testimonials ── */}
      <section className="section" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">Lo que dicen nuestros clientes</h2>
          </div>
        </div>
        <div className="testimonials-wrapper">
          <div className="testimonials">
            {[
              { quote: '"Después de gastar $1.5M en una agencia que nunca entregó, Pagelab me hizo la página en 4 días por $400k. Funciona, se ve bien, y no tuve que perseguir a nadie."', init: 'MU', name: 'Martín Ulloa', role: 'Fundador de Tekio' },
              { quote: '"Llevaba 3 semanas peleando con Wix. Les pagué un viernes, el martes ya estaba publicado. La única vez que algo salió como prometieron."', init: 'VR', name: 'Valentina Rojas', role: 'Arquitecta' },
              { quote: '"Necesitaba una página para una campaña que empezaba en una semana. Todos me dijeron que imposible. Pagelab lo hizo en 4 días. Salvaron mi lanzamiento."', init: 'DC', name: 'Diego Campos', role: 'Startup Fintech' },
              { quote: '"Proceso súper simple. Llené el formulario, me respondieron en 1 hora, y 3 días después tenía mi sitio listo. Justo lo que prometieron."', init: 'AP', name: 'Andrea Pérez', role: 'Consultora freelance' },
              { quote: '"Sin jerga técnica, sin reuniones interminables. Me explicaron todo en simple y entregaron exactamente lo que necesitaba."', init: 'RS', name: 'Rodrigo Silva', role: 'Chef & Emprendedor' },
            ].flatMap((t, i) => [t, { ...t, key: `dup-${i}` }]).map((t, i) => (
              <div className="testimonial" key={i}>
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

      {/* ── 11. FAQ ── */}
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

      {/* ── 12. CTA Final ── */}
      <section className="section section-dark final-cta" data-animate>
        <div className="container">
          <div className="section-header">
            <h2 className="section-headline">¿Listo para tener tu sitio web?</h2>
            <p className="section-sub">Elige cómo quieres empezar:</p>
          </div>
          <div className="final-ctas">
            <button className="btn btn-primary" style={{ background: 'var(--white)', color: 'var(--noir)' }} onClick={() => scrollToSection('contacto')}>
              Comienza Ahora
            </button>
            <button className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--white)' }} onClick={() => scrollToSection('pricing')}>
              Ver Planes
            </button>
          </div>
        </div>
      </section>

      {/* ── 13. Formulario ── */}
      <section className="section form-section" id="contacto" data-animate>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Empecemos</div>
            <h2 className="section-headline">Cuéntanos qué necesitas</h2>
            <p className="section-sub">Completa este formulario y te respondemos en menos de 2 horas</p>
          </div>
          <div className="form-wrapper">
            {formSubmitted ? (
              <div className="form-success">
                <div className="form-success-icon">✅</div>
                <h3>¡Solicitud enviada!</h3>
                <p>Te respondemos en menos de 2 horas con tu plan personalizado y link de pago.</p>
              </div>
            ) : (
              <form className="brief-form" onSubmit={handleFormSubmit}>
                <input type="hidden" name="_subject" value="Nueva consulta - Pagelab" />
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
                    <label><input type="radio" name="plan" value="Landing Page ($200.000)" required /> Landing Page ($200.000)</label>
                    <label><input type="radio" name="plan" value="Sitio Web ($400.000)" /> Sitio Web ($400.000)</label>
                    <label><input type="radio" name="plan" value="No estoy seguro" /> No estoy seguro</label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="business">¿Qué hace tu negocio/proyecto? *</label>
                  <textarea id="business" name="business" rows="4" required placeholder="Cuéntanos brevemente..." />
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
                  <textarea id="comments" name="comments" rows="3" placeholder="Algún detalle extra..." />
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Enviar Solicitud
                </button>
                <p className="form-note">Te respondemos en menos de 2 horas</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-stats">
            <div className="footer-stat">47 sitios entregados este año</div>
            <div className="footer-stat">Promedio: 2.8 días</div>
            <div className="footer-stat">100% sitios activos</div>
          </div>
          <div className="footer-text">© 2026 Pagelab. Páginas web profesionales, entrega rápida.</div>
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
