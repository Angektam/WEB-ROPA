# 🚀 Despliegue en Netlify

## Configuración Completada

### ✅ Archivos de Configuración
- **`netlify.toml`**: Configuración principal de Netlify
- **`public/netlify.toml`**: Configuración en directorio público
- **`_redirects`**: Redirecciones para SPA
- **`.nojekyll`**: Para evitar procesamiento de Jekyll
- **`404.html`**: Página de error personalizada

### 🔧 Configuración del Build
- **Comando de build**: `npm run build:github-pages`
- **Directorio de publicación**: `dist/boutique-ana/browser`
- **Node.js**: v20 (compatible con Angular 20)
- **Redirects**: Configurados para SPA

## Pasos para Desplegar en Netlify

### 1. Conectar Repositorio
1. Ir a [netlify.com](https://netlify.com)
2. Hacer clic en "New site from Git"
3. Seleccionar "GitHub"
4. Buscar y seleccionar el repositorio `WEB-ROPA`

### 2. Configuración del Build
- **Build command**: `npm run build:github-pages`
- **Publish directory**: `dist/boutique-ana/browser`
- **Node version**: 20

### 3. Variables de Entorno (si es necesario)
- No se requieren variables de entorno adicionales

### 4. Despliegue
1. Hacer clic en "Deploy site"
2. Esperar a que complete el build
3. El sitio estará disponible en la URL proporcionada

## URLs del Proyecto

- **Repositorio**: https://github.com/Angektam/WEB-ROPA
- **GitHub Pages**: https://angektam.github.io/WEB-ROPA/
- **Netlify**: Se generará automáticamente

## Ventajas de Netlify

- **Más confiable** para aplicaciones Angular
- **Redirects automáticos** para SPA
- **Despliegue automático** desde Git
- **HTTPS automático**
- **CDN global**

## Comandos Útiles

```bash
# Build local
npm run build:pages

# Desarrollo local
npm run dev

# Servidor local
npm start
```

## Solución de Problemas

### Si el build falla en Netlify:
1. Verificar que Node.js v20 esté configurado
2. Verificar que el comando de build sea correcto
3. Verificar que el directorio de publicación sea correcto

### Si las rutas no funcionan:
1. Verificar que `_redirects` esté configurado
2. Verificar que `netlify.toml` tenga los redirects correctos
3. Verificar que `404.html` esté configurado
