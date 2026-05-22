import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

import imgKivo from './assets/Kivo.webp';
import imgFloresta from './assets/Floresta la ermita.webp';
import imgAcerca from './assets/Acerca Consultores.webp';
import imgConecta from './assets/Conecta Franquicias.webp';

// ── Lucide-style SVG icons ────────────────────────────────────────────────
const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ArrowUpRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const Zap = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Globe = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Layers = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const BarChart2 = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const Sparkles = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v1m0 16v1M3 12h1m16 0h1m-3.5-7.5-.7.7M7.2 16.8l-.7.7M7.2 7.2l-.7-.7m10.3 10.3-.7-.7M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z" />
  </svg>
);

const CheckCircle = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const Send = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

// ── Custom Cursor ─────────────────────────────────────────────────────────
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => ringRef.current?.classList.add('hovering');
    const onLeave = () => ringRef.current?.classList.remove('hovering');

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.x + 'px';
        dotRef.current.style.top = pos.current.y + 'px';
      }
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const els = document.querySelectorAll('button, a, [data-hover]');
    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

// ── Reveal hook ───────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

// ── MacBook Mockup ────────────────────────────────────────────────────────
function MacbookMockup({ src, alt = '' }) {
  return (
    <div className="macbook">
      <div className="macbook-screen">
        <div className="macbook-camera" />
        {src
          ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : (
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #111 0%, #1a1a1a 50%, #0d0d0d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Globe size={24} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>pagelab.studio</div>
              </div>
            </div>
          )
        }
      </div>
      <div className="macbook-base" />
      <div className="macbook-stand" />
      <div className="macbook-foot" />
    </div>
  );
}

// ── iPhone Mockup ─────────────────────────────────────────────────────────
function IphoneMockup({ src, alt = '' }) {
  return (
    <div className="iphone">
      <div className="iphone-body">
        <div className="iphone-screen">
          <div className="iphone-island" />
          {src
            ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : (
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%)', paddingTop: 48, paddingLeft: 12, paddingRight: 12 }}>
                <div style={{ height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, marginBottom: 6 }} />
                <div style={{ height: 8, background: 'rgba(255,255,255,0.04)', borderRadius: 4, width: '70%', marginBottom: 16 }} />
                <div style={{ height: 80, background: 'rgba(255,255,255,0.04)', borderRadius: 8, marginBottom: 8 }} />
                <div style={{ height: 40, background: 'rgba(255,255,255,0.03)', borderRadius: 8 }} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: 'calc(100% - 48px)',
        maxWidth: 1200,
        padding: '14px 24px',
        borderRadius: 16,
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'rgba(0,0,0,0.7)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        border: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.03em' }}>pagelab</span>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {['Trabajo', 'Servicios', 'Proceso'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="underline-link"
            style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
          >
            {item}
          </a>
        ))}
        <button
          onClick={() => navigate('/brief')}
          style={{
            background: '#fff',
            color: '#000',
            border: 'none',
            borderRadius: 100,
            padding: '10px 20px',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '-0.01em',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            cursor: 'none',
          }}
          onMouseEnter={e => { e.target.style.opacity = '0.85'; e.target.style.transform = 'scale(0.97)'; }}
          onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'scale(1)'; }}
          data-hover
        >
          Empezar
        </button>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  const navigate = useNavigate();

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 100 }}>
      {/* Orbs */}
      <div className="orb" style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, background: 'rgba(255,255,255,0.03)' }} />
      <div className="orb" style={{ position: 'absolute', bottom: '20%', left: '-5%', width: 300, height: 300, background: 'rgba(255,255,255,0.02)', animationDelay: '3s' }} />

      <div style={{ width: '100%', maxWidth: 1400, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }} className="hero-grid">
        {/* Left: Text */}
        <div style={{ paddingTop: 40 }}>
          <div className="reveal" style={{ transitionDelay: '0ms' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 100,
              padding: '6px 14px',
              marginBottom: 32,
              fontSize: 12,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
            }}>
              <Zap size={11} />
              Sitios listos en 3 días
            </div>
          </div>

          <h1 className="reveal" style={{ transitionDelay: '100ms', fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.04em', marginBottom: 28 }}>
            Webs que<br />
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>venden</span><br />
            solas.
          </h1>

          <p className="reveal" style={{ transitionDelay: '200ms', fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 360, marginBottom: 40 }}>
            Diseñamos y construimos tu sitio web con un proceso probado. Sin reuniones interminables. Sin sorpresas.
          </p>

          <div className="reveal stagger" style={{ transitionDelay: '300ms', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/brief')}
              data-hover
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: '#000',
                border: 'none', borderRadius: 100,
                padding: '14px 28px', fontSize: 15, fontWeight: 700,
                letterSpacing: '-0.02em',
                transition: 'all 0.2s ease',
                cursor: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)'; e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1'; }}
            >
              Quiero mi web <ArrowRight size={15} />
            </button>
            <a
              href="#trabajo"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent', color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.12)', borderRadius: 100,
                padding: '14px 28px', fontSize: 15, fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                cursor: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
              Ver trabajo
            </a>
          </div>

          {/* Stats */}
          <div className="reveal" style={{ transitionDelay: '400ms', display: 'flex', gap: 32, marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {[['3 días', 'Tiempo de entrega'], ['+40', 'Proyectos lanzados'], ['100%', 'Satisfacción']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.04em' }}>{num}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 2, letterSpacing: '0.02em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mockup */}
        <div className="reveal-right" style={{ transitionDelay: '200ms', position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', paddingTop: 20 }}>
          {/* MacBook offset up and right */}
          <div style={{ position: 'relative', transform: 'rotate(-2deg) translateY(-20px)' }}>
            <MacbookMockup src={imgAcerca} alt="Proyecto web" />

            {/* iPhone floating over macbook */}
            <div style={{ position: 'absolute', bottom: -20, left: -60, transform: 'rotate(4deg)', zIndex: 10 }}>
              <IphoneMockup src={imgKivo} alt="Versión móvil" />
            </div>

            {/* Glass badge */}
            <div className="glass" style={{
              position: 'absolute', top: -20, right: -20,
              borderRadius: 12, padding: '10px 16px',
              fontSize: 12, fontWeight: 600, letterSpacing: '-0.01em',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <CheckCircle size={13} />
              Listo en 72h
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .hero-grid > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}

// ── Marquee strip ─────────────────────────────────────────────────────────
function Marquee() {
  const items = ['Diseño web', '·', 'Landing pages', '·', 'E-commerce', '·', 'Branding digital', '·', 'SEO técnico', '·', 'Velocidad de carga', '·', 'Responsive design', '·'];

  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '18px 0', overflow: 'hidden', position: 'relative' }}>
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase', paddingRight: 32, fontWeight: 500 }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Work ──────────────────────────────────────────────────────────────────
function Work() {
  const projects = [
    { img: imgFloresta, name: 'Floresta La Ermita', cat: 'Landing page', year: '2024', wide: true },
    { img: imgKivo, name: 'Kivo', cat: 'Sitio institucional', year: '2024', wide: false },
    { img: imgConecta, name: 'Conecta Franquicias', cat: 'Landing page', year: '2025', wide: false },
    { img: imgAcerca, name: 'Acerca Consultores', cat: 'Sitio web', year: '2025', wide: true },
  ];

  return (
    <section id="trabajo" style={{ padding: '120px 32px', maxWidth: 1400, margin: '0 auto' }}>
      <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>Trabajo</div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>
            Proyectos<br />
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>seleccionados</span>
          </h2>
        </div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>2024–2025</div>
      </div>

      {/* Asymmetric grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gridTemplateRows: 'auto auto', gap: 12 }} className="work-grid">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="reveal hover-lift"
            style={{
              transitionDelay: `${i * 80}ms`,
              gridColumn: i === 0 ? '1' : i === 1 ? '2' : i === 2 ? '1' : '1 / -1',
              position: 'relative',
              borderRadius: 16,
              overflow: 'hidden',
              aspectRatio: i === 3 ? '21/8' : i === 0 ? '4/3' : '3/4',
              background: '#0d0d0d',
              cursor: 'none',
            }}
            data-hover
          >
            <img
              src={p.img}
              alt={p.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
              padding: '32px 24px 20px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{p.cat}</div>
                <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em' }}>{p.name}</div>
              </div>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowUpRight size={13} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-grid {
            grid-template-columns: 1fr !important;
          }
          .work-grid > div {
            grid-column: 1 !important;
            aspect-ratio: 4/3 !important;
          }
        }
      `}</style>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: <Globe size={18} />,
      title: 'Landing page',
      desc: 'Una página enfocada en convertir. Ideal para campañas, productos o eventos.',
      price: 'Desde $200K',
    },
    {
      icon: <Layers size={18} />,
      title: 'Sitio web completo',
      desc: 'Múltiples secciones, blog opcional, formularios y optimización SEO incluida.',
      price: 'Desde $350K',
    },
    {
      icon: <Sparkles size={18} />,
      title: 'Rediseño',
      desc: 'Tu web actual renovada con un diseño moderno que refuerza tu marca.',
      price: 'Desde $280K',
    },
    {
      icon: <BarChart2 size={18} />,
      title: 'Mantenimiento',
      desc: 'Actualizaciones mensuales, hosting gestionado y soporte prioritario.',
      price: 'Desde $60K/mes',
    },
  ];

  return (
    <section id="servicios" style={{ padding: '120px 32px', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 80 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>Servicios</div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
            Lo que<br />
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>construimos</span>
          </h2>
        </div>

        {/* Horizontal cards - not a symmetric grid */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'nowrap', overflowX: 'auto', paddingBottom: 8 }} className="services-scroll">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass reveal hover-lift"
              data-hover
              style={{
                transitionDelay: `${i * 100}ms`,
                borderRadius: 20,
                padding: '32px 28px',
                minWidth: 260,
                flex: '0 0 auto',
                cursor: 'none',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                ...(i === 1 ? { marginTop: 24 } : {}),
                ...(i === 3 ? { marginTop: 40 } : {}),
              }}
            >
              <div style={{
                width: 40, height: 40,
                borderRadius: 10,
                background: 'rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.7)',
              }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
              <div style={{ marginTop: 'auto', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                {s.price}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .services-scroll::-webkit-scrollbar { display: none; }
          .services-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          @media (max-width: 768px) {
            .services-scroll > div { min-width: 220px !important; margin-top: 0 !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

// ── Process ───────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    { n: '01', title: 'Brief', desc: 'Completás un formulario de 5 minutos. Sin reuniones, sin idas y vueltas.' },
    { n: '02', title: 'Diseño', desc: 'Armamos la propuesta visual en Figma. Feedback en 24 horas.' },
    { n: '03', title: 'Desarrollo', desc: 'Construimos el sitio optimizado. Velocidad, SEO y mobile-first.' },
    { n: '04', title: 'Entrega', desc: 'Tu web publicada en tu dominio, con hosting configurado.' },
  ];

  return (
    <section id="proceso" style={{ padding: '120px 32px', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="process-grid">
        <div>
          <div className="reveal">
            <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>Proceso</div>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24 }}>
              Simple.<br />
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>Sin fricciones.</span>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 320 }}>
              Diseñamos nuestro proceso para que vos no tengas que hacer nada técnico. Solo contarnos tu proyecto.
            </p>
          </div>

          {/* iPhone mockup in process section */}
          <div className="reveal" style={{ transitionDelay: '200ms', marginTop: 60 }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <IphoneMockup src={imgFloresta} alt="Mobile preview" />
              <div className="glass" style={{
                position: 'absolute', top: 20, right: -80,
                borderRadius: 12, padding: '12px 16px',
                fontSize: 11, fontWeight: 600,
                whiteSpace: 'nowrap',
              }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: 10, marginBottom: 2 }}>Performance</div>
                <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.04em' }}>98<span style={{ fontSize: 12, fontWeight: 400, color: 'rgba(255,255,255,0.4)' }}>/100</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div style={{ paddingTop: 40 }}>
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal"
              style={{
                transitionDelay: `${i * 100}ms`,
                display: 'flex',
                gap: 24,
                paddingBottom: 40,
                borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                marginBottom: i < steps.length - 1 ? 40 : 0,
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em', paddingTop: 4, minWidth: 24 }}>{s.n}</div>
              <div>
                <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

// ── CTA / Contact ─────────────────────────────────────────────────────────
function CTA() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <section style={{ padding: '80px 32px 120px', background: '#030303', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'left' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Empezar</div>

          <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.95, marginBottom: 32 }}>
            ¿Tu proyecto<br />
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>empieza hoy?</span>
          </h2>

          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 400, marginBottom: 48 }}>
            Completá el brief y te respondemos en menos de 24 horas con una propuesta.
          </p>

          {/* Email micro-interaction */}
          <div className="glass" style={{ borderRadius: 16, padding: 24, marginBottom: 20, maxWidth: 500 }}>
            <div className="form-group" style={{ marginBottom: 20 }}>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="form-input"
                style={{ cursor: 'none' }}
              />
              <div className="underline-fill" style={{ width: focused ? '100%' : '0%', transition: 'width 0.3s ease' }} />
            </div>

            <button
              onClick={() => navigate('/brief')}
              data-hover
              style={{
                width: '100%',
                background: '#fff', color: '#000',
                border: 'none', borderRadius: 10,
                padding: '14px 20px', fontSize: 15, fontWeight: 700,
                letterSpacing: '-0.02em',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                cursor: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(0.98)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Comenzar proyecto <Send size={14} />
            </button>
          </div>

          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.02em' }}>
            Sin compromiso · Respuesta en 24h · 3 días de entrega
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '28px 32px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      maxWidth: 1400, margin: '0 auto',
      flexWrap: 'wrap', gap: 12,
    }}>
      <span style={{ fontWeight: 700, letterSpacing: '-0.03em', fontSize: 15 }}>pagelab</span>
      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
        © {new Date().getFullYear()} Pagelab — Diseño y desarrollo web
      </span>
      <a
        href="https://instagram.com"
        style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', cursor: 'none' }}
        className="underline-link"
        onMouseEnter={e => e.target.style.color = '#fff'}
        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
      >
        Instagram
      </a>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────
export default function App() {
  useReveal();

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      <CustomCursor />
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}
