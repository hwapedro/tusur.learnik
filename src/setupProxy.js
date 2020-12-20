const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api/v1',
    proxy({
      target: 'http://germangorodnev.com:5000',
      changeOrigin: true,
      secure: false
    }),
  )
}
