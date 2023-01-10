const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 服务配置
  devServer:{
    // port: 8080, // 启用8080端口
    open: false,  // 启动后自动打开浏览器
    proxy:{
      '/api':{
        target: 'http://38.60.28.154:9999/', // 换成后端地址
        // ws:true,
        changeOrigin: true,
        pathRewrite:(path) => path.replace(/^\/api/, "")
      }
    }
  }
})
