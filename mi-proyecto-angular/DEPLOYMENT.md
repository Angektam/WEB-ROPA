# 🚀 Guía de Despliegue - Boutique Ana

## 📋 Pasos para Desplegar en GitHub Pages

### 1. **Configuración del Repositorio**

1. Ve a tu repositorio en GitHub: `https://github.com/Angektam/WEB-ROPA`
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Guarda los cambios

### 2. **Configuración de GitHub Actions**

El archivo `.github/workflows/deploy.yml` ya está configurado y se ejecutará automáticamente cuando hagas push a la rama `main`.

### 3. **Despliegue Automático**

```bash
# 1. Agregar todos los archivos
git add .

# 2. Hacer commit
git commit -m "Deploy: Configuración para GitHub Pages"

# 3. Push a main (esto activará el despliegue)
git push origin main
```

### 4. **Verificar el Despliegue**

1. Ve a la pestaña **Actions** en tu repositorio
2. Verifica que el workflow "Deploy to GitHub Pages" se ejecute correctamente
3. Una vez completado, tu sitio estará disponible en:
   **https://angektam.github.io/WEB-ROPA/**

## 🔧 Configuración Actual

- **Base Href**: `/WEB-ROPA/`
- **Build Command**: `npm run build:github-pages`
- **Output Directory**: `dist/boutique-ana/browser`
- **Redirects**: Configurado para SPA routing

## 📁 Archivos de Configuración

- `angular.json` - Configuración de build
- `.github/workflows/deploy.yml` - GitHub Actions
- `public/_redirects` - Redirecciones para SPA
- `public/.nojekyll` - Deshabilitar Jekyll
- `public/CNAME` - Dominio personalizado

## 🎯 URLs Disponibles

- **Desarrollo local**: `http://localhost:4201`
- **GitHub Pages**: `https://angektam.github.io/WEB-ROPA/`

## ⚠️ Notas Importantes

1. **Primer despliegue**: Puede tomar 5-10 minutos
2. **Actualizaciones**: Se despliegan automáticamente en cada push
3. **Cache**: Puede tomar unos minutos para ver los cambios
4. **Routing**: Las rutas de Angular funcionan correctamente

## 🐛 Solución de Problemas

### Error 404 en GitHub Pages
- Verifica que el `baseHref` sea `/WEB-ROPA/`
- Asegúrate de que el archivo `_redirects` esté presente
- Verifica que GitHub Actions se ejecute correctamente

### Rutas no funcionan
- El archivo `_redirects` debe contener: `/*    /index.html   200`
- Verifica que el archivo `.nojekyll` esté presente

### Build falla
- Ejecuta `npm run build:github-pages` localmente
- Verifica que todas las dependencias estén instaladas
