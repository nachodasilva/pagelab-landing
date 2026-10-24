import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import App from './App.jsx'
import Brief from './Brief.jsx'
import BriefRecibido from './BriefRecibido.jsx'
import Gracias from './Gracias.jsx'
import Pagar from './Pagar.jsx'
import Terminos from './Terminos.jsx'
import { captureAttribution } from './lib/attribution'

// Antes del primer render, para que los links de WhatsApp ya lleven la ref.
captureAttribution()

function AttributionOnRouteChange() {
  const location = useLocation()
  useEffect(() => { captureAttribution() }, [location.pathname, location.search])
  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AttributionOnRouteChange />
      <Routes>
        <Route path="/" element={<App variant="home" />} />
        <Route path="/landing-page" element={<App variant="landing-page" />} />
        <Route path="/sitio-web" element={<App variant="sitio-web" />} />
        <Route path="/portafolio" element={<App variant="portafolio" />} />
        <Route path="/pagar" element={<Pagar />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="/brief" element={<Brief />} />
        <Route path="/brief-recibido" element={<BriefRecibido />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
