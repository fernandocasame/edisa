module.exports = {
  "publicPath": "/",
  "transpileDependencies": [
    "vue-echarts",
    "resize-detector",
    "vuetify"
  ],
  "configureWebpack": {
    "optimization": {
      "splitChunks": {
        "chunks": "all"
      }
    }
  }
}