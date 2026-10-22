import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PLANES, FORMSUBMIT_AJAX_URL, CUOTAS_DISPONIBLES, TERMS_URL, formatCLP } from './config';
import { track } from './lib/track';
import { usePageMeta } from './lib/meta';
import { saveCheckout } from './lib/checkout';
import WhatsAppButton from './components/WhatsAppButton';
import { FormExtras, Garantia } from './components/FormExtras';

// No esperamos más que esto a FormSubmit antes de ir a Mercado Pago.
const MAX_WAIT_MS = 2500;

export default function Pagar() {
  const navigate = useNavigate();
  const location = useLocation();
  const initial = new URLSearchParams(location.search).get('plan') === 'sitio' ? 'sitio' : 'landing';
  const [planId, setPlanId] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);
  const plan = PLANES[planId];

  usePageMeta(`Pagar ${plan.nombre} | Pagelab`, `Paga tu ${plan.nombre} en línea con Mercado Pago y empezamos hoy.`);

  // Se llega desde la sección de precios: empezar arriba, no a media página
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const validate = (f) => {
    const get = (n) => (f.elements[n]?.value || '').trim();
    const errs = {};
    if (!get('nombre')) errs.nombre = 'Requerido';
    if (!get('email')) errs.email = 'Requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get('email'))) errs.email = 'Email inválido';
    if (get('telefono').replace(/\D/g, '').length < 8) errs.telefono = 'Ingresa un WhatsApp válido';
    if (!get('empresa')) errs.empresa = 'Requerido';
    if (!f.elements.acepto.checked) errs.acepto = 'Debes aceptar las condiciones';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const f = formRef.current;
    if (sending || !validate(f)) return;
    setSending(true);

    const data = new FormData(f);
    const nombre = data.get('nombre').trim();
    saveCheckout({
      plan: planId,
      nombre,
      email: data.get('email').trim(),
      telefono: data.get('telefono').trim(),
      empresa: data.get('empresa').trim(),
    });

    data.set('_subject', `Checkout iniciado — ${plan.nombre} — ${nombre}`);
    data.set('plan', plan.nombre);
    data.set('monto', String(plan.precio));

    track('begin_checkout', { plan: planId });

    const send = fetch(FORMSUBMIT_AJAX_URL, {
      method: 'POST', body: data, headers: { Accept: 'application/json' }, keepalive: true,
    }).catch(() => {});
    await Promise.race([send, new Promise((r) => setTimeout(r, MAX_WAIT_MS))]);

    window.location.href = plan.mpLink;
  };

  const clearError = (name) => setErrors((e) => ({ ...e, [name]: undefined }));

  return (
    <div className="pagar-page">
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { -webkit-font-smoothing: antialiased; letter-spacing: -0.01em; background: #F8F8F8; }
        .pagar-page {
          --noir: #121212; --charcoal: #2B2B2B; --iron: #565656; --fog: #848484;
          --silver: #B3B3B3; --cloud: #E0E0E0; --white: #FFFFFF; --red: #D32F2F;
          font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--noir); min-height: 100vh; background: #F8F8F8;
        }
        .p-header { background: var(--white); border-bottom: 1px solid var(--cloud); padding: 0 1.25rem; height: 60px; display: flex; align-items: center; justify-content: space-between; }
        .p-logo { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.03em; text-transform: lowercase; cursor: pointer; }
        .p-back { font-size: 0.875rem; color: var(--fog); background: none; border: none; cursor: pointer; font-family: inherit; }
        .p-back:hover { color: var(--noir); }

        .p-body { max-width: 560px; margin: 0 auto; padding: 2rem 1.25rem 4rem; display: flex; flex-direction: column; gap: 1.25rem; }
        .p-title { font-size: clamp(1.625rem, 5vw, 2rem); font-weight: 700; letter-spacing: -0.04em; line-height: 1.15; }
        .p-sub { font-size: 0.9375rem; color: var(--iron); line-height: 1.6; margin-top: 0.375rem; }

        .p-card { background: var(--white); border: 1px solid var(--cloud); border-radius: 16px; padding: 1.5rem; }
        .p-card-title { font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--fog); margin-bottom: 0.875rem; }

        .p-plans { display: grid; grid-template-columns: 1fr 1fr; gap: 0.625rem; margin-bottom: 1.25rem; }
        .p-plan { border: 2px solid var(--cloud); border-radius: 12px; padding: 0.75rem 0.875rem; cursor: pointer; background: var(--white); text-align: left; font-family: inherit; color: var(--noir); transition: border-color 0.15s; }
        .p-plan.active { border-color: var(--noir); background: #F5F5F5; }
        .p-plan:hover:not(.active) { border-color: var(--silver); }
        .p-plan-name { font-weight: 700; font-size: 0.9375rem; }
        .p-plan-price { font-size: 0.8125rem; color: var(--fog); }

        .p-summary-row { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; }
        .p-summary-name { font-size: 1.125rem; font-weight: 700; }
        .p-summary-price { font-size: 1.5rem; font-weight: 700; letter-spacing: -0.03em; white-space: nowrap; }
        .p-summary-meta { font-size: 0.8125rem; color: var(--fog); margin-top: 0.25rem; }
        .p-includes { list-style: none; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.375rem; }
        .p-includes li { font-size: 0.875rem; color: var(--iron); padding-left: 1.375rem; position: relative; line-height: 1.5; }
        .p-includes li::before { content: '✓'; position: absolute; left: 0; color: var(--noir); font-weight: 700; }

        .p-fields { display: flex; flex-direction: column; gap: 0.875rem; }
        .p-field { display: flex; flex-direction: column; gap: 0.375rem; }
        .p-field label { font-size: 0.8125rem; font-weight: 600; color: var(--charcoal); }
        .p-field input { border: 1.5px solid var(--cloud); border-radius: 10px; padding: 0.6875rem 0.875rem; font-size: 1rem; font-family: inherit; color: var(--noir); background: var(--white); outline: none; width: 100%; transition: border-color 0.15s; }
        .p-field input:focus { border-color: var(--noir); }
        .p-field input.err { border-color: var(--red); }
        .p-error { font-size: 0.75rem; color: var(--red); }

        .p-check { display: flex; align-items: flex-start; gap: 0.625rem; font-size: 0.875rem; color: var(--iron); cursor: pointer; line-height: 1.5; }
        .p-check input { width: 18px; height: 18px; margin-top: 2px; flex-shrink: 0; accent-color: var(--noir); }
        .p-check a { color: var(--noir); }

        .p-submit { width: 100%; background: var(--noir); color: var(--white); border: none; border-radius: 10px; padding: 1rem 1.5rem; font-size: 1rem; font-weight: 700; font-family: inherit; cursor: pointer; transition: background 0.15s; }
        .p-submit:hover { background: var(--charcoal); }
        .p-submit:disabled { opacity: 0.7; cursor: wait; }
        .p-secure { text-align: center; font-size: 0.8125rem; color: var(--fog); margin-top: 0.625rem; }

        .p-help { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding-top: 0.5rem; }
        .p-help p { font-size: 0.9375rem; color: var(--iron); }
      `}</style>

      <header className="p-header">
        <span className="p-logo" onClick={() => navigate('/')}>pagelab</span>
        <button className="p-back" onClick={() => navigate(-1)}>← Volver</button>
      </header>

      <div className="p-body">
        <div>
          <h1 className="p-title">Pagar y empezar hoy</h1>
          <p className="p-sub">Completa tus datos y te llevamos al pago seguro. Después del pago nos envías tu contenido.</p>
        </div>

        {/* Resumen del plan */}
        <div className="p-card">
          <div className="p-card-title">Tu plan</div>
          <div className="p-plans" role="radiogroup" aria-label="Plan">
            {Object.values(PLANES).map((p) => (
              <button
                key={p.id} type="button" role="radio" aria-checked={planId === p.id}
                className={`p-plan${planId === p.id ? ' active' : ''}`}
                onClick={() => setPlanId(p.id)}
              >
                <div className="p-plan-name">{p.nombre}</div>
                <div className="p-plan-price">{formatCLP(p.precio)}</div>
              </button>
            ))}
          </div>
          <div className="p-summary-row">
            <div className="p-summary-name">{plan.nombre}</div>
            <div className="p-summary-price">{formatCLP(plan.precio)}</div>
          </div>
          <div className="p-summary-meta">
            Entrega en {plan.plazo}{CUOTAS_DISPONIBLES && ' · Puedes pagar en cuotas'}
          </div>
          <ul className="p-includes">
            {plan.incluye.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>

        {/* Datos */}
        <form ref={formRef} className="p-card" onSubmit={handleSubmit} noValidate>
          <FormExtras />
          <div className="p-card-title">Tus datos</div>
          <div className="p-fields">
            <div className="p-field">
              <label htmlFor="p-nombre">Nombre completo</label>
              <input id="p-nombre" name="nombre" type="text" autoComplete="name" placeholder="Juan Pérez" className={errors.nombre ? 'err' : ''} onChange={() => clearError('nombre')} />
              {errors.nombre && <span className="p-error">{errors.nombre}</span>}
            </div>
            <div className="p-field">
              <label htmlFor="p-email">Email</label>
              <input id="p-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="juan@empresa.cl" className={errors.email ? 'err' : ''} onChange={() => clearError('email')} />
              {errors.email && <span className="p-error">{errors.email}</span>}
            </div>
            <div className="p-field">
              <label htmlFor="p-tel">WhatsApp</label>
              <input id="p-tel" name="telefono" type="tel" autoComplete="tel" inputMode="tel" placeholder="+56 9 1234 5678" className={errors.telefono ? 'err' : ''} onChange={() => clearError('telefono')} />
              {errors.telefono && <span className="p-error">{errors.telefono}</span>}
            </div>
            <div className="p-field">
              <label htmlFor="p-empresa">Nombre de la empresa</label>
              <input id="p-empresa" name="empresa" type="text" autoComplete="organization" placeholder="Mi Empresa SpA" className={errors.empresa ? 'err' : ''} onChange={() => clearError('empresa')} />
              {errors.empresa && <span className="p-error">{errors.empresa}</span>}
            </div>

            <label className="p-check">
              <input type="checkbox" name="acepto" value="sí" onChange={() => clearError('acepto')} />
              <span>
                {TERMS_URL
                  ? <>Acepto las <a href={TERMS_URL} target="_blank" rel="noopener noreferrer">condiciones del servicio</a></>
                  : 'Acepto las condiciones del servicio'}
              </span>
            </label>
            {errors.acepto && <span className="p-error">{errors.acepto}</span>}

            <Garantia />

            <div>
              <button type="submit" className="p-submit" disabled={sending}>
                {sending ? 'Redirigiendo a Mercado Pago…' : 'Ir al pago seguro con Mercado Pago →'}
              </button>
              <div className="p-secure">Pago procesado por Mercado Pago</div>
            </div>
          </div>
        </form>

        <div className="p-help">
          <p>¿Dudas antes de pagar?</p>
          <WhatsAppButton origen="checkout" plan={planId} label="Escríbenos por WhatsApp" variant="outline" />
        </div>
      </div>
    </div>
  );
}
