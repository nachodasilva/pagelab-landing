import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { marked } from 'marked';
import terminosMd from './content/terminos.md?raw';
import { RAZON_SOCIAL } from './config';
import { usePageMeta } from './lib/meta';

const TITULO = 'Términos y Condiciones';

// Un solo H1 por página: si el Markdown parte con "# Título" se usa como H1
// de la página, y cualquier otro "#" del texto baja a H2.
function renderTerminos(md) {
  const tokens = marked.lexer(md);
  let titulo = TITULO;
  const first = tokens.find((t) => t.type !== 'space');
  if (first?.type === 'heading' && first.depth === 1) {
    titulo = first.text;
    tokens.splice(tokens.indexOf(first), 1);
  }
  marked.walkTokens(tokens, (t) => { if (t.type === 'heading' && t.depth === 1) t.depth = 2; });
  // Tablas con scroll horizontal en móvil
  const html = marked.parser(tokens)
    .replace(/<table>/g, '<div class="t-table"><table>')
    .replace(/<\/table>/g, '</table></div>');
  return { titulo, html };
}

const { titulo, html } = renderTerminos(terminosMd);

export default function Terminos() {
  const navigate = useNavigate();
  usePageMeta(`${TITULO} | Pagelab`, `${TITULO} del servicio Pagelab, de ${RAZON_SOCIAL}.`);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="t-page">
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { -webkit-font-smoothing: antialiased; letter-spacing: -0.01em; background: #FFFFFF; }
        .t-page { font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif; color: #121212; min-height: 100vh; background: #FFFFFF; }
        .t-header { background: #fff; border-bottom: 1px solid #E0E0E0; padding: 0 1.25rem; height: 60px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 10; }
        .t-logo { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.03em; text-transform: lowercase; cursor: pointer; }
        .t-back { font-size: 0.875rem; color: #848484; background: none; border: none; cursor: pointer; font-family: inherit; }
        .t-back:hover { color: #121212; }

        .t-body { max-width: 700px; margin: 0 auto; padding: 2.5rem 1.25rem 5rem; }
        .t-eyebrow { font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #848484; margin-bottom: 0.625rem; }
        .t-title { font-size: clamp(1.75rem, 5vw, 2.25rem); font-weight: 700; letter-spacing: -0.04em; line-height: 1.15; margin-bottom: 2rem; }

        .t-content { font-size: 0.9375rem; line-height: 1.75; color: #2B2B2B; }
        .t-content h2 { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.3; color: #121212; margin: 2.25rem 0 0.75rem; }
        .t-content h3 { font-size: 1.0625rem; font-weight: 700; color: #121212; margin: 1.75rem 0 0.5rem; }
        .t-content h4 { font-size: 0.9375rem; font-weight: 700; color: #121212; margin: 1.25rem 0 0.375rem; }
        .t-content p { margin-bottom: 1rem; }
        .t-content ul, .t-content ol { margin: 0 0 1rem 1.25rem; }
        .t-content li { margin-bottom: 0.375rem; }
        .t-content a { color: #121212; text-underline-offset: 2px; }
        .t-content strong { color: #121212; }
        .t-content hr { border: none; border-top: 1px solid #ECECEC; margin: 2rem 0; }
        .t-content blockquote { border-left: 3px solid #E0E0E0; padding: 0.25rem 0 0.25rem 1rem; color: #565656; margin-bottom: 1rem; }
        .t-content code { font-size: 0.85em; background: #F5F5F5; padding: 0.1em 0.35em; border-radius: 4px; }
        .t-table { overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 1.25rem; border: 1px solid #ECECEC; border-radius: 8px; }
        .t-table table { border-collapse: collapse; width: 100%; min-width: 480px; font-size: 0.875rem; }
        .t-table th, .t-table td { text-align: left; padding: 0.625rem 0.75rem; border-bottom: 1px solid #ECECEC; vertical-align: top; }
        .t-table th { background: #F8F8F8; font-weight: 600; color: #121212; }
        .t-table tr:last-child td { border-bottom: none; }
      `}</style>

      <header className="t-header">
        <span className="t-logo" onClick={() => navigate('/')}>pagelab</span>
        <button className="t-back" onClick={() => navigate('/')}>← Volver al inicio</button>
      </header>

      <main className="t-body">
        <div className="t-eyebrow">Pagelab · {RAZON_SOCIAL}</div>
        <h1 className="t-title">{titulo}</h1>
        <div className="t-content" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </div>
  );
}
