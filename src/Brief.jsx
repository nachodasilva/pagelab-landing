import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const FORM_EMAIL = 'silvapignacio@gmail.com';
// Reemplaza con tu link de pago cuando lo tengas configurado
const PAYMENT_URL_LANDING = 'https://pagelab.cl/#/brief';
const PAYMENT_URL_SITIO   = 'https://pagelab.cl/#/brief';

const RUBROS = [
  'Gastronomía / Restaurant',
  'Salud / Bienestar',
  'Consultoría / Asesoría',
  'Educación / Capacitación',
  'Tecnología / Software',
  'Retail / Tienda',
  'Servicios profesionales',
  'Inmobiliaria / Construcción',
  'Turismo / Hotelería',
  'Arte / Diseño / Creatividad',
  'Deporte / Fitness',
  'Marketing / Publicidad',
  'Otro',
];

export default function Brief() {
  const navigate = useNavigate();
  const location = useLocation();

  const [plan, setPlan] = useState('Landing Page');
  const [tieneDominio, setTieneDominio] = useState(null);
  const [tieneContenido, setTieneContenido] = useState(null);
  const [tieneColores, setTieneColores] = useState(null);
  const [colores, setColores] = useState(['#121212', '#4A90E2', '#FFFFFF']);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('plan') === 'sitio') setPlan('Sitio Web');
    window.scrollTo(0, 0);
  }, []);

  const required = (val) => !val || !String(val).trim();

  const validate = () => {
    const f = formRef.current;
    const get = (name) => f.elements[name]?.value || '';
    const errs = {};

    if (required(get('nombre'))) errs.nombre = 'Requerido';
    if (required(get('email'))) errs.email = 'Requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get('email'))) errs.email = 'Email inválido';
    if (required(get('telefono'))) errs.telefono = 'Requerido';
    if (required(get('empresa'))) errs.empresa = 'Requerido';
    if (required(get('rubro'))) errs.rubro = 'Requerido';
    if (tieneDominio === null) errs.tieneDominio = 'Selecciona una opción';
    if (tieneDominio === false && required(get('dominio_deseado'))) errs.dominio_deseado = 'Requerido';
    if (tieneDominio === true && required(get('dominio_actual'))) errs.dominio_actual = 'Requerido';
    if (tieneContenido === null) errs.tieneContenido = 'Selecciona una opción';
    if (tieneColores === null) errs.tieneColores = 'Selecciona una opción';
    if (required(get('contacto_email'))) errs.contacto_email = 'Requerido';
    if (required(get('contacto_telefono'))) errs.contacto_telefono = 'Requerido';

    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstErr = f.querySelector('.field-error');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validate()) { e.preventDefault(); return; }
    // El formulario se envía nativamente a formsubmit.co y redirige a PAYMENT_URL
  };

  const setColor = (i, val) => {
    const next = [...colores];
    next[i] = val;
    setColores(next);
  };

  const paymentUrl = plan === 'Sitio Web' ? PAYMENT_URL_SITIO : PAYMENT_URL_LANDING;

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif', padding: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>¡Brief recibido!</h2>
        <p style={{ color: '#565656', marginBottom: '2rem' }}>Te contactaremos en menos de 2 horas.</p>
        <button onClick={() => navigate('/')} style={{ background: '#121212', color: '#fff', border: 'none', borderRadius: 8, padding: '0.75rem 1.5rem', cursor: 'pointer', fontWeight: 600 }}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', color: '#121212', minHeight: '100vh', background: '#F8F8F8' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --noir: #121212; --charcoal: #2B2B2B; --iron: #565656;
          --fog: #848484; --silver: #B3B3B3; --cloud: #E0E0E0;
          --white: #FFFFFF; --accent: #4A90E2; --bg: #F8F8F8;
          --red: #D32F2F;
        }
        body { -webkit-font-smoothing: antialiased; }
        .brief-header { background: var(--white); border-bottom: 1px solid var(--cloud); padding: 0 2rem; height: 60px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
        .brief-logo { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.03em; text-transform: lowercase; color: var(--noir); cursor: pointer; text-decoration: none; }
        .brief-back { font-size: 0.875rem; color: var(--fog); cursor: pointer; background: none; border: none; padding: 0.25rem 0.5rem; border-radius: 6px; transition: color 0.15s; }
        .brief-back:hover { color: var(--noir); }

        .brief-hero { background: var(--white); border-bottom: 1px solid var(--cloud); padding: 3rem 2rem 2.5rem; text-align: center; }
        .brief-eyebrow { font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--fog); margin-bottom: 0.75rem; }
        .brief-title { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 0.75rem; }
        .brief-subtitle { font-size: 1rem; color: var(--iron); max-width: 520px; margin: 0 auto; line-height: 1.6; }

        .brief-body { max-width: 680px; margin: 0 auto; padding: 2rem 1.5rem 5rem; display: flex; flex-direction: column; gap: 1.5rem; }

        .brief-card { background: var(--white); border: 1px solid var(--cloud); border-radius: 16px; padding: 1.75rem; }
        .brief-card-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.25rem; }
        .brief-card-sub { font-size: 0.8125rem; color: var(--fog); margin-bottom: 1.5rem; line-height: 1.5; }

        .field { display: flex; flex-direction: column; gap: 0.375rem; }
        .field label { font-size: 0.8125rem; font-weight: 600; color: var(--charcoal); }
        .field label span { color: var(--red); margin-left: 2px; }
        .field input, .field textarea, .field select {
          border: 1.5px solid var(--cloud); border-radius: 10px; padding: 0.625rem 0.875rem;
          font-size: 0.9375rem; font-family: inherit; color: var(--noir); background: var(--white);
          transition: border-color 0.15s; outline: none; width: 100%;
        }
        .field input:focus, .field textarea:focus, .field select:focus { border-color: var(--noir); }
        .field textarea { resize: vertical; min-height: 90px; }
        .field-error { font-size: 0.75rem; color: var(--red); margin-top: 0.1rem; }
        .field input.err, .field textarea.err, .field select.err { border-color: var(--red); }
        .fields-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 540px) { .fields-row { grid-template-columns: 1fr; } }

        .plan-selector { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        .plan-option { border: 2px solid var(--cloud); border-radius: 12px; padding: 1rem 1.25rem; cursor: pointer; transition: all 0.15s; background: var(--white); }
        .plan-option.active { border-color: var(--noir); background: #F5F5F5; }
        .plan-option:hover:not(.active) { border-color: var(--silver); }
        .plan-option-name { font-weight: 700; font-size: 0.9375rem; margin-bottom: 0.2rem; }
        .plan-option-price { font-size: 0.8125rem; color: var(--fog); }

        .radio-group { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .radio-pill { display: flex; align-items: center; gap: 0.5rem; border: 2px solid var(--cloud); border-radius: 100px; padding: 0.5rem 1rem; cursor: pointer; font-size: 0.875rem; font-weight: 500; transition: all 0.15s; background: var(--white); }
        .radio-pill.active { border-color: var(--noir); background: #F5F5F5; font-weight: 600; }
        .radio-pill:hover:not(.active) { border-color: var(--silver); }
        .radio-pill input { display: none; }

        .domain-hint { display: inline-flex; align-items: center; gap: 0.375rem; margin-top: 0.5rem; font-size: 0.8125rem; color: var(--accent); font-weight: 500; text-decoration: none; }
        .domain-hint:hover { text-decoration: underline; }

        .color-row { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.75rem; }
        .color-item { display: flex; flex-direction: column; align-items: center; gap: 0.375rem; }
        .color-item label { font-size: 0.75rem; color: var(--fog); }
        .color-swatch { width: 48px; height: 48px; border-radius: 10px; border: 2px solid var(--cloud); cursor: pointer; overflow: hidden; padding: 0; }
        .color-swatch input[type="color"] { width: 64px; height: 64px; border: none; cursor: pointer; margin: -8px; }
        .color-hex { font-size: 0.75rem; color: var(--iron); font-family: monospace; text-align: center; width: 56px; border: 1px solid var(--cloud); border-radius: 6px; padding: 0.2rem 0.25rem; }

        .upload-area { border: 2px dashed var(--cloud); border-radius: 12px; padding: 1.5rem; text-align: center; cursor: pointer; transition: border-color 0.15s; position: relative; }
        .upload-area:hover { border-color: var(--silver); }
        .upload-area input[type="file"] { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
        .upload-icon { font-size: 1.5rem; margin-bottom: 0.375rem; }
        .upload-label { font-size: 0.875rem; font-weight: 600; color: var(--charcoal); margin-bottom: 0.2rem; }
        .upload-sub { font-size: 0.75rem; color: var(--fog); }
        .upload-files { margin-top: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .upload-chip { font-size: 0.75rem; background: #F0F0F0; border-radius: 6px; padding: 0.25rem 0.625rem; color: var(--iron); }

        .brief-footer { position: fixed; bottom: 0; left: 0; right: 0; background: var(--white); border-top: 1px solid var(--cloud); padding: 1rem 1.5rem; z-index: 100; }
        .brief-footer-inner { max-width: 680px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
        .brief-footer-plan { font-size: 0.8125rem; color: var(--fog); }
        .brief-footer-plan strong { color: var(--noir); }
        .btn-submit { background: var(--noir); color: var(--white); border: none; border-radius: 10px; padding: 0.75rem 1.75rem; font-size: 0.9375rem; font-weight: 700; cursor: pointer; transition: background 0.15s, transform 0.1s; font-family: inherit; }
        .btn-submit:hover { background: var(--charcoal); transform: translateY(-1px); }
        .btn-submit:active { transform: translateY(0); }

        .divider { border: none; border-top: 1px solid var(--cloud); margin: 1.25rem 0; }

        .section-err { font-size: 0.8125rem; color: var(--red); margin-top: 0.5rem; }
        .socials-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        @media (max-width: 480px) { .socials-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Header */}
      <header className="brief-header">
        <a className="brief-logo" onClick={() => navigate('/')}>pagelab</a>
        <button className="brief-back" onClick={() => navigate('/')}>← Volver</button>
      </header>

      {/* Hero */}
      <div className="brief-hero">
        <div className="brief-eyebrow">Brief del proyecto</div>
        <h1 className="brief-title">Cuéntanos sobre tu proyecto</h1>
        <p className="brief-subtitle">Con esta información empezamos a trabajar de inmediato. Te tomará unos 5 minutos.</p>
      </div>

      <form
        ref={formRef}
        action={`https://formsubmit.co/${FORM_EMAIL}`}
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        {/* Campos ocultos formsubmit */}
        <input type="hidden" name="_next" value={paymentUrl} />
        <input type="hidden" name="_subject" value={`Nuevo Brief Pagelab — ${plan}`} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="plan" value={plan} />
        <input type="hidden" name="colores_marca" value={tieneColores ? colores.join(', ') : 'Sin colores definidos'} />

        <div className="brief-body">

          {/* 1. Tipo de servicio */}
          <div className="brief-card">
            <div className="brief-card-title">¿Qué necesitas?</div>
            <div className="brief-card-sub">Selecciona el plan que más se ajusta a tu proyecto.</div>
            <div className="plan-selector">
              {[
                { label: 'Landing Page', price: '$200.000', sub: 'Entrega en 3 días' },
                { label: 'Sitio Web', price: '$400.000', sub: 'Entrega en 5 días' },
              ].map((p) => (
                <div
                  key={p.label}
                  className={`plan-option${plan === p.label ? ' active' : ''}`}
                  onClick={() => setPlan(p.label)}
                >
                  <div className="plan-option-name">{p.label}</div>
                  <div className="plan-option-price">{p.price} · {p.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Datos personales */}
          <div className="brief-card">
            <div className="brief-card-title">Tus datos</div>
            <div className="brief-card-sub">Para mantenernos en contacto durante el proceso.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="field">
                <label>Nombre completo <span>*</span></label>
                <input name="nombre" type="text" placeholder="Juan Pérez" className={errors.nombre ? 'err' : ''} onChange={() => setErrors(e => ({ ...e, nombre: undefined }))} />
                {errors.nombre && <span className="field-error">{errors.nombre}</span>}
              </div>
              <div className="fields-row">
                <div className="field">
                  <label>Email <span>*</span></label>
                  <input name="email" type="email" placeholder="juan@empresa.cl" className={errors.email ? 'err' : ''} onChange={() => setErrors(e => ({ ...e, email: undefined }))} />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
                <div className="field">
                  <label>Teléfono <span>*</span></label>
                  <input name="telefono" type="tel" placeholder="+56 9 1234 5678" className={errors.telefono ? 'err' : ''} onChange={() => setErrors(e => ({ ...e, telefono: undefined }))} />
                  {errors.telefono && <span className="field-error">{errors.telefono}</span>}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Tu empresa */}
          <div className="brief-card">
            <div className="brief-card-title">Tu empresa</div>
            <div className="brief-card-sub">Cuéntanos sobre el negocio para el que hacemos el sitio.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="fields-row">
                <div className="field">
                  <label>Nombre de la empresa <span>*</span></label>
                  <input name="empresa" type="text" placeholder="Mi Empresa SpA" className={errors.empresa ? 'err' : ''} onChange={() => setErrors(e => ({ ...e, empresa: undefined }))} />
                  {errors.empresa && <span className="field-error">{errors.empresa}</span>}
                </div>
                <div className="field">
                  <label>Rubro <span>*</span></label>
                  <select name="rubro" defaultValue="" className={errors.rubro ? 'err' : ''} onChange={() => setErrors(e => ({ ...e, rubro: undefined }))}>
                    <option value="" disabled>Selecciona...</option>
                    {RUBROS.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {errors.rubro && <span className="field-error">{errors.rubro}</span>}
                </div>
              </div>
              <div className="field">
                <label>¿Qué hace tu empresa?</label>
                <textarea name="descripcion_empresa" placeholder="Describe brevemente a qué se dedica tu empresa, a quién le vendes y qué te diferencia..." rows={3} />
              </div>
              <hr className="divider" />
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#565656', marginBottom: '0.25rem' }}>Redes sociales <span style={{ fontWeight: 400, color: '#848484' }}>(opcional — las enlazaremos en el sitio)</span></div>
              <div className="socials-grid">
                <div className="field">
                  <label>Instagram</label>
                  <input name="instagram" type="text" placeholder="@tuempresa" />
                </div>
                <div className="field">
                  <label>Facebook</label>
                  <input name="facebook" type="text" placeholder="facebook.com/tuempresa" />
                </div>
                <div className="field">
                  <label>LinkedIn</label>
                  <input name="linkedin" type="text" placeholder="linkedin.com/company/..." />
                </div>
                <div className="field">
                  <label>TikTok</label>
                  <input name="tiktok" type="text" placeholder="@tuempresa" />
                </div>
              </div>
            </div>
          </div>

          {/* 4. Dominio */}
          <div className="brief-card">
            <div className="brief-card-title">Dominio web</div>
            <div className="brief-card-sub">El dominio es la dirección de tu sitio (ej: tuempresa.cl).</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.625rem' }}>¿Tienes dominio propio? <span style={{ color: '#D32F2F' }}>*</span></div>
                <div className="radio-group">
                  {[{ val: true, label: 'Sí, ya tengo' }, { val: false, label: 'No tengo' }].map(({ val, label }) => (
                    <label key={String(val)} className={`radio-pill${tieneDominio === val ? ' active' : ''}`}>
                      <input type="radio" name="tiene_dominio" value={String(val)} onChange={() => { setTieneDominio(val); setErrors(e => ({ ...e, tieneDominio: undefined })); }} />
                      {label}
                    </label>
                  ))}
                </div>
                {errors.tieneDominio && <div className="section-err">{errors.tieneDominio}</div>}
              </div>

              {tieneDominio === true && (
                <div className="field">
                  <label>¿Cuál es tu dominio? <span>*</span></label>
                  <input name="dominio_actual" type="text" placeholder="tuempresa.cl" className={errors.dominio_actual ? 'err' : ''} onChange={() => setErrors(e => ({ ...e, dominio_actual: undefined }))} />
                  {errors.dominio_actual && <span className="field-error">{errors.dominio_actual}</span>}
                </div>
              )}

              {tieneDominio === false && (
                <div className="field">
                  <label>¿Qué dominio te gustaría? <span>*</span></label>
                  <input name="dominio_deseado" type="text" placeholder="tuempresa.cl" className={errors.dominio_deseado ? 'err' : ''} onChange={() => setErrors(e => ({ ...e, dominio_deseado: undefined }))} />
                  {errors.dominio_deseado && <span className="field-error">{errors.dominio_deseado}</span>}
                  <a className="domain-hint" href="https://www.nic.cl/registry/Whois.do" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    Verificar disponibilidad en nic.cl →
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* 5. Contenido */}
          <div className="brief-card">
            <div className="brief-card-title">Contenido del sitio</div>
            <div className="brief-card-sub">Los textos, títulos y descripciones que irán en tu página.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.625rem' }}>¿Tienes el contenido listo? <span style={{ color: '#D32F2F' }}>*</span></div>
                <div className="radio-group">
                  {[
                    { val: true, label: 'Sí, lo tengo' },
                    { val: false, label: 'Quiero que lo generen' },
                  ].map(({ val, label }) => (
                    <label key={String(val)} className={`radio-pill${tieneContenido === val ? ' active' : ''}`}>
                      <input type="radio" name="tiene_contenido" value={String(val)} onChange={() => { setTieneContenido(val); setErrors(e => ({ ...e, tieneContenido: undefined })); }} />
                      {label}
                    </label>
                  ))}
                </div>
                {errors.tieneContenido && <div className="section-err">{errors.tieneContenido}</div>}
              </div>
              {tieneContenido === true && (
                <div className="field">
                  <label>Pega o escribe el contenido aquí</label>
                  <textarea name="contenido" placeholder="Puedes escribir los textos, pegar desde un documento o darnos indicaciones de lo que quieres que diga cada sección..." rows={5} />
                </div>
              )}
              {tieneContenido === false && (
                <div style={{ background: '#F5F5F5', borderRadius: 10, padding: '0.875rem 1rem', fontSize: '0.8125rem', color: '#565656', lineHeight: 1.6 }}>
                  Perfecto. Generaremos textos profesionales basados en la información de tu empresa. Te los mostraremos para revisión antes de publicar.
                </div>
              )}
              <div className="field">
                <label>Sitios web de referencia <span style={{ fontWeight: 400, color: '#848484' }}>(opcional)</span></label>
                <textarea name="referencias" placeholder="Pega URLs de sitios que te gusten o que quieras que tomemos como inspiración de estilo..." rows={2} />
              </div>
            </div>
          </div>

          {/* 6. Identidad visual */}
          <div className="brief-card">
            <div className="brief-card-title">Identidad visual</div>
            <div className="brief-card-sub">Logo, colores y material fotográfico de tu negocio.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Logo */}
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.625rem' }}>Logo <span style={{ fontWeight: 400, color: '#848484' }}>(opcional)</span></div>
                <UploadField name="logo" accept=".png,.jpg,.jpeg,.svg,.pdf,.ai,.eps" label="Sube tu logo" sub="PNG, SVG, PDF, AI — hasta 10MB" multiple={false} />
              </div>

              {/* Colores */}
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.625rem' }}>¿Tienes colores de marca? <span style={{ color: '#D32F2F' }}>*</span></div>
                <div className="radio-group">
                  {[
                    { val: true, label: 'Sí, tengo mis colores' },
                    { val: false, label: 'No, elijan ustedes' },
                  ].map(({ val, label }) => (
                    <label key={String(val)} className={`radio-pill${tieneColores === val ? ' active' : ''}`}>
                      <input type="radio" name="tiene_colores" value={String(val)} onChange={() => { setTieneColores(val); setErrors(e => ({ ...e, tieneColores: undefined })); }} />
                      {label}
                    </label>
                  ))}
                </div>
                {errors.tieneColores && <div className="section-err">{errors.tieneColores}</div>}
                {tieneColores === true && (
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#848484', margin: '0.875rem 0 0.25rem' }}>Selecciona hasta 3 colores</div>
                    <div className="color-row">
                      {colores.map((c, i) => (
                        <div className="color-item" key={i}>
                          <div className="color-swatch">
                            <input type="color" value={c} onChange={(e) => setColor(i, e.target.value)} />
                          </div>
                          <input className="color-hex" value={c} onChange={(e) => setColor(i, e.target.value)} maxLength={7} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {tieneColores === false && (
                  <div style={{ marginTop: '0.875rem' }}>
                    <div className="field">
                      <label>Estilo visual preferido <span style={{ fontWeight: 400, color: '#848484' }}>(opcional)</span></label>
                      <select name="estilo_visual" defaultValue="">
                        <option value="">Sin preferencia</option>
                        <option>Minimalista y limpio</option>
                        <option>Moderno y tecnológico</option>
                        <option>Elegante y sofisticado</option>
                        <option>Cálido y cercano</option>
                        <option>Audaz y con energía</option>
                        <option>Profesional y corporativo</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Fotos */}
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.375rem' }}>Fotos del negocio <span style={{ fontWeight: 400, color: '#848484' }}>(opcional)</span></div>
                <div style={{ fontSize: '0.75rem', color: '#848484', marginBottom: '0.625rem' }}>Si no tienes fotos, podemos usar imágenes de stock profesionales.</div>
                <UploadField name="fotos" accept=".jpg,.jpeg,.png,.webp" label="Sube tus fotos" sub="JPG, PNG, WebP — puedes seleccionar varias a la vez" multiple={true} />
              </div>
            </div>
          </div>

          {/* 7. Contacto público */}
          <div className="brief-card">
            <div className="brief-card-title">Contacto público de la empresa</div>
            <div className="brief-card-sub">Esta información aparecerá en tu sitio web para que tus clientes puedan contactarte.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="fields-row">
                <div className="field">
                  <label>Email de contacto <span>*</span></label>
                  <input name="contacto_email" type="email" placeholder="contacto@tuempresa.cl" className={errors.contacto_email ? 'err' : ''} onChange={() => setErrors(e => ({ ...e, contacto_email: undefined }))} />
                  {errors.contacto_email && <span className="field-error">{errors.contacto_email}</span>}
                </div>
                <div className="field">
                  <label>Teléfono de contacto <span>*</span></label>
                  <input name="contacto_telefono" type="tel" placeholder="+56 9 1234 5678" className={errors.contacto_telefono ? 'err' : ''} onChange={() => setErrors(e => ({ ...e, contacto_telefono: undefined }))} />
                  {errors.contacto_telefono && <span className="field-error">{errors.contacto_telefono}</span>}
                </div>
              </div>
              <div className="field">
                <label>Dirección <span style={{ fontWeight: 400, color: '#848484' }}>(opcional — solo si tienes local físico)</span></label>
                <input name="direccion" type="text" placeholder="Av. Ejemplo 123, Santiago" />
              </div>
              <div className="field">
                <label>Horario de atención <span style={{ fontWeight: 400, color: '#848484' }}>(opcional)</span></label>
                <input name="horario" type="text" placeholder="Lunes a viernes 9:00–18:00" />
              </div>
              <div className="field">
                <label>Algo más que debamos saber <span style={{ fontWeight: 400, color: '#848484' }}>(opcional)</span></label>
                <textarea name="notas_adicionales" placeholder="Plazos especiales, detalles del proyecto, preferencias, preguntas..." rows={3} />
              </div>
            </div>
          </div>

        </div>

        {/* Footer sticky con botón de pago */}
        <div className="brief-footer">
          <div className="brief-footer-inner">
            <div className="brief-footer-plan">
              Plan seleccionado: <strong>{plan}</strong>
              <span style={{ marginLeft: '0.5rem', color: '#848484' }}>·</span>
              <strong style={{ marginLeft: '0.5rem' }}>{plan === 'Sitio Web' ? '$400.000' : '$200.000'}</strong>
            </div>
            <button type="submit" className="btn-submit">Ir al pago →</button>
          </div>
        </div>
      </form>
    </div>
  );
}

function UploadField({ name, accept, label, sub, multiple }) {
  const [files, setFiles] = useState([]);
  const handleChange = (e) => {
    setFiles(Array.from(e.target.files).map(f => f.name));
  };
  return (
    <div>
      <div className="upload-area">
        <input type="file" name={name} accept={accept} multiple={multiple} onChange={handleChange} />
        <div className="upload-icon">📎</div>
        <div className="upload-label">{label}</div>
        <div className="upload-sub">{sub}</div>
      </div>
      {files.length > 0 && (
        <div className="upload-files">
          {files.map(f => <span key={f} className="upload-chip">{f}</span>)}
        </div>
      )}
    </div>
  );
}
