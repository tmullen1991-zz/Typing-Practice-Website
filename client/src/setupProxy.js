const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://fast-fingers-typing.herokuapp.com',
      changeOrigin: true,
    })
  );
};