const path = require('path')

module.exports = {
  publicPath: "olympus-pages",
    configureWebpack: {
        resolve: {
          alias: {
            '@': path.join(__dirname, '/src') 
          }
        }
    },
}