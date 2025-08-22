# 📋 Instrucciones de Instalación - Patron Real Estate Services

## 🚀 Pasos para Ejecutar el Proyecto Localmente

### 1. Prerrequisitos

Asegúrate de tener instalado:

- **Node.js 18+** (recomendado: versión LTS más reciente)
- **pnpm** (recomendado) o **npm**

#### Instalar pnpm (recomendado):

```bash
npm install -g pnpm
```

### 2. Clonar y Navegar al Proyecto

```bash
git clone <repository-url>
cd PatronRealEstate-V9
```

### 3. Instalar Dependencias

```bash
# Con pnpm (recomendado)
pnpm install

# O con npm
npm install
```

### 4. Configurar Variables de Entorno

Copia el archivo de ejemplo y renómbralo:

```bash
# En Windows
copy env.example .env.local

# En macOS/Linux
cp env.example .env.local
```

Edita `.env.local` y configura las variables necesarias:

```env
# Configuración básica para desarrollo
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key_here
```

### 5. Ejecutar el Proyecto

```bash
# Con pnpm
pnpm dev

# O con npm
npm run dev
```

### 6. Abrir en el Navegador

El proyecto estará disponible en:

```
http://localhost:3000
```

## 🔧 Solución de Problemas Comunes

### Error: "Cannot find module"

Si encuentras errores de módulos no encontrados:

```bash
# Limpiar cache e instalar de nuevo
rm -rf node_modules
rm -rf .next
pnpm install
```

### Error: "Port 3000 is already in use"

Cambia el puerto:

```bash
pnpm dev --port 3001
```

### Error: "Tailwind CSS not working"

Verifica que el archivo `tailwind.config.js` esté presente y ejecuta:

```bash
pnpm build
```

### Error: "TypeScript compilation failed"

El proyecto tiene configurado `ignoreBuildErrors: true` en `next.config.mjs`, pero si quieres ver los errores:

```bash
# Editar next.config.mjs y cambiar a false
typescript: {
  ignoreBuildErrors: false,
}
```

## 📱 Acceso a las Diferentes Secciones

### Páginas Públicas

- **Home**: `http://localhost:3000/`
- **About**: `http://localhost:3000/about`
- **Buying**: `http://localhost:3000/buying`
- **Selling**: `http://localhost:3000/selling`
- **Search**: `http://localhost:3000/search`
- **Blog**: `http://localhost:3000/blog`

### Panel de Administración

- **Login**: `http://localhost:3000/admin/login`
- **Dashboard**: `http://localhost:3000/admin` (requiere autenticación)

### Panel de Agente

- **Login**: `http://localhost:3000/agent/login`
- **Dashboard**: `http://localhost:3000/agent` (requiere autenticación)

## 🧪 Datos de Prueba

Para probar la funcionalidad de autenticación, puedes usar:

### Admin

- Email: `admin@patron.com`
- Role: `admin`

### Agent

- Email: `agent@patron.com`
- Role: `agent`

**Nota**: El sistema actual usa localStorage y cookies para autenticación. En producción, se recomienda implementar un sistema más robusto.

## 🚀 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Servidor de desarrollo
pnpm build        # Construir para producción
pnpm start        # Servidor de producción
pnpm lint         # Ejecutar linting

# Limpieza
pnpm clean        # Limpiar archivos generados
```

## 📁 Estructura de Archivos Importantes

- `app/` - Páginas y rutas de Next.js
- `components/` - Componentes reutilizables
- `lib/` - Utilidades y configuraciones
- `public/` - Archivos estáticos
- `tailwind.config.js` - Configuración de Tailwind CSS
- `next.config.mjs` - Configuración de Next.js
- `tsconfig.json` - Configuración de TypeScript

## 🔍 Verificación de Instalación

Para verificar que todo esté funcionando correctamente:

1. ✅ El servidor se inicia sin errores
2. ✅ La página principal se carga correctamente
3. ✅ Los estilos de Tailwind se aplican
4. ✅ La navegación entre páginas funciona
5. ✅ Los componentes se renderizan correctamente

## 📞 Soporte

Si encuentras problemas durante la instalación:

1. Verifica que tienes la versión correcta de Node.js
2. Revisa los logs de error en la consola
3. Asegúrate de que todas las dependencias se instalaron correctamente
4. Verifica que los archivos de configuración estén presentes

---

**¡El proyecto debería estar funcionando correctamente ahora!** 🎉
