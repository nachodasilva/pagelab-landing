import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { PRECIO_LANDING, formatCLP } from './src/config.js'

// index.html toma el precio desde src/config.js (marcador %PRECIO_LANDING%)
const htmlConfig = {
  name: 'html-config',
  transformIndexHtml: (html) => html.replaceAll('%PRECIO_LANDING%', formatCLP(PRECIO_LANDING)),
}

export default defineConfig({
  plugins: [react(), htmlConfig],
  base: '/',
})
