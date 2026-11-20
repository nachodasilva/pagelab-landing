import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, useReducedMotion } from 'motion/react';
import './MetodoLista.css';

// quien: 'tu' | 'nos'
const PASOS = [
  { l: 'L', palabra: 'Lo cuentas', quien: 'tu', cuando: '10 minutos', d: 'Respondes un brief guiado con preguntas simples: por escrito, por WhatsApp o en una llamada. Te confirmamos fecha y hora de entrega.' },
  { l: 'I', palabra: 'Interpretamos', quien: 'nos', cuando: 'Dentro de las 72 h', d: 'Convertimos tus respuestas en textos que venden.' },
  { l: 'S', palabra: 'Sitio armado', quien: 'nos', cuando: 'Dentro de las 72 h', d: 'Diseño, imágenes, botón de WhatsApp y formulario funcionando.' },
  { l: 'T', palabra: 'Tú la revisas', quien: 'tu', cuando: 'A las 72 h', d: 'Te llega un link para verla en tu celular y pides los cambios incluidos.' },
  { l: 'A', palabra: 'Al aire', quien: 'nos', cuando: 'Apenas la apruebas', d: 'La publicamos con tu dominio, Google Maps y el kit de lanzamiento.' },
];

const ULTIMO = PASOS.length - 1;
const EASE = [0.22, 1, 0.36, 1];

export default function MetodoLista() {
  const reduce = useReducedMotion();
  const trackRef = useRef(null);
  const nodeRefs = useRef([]);
  const fracciones = useRef(PASOS.map((_, i) => i / ULTIMO));
  const [activos, setActivos] = useState(reduce ? PASOS.length : 0);
  const [rail, setRail] = useState(null);

  // Mide dónde quedan los nodos para que la línea vaya del primero al último
  // (horizontal en escritorio, vertical en móvil) y cada paso se encienda justo
  // cuando la línea lo toca.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const medir = () => {
      // offsetLeft/Top ignoran los transforms de la animación de entrada
      const c = nodeRefs.current.map((n) => {
        let x = n.offsetWidth / 2, y = n.offsetHeight / 2;
        for (let el = n; el && el !== track; el = el.offsetParent) { x += el.offsetLeft; y += el.offsetTop; }
        return { x, y };
      });
      const vertical = Math.abs(c[ULTIMO].y - c[0].y) > Math.abs(c[ULTIMO].x - c[0].x);
      const eje = vertical ? 'y' : 'x';
      const largo = c[ULTIMO][eje] - c[0][eje] || 1;
      fracciones.current = c.map((p) => (p[eje] - c[0][eje]) / largo);
      setRail(vertical
        ? { top: c[0].y, left: c[0].x, height: largo, width: 2, vertical }
        : { top: c[0].y, left: c[0].x, width: largo, height: 2, vertical });
    };
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  // La línea se llena con el scroll; cada paso se enciende cuando la línea lo alcanza.
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 80%', 'end 60%'] });
  const progreso = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  useMotionValueEvent(progreso, 'change', (v) => {
    if (reduce) return;
    const n = fracciones.current.filter((f) => v >= f - 0.02).length;
    setActivos((prev) => (prev === n ? prev : n));
  });

  const escala = reduce ? 1 : progreso;

  return (
    <div className="ml">
      <div className="ml-legend">
        <span><i className="ml-dot tu" /> Lo haces tú</span>
        <span><i className="ml-dot nos" /> Lo hacemos nosotros</span>
      </div>

      <div className="ml-track" ref={trackRef}>
        {rail && (
          <div
            className={`ml-rail${rail.vertical ? ' vertical' : ''}`}
            style={{ top: rail.top, left: rail.left, width: rail.width, height: rail.height }}
            aria-hidden="true"
          >
            <motion.div className="ml-fill" style={rail.vertical ? { scaleY: escala } : { scaleX: escala }} />
          </div>
        )}
        <ol className="ml-steps">

        {PASOS.map((p, i) => {
          const on = i < activos;
          const actual = on && i === activos - 1 && activos < PASOS.length;
          return (
            <motion.li
              key={p.l}
              className={`ml-step ${p.quien}${on ? ' on' : ''}`}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
            >
              <div className="ml-node-wrap" ref={(el) => { nodeRefs.current[i] = el; }}>
                {actual && !reduce && (
                  <motion.span
                    className="ml-pulse"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.7, opacity: 0 }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
                <motion.div
                  className="ml-node"
                  animate={reduce ? undefined : { scale: on ? 1 : 0.86 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 18 }}
                >
                  {p.l}
                </motion.div>
              </div>

              <div className="ml-body">
                <div className="ml-meta">
                  <span className="ml-who">{p.quien === 'tu' ? 'Tú' : 'Nosotros'}</span>
                  <span className="ml-when">{p.cuando}</span>
                </div>
                <h3 className="ml-title"><span className="ml-initial">{p.l}</span>{p.palabra.slice(1)}</h3>
                <p className="ml-desc">{p.d}</p>
              </div>
            </motion.li>
          );
        })}
        </ol>
      </div>

      <motion.p
        className="ml-note"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={activos === PASOS.length ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <strong>Si la apruebas a la primera, tu web puede estar en línea en 72 horas.</strong> Desde ahí, el ritmo lo pones tú.
      </motion.p>
    </div>
  );
}
