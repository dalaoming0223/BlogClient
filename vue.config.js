module.exports = {
  devServer: {
    proxy: { // 设置代理
      '/api': {
        target: 'http://www.xxxxx.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
    disableHostCheck: true
  }
}
