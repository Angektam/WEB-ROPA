# Frontend - Boutique Ana

Aplicación Angular para la tienda de moda femenina Boutique Ana.

## Instalación

```bash
npm install
```

## Ejecución

### Modo desarrollo
```bash
npm start
# o
ng serve
```

La aplicación se ejecutará en `http://localhost:4200`

## Construcción

```bash
npm run build
# o
ng build
```

## Estructura

- `src/app/components/` - Componentes reutilizables
- `src/app/pages/` - Páginas principales
- `src/app/services/` - Servicios (API, carrito, etc.)
- `src/app/models/` - Modelos de datos

## Servicios

### ProductService
Servicio para consumir la API de productos del backend.

### CartService
Servicio para gestionar el carrito de compras y lista de deseos (usa localStorage).

## Configuración

La URL de la API se configura en `src/app/services/product.service.ts`:

```typescript
private apiUrl = 'http://localhost:3000';
```

