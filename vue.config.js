module.exports = {
  assetsDir: 'static',

  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  },
}
