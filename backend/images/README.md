# Carpeta de Imágenes

Esta carpeta contiene las imágenes de los productos de Boutique Ana.

## Estructura

- `products/` - Imágenes de productos individuales

## Uso

Puedes subir las imágenes de los productos aquí y luego referenciarlas en el archivo `db.json` usando URLs absolutas.

### Ejemplo de uso en db.json:

```json
{
  "id": 25,
  "name": "Top Elegante",
  "image": "http://localhost:3000/images/products/top-elegante.jpg"
}
```

## Cómo agregar imágenes

1. Guarda tu imagen en la carpeta `products/` con un nombre descriptivo (ej: `top-elegante-encaje.jpg`)
2. Actualiza el campo `image` en `db.json` con la URL: `http://localhost:3000/images/products/nombre-archivo.jpg`
3. El servidor json-server servirá automáticamente las imágenes desde esta carpeta

## Formatos recomendados

- JPG/JPEG para fotografías
- PNG para imágenes con transparencia
- WebP para mejor compresión (opcional)

## Tamaños recomendados

- Ancho: 600-800px para vista de lista
- Ancho: 1200px para vista detallada
- Relación de aspecto: 3:4 o 4:5 para productos de moda

