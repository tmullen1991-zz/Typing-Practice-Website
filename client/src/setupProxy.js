const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // remove comment for dev heroku local
       target: 'http://localhost:5000',
      // remove comment for deployment
      //target: 'https://fast-fingers-typing.herokuapp.com',
      changeOrigin: true,
    })
  );
};