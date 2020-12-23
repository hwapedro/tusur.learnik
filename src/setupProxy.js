const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api/v1',
    proxy({
      target: 'https://server.learnik.fun/',
      changeOrigin: true,
      secure: true
    }),
  )
}
