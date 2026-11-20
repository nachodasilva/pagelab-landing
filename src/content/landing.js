// ─── Datos de la landing que completa Nacho ─────────────────────────────────
// Regla: si un valor es null, '' o una lista vacía, el elemento que lo usa
// no se muestra. Solo datos reales: nada de ejemplos en producción.

import imgKivo from '../assets/Kivo.webp';
import imgFloresta from '../assets/Floresta la ermita.webp';
import imgAcerca from '../assets/Acerca Consultores.webp';
import imgConecta from '../assets/Conecta Franquicias.webp';
// Imagen del hero: reemplaza este archivo (o cambia la ruta) por la imagen final.
import imgHero from '../assets/hero-celular.webp'; // recorte optimizado de hero.png

export const landing = {
  // Ej: "lunes 2 de noviembre". Se muestra bajo los botones del hero.
  proximoInicio: null,
  // Ej: 3. Se muestra junto a proximoInicio.
  cuposSemana: null,
  // Número real de clientes entregados. Activa la franja de prueba del hero.
  pymesConWeb: null,
  // Muestra "Por separado, esto cuesta más de $800.000" al cierre de "Qué recibes".
  mostrarAncla: false,
  // "A" o "B": titular del hero.
  heroVariante: 'A',

  // Solo cifras reales: [{ valor: '12', etiqueta: 'pymes con web' }]
  stats: [],

  // Imagen del lado derecho del hero. Tiene prioridad sobre el antes/después
  // y el celular. null = vuelve al mockup de celular.
  heroImagen: imgHero,
  heroImagenAlt: 'Ejemplo de página web profesional hecha por Pagelab, vista en un celular',

  // "Antes y después" del hero: Instagram del cliente al lado de su web.
  // Rutas o URLs de imagen. Si falta alguna, se muestra el mockup de celular.
  antesDespues: { instagram: null, web: null, negocio: null },

  // { nombre, negocio, rubro, texto, foto?, url?, verificado: boolean }
  // Solo se muestran los que tienen verificado: true.
  testimonios: [
    { nombre: 'Nicolás Chocaír', negocio: 'Acerca Consultores', rubro: 'Consultoría', texto: 'Después de gastar $1.5M en una agencia que nunca entregó, Pagelab me hizo la página en 3 días. Funciona, se ve bien, y no tuve que perseguir a nadie.', foto: '', url: '', verificado: true },
    { nombre: 'Nicolás Rodríguez', negocio: 'Contigo Pan y Cebolla', rubro: 'Gastronomía', texto: 'Llevaba 3 semanas peleando con Wix. Les pagué un viernes, el martes ya estaba publicado. La única vez que algo salió como prometieron.', foto: '', url: '', verificado: true },
    { nombre: 'Bruno Calderón', negocio: 'KIVO', rubro: 'Marketing digital', texto: 'Necesitaba una página para una campaña urgente. Todos me dijeron imposible. Pagelab lo hizo en 3 días. Salvaron mi lanzamiento.', foto: '', url: '', verificado: true },
    { nombre: 'Sebastián Ortíz', negocio: 'Conecta Franquicias', rubro: 'Negocios', texto: 'Proceso súper simple. Llené el formulario, me respondieron en 1 hora, y 3 días después tenía mi sitio listo. Exactamente lo que prometieron.', foto: '', url: '', verificado: true },
    { nombre: 'Rodrigo Silva', negocio: 'Chef & Emprendedor', rubro: 'Gastronomía', texto: 'Sin jerga técnica, sin reuniones. Me explicaron todo en simple y entregaron exactamente lo que necesitaba a tiempo.', foto: '', url: '', verificado: true },
  ],

  // { nombre, rubro, descripcion, url, imagen, imagenMovil?, etiqueta? }
  // imagen vacía = tarjeta con el nombre sobre fondo oscuro. url vacía = sin link.
  // imagenMovil: captura vertical para el celular del hero (si no, usa imagen).
  // El hero muestra el primer proyecto con imagen y sin etiqueta.
  portafolio: [
    { nombre: 'KIVO', rubro: 'Marketing digital', descripcion: 'Plataforma de gestión de Google Ads con IA. Landing enfocada en conversión.', url: 'https://kivo.cl', imagen: imgKivo, etiqueta: 'Proyecto propio' },
    { nombre: 'Floresta La Ermita', rubro: 'Eventos y turismo', descripcion: 'Centro de eventos en la cordillera. Diseño elegante con galería y cotización.', url: '', imagen: imgFloresta },
    { nombre: 'Acerca Consultores', rubro: 'Consultoría', descripcion: 'Cotización online para consultoría empresarial.', url: 'https://acercaconsultores.cl', imagen: imgAcerca },
    { nombre: 'Contigo Pan y Cebolla', rubro: 'Gastronomía', descripcion: 'Emprendimiento gastronómico. Menú digital y reservas online.', url: 'https://www.contigopanycebolla.cl', imagen: '' },
    { nombre: 'Conecta Franquicias', rubro: 'Negocios', descripcion: 'Marketplace de franquicias con buscador y sistema de matching.', url: 'https://conectafranquicias.cl', imagen: imgConecta },
  ],
};
