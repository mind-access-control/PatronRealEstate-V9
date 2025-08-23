# 🏠 Featured Listings - Patron Real Estate Services

## 📋 **Descripción General**

El **FeaturedListings** es un componente clave de la landing page que muestra las **propiedades más destacadas** de Patron Real Estate Services. Su propósito es captar el interés del usuario mostrando la calidad y variedad del inventario inmobiliario disponible.

**Archivo**: `components/featured-listings.tsx`

## 🎯 **Propósito y Objetivos**

### **Objetivos Principales**

1. **🏠 Mostrar Inventario**: Exhibir las mejores propiedades disponibles
2. **💼 Generar Interés**: Captar la atención del usuario con propiedades atractivas
3. **🔍 Facilitar Exploración**: Permitir al usuario explorar opciones
4. **📱 Ser Responsive**: Funcionar perfectamente en todos los dispositivos

### **Métricas de Éxito**

- **Clicks en "View Details"**
- **Tiempo de permanencia** en la sección
- **Engagement** con las tarjetas de propiedades
- **Conversión** a páginas de detalle

## 🏗️ **Estructura del Componente**

### **Layout Principal**

```tsx
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    {/* Título de la sección */}
    {/* Grid de propiedades destacadas */}
    {/* Botón de "View All Properties" */}
  </div>
</section>
```

### **Elementos Visuales**

1. **Fondo**: Blanco (`bg-white`) para contraste limpio
2. **Container**: Centrado con padding responsivo
3. **Grid**: 3 columnas en desktop, adaptativo en móvil
4. **Tarjetas**: PropertyCard individuales para cada propiedad

## 🏘️ **Propiedades Mostradas**

### **Grid de 6 Propiedades Destacadas**

| #   | Propiedad             | Tipo      | Precio     | Ubicación     | Características         |
| --- | --------------------- | --------- | ---------- | ------------- | ----------------------- |
| 1   | **Luxury Villa**      | Villa     | $2,500,000 | Miami Beach   | 5BR, 6BA, 8,500 sq ft   |
| 2   | **Modern Condo**      | Condo     | $850,000   | Downtown      | 2BR, 2BA, 1,200 sq ft   |
| 3   | **Family Home**       | Casa      | $1,200,000 | Coral Gables  | 4BR, 3BA, 3,200 sq ft   |
| 4   | **Waterfront Estate** | Mansión   | $4,800,000 | Key Biscayne  | 6BR, 7BA, 12,000 sq ft  |
| 5   | **Urban Loft**        | Loft      | $650,000   | Brickell      | 1BR, 1BA, 950 sq ft     |
| 6   | **Garden Townhouse**  | Townhouse | $950,000   | Coconut Grove | 3BR, 2.5BA, 2,100 sq ft |

### **Datos de Fuente**

```tsx
import { dummyProperties } from "@/lib/dummy-data";

export function FeaturedListings() {
  // Usa las primeras 6 propiedades del array dummyProperties
  const featuredProperties = dummyProperties.slice(0, 6);

  return (
    // Renderizado del grid
  );
}
```

## 🎨 **Diseño y Estilos**

### **Paleta de Colores**

- **Fondo**: `bg-white` (blanco limpio)
- **Tarjetas**: `bg-white` con sombras sutiles
- **Texto**: `text-gray-900` (gris oscuro para legibilidad)
- **Precios**: `text-blue-600` (azul para destacar)
- **Badges**: `bg-blue-100 text-blue-800` (azul claro para etiquetas)

### **Tipografía**

- **Título de Sección**: `text-3xl font-bold` (grande y negrita)
- **Subtítulo**: `text-gray-600` (gris medio para descripción)
- **Precios**: `text-2xl font-bold` (grande y destacado)
- **Características**: `text-sm text-gray-600` (pequeño y sutil)

### **Espaciado**

- **Sección**: `py-16` (padding vertical de 4rem)
- **Grid**: `gap-8` (espacio entre tarjetas)
- **Interno**: `p-6` (padding interno de cada tarjeta)

## 📱 **Responsive Design**

### **Desktop (1200px+)**

```tsx
<div className="grid grid-cols-3 gap-8">{/* 3 columnas */}</div>
```

- **Grid**: 3 columnas iguales
- **Espaciado**: `gap-8` (2rem entre elementos)
- **Tamaño**: Tarjetas grandes con mucho detalle

### **Tablet (768px - 1199px)**

```tsx
<div className="grid grid-cols-2 gap-6">{/* 2 columnas */}</div>
```

- **Grid**: 2 columnas (2x3)
- **Espaciado**: `gap-6` (1.5rem entre elementos)
- **Tamaño**: Tarjetas medianas con detalle moderado

### **Mobile (< 768px)**

```tsx
<div className="grid grid-cols-1 gap-4">{/* 1 columna */}</div>
```

- **Grid**: 1 columna (apilado vertical)
- **Espaciado**: `gap-4` (1rem entre elementos)
- **Tamaño**: Tarjetas pequeñas con detalle esencial

## 🏠 **Componente PropertyCard**

### **Estructura de la Tarjeta**

```tsx
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
  {/* Imagen con carrusel */}
  {/* Contenido de la propiedad */}
  {/* Botones de acción */}
</div>
```

### **Elementos de la Tarjeta**

1. **🖼️ Imagen Principal**: Con navegación de carrusel
2. **💰 Precio**: Destacado en azul
3. **📍 Ubicación**: Ciudad y barrio
4. **🏠 Características**: BR, BA, sq ft
5. **🏷️ Badges**: Status (For Sale, For Rent, etc.)
6. **❤️ Botón Like**: Corazón para favoritos
7. **👁️ Botón View**: "View Details"

### **Carrusel de Imágenes**

```tsx
<div className="relative group">
  <Image src={property.images[0]} alt={property.title} />
  {/* Navegación del carrusel */}
  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
    {/* Botones de navegación */}
  </div>
</div>
```

## 🔍 **Funcionalidades Interactivas**

### **Navegación del Carrusel**

- **Flecha Izquierda**: Imagen anterior
- **Flecha Derecha**: Imagen siguiente
- **Indicadores**: Puntos para navegar directamente
- **Hover**: Aparece al pasar el mouse

### **Botón de Like**

```tsx
<button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
</button>
```

- **Posición**: Esquina superior derecha
- **Estado**: Favorito/no favorito
- **Hover**: Cambia a rojo
- **Transición**: Suave y elegante

### **Botón View Details**

```tsx
<button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
  View Details
</button>
```

- **Estilo**: Azul principal con hover
- **Acción**: Navega a página de detalle
- **Responsive**: Ancho completo en móvil

## 📊 **Datos y Fuentes**

### **Origen de los Datos**

- **dummy-data.ts**: Archivo con datos mock realistas
- **Propiedades**: 6 propiedades destacadas del inventario
- **Imágenes**: URLs de Unsplash (fotos reales de alta calidad)
- **Precios**: Rango realista para Miami ($650K - $4.8M)

### **Estructura de Datos**

```tsx
interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
  status: "For Sale" | "For Rent" | "Sold";
  type: "House" | "Condo" | "Townhouse" | "Villa";
}
```

### **Actualización de Datos**

- **Manual**: Cambios en `lib/dummy-data.ts`
- **Frecuencia**: Según necesidades de marketing
- **Proceso**: Desarrollo → Build → Deploy

## 🎯 **Estrategia de Marketing**

### **Psicología del Usuario**

1. **Primera Impresión**: Propiedades atractivas captan atención
2. **Variedad**: Diferentes tipos y precios para todos los gustos
3. **Calidad**: Imágenes profesionales sugieren profesionalismo
4. **Acción**: Botones claros facilitan la exploración

### **Posicionamiento**

- **Premium**: Propiedades de alta gama
- **Variedad**: Diferentes tipos y precios
- **Profesionalismo**: Presentación elegante y detallada
- **Accesibilidad**: Fácil navegación y exploración

### **Call-to-Action**

- **"View Details"**: Explorar más información
- **"View All Properties"**: Ver todo el inventario
- **Like/Favorite**: Guardar para revisión posterior

## 📈 **Analytics y Tracking**

### **Eventos Rastreados**

- **View**: Cuando la sección es visible
- **Card View**: Visualización de tarjetas individuales
- **Image Navigation**: Uso del carrusel
- **Like**: Clicks en botón de favorito
- **View Details**: Clicks en botón de detalle

### **Métricas Clave**

- **CTR**: Click-through rate de botones
- **Engagement**: Tiempo en cada tarjeta
- **Image Views**: Navegación del carrusel
- **Conversion**: Usuarios que van a detalles

### **Heatmaps**

- **Click Tracking**: Dónde hacen clic los usuarios
- **Hover Areas**: Qué elementos captan más atención
- **Scroll Depth**: Hasta dónde llegan en la sección
- **Attention**: Qué propiedades miran más tiempo

## 🔍 **Testing y Optimización**

### **A/B Testing**

- **Layout**: Diferentes disposiciones del grid
- **Imágenes**: Diferentes fotos de propiedades
- **Precios**: Diferentes formatos de precio
- **CTAs**: Diferentes textos de botones

### **Performance Testing**

- **Lighthouse**: Score de performance
- **Core Web Vitals**: LCP, FID, CLS
- **Image Loading**: Optimización de imágenes
- **Render Time**: Tiempo de renderizado

### **Usability Testing**

- **Navegación**: Fácil uso del carrusel
- **Información**: Comprensión de datos de propiedades
- **Acciones**: Claridad de botones y CTAs
- **Responsive**: Funcionamiento en todos los dispositivos

## 🚀 **Roadmap de Mejoras**

### **Corto Plazo (1-2 meses)**

- [ ] Integración con API de propiedades reales
- [ ] Filtros por tipo y precio
- [ ] Búsqueda en tiempo real

### **Mediano Plazo (3-6 meses)**

- [ ] Tour virtual 360° de propiedades
- [ ] Comparación de propiedades
- [ ] Notificaciones de nuevas propiedades

### **Largo Plazo (6+ meses)**

- [ ] IA para recomendaciones personalizadas
- [ ] Realidad aumentada para visualización
- [ ] Chat en vivo con agentes

## 🎨 **Personalización y Temas**

### **Variantes de Layout**

- **Grid 3x2**: Actual (3 columnas)
- **Grid 2x3**: Alternativo (2 columnas)
- **Grid 1x6**: Vertical (1 columna)
- **Carousel**: Deslizante horizontal

### **Variantes de Contenido**

- **Propiedades Destacadas**: Actual
- **Propiedades por Zona**: Miami Beach, Downtown, etc.
- **Propiedades por Tipo**: Casas, Condos, Villas
- **Propiedades por Precio**: Rango de precios

### **Variantes de Diseño**

- **Tema Clásico**: Actual (elegante)
- **Tema Moderno**: Minimalista
- **Tema Premium**: Lujo y sofisticación
- **Tema Eco**: Sostenible y verde

---

## 📚 **Componentes Relacionados**

- [Landing Page Overview](./00-LANDING-PAGE-OVERVIEW.md)
- [Hero Section](./01-HERO-SECTION.md)
- [Stats Section](./02-STATS-SECTION.md)
- [PropertyCard Component](../Components/property-card.md)

---

**Última actualización**: Agosto 2025  
**Versión**: 1.0  
**Autor**: Equipo de Desarrollo Patron Real Estate
