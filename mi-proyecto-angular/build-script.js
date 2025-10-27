#!/usr/bin/env node

// Script de build personalizado para GitHub Pages
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando build para GitHub Pages...');

try {
  // Ejecutar build de Angular
  console.log('📦 Construyendo aplicación Angular...');
  console.log('🔧 Usando Node.js v20 para Angular 20...');
  execSync('ng build --configuration github-pages', { stdio: 'inherit' });
  
  // Verificar que el build se completó
  const distPath = path.join(__dirname, 'dist', 'boutique-ana', 'browser');
  if (!fs.existsSync(distPath)) {
    throw new Error('❌ El directorio de build no existe');
  }
  
  // Crear archivo .nojekyll en el directorio de build
  const nojekyllPath = path.join(distPath, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '');
  console.log('✅ Archivo .nojekyll creado');
  
  // Crear archivo _redirects en el directorio de build
  const redirectsPath = path.join(distPath, '_redirects');
  fs.writeFileSync(redirectsPath, '/*    /index.html   200');
  console.log('✅ Archivo _redirects creado');
  
  // Copiar archivos de configuración desde la raíz
  const rootNojekyll = path.join(__dirname, '.nojekyll');
  const rootRedirects = path.join(__dirname, '_redirects');
  const rootCNAME = path.join(__dirname, 'CNAME');
  const root404 = path.join(__dirname, '404.html');
  
  if (fs.existsSync(rootNojekyll)) {
    fs.copyFileSync(rootNojekyll, nojekyllPath);
    console.log('✅ Archivo .nojekyll copiado desde raíz');
  }
  
  if (fs.existsSync(rootRedirects)) {
    fs.copyFileSync(rootRedirects, redirectsPath);
    console.log('✅ Archivo _redirects copiado desde raíz');
  }
  
  if (fs.existsSync(rootCNAME)) {
    const cnamePath = path.join(distPath, 'CNAME');
    fs.copyFileSync(rootCNAME, cnamePath);
    console.log('✅ Archivo CNAME copiado desde raíz');
  }
  
  if (fs.existsSync(root404)) {
    const html404Path = path.join(distPath, '404.html');
    fs.copyFileSync(root404, html404Path);
    console.log('✅ Archivo 404.html copiado desde raíz');
  }
  
  console.log('🎉 Build completado exitosamente!');
  console.log(`📁 Archivos generados en: ${distPath}`);
  
} catch (error) {
  console.error('❌ Error durante el build:', error.message);
  process.exit(1);
}
