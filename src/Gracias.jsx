import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PLANES, CONTACT_EMAIL, WHATSAPP_DISPLAY, AVISO_FECHA_ENTREGA, formatCLP } from './config';
import { track } from './lib/track';
import { buildWhatsAppLink, trackWhatsApp } from './lib/whatsapp';
import { usePageMeta } from './lib/meta';
import { readCheckout } from './lib/checkout';

const PURCHASES_KEY = 'pl_purchases';

const readJSON = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};

// Mercado Pago agrega los parámetros a la URL de retorno. Según cómo esté
// configurada, pueden quedar antes del # o dentro del hash: leemos ambos.
function mercadoPagoParams(routerSearch) {
  const params = new URLSearchParams(window.location.search);
  new URLSearchParams(routerSearch).forEach((v, k) => params.set(k, v));
  const status = params.get('status') || params.get('collection_status');
  // collection_id es el mismo ID de pago en la respuesta de Mercado Pago
  const paymentId = params.get('payment_id') || params.get('collection_id');
  return { approved: status === 'approved' && !!paymentId && paymentId !== 'null', paymentId };
}

export default function Gracias() {
  const navigate = useNavigate();
  const location = useLocation();
  usePageMeta('Pago recibido | Pagelab', 'Gracias por tu compra en Pagelab.');

  // Plan guardado en el checkout corto (/pagar)
  const checkout = readCheckout();
  const planKey = PLANES[checkout.plan] ? checkout.plan : 'landing';
  const plan = PLANES[planKey];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Purchase solo con pago aprobado y una sola vez por payment_id.
    const { approved, paymentId } = mercadoPagoParams(location.search);
    if (!approved) return;
    const registered = readJSON(PURCHASES_KEY, []);
    if (registered.includes(paymentId)) return;
    try { localStorage.setItem(PURCHASES_KEY, JSON.stringify([...registered, paymentId])); } catch { /* sin almacenamiento */ }
    track('purchase', { plan: planKey, transaction_id: paymentId });
  }, []);

  return (
    <div style={{ fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, sans-serif', color: '#121212', minHeight: '100vh', background: '#F8F8F8' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { -webkit-font-smoothing: antialiased; letter-spacing: -0.01em; }

        .g-header { background: #fff; border-bottom: 1px solid #E0E0E0; padding: 0 2rem; height: 60px; display: flex; align-items: center; }
        .g-logo { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.03em; text-transform: lowercase; color: #121212; cursor: pointer; text-decoration: none; }

        .g-body { max-width: 600px; margin: 0 auto; padding: 4rem 1.5rem 6rem; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 2rem; }

        .g-check { width: 72px; height: 72px; border-radius: 50%; background: #121212; display: flex; align-items: center; justify-content: center; }
        .g-check svg { width: 36px; height: 36px; }

        .g-headline { font-size: clamp(1.75rem, 5vw, 2.25rem); font-weight: 700; letter-spacing: -0.04em; line-height: 1.15; }
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
        .g-btn-lg { width: 100%; max-width: 400px; padding: 1.125rem 2rem; font-size: 1.0625rem; }
        .g-next { display: flex; flex-direction: column; align-items: center; gap: 0.625rem; width: 100%; }
        .g-next-note { font-size: 0.8125rem; color: #848484; }
        .g-link { background: none; border: none; font-family: inherit; font-size: 0.875rem; color: #848484; text-decoration: underline; cursor: pointer; }
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
          Completa tu brief (5 minutos) para que empecemos hoy.
        </p>

        {/* Siguiente paso */}
        <div className="g-next">
          <button className="g-btn g-btn-lg" onClick={() => navigate('/brief')}>Completar mi brief →</button>
          <div className="g-next-note">También te enviamos el link por email/WhatsApp.</div>
        </div>
        <p className="g-sub">{AVISO_FECHA_ENTREGA}</p>

        {/* Badge del plan */}
        <div className="g-plan-badge">
          <div>
            <div className="g-plan-badge-label">Plan contratado</div>
            <div className="g-plan-badge-name">{plan.nombre}</div>
          </div>
          <div className="g-plan-badge-price">
            {formatCLP(plan.precio)} <span>CLP</span>
          </div>
        </div>

        {/* Pasos siguientes */}
        <div className="g-steps">
          <div className="g-steps-title">¿Qué pasa ahora?</div>

          <div className="g-step">
            <div className="g-step-num">1</div>
            <div>
              <div className="g-step-title">Completa tu brief</div>
              <div className="g-step-desc">Nos cuentas sobre tu negocio y subes tu logo y fotos. Toma unos 5 minutos.</div>
            </div>
          </div>

          <div className="g-step">
            <div className="g-step-num">2</div>
            <div>
              <div className="g-step-title">Comenzamos el mismo día</div>
              <div className="g-step-desc">Con tu brief listo, iniciamos el diseño y desarrollo de tu sitio de inmediato.</div>
            </div>
          </div>

          <div className="g-step">
            <div className="g-step-num">3</div>
            <div>
              <div className="g-step-title">Preview y ajustes en {plan.plazo}</div>
              <div className="g-step-desc">Te enviamos un link de vista previa para que revises y solicites los cambios incluidos. Solo publicamos cuando estés conforme.</div>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="g-contact">
          ¿Tienes alguna duda? Escríbenos a{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          {' '}o por WhatsApp al{' '}
          <a href={buildWhatsAppLink('gracias', planKey, `Hola, ya pagué el plan ${plan.nombre} y tengo una duda.`)} onClick={() => trackWhatsApp('gracias', planKey)} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
        </div>

        <button className="g-link" onClick={() => navigate('/')}>Volver al inicio</button>

      </div>
    </div>
  );
}
