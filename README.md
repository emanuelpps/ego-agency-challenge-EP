# EGO Agency - Challenge Frontend

Un proyecto desarrollado con Next.js que presenta un catálogo interactivo de vehículos Toyota, incluyendo listado de modelos y páginas de detalle con características y destacados.

## Deploy

Podés ver la aplicación funcionando en: **[https://ego-agency-challenge-ep.vercel.app/](https://ego-agency-challenge-ep.vercel.app/)**

## Descripción del Proyecto

Este challenge técnico implementa una experiencia de usuario moderna para explorar modelos de vehículos. La aplicación incluye:

- **Página principal**: Catálogo de vehículos con filtros por segmento y ordenamiento
- **Páginas de detalle**: Información completa de cada modelo con galería de características y destacados
- **Navegación fluida**: Sistema de rutas dinámicas con Next.js App Router
- **Animaciones**: Transiciones suaves con Framer Motion
- **Diseño responsive**: Optimizado para dispositivos móviles y desktop

## Tecnologías Utilizadas

- **Next.js 16.1.1** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos
- **Framer Motion** - Animaciones y transiciones
- **Montserrat** - Tipografía

## Instalación y Ejecución Local

### Prerequisitos

Tener instalado:

- Node.js (versión 18 o superior)
- npm, yarn, pnpm o bun

### Pasos para levantar el proyecto

1. **Cloná el repositorio**

   ```bash
   git clone https://github.com/emanuelpps/ego-agency-challenge-EP.git
   cd ego-agency-challenge
   ```
2. **Instalá las dependencias**

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```
3. **Ejecutá el servidor de desarrollo**

   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```
4. **Abrí tu navegador**

   Visitá [http://localhost:3000](http://localhost:3000) para ver la aplicación funcionando.

## Estructura del Proyecto

```
├── api/                    # Endpoints de la API
├── app/                    # App Router de Next.js
│   ├── [slug]/            # Rutas dinámicas para detalle
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página home
├── components/        
│   ├── animations/        # Componentes de animación
│   ├── layout/            # Navbar y Footer
│   └── ui/                # Componentes UI reutilizables
├── features/
│   └── cars/              # Feature de vehículos
│       ├── pages/         # Páginas del módulo
│       ├── services/      # Servicios de API
│       └── types/         # Definiciones TypeScript
└── lib/
    └── mappers/           # Transformadores de datos
```

## Funcionalidades Principales

### Catálogo de Vehículos

- Visualización en grilla responsive
- Filtrado por segmento (Autos, SUVs, Pickups)
- Ordenamiento por precio y año
- Hover effects interactivos

### Detalle de Modelo

- Hero section con imagen y descripción
- Galería de características con navegación
- Sección de destacados con layout alternado
- Animaciones al hacer scroll

### Navegación

- Navbar fijo con menú hamburguesa
- Footer institucional
- Páginas 404 personalizadas
- Loading states

## Características Técnicas

- **Server Components**: Optimización de rendimiento con RSC
- **Data Caching**: Revalidación automática de datos cada 60 segundos
- **Error Boundaries**: Manejo de errores a nivel de página
- **Type Safety**: TypeScript en todo el proyecto
- **Factory Pattern**: Para componentes de botones

---
