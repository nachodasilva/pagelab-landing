# Pagelab Landing Page

Landing page profesional para Pagelab - Páginas web listas en 3 días.

## 🚀 Deploy en GitHub Pages

### Opción 1: Deploy Manual (Recomendado)

1. **Crear repositorio en GitHub**
   ```bash
   # En GitHub, crea un nuevo repositorio llamado "pagelab-landing" (o el nombre que prefieras)
   # NO inicialices con README, .gitignore o licencia
   ```

2. **Inicializar Git y subir código**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/pagelab-landing.git
   git push -u origin main
   ```

3. **Instalar dependencias y hacer build**
   ```bash
   npm install
   npm run build
   ```

4. **Deploy con gh-pages**
   ```bash
   npm install --save-dev gh-pages
   
   # Agregar estos scripts a package.json:
   # "deploy": "gh-pages -d dist"
   
   npm run deploy
   ```

5. **Configurar GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

Tu sitio estará en: `https://TU-USUARIO.github.io/pagelab-landing/`

### Opción 2: Deploy Automático con GitHub Actions

1. Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. Sube el código a GitHub:
```bash
git add .
git commit -m "Add GitHub Actions deploy"
git push
```

3. El deploy se hará automáticamente en cada push a main.

---

## 📝 Notas Importantes

### Si tu repo NO es `username.github.io`:

Actualiza `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/pagelab-landing/', // Nombre de tu repo
})
```

### Actualizar número de WhatsApp:

En `src/App.jsx`, busca:
```javascript
href="https://wa.me/56900000000"
```

Reemplaza `56900000000` con tu número real (con código de país, sin +).

### Reemplazar screenshots del portafolio:

Los placeholders están en `src/App.jsx`. Busca las secciones del portafolio y reemplaza los divs con gradientes por:
```jsx
<img src="/ruta-a-tu-imagen.jpg" alt="Nombre del proyecto" />
```

---

## 🛠 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## 📦 Estructura del Proyecto

```
pagelab-landing/
├── src/
│   ├── App.jsx          # Componente principal de la landing
│   └── main.jsx         # Entry point de React
├── index.html           # HTML base
├── package.json         # Dependencias
├── vite.config.js       # Configuración de Vite
└── README.md           # Este archivo
```

---

## ✨ Características

- ✅ React 18
- ✅ Vite para build ultra-rápido
- ✅ Diseño responsive (mobile, tablet, desktop)
- ✅ Animaciones scroll
- ✅ Slider infinito (testimonios y portafolio)
- ✅ FAQ con acordeón
- ✅ Pricing con toggle interactivo
- ✅ Botón de WhatsApp flotante
- ✅ SEO optimizado

---

## 🎨 Personalización

### Colores (Brand Kit Pagelab)

Definidos en `src/App.jsx` como CSS variables:
- `--color-noir: #121212` (textos, fondos oscuros)
- `--color-iron: #565656` (textos secundarios)
- `--color-accent: #4A90E2` (CTAs, highlights)

### Textos

Todos los textos están hardcodeados en `src/App.jsx` para fácil edición.

---

## 📞 Soporte

Para dudas sobre el deploy o personalización, revisar la [documentación de Vite](https://vitejs.dev) y [GitHub Pages](https://pages.github.com).
