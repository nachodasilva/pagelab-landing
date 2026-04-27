#!/bin/bash

# Script de deploy automático para Pagelab
# Para Mac y Linux

echo "======================================"
echo "  Pagelab - Deploy a GitHub Pages"
echo "======================================"
echo ""

# Verificar que estamos en la carpeta correcta
if [ ! -f "package.json" ]; then
    echo "❌ Error: No estás en la carpeta del proyecto"
    echo "   Asegúrate de estar dentro de 'pagelab-github'"
    exit 1
fi

# Verificar Git
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git no está instalado"
    echo "   Instala Git desde: https://git-scm.com/downloads"
    exit 1
fi

# Verificar Node
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js no está instalado"
    echo "   Instala Node.js desde: https://nodejs.org"
    exit 1
fi

echo "✅ Git y Node.js detectados"
echo ""

# Pedir URL del repositorio
echo "📝 Necesito la URL de tu repositorio de GitHub"
echo "   Ejemplo: https://github.com/tuusuario/pagelab-landing.git"
echo ""
read -p "Pega tu URL aquí: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ Error: URL vacía"
    exit 1
fi

echo ""
echo "🚀 Iniciando deploy..."
echo ""

# Inicializar Git
echo "1️⃣ Inicializando Git..."
git init
if [ $? -ne 0 ]; then
    echo "❌ Error al inicializar Git"
    exit 1
fi

# Agregar archivos
echo "2️⃣ Agregando archivos..."
git add .
if [ $? -ne 0 ]; then
    echo "❌ Error al agregar archivos"
    exit 1
fi

# Commit
echo "3️⃣ Creando commit..."
git commit -m "Initial commit - Pagelab landing"
if [ $? -ne 0 ]; then
    echo "❌ Error al crear commit"
    exit 1
fi

# Renombrar branch
echo "4️⃣ Configurando branch main..."
git branch -M main
if [ $? -ne 0 ]; then
    echo "❌ Error al configurar branch"
    exit 1
fi

# Agregar remote
echo "5️⃣ Conectando con GitHub..."
git remote add origin "$REPO_URL"
if [ $? -ne 0 ]; then
    echo "⚠️  El remote ya existe, continuando..."
fi

# Push
echo "6️⃣ Subiendo código a GitHub..."
echo ""
echo "   Si te pide credenciales:"
echo "   - Username: tu usuario de GitHub"
echo "   - Password: tu Personal Access Token (NO tu contraseña)"
echo ""
git push -u origin main

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Error al subir código"
    echo ""
    echo "Posibles soluciones:"
    echo "1. Verifica que la URL del repo sea correcta"
    echo "2. Asegúrate de tener permisos en el repositorio"
    echo "3. Usa un Personal Access Token como password"
    echo "   (Créalo en: GitHub → Settings → Developer settings → Personal access tokens)"
    exit 1
fi

echo ""
echo "✅ ¡Código subido exitosamente!"
echo ""
echo "======================================"
echo "  Próximos pasos:"
echo "======================================"
echo ""
echo "1. Ve a tu repositorio en GitHub"
echo "2. Settings → Pages"
echo "3. Source: 'GitHub Actions'"
echo "4. Espera 2-3 minutos"
echo ""
echo "Tu sitio estará en:"
# Extraer usuario y repo de la URL
SITE_URL=$(echo $REPO_URL | sed -E 's|https://github.com/([^/]+)/([^.]+)\.git|https://\1.github.io/\2/|')
echo "   $SITE_URL"
echo ""
echo "⚠️  IMPORTANTE:"
echo "   Abre vite.config.js y cambia:"
REPO_NAME=$(echo $REPO_URL | sed -E 's|https://github.com/[^/]+/([^.]+)\.git|\1|')
echo "   base: '/$REPO_NAME/',"
echo ""
echo "   Luego ejecuta:"
echo "   git add ."
echo "   git commit -m 'Fix base URL'"
echo "   git push"
echo ""
