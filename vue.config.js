const path = require('path');//引入path模块
const packageJson = require('./package');// package.json
function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  chainWebpack:(config)=>{
    config.resolve.alias
      .set('@',resolve('./src'));

    /*if (process.env.use_analyzer) {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }*/
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? "/" + packageJson.name // git Page
    : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "https://health.sina.cn/c/api", // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
}
