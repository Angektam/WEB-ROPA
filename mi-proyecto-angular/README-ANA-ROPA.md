# ANA-ROPA - Boutique de Moda Femenina

## 🌟 Descripción
Boutique Ana es una aplicación web de moda femenina elegante y sofisticada, desarrollada con Angular 20. Ofrece una experiencia de compra completa con catálogo de productos, carrito de compras, lista de deseos y sistema de autenticación.

## 🚀 Demo en Vivo
**GitHub Pages:** [https://angektam.github.io/WEB-ROPA/](https://angektam.github.io/WEB-ROPA/)

## ✨ Características

### 🛍️ **Catálogo de Productos**
- 12 productos realistas con información completa
- Categorías: Vestidos, Blusas, Faldas, Chaquetas, Zapatos, Accesorios
- Filtros y búsqueda funcional
- Detalles de productos con material, cuidado y stock

### 🛒 **Carrito de Compras**
- Gestión completa de productos
- Actualización de cantidades
- Cálculo automático de totales
- Persistencia en localStorage

### ❤️ **Lista de Deseos**
- Agregar/remover productos favoritos
- Contador dinámico en el header
- Persistencia de datos

### 🎨 **Diseño y UX**
- Diseño responsive optimizado
- Animaciones suaves y transiciones
- Paleta de colores femenina y elegante
- Tipografía moderna con Google Fonts

### 🔐 **Autenticación**
- Formularios de login y registro
- Validación de campos
- Interfaz de usuario intuitiva

## 🛠️ **Tecnologías Utilizadas**

- **Angular 20** - Framework principal
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **RxJS** - Programación reactiva
- **Font Awesome** - Iconografía
- **Google Fonts** - Tipografía

## 📱 **Responsive Design**
- Optimizado para móviles, tablets y desktop
- Grid layouts adaptativos
- Navegación móvil mejorada
- Botones táctiles optimizados

## 🚀 **Despliegue**

### GitHub Pages
La aplicación se despliega automáticamente en GitHub Pages usando GitHub Actions:

1. **Build automático** en cada push a main
2. **Configuración optimizada** para GitHub Pages
3. **Routing SPA** correctamente configurado
4. **Base href** ajustado para el repositorio

### URLs Disponibles
- `/` - Página principal
- `/catalog` - Catálogo de productos
- `/cart` - Carrito de compras
- `/wishlist` - Lista de deseos
- `/login` - Iniciar sesión
- `/register` - Crear cuenta
- `/checkout` - Finalizar compra

## 🔧 **Desarrollo Local**

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm start

# Build para producción
npm run build

# Build para GitHub Pages
npm run build:github-pages
```

## 📁 **Estructura del Proyecto**

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── auth/           # Autenticación
│   │   ├── header/         # Header principal
│   │   ├── footer/         # Footer
│   │   └── toast-container/ # Notificaciones
│   ├── pages/              # Páginas principales
│   │   ├── home/           # Página principal
│   │   ├── catalog/        # Catálogo
│   │   ├── cart/           # Carrito
│   │   ├── wishlist/       # Lista de deseos
│   │   └── checkout/       # Checkout
│   ├── services/           # Servicios Angular
│   └── models/             # Modelos de datos
├── styles.scss             # Estilos globales
└── index.html              # HTML principal
```

## 🎯 **Funcionalidades Implementadas**

- ✅ Catálogo completo de productos
- ✅ Sistema de carrito funcional
- ✅ Lista de deseos
- ✅ Búsqueda y filtros
- ✅ Navegación responsive
- ✅ Formularios de autenticación
- ✅ Persistencia de datos
- ✅ Despliegue automático
- ✅ Routing SPA completo

## 🌐 **Enlaces Útiles**

- **Repositorio:** [https://github.com/Angektam/WEB-ROPA](https://github.com/Angektam/WEB-ROPA)
- **Demo:** [https://angektam.github.io/WEB-ROPA/](https://angektam.github.io/WEB-ROPA/)
- **Netlify:** [https://boutique-ana-angek.netlify.app/](https://boutique-ana-angek.netlify.app/)

---

**Desarrollado con ❤️ para Boutique Ana**
