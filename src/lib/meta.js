import { useEffect } from 'react';

// Título y meta description por ruta (la app es una SPA con HashRouter).
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
