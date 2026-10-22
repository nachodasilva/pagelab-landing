import { attributionFields } from '../lib/attribution';
import { GARANTIA_TITULO, GARANTIA_TEXTO } from '../config';
import './components.css';

// Honeypot + origen de campaña. Va dentro de todos los formularios.
export function FormExtras() {
  const fields = attributionFields();
  return (
    <>
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {Object.entries(fields).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}
    </>
  );
}

export function Garantia({ className = '' }) {
  if (!GARANTIA_TEXTO) return null;
  return (
    <div className={`garantia ${className}`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
      <div>
        <strong>{GARANTIA_TITULO}</strong>
        <span>{GARANTIA_TEXTO}</span>
      </div>
    </div>
  );
}
