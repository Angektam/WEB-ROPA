const jsonServer = require('json-server');
const path = require('path');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('db.json', { watch: true });
const middlewares = jsonServer.defaults();

const port = 3000;
const host = '0.0.0.0';

// Servir archivos estáticos desde la carpeta images ANTES de los middlewares
server.use('/images', express.static(path.join(__dirname, 'images'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.png') || filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  }
}));

server.use(middlewares);
server.use(router);

server.listen(port, host, () => {
  console.log(`JSON Server is running on http://${host}:${port}`);
  console.log(`Static files served from ./images`);
  console.log(`Logo available at: http://localhost:${port}/images/logo/logo-ana.png`);
});

