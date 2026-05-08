import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// ─── IDs de tracking — reemplaza con los tuyos ───────────────────────────────
const GA_MEASUREMENT_ID  = 'G-XXXXXXXXXX';   // Google Analytics 4
const GA_ADS_CONVERSION  = null;              // Google Ads: 'AW-XXXXXXXXX/YYYYYYY' (o null si no tienes)
const META_PIXEL_ID      = 'XXXXXXXXXXXXXXXXX'; // Meta Pixel
// ─────────────────────────────────────────────────────────────────────────────

const PLANES = {
  landing: { nombre: 'Landing Page', monto: 200000, entrega: '3 días hábiles' },
  sitio:   { nombre: 'Sitio Web',    monto: 400000, entrega: '5 días hábiles' },
};

export default function Gracias() {
  const navigate = useNavigate();
  const location = useLocation();
  const params   = new URLSearchParams(location.search);
  const planKey  = params.get('plan') || 'landing';
  const plan     = PLANES[planKey] ?? PLANES.landing;

  useEffect(() => {
    window.scrollTo(0, 0);

    const txId = `PL-${Date.now()}`;

    // ── Google Analytics 4 — evento purchase ─────────────────────────────────
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'purchase', {
        transaction_id: txId,
        value:          plan.monto,
        currency:       'CLP',
        items: [{
          item_id:   planKey,
          item_name: plan.nombre,
          price:     plan.monto,
          quantity:  1,
        }],
      });

      // ── Google Ads — conversión de compra (opcional) ──────────────────────
      if (GA_ADS_CONVERSION) {
        window.gtag('event', 'conversion', {
          send_to:  GA_ADS_CONVERSION,
          value:    plan.monto,
          currency: 'CLP',
          transaction_id: txId,
        });
      }
    }

    // ── Meta Pixel — evento Purchase ─────────────────────────────────────────
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Purchase', {
        value:    plan.monto,
        currency: 'CLP',
        content_name: plan.nombre,
        content_ids:  [planKey],
        content_type: 'product',
      });
    }
  }, []);

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', color: '#121212', minHeight: '100vh', background: '#F8F8F8' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { -webkit-font-smoothing: antialiased; }

        .g-header { background: #fff; border-bottom: 1px solid #E0E0E0; padding: 0 2rem; height: 60px; display: flex; align-items: center; }
        .g-logo { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.03em; text-transform: lowercase; color: #121212; cursor: pointer; text-decoration: none; }

        .g-body { max-width: 600px; margin: 0 auto; padding: 4rem 1.5rem 6rem; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 2rem; }

        .g-check { width: 72px; height: 72px; border-radius: 50%; background: #121212; display: flex; align-items: center; justify-content: center; }
        .g-check svg { width: 36px; height: 36px; }

        .g-headline { font-size: clamp(1.75rem, 5vw, 2.25rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.15; }
        .g-sub { font-size: 1rem; color: #565656; line-height: 1.7; max-width: 460px; }

        .g-plan-badge { background: #fff; border: 1px solid #E0E0E0; border-radius: 12px; padding: 1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; width: 100%; max-width: 400px; }
        .g-plan-badge-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #848484; margin-bottom: 0.2rem; }
        .g-plan-badge-name { font-size: 1rem; font-weight: 700; }
        .g-plan-badge-price { font-size: 1.25rem; font-weight: 700; white-space: nowrap; }
        .g-plan-badge-price span { font-size: 0.875rem; font-weight: 500; color: #848484; }

        .g-steps { background: #fff; border: 1px solid #E0E0E0; border-radius: 16px; padding: 1.75rem; width: 100%; text-align: left; }
        .g-steps-title { font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #848484; margin-bottom: 1.25rem; }
        .g-step { display: flex; gap: 1rem; align-items: flex-start; }
        .g-step + .g-step { margin-top: 1.25rem; padding-top: 1.25rem; border-top: 1px solid #F0F0F0; }
        .g-step-num { width: 28px; height: 28px; border-radius: 50%; background: #F5F5F5; border: 1.5px solid #E0E0E0; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; color: #121212; }
        .g-step-title { font-size: 0.9375rem; font-weight: 600; margin-bottom: 0.2rem; }
        .g-step-desc { font-size: 0.8125rem; color: #565656; line-height: 1.5; }

        .g-contact { font-size: 0.875rem; color: #848484; line-height: 1.8; }
        .g-contact a { color: #121212; font-weight: 600; text-decoration: none; }
        .g-contact a:hover { text-decoration: underline; }

        .g-btn { background: #121212; color: #fff; border: none; border-radius: 10px; padding: 0.875rem 2rem; font-size: 1rem; font-weight: 700; cursor: pointer; font-family: inherit; transition: background 0.15s, transform 0.1s; text-decoration: none; display: inline-block; }
        .g-btn:hover { background: #2B2B2B; transform: translateY(-1px); }
      `}</style>

      <header className="g-header">
        <span className="g-logo" onClick={() => navigate('/')}>pagelab</span>
      </header>

      <div className="g-body">

        {/* Ícono de confirmación */}
        <div className="g-check">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Título */}
        <div>
          <h1 className="g-headline">¡Pago confirmado!</h1>
        </div>
        <p className="g-sub">
          Tu pago fue procesado con éxito. Ya estamos revisando tu brief y comenzaremos a trabajar en tu sitio web de inmediato.
        </p>

        {/* Badge del plan */}
        <div className="g-plan-badge">
          <div>
            <div className="g-plan-badge-label">Plan contratado</div>
            <div className="g-plan-badge-name">{plan.nombre}</div>
          </div>
          <div className="g-plan-badge-price">
            ${plan.monto.toLocaleString('es-CL')} <span>CLP</span>
          </div>
        </div>

        {/* Pasos siguientes */}
        <div className="g-steps">
          <div className="g-steps-title">¿Qué pasa ahora?</div>

          <div className="g-step">
            <div className="g-step-num">1</div>
            <div>
              <div className="g-step-title">Revisa tu email</div>
              <div className="g-step-desc">Recibirás un comprobante de pago de Mercado Pago en los próximos minutos.</div>
            </div>
          </div>

          <div className="g-step">
            <div className="g-step-num">2</div>
            <div>
              <div className="g-step-title">Te contactamos en menos de 2 horas</div>
              <div className="g-step-desc">Nuestro equipo revisará tu brief y te escribirá para confirmar que tenemos todo lo necesario.</div>
            </div>
          </div>

          <div className="g-step">
            <div className="g-step-num">3</div>
            <div>
              <div className="g-step-title">Comenzamos a trabajar</div>
              <div className="g-step-desc">Con el brief aprobado, iniciamos el diseño y desarrollo de tu sitio de inmediato.</div>
            </div>
          </div>

          <div className="g-step">
            <div className="g-step-num">4</div>
            <div>
              <div className="g-step-title">Preview y ajustes en {plan.entrega}</div>
              <div className="g-step-desc">Te enviamos un link de vista previa para que revises y solicites los cambios incluidos. Solo publicamos cuando estés conforme.</div>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="g-contact">
          ¿Tienes alguna duda? Escríbenos a{' '}
          <a href="mailto:hola@pagelab.cl">hola@pagelab.cl</a>
          {' '}o por WhatsApp al{' '}
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">+56 9 XXXX XXXX</a>
        </div>

        <button className="g-btn" onClick={() => navigate('/')}>Volver al inicio</button>

      </div>
    </div>
  );
}
