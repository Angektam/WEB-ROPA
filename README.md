¡Hola\! 👚 Este es un excelente punto de partida para tu proyecto de e-commerce "Boutique Ana". He **mejorado y enriquecido la documentación** enfocándola más en una tienda de moda femenina, destacando las características clave y utilizando un lenguaje más atractivo para este nicho.

-----

## 🛍️ Boutique Ana - E-commerce de Moda Femenina

Proyecto de tienda virtual especializado en **ropa, accesorios y calzado para mujer**. Implementado con una arquitectura desacoplada (backend y frontend separados) para facilitar el desarrollo y escalabilidad.

### ✨ Características Destacadas

  * **Catálogo de Productos Completo:** Exploración de **prendas de vestir, accesorios y calzado** con detalles y fotos.
  * **Filtros de Moda:** Posibilidad de filtrar por **categoría** (`Vestidos`, `Blusas`, `Jeans`), **productos en oferta** (Outlet) y **novedades** (Nueva Colección).
  * **Experiencia de Compra Personalizada:** Implementación de **Carrito de Compras** y **Lista de Deseos** (ambos persistentes en el navegador).
  * **Búsqueda Rápida:** Funcionalidad de búsqueda por nombre para encontrar la prenda perfecta.

-----

## 🏗️ Estructura del Proyecto

El proyecto se divide en dos módulos principales: la **API de datos** (backend) y la **Aplicación Web** (frontend).

```
boutique-ana/
├── backend/          # API REST con json-server (Simulación de base de datos)
│   ├── db.json       # Base de datos JSON (Catálogo, Categorías, etc.)
│   └── package.json  # Dependencias del servidor de datos
├── frontend/         # Aplicación web desarrollada en Angular
│   ├── src/          # Código fuente (Componentes, Servicios, Rutas)
│   └── package.json  # Dependencias de la interfaz de usuario
└── package.json      # Scripts maestros para la gestión de todo el proyecto
```

-----

## 🛠️ Requisitos e Instalación

### Requisitos Previos

Asegúrate de tener instalado en tu sistema:

  * **Node.js** ($\ge$ v18)
  * **npm** (incluido con Node.js)

### Instalación de Dependencias

Para instalar todas las librerías necesarias en la raíz, backend y frontend:

```bash
npm run install:all
```

> 📌 **Opcional:** Si prefieres la instalación manual, sigue los pasos originales:
>
> 1.  `npm install` (Raíz)
> 2.  `cd backend && npm install`
> 3.  `cd ../frontend && npm install`

-----

## ▶️ Ejecución del Proyecto

### Desarrollo (Simultáneo)

El comando ideal para trabajar en el proyecto, ejecutando ambos servicios con **recarga automática** (watch mode):

```bash
npm run dev
```

| Servicio | Tecnología | URL de Acceso |
| :--- | :--- | :--- |
| **Backend** (API) | `json-server` | `http://localhost:3000` |
| **Frontend** (App) | `Angular Dev Server` | `http://localhost:4200` |

### Ejecución de Servicios por Separado

| Servicio | Comando | Alias | Descripción |
| :--- | :--- | :--- | :--- |
| **Backend** (Dev) | `npm run backend:dev` | `cd backend; npm run dev` | API en modo desarrollo (con *hot-reload*). |
| **Frontend** (Dev) | `npm run frontend` | `cd frontend; npm start` | Aplicación Angular con servidor de desarrollo. |
| **Producción** | `npm run start` | - | Ejecuta ambos servicios listos para un entorno de producción (sin watch). |

-----

## 📡 API del Backend (Catálogo de Moda)

El servidor simula una base de datos de productos de moda, crucial para el catálogo del frontend.

| Endpoint | Descripción | Ejemplo de Uso |
| :--- | :--- | :--- |
| `GET /products` | Obtener el **catálogo completo** de prendas. | |
| `GET /products/:id` | Consultar los **detalles** de un producto específico. | `/products/5` (Un vestido) |
| `GET /categories` | Listado de todas las **categorías** (e.g., Vestidos, Blusas). | |
| `GET /products?category=:cat` | **Filtrar por categoría** de ropa. | `/products?category=Vestidos` |
| `GET /products?isOnSale=true` | Ver todas las prendas en **Oferta** (Outlet). | |
| `GET /products?isNew=true` | Explorar la **Nueva Colección** (Novedades). | |
| `GET /products?name_like=:query` | **Buscar** prendas por nombre o descripción. | `/products?name_like=verano` |

-----

## 💖 Frontend (Aplicación Angular)

La interfaz de usuario construida con Angular es la vitrina de la tienda, interactuando con la API para gestionar la experiencia de compra.

  * **Rutas Principales:**
      * `/`: Página de inicio con **Productos Destacados** y **Novedades**.
      * `/catalogo`: Navegación y filtros del catálogo de ropa.
      * `/producto/:id`: Vista de detalle con tallas, colores y descripción.
      * `/carrito`: Revisión y gestión de los artículos a comprar.
      * `/deseos`: Artículos guardados para futuras compras.
  * **Almacenamiento Local:** El **Carrito de Compras** y la **Lista de Deseos** utilizan el `localStorage` del navegador para mantener la información persistente entre sesiones.

-----
