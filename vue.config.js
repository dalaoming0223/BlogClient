const path = require('path')
const name = 'blog client' // page title

function resolve (dir) {
  return path.join(__dirname, dir)
}
const port = process.env.port || process.env.npm_config_port || 8000
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    open: true,
    port: port,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: { // 设置代理
    //   '/api': {
    //     target: 'http://www.xxxxx.com/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/api'
    //     }
    //   }
    // },
    disableHostCheck: true
  },
  configureWebpack: {
    // name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
