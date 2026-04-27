@echo off
chcp 65001 >nul
cls

echo ======================================
echo   Pagelab - Deploy a GitHub Pages
echo ======================================
echo.

REM Verificar que estamos en la carpeta correcta
if not exist "package.json" (
    echo ❌ Error: No estás en la carpeta del proyecto
    echo    Asegúrate de estar dentro de 'pagelab-github'
    pause
    exit /b 1
)

REM Verificar Git
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: Git no está instalado
    echo    Instala Git desde: https://git-scm.com/downloads
    pause
    exit /b 1
)

REM Verificar Node
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: Node.js no está instalado
    echo    Instala Node.js desde: https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Git y Node.js detectados
echo.

REM Pedir URL del repositorio
echo 📝 Necesito la URL de tu repositorio de GitHub
echo    Ejemplo: https://github.com/tuusuario/pagelab-landing.git
echo.
set /p REPO_URL="Pega tu URL aquí: "

if "%REPO_URL%"=="" (
    echo ❌ Error: URL vacía
    pause
    exit /b 1
)

echo.
echo 🚀 Iniciando deploy...
echo.

REM Inicializar Git
echo 1️⃣ Inicializando Git...
git init
if errorlevel 1 (
    echo ❌ Error al inicializar Git
    pause
    exit /b 1
)

REM Agregar archivos
echo 2️⃣ Agregando archivos...
git add .
if errorlevel 1 (
    echo ❌ Error al agregar archivos
    pause
    exit /b 1
)

REM Commit
echo 3️⃣ Creando commit...
git commit -m "Initial commit - Pagelab landing"
if errorlevel 1 (
    echo ❌ Error al crear commit
    pause
    exit /b 1
)

REM Renombrar branch
echo 4️⃣ Configurando branch main...
git branch -M main
if errorlevel 1 (
    echo ❌ Error al configurar branch
    pause
    exit /b 1
)

REM Agregar remote
echo 5️⃣ Conectando con GitHub...
git remote add origin "%REPO_URL%" 2>nul
if errorlevel 1 (
    echo ⚠️  El remote ya existe, continuando...
)

REM Push
echo 6️⃣ Subiendo código a GitHub...
echo.
echo    Si te pide credenciales:
echo    - Username: tu usuario de GitHub
echo    - Password: tu Personal Access Token (NO tu contraseña)
echo.
git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ Error al subir código
    echo.
    echo Posibles soluciones:
    echo 1. Verifica que la URL del repo sea correcta
    echo 2. Asegúrate de tener permisos en el repositorio
    echo 3. Usa un Personal Access Token como password
    echo    (Créalo en: GitHub → Settings → Developer settings → Personal access tokens^)
    pause
    exit /b 1
)

echo.
echo ✅ ¡Código subido exitosamente!
echo.
echo ======================================
echo   Próximos pasos:
echo ======================================
echo.
echo 1. Ve a tu repositorio en GitHub
echo 2. Settings → Pages
echo 3. Source: 'GitHub Actions'
echo 4. Espera 2-3 minutos
echo.
echo Tu sitio estará en:
echo    (GitHub te mostrará la URL en la configuración de Pages)
echo.
echo ⚠️  IMPORTANTE:
echo    Abre vite.config.js y cambia la línea base:
echo    base: '/NOMBRE-DE-TU-REPO/',
echo.
echo    Luego ejecuta:
echo    git add .
echo    git commit -m "Fix base URL"
echo    git push
echo.
pause
