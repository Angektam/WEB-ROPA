# Boutique Ana - E-commerce de Moda Femenina

Proyecto separado en backend y frontend para una tienda de moda femenina.

## Estructura del Proyecto

```
boutique-ana/
├── backend/          # API REST con json-server
│   ├── db.json       # Base de datos JSON
│   └── package.json  # Dependencias del backend
├── frontend/         # Aplicación Angular
│   ├── src/          # Código fuente
│   └── package.json  # Dependencias del frontend
└── package.json      # Scripts para ejecutar ambos servicios
```

## Requisitos Previos

- Node.js (v18 o superior)
- npm

## Instalación

### Instalar todas las dependencias

```bash
npm run install:all
```

O instalar manualmente:

```bash
# Instalar dependencias del proyecto raíz
npm install

# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd ../frontend
npm install
```

## Ejecución

### Desarrollo (ambos servicios)

```bash
npm run dev
```

Esto ejecutará:
- Backend en `http://localhost:3000`
- Frontend en `http://localhost:4200`

### Ejecutar servicios por separado

**Backend:**
```bash
npm run backend:dev
# o
cd backend
npm run dev
```

**Frontend:**
```bash
npm run frontend
# o
cd frontend
npm start
```

## API Backend

El backend utiliza json-server y expone los siguientes endpoints:

- `GET /products` - Obtener todos los productos
- `GET /products/:id` - Obtener un producto por ID
- `GET /products?category=:category` - Filtrar por categoría
- `GET /products?isOnSale=true` - Productos en oferta
- `GET /products?isNew=true` - Productos nuevos
- `GET /products?name_like=:query` - Buscar productos
- `GET /categories` - Obtener todas las categorías

## Frontend

La aplicación Angular consume la API del backend y muestra:
- Catálogo de productos
- Productos destacados
- Búsqueda de productos
- Carrito de compras (localStorage)
- Lista de deseos (localStorage)

## Scripts Disponibles

- `npm run install:all` - Instala todas las dependencias
- `npm run dev` - Ejecuta backend y frontend en modo desarrollo
- `npm run start` - Ejecuta backend y frontend en modo producción
- `npm run backend` - Solo backend
- `npm run backend:dev` - Backend en modo desarrollo (con watch)
- `npm run frontend` - Solo frontend
- `npm run frontend:build` - Construir frontend para producción
