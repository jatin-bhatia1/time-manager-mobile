module.exports = {
    baseUrl: '',
    publicPath:
        process.env.NODE_ENV === "production" ? "/" : "/",
    pages: {
    app: {
      entry: './src/main.js',
      template: './index.html',
    },
  },
}