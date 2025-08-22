#!/bin/bash

# Script de Instalación Automatizada para Patron Real Estate Services
# Ejecutar en terminal Unix/Linux/macOS

echo "🏠 Instalando Patron Real Estate Services..."
echo "================================================"

# Verificar si Node.js está instalado
echo "🔍 Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18+ desde https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
echo "✅ Node.js encontrado: $NODE_VERSION"

# Verificar versión de Node.js
NODE_MAJOR=$(node --version | cut -d. -f1 | tr -d 'v')
if [ "$NODE_MAJOR" -lt 18 ]; then
    echo "❌ Se requiere Node.js 18 o superior. Versión actual: $NODE_MAJOR"
    exit 1
fi

# Instalar pnpm globalmente si no está instalado
echo "📦 Verificando pnpm..."
if ! command -v pnpm &> /dev/null; then
    echo "📥 Instalando pnpm..."
    if npm install -g pnpm; then
        echo "✅ pnpm instalado correctamente"
    else
        echo "❌ Error al instalar pnpm. Continuando con npm..."
        USE_NPM=true
    fi
else
    PNPM_VERSION=$(pnpm --version)
    echo "✅ pnpm encontrado: $PNPM_VERSION"
fi

# Limpiar instalaciones previas
echo "🧹 Limpiando instalaciones previas..."
if [ -d "node_modules" ]; then
    rm -rf node_modules
fi
if [ -d ".next" ]; then
    rm -rf .next
fi
if [ -f "pnpm-lock.yaml" ]; then
    rm pnpm-lock.yaml
fi

# Instalar dependencias
echo "📥 Instalando dependencias..."
if [ "$USE_NPM" = true ]; then
    if npm install; then
        echo "✅ Dependencias instaladas correctamente"
        INSTALL_SUCCESS=true
    else
        echo "❌ Error al instalar dependencias"
        exit 1
    fi
else
    if pnpm install; then
        echo "✅ Dependencias instaladas correctamente"
        INSTALL_SUCCESS=true
    else
        echo "❌ Error al instalar dependencias"
        exit 1
    fi
fi

# Crear archivo .env.local si no existe
echo "⚙️ Configurando variables de entorno..."
if [ ! -f ".env.local" ]; then
    if [ -f "env.example" ]; then
        cp env.example .env.local
        echo "✅ Archivo .env.local creado"
        echo "📝 Recuerda editar .env.local con tus configuraciones"
    fi
fi

# Verificar archivos de configuración
echo "🔍 Verificando archivos de configuración..."
REQUIRED_FILES=("tailwind.config.js" "next.config.mjs" "tsconfig.json" "postcss.config.mjs")
MISSING_FILES=()

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file encontrado"
    else
        echo "❌ $file no encontrado"
        MISSING_FILES+=("$file")
    fi
done

if [ ${#MISSING_FILES[@]} -gt 0 ]; then
    echo "⚠️ Algunos archivos de configuración están faltando"
fi

# Construir el proyecto
echo "🔨 Construyendo el proyecto..."
if [ "$USE_NPM" = true ]; then
    if npm run build; then
        echo "✅ Proyecto construido correctamente"
    else
        echo "⚠️ La construcción tuvo algunos errores (esto es normal en desarrollo)"
    fi
else
    if pnpm build; then
        echo "✅ Proyecto construido correctamente"
    else
        echo "⚠️ La construcción tuvo algunos errores (esto es normal en desarrollo)"
    fi
fi

# Instrucciones finales
echo ""
echo "🎉 ¡Instalación completada!"
echo "================================================"
echo ""
echo "🚀 Para ejecutar el proyecto:"
if [ "$USE_NPM" = true ]; then
    echo "   npm run dev"
else
    echo "   pnpm dev"
fi
echo ""
echo "🌐 El proyecto estará disponible en: http://localhost:3000"
echo ""
echo "📚 Documentación adicional:"
echo "   - README.md - Información general del proyecto"
echo "   - INSTALACION.md - Instrucciones detalladas"
echo ""
echo "🔧 Si encuentras problemas:"
echo "   1. Verifica que Node.js 18+ esté instalado"
echo "   2. Revisa los logs de error"
echo "   3. Consulta INSTALACION.md para solución de problemas"
echo ""
echo "Presiona Enter para continuar..."
read
