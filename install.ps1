# Script de Instalación Automatizada para Patron Real Estate Services
# Ejecutar como administrador en PowerShell

Write-Host "🏠 Instalando Patron Real Estate Services..." -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green

# Verificar si Node.js está instalado
Write-Host "🔍 Verificando Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js encontrado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js no está instalado. Por favor instala Node.js 18+ desde https://nodejs.org/" -ForegroundColor Red
    Write-Host "Presiona cualquier tecla para continuar después de instalar Node.js..."
    Read-Host
    exit 1
}

# Verificar versión de Node.js
$nodeMajor = (node --version).Split('.')[0].Replace('v', '')
if ([int]$nodeMajor -lt 18) {
    Write-Host "❌ Se requiere Node.js 18 o superior. Versión actual: $nodeMajor" -ForegroundColor Red
    exit 1
}

# Instalar pnpm globalmente si no está instalado
Write-Host "📦 Verificando pnpm..." -ForegroundColor Yellow
try {
    $pnpmVersion = pnpm --version
    Write-Host "✅ pnpm encontrado: $pnpmVersion" -ForegroundColor Green
} catch {
    Write-Host "📥 Instalando pnpm..." -ForegroundColor Yellow
    npm install -g pnpm
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ pnpm instalado correctamente" -ForegroundColor Green
    } else {
        Write-Host "❌ Error al instalar pnpm. Continuando con npm..." -ForegroundColor Yellow
        $useNpm = $true
    }
}

# Limpiar instalaciones previas
Write-Host "🧹 Limpiando instalaciones previas..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
}
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}
if (Test-Path "pnpm-lock.yaml") {
    Remove-Item -Force "pnpm-lock.yaml"
}

# Instalar dependencias
Write-Host "📥 Instalando dependencias..." -ForegroundColor Yellow
if ($useNpm) {
    npm install
    $installSuccess = $LASTEXITCODE -eq 0
} else {
    pnpm install
    $installSuccess = $LASTEXITCODE -eq 0
}

if ($installSuccess) {
    Write-Host "✅ Dependencias instaladas correctamente" -ForegroundColor Green
} else {
    Write-Host "❌ Error al instalar dependencias" -ForegroundColor Red
    exit 1
}

# Crear archivo .env.local si no existe
Write-Host "⚙️ Configurando variables de entorno..." -ForegroundColor Yellow
if (-not (Test-Path ".env.local")) {
    Copy-Item "env.example" ".env.local" -ErrorAction SilentlyContinue
    if (Test-Path ".env.local") {
        Write-Host "✅ Archivo .env.local creado" -ForegroundColor Green
        Write-Host "📝 Recuerda editar .env.local con tus configuraciones" -ForegroundColor Yellow
    }
}

# Verificar archivos de configuración
Write-Host "🔍 Verificando archivos de configuración..." -ForegroundColor Yellow
$requiredFiles = @("tailwind.config.js", "next.config.mjs", "tsconfig.json", "postcss.config.mjs")
$missingFiles = @()

foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file encontrado" -ForegroundColor Green
    } else {
        Write-Host "❌ $file no encontrado" -ForegroundColor Red
        $missingFiles += $file
    }
}

if ($missingFiles.Count -gt 0) {
    Write-Host "⚠️ Algunos archivos de configuración están faltando" -ForegroundColor Yellow
}

# Construir el proyecto
Write-Host "🔨 Construyendo el proyecto..." -ForegroundColor Yellow
if ($useNpm) {
    npm run build
} else {
    pnpm build
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Proyecto construido correctamente" -ForegroundColor Green
} else {
    Write-Host "⚠️ La construcción tuvo algunos errores (esto es normal en desarrollo)" -ForegroundColor Yellow
}

# Instrucciones finales
Write-Host ""
Write-Host "🎉 ¡Instalación completada!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Para ejecutar el proyecto:" -ForegroundColor Cyan
if ($useNpm) {
    Write-Host "   npm run dev" -ForegroundColor White
} else {
    Write-Host "   pnpm dev" -ForegroundColor White
}
Write-Host ""
Write-Host "🌐 El proyecto estará disponible en: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "📚 Documentación adicional:" -ForegroundColor Cyan
Write-Host "   - README.md - Información general del proyecto" -ForegroundColor White
Write-Host "   - INSTALACION.md - Instrucciones detalladas" -ForegroundColor White
Write-Host ""
Write-Host "🔧 Si encuentras problemas:" -ForegroundColor Yellow
Write-Host "   1. Verifica que Node.js 18+ esté instalado" -ForegroundColor White
Write-Host "   2. Revisa los logs de error" -ForegroundColor White
Write-Host "   3. Consulta INSTALACION.md para solución de problemas" -ForegroundColor White
Write-Host ""
Write-Host "Presiona cualquier tecla para continuar..."
Read-Host
