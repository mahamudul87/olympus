const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/olympus/'
    : '/',
    configureWebpack: {
        resolve: {
          alias: {
            '@': path.join(__dirname, '/src') 
          }
        }
    },
    
}