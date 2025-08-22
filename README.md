# 🏠 Patron Real Estate Services

Una plataforma inmobiliaria profesional construida con tecnologías modernas para ofrecer servicios completos de compra, venta y gestión de propiedades.

## 🚀 Stack Tecnológico

### Frontend Framework

- **Next.js 15** con App Router para renderizado híbrido
- **React 19** para la interfaz de usuario
- **TypeScript 5** para tipado estático y mejor desarrollo

### Estilos y UI

- **Tailwind CSS v4** con configuración inline para estilos modernos
- **shadcn/ui** para componentes base reutilizables
- **Radix UI** para componentes accesibles y personalizables
- **Lucide React** para iconografía consistente
- **Next.js Google Fonts** (Space Grotesk y DM Sans)

### Visualización de Datos

- **Recharts** para gráficos y analytics
- **Chart.js** integrado para visualizaciones complejas

### Formularios y Validación

- **React Hook Form** para manejo eficiente de formularios
- **Zod** para validación de esquemas
- **Hookform Resolvers** para integración

### Autenticación y Seguridad

- Sistema de autenticación custom usando localStorage y cookies
- **Middleware de Next.js** para protección de rutas
- Gestión de roles (admin, agent, user)

### Utilidades y Herramientas

- **date-fns** para manejo de fechas
- **clsx** y **tailwind-merge** para clases CSS condicionales
- **next-themes** para soporte de temas claro/oscuro
- **sonner** para notificaciones toast

### Runtime y Build

- **Next.js** con soporte para Server Actions
- **PostCSS** con plugins de Tailwind
- **ESLint** y **TypeScript** para calidad de código

## 📁 Estructura del Proyecto

```
PatronRealEstate V9/
├── app/                          # App Router de Next.js
│   ├── about/                    # Página Acerca de
│   ├── admin/                    # Panel de administración
│   │   ├── agents/              # Gestión de agentes
│   │   ├── leads/               # Gestión de leads
│   │   ├── properties/          # Gestión de propiedades
│   │   ├── settings/            # Configuraciones
│   │   └── login/               # Login de administrador
│   ├── agent/                    # Panel de agente
│   │   ├── analytics/           # Analytics del agente
│   │   ├── calendar/            # Calendario de citas
│   │   ├── leads/               # Gestión de leads del agente
│   │   ├── listings/            # Listings del agente
│   │   ├── messages/            # Sistema de mensajería
│   │   ├── profile/             # Perfil del agente
│   │   └── settings/            # Configuraciones del agente
│   ├── blog/                     # Blog inmobiliario
│   ├── buying/                   # Proceso de compra
│   ├── communities/              # Comunidades
│   ├── home-value/               # Evaluación de valor de casa
│   ├── property-management/      # Servicios de gestión
│   ├── search/                   # Búsqueda de propiedades
│   ├── selling/                  # Proceso de venta
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página principal
├── components/                    # Componentes reutilizables
│   ├── admin/                    # Componentes del panel admin
│   ├── agent/                    # Componentes del panel agente
│   ├── ui/                       # Componentes base (shadcn/ui)
│   ├── header.tsx                # Header principal
│   ├── footer.tsx                # Footer principal
│   ├── hero-section.tsx          # Sección hero
│   ├── featured-listings.tsx     # Listings destacados
│   ├── property-card.tsx         # Tarjeta de propiedad
│   ├── property-search.tsx       # Búsqueda de propiedades
│   └── ...                       # Otros componentes
├── hooks/                         # Custom hooks
│   ├── use-mobile.ts             # Hook para detección móvil
│   └── use-toast.ts              # Hook para notificaciones
├── lib/                           # Utilidades y configuraciones
│   ├── auth.ts                   # Sistema de autenticación
│   └── utils.ts                  # Funciones utilitarias
├── public/                        # Archivos estáticos
├── styles/                        # Estilos adicionales
├── middleware.ts                  # Middleware de Next.js
├── next.config.mjs               # Configuración de Next.js
├── postcss.config.mjs            # Configuración de PostCSS
├── tailwind.config.js            # Configuración de Tailwind
├── tsconfig.json                 # Configuración de TypeScript
└── package.json                  # Dependencias del proyecto
```

## 🗺️ Mapa del Sitio

### Páginas Públicas

- **Home** (`/`) - Página principal con hero, listings destacados y CTA
- **About** (`/about`) - Información sobre la empresa
- **Buying** (`/buying`) - Proceso de compra de propiedades
- **Selling** (`/selling`) - Proceso de venta de propiedades
- **Property Management** (`/property-management`) - Servicios de gestión
- **Communities** (`/communities`) - Información sobre comunidades
- **Home Value** (`/home-value`) - Evaluación de valor de propiedades
- **Search** (`/search`) - Búsqueda avanzada de propiedades
- **Blog** (`/blog`) - Contenido inmobiliario

### Panel de Administración (`/admin`)

- **Dashboard** (`/admin`) - Métricas y resumen general
- **Agents** (`/admin/agents`) - Gestión de agentes inmobiliarios
- **Leads** (`/admin/leads`) - Gestión de leads y prospectos
- **Properties** (`/admin/properties`) - Gestión de propiedades
- **Settings** (`/admin/settings`) - Configuraciones del sistema
- **Login** (`/admin/login`) - Acceso de administrador

### Panel de Agente (`/agent`)

- **Dashboard** (`/agent`) - Resumen personal del agente
- **Analytics** (`/agent/analytics`) - Métricas y reportes
- **Calendar** (`/agent/calendar`) - Calendario de citas
- **Leads** (`/agent/leads`) - Gestión de leads asignados
- **Listings** (`/agent/listings`) - Propiedades del agente
- **Messages** (`/agent/messages`) - Sistema de mensajería
- **Profile** (`/agent/profile`) - Perfil del agente
- **Settings** (`/agent/settings`) - Configuraciones personales
- **Login** (`/agent/login`) - Acceso de agente

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd PatronRealEstate-V9
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   pnpm dev
   # o
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `pnpm dev` - Servidor de desarrollo
- `pnpm build` - Construir para producción
- `pnpm start` - Servidor de producción
- `pnpm lint` - Ejecutar linting

## 🔧 Configuración del Entorno

### Variables de Entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
# Configuración de la base de datos (si se implementa)
DATABASE_URL=your_database_url

# API Keys (si se implementan APIs externas)
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Configuración de autenticación
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

### Configuración de Tailwind

El proyecto usa Tailwind CSS v4 con configuración inline. Los estilos están definidos en `app/globals.css` con variables CSS personalizadas para el tema inmobiliario.

## 🎨 Características del Diseño

### Sistema de Colores

- **Primario**: Verde esmeralda para transmitir confianza y crecimiento
- **Secundario**: Grises neutros para profesionalismo
- **Acentos**: Colores complementarios para destacar elementos importantes

### Tipografía

- **Space Grotesk**: Para títulos y encabezados
- **DM Sans**: Para texto del cuerpo y contenido

### Responsive Design

- Diseño completamente responsive
- Optimizado para móviles, tablets y desktop
- Componentes adaptativos

## 🔐 Autenticación y Seguridad

### Sistema de Roles

- **Admin**: Acceso completo al panel de administración
- **Agent**: Acceso al panel de agente con funcionalidades limitadas
- **User**: Acceso público a las páginas del sitio

### Protección de Rutas

- Middleware de Next.js para rutas protegidas
- Validación de cookies y localStorage
- Redirección automática para usuarios no autenticados

## 📱 Componentes Principales

### UI Components (shadcn/ui)

- **Button**: Botones con variantes y estados
- **Card**: Tarjetas para contenido estructurado
- **Input**: Campos de entrada con validación
- **Dialog**: Modales y diálogos
- **Table**: Tablas de datos
- **Form**: Formularios con validación
- **Toast**: Notificaciones del sistema

### Componentes Personalizados

- **PropertyCard**: Tarjeta de propiedad inmobiliaria
- **SearchBar**: Búsqueda avanzada de propiedades
- **PropertyMap**: Mapa interactivo de propiedades
- **AgentProfileCard**: Perfil de agente inmobiliario

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Desplegar automáticamente

### Otros Proveedores

- **Netlify**: Soporte completo para Next.js
- **Railway**: Despliegue con base de datos
- **AWS Amplify**: Para aplicaciones empresariales

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto:

- Crear un issue en GitHub
- Contactar al equipo de desarrollo
- Revisar la documentación técnica

---

**Patron Real Estate Services** - Construyendo el futuro inmobiliario con tecnología de vanguardia. 🏠✨
