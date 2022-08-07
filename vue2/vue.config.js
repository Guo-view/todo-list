const { defineConfig } = require('@vue/cli-service')
configureWebpack:{
  before : require('./mock/index')
}
module.exports = defineConfig({
  transpileDependencies: true,
})

