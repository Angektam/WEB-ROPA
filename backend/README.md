# Backend - Boutique Ana

API REST usando json-server para la aplicación Boutique Ana.

## Instalación

```bash
npm install
```

## Ejecución

### Modo desarrollo (con watch)
```bash
npm run dev
```

### Modo producción
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3000`

## Endpoints Disponibles

### Productos
- `GET /products` - Obtener todos los productos
- `GET /products/:id` - Obtener un producto por ID
- `GET /products?category=:category` - Filtrar por categoría
- `GET /products?isOnSale=true` - Productos en oferta
- `GET /products?isNew=true` - Productos nuevos
- `GET /products?name_like=:query` - Buscar productos por nombre
- `POST /products` - Crear un nuevo producto
- `PUT /products/:id` - Actualizar un producto
- `PATCH /products/:id` - Actualizar parcialmente un producto
- `DELETE /products/:id` - Eliminar un producto

### Categorías
- `GET /categories` - Obtener todas las categorías
- `GET /categories/:id` - Obtener una categoría por ID

### Usuarios
- `GET /users` - Obtener todos los usuarios
- `GET /users/:id` - Obtener un usuario por ID

### Pedidos
- `GET /orders` - Obtener todos los pedidos
- `POST /orders` - Crear un nuevo pedido

## Base de Datos

Los datos se almacenan en `db.json` y se actualizan automáticamente cuando se realizan cambios a través de la API.

