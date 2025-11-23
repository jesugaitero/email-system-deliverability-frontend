const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const start = process.env.NODE_ENV !== 'production';
const app = next({ start });
const handle = app.getRequestHandler();

app.prepare().then(() => {

  const server = express();

  if (start) {
    server.use('/api', createProxyMiddleware({
      target: process.env.NEXT_PUBLIC,
      changeOrigin: true,
    }))
  }

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:8000');
  })
})
  .catch(err => {
    console.log("Error", err);
  })