import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PLANES } from './config';
import { track } from './lib/track';
import { usePageMeta } from './lib/meta';
import { readCheckout } from './lib/checkout';
import WhatsAppButton from './components/WhatsAppButton';
import { BRIEF_SENT_KEY } from './Brief';

const readSentPlan = () => {
  try { return sessionStorage.getItem(BRIEF_SENT_KEY); } catch { return null; }
};

export default function BriefRecibido() {
  const navigate = useNavigate();
  usePageMeta('Brief recibido | Pagelab', 'Recibimos tu brief.');

  // Plan del brief recién enviado; si no, el del checkout
  const sentPlan = readSentPlan();
  const planKey = PLANES[sentPlan] ? sentPlan : (PLANES[readCheckout().plan] ? readCheckout().plan : null);
  const plan = planKey ? PLANES[planKey] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    // Solo si venimos de enviar el brief (no en recargas ni visitas directas).
    // Se relee aquí para que el evento salga una sola vez.
    const sent = readSentPlan();
    if (!sent) return;
    try { sessionStorage.removeItem(BRIEF_SENT_KEY); } catch { /* sin almacenamiento */ }
    track('brief_submitted', { plan: sent });
  }, []);

  return (
    <div className="br-page">
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { -webkit-font-smoothing: antialiased; letter-spacing: -0.01em; background: #F8F8F8; }
        .br-page { font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif; color: #121212; min-height: 100vh; background: #F8F8F8; }
        .br-header { background: #fff; border-bottom: 1px solid #E0E0E0; padding: 0 1.25rem; height: 60px; display: flex; align-items: center; }
        .br-logo { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.03em; text-transform: lowercase; cursor: pointer; }
        .br-body { max-width: 560px; margin: 0 auto; padding: 4rem 1.25rem 5rem; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1.5rem; }
        .br-check { width: 72px; height: 72px; border-radius: 50%; background: #121212; display: flex; align-items: center; justify-content: center; }
        .br-check svg { width: 36px; height: 36px; }
        .br-title { font-size: clamp(1.75rem, 5vw, 2.25rem); font-weight: 700; letter-spacing: -0.04em; line-height: 1.15; }
        .br-sub { font-size: 1rem; color: #565656; line-height: 1.7; max-width: 440px; }
        .br-help { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; margin-top: 0.5rem; }
        .br-help p { font-size: 0.9375rem; color: #565656; }
        .br-link { background: none; border: none; font-family: inherit; font-size: 0.875rem; color: #848484; text-decoration: underline; cursor: pointer; }
      `}</style>

      <header className="br-header">
        <span className="br-logo" onClick={() => navigate('/')}>pagelab</span>
      </header>

      <div className="br-body">
        <div className="br-check">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="br-title">Recibimos todo</h1>
        <p className="br-sub">
          {plan
            ? <>Te enviaremos el preview de tu {plan.nombre} en {plan.plazo}.</>
            : <>Te enviaremos el preview en el plazo de tu plan.</>}
          {' '}Si nos falta algo, te escribimos por WhatsApp.
        </p>
        <div className="br-help">
          <p>¿Quieres agregar algo más?</p>
          <WhatsAppButton
            origen="brief_recibido"
            plan={planKey}
            mensaje="Hola, acabo de enviar mi brief y quiero agregar algo."
            label="Escríbenos por WhatsApp"
            variant="outline"
          />
        </div>
        <button className="br-link" onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    </div>
  );
}
