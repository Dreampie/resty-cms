var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin")
var version = require("./package.json").version;
var banner =
    "/**\n" +
    " * resty-cms v" + version + "\n" +
    " * https://github.com/Dreampie/resty-cms\n" +
    " * Released under the MIT License.\n" +
    " */\n";

module.exports = {
  entry: {
    app: "./src/app"
  },
  output: {
    publicPath: "/",
    path: "./dist",
    filename: "assets/js/[name].min.js"
  },
  module: {
    // avoid webpack trying to shim process
    noParse: /es6-promise\.js$/,
    loaders: [
      {test: /\.js$/, exclude: /(node_modules|dist)/, loader: "babel?presets[]=es2015"},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /\.html$/, loader: "html"},
      {test: /\.(eot|svg|ttf)$/, loader: "file"},
      {test: /\.(png|jpg|gif)$/, loader: "url"},
      {test: /\.woff2?$/, loader: "url?limit=10000&minetype=application/font-woff"}
    ]
  },
  resolve: {
    modulesDirectories: ["node_modules"],
    extensions: ["", ".html", ".css", ".less", ".js"],
    alias: {vue: 'vue/dist/vue.js'}

  },
  plugins: [
    new webpack.BannerPlugin(banner, {raw: true}),
    new HtmlWebpackPlugin({inject: false, template: "src/index.html"})

  ]
}

if (process.env.NODE_ENV === 'production') {
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
} else if (process.env.NODE_ENV === 'development') {
  // module.exports.devtool = 'inline-source-map'
  module.exports.devServer = {
    contentBase: "dist",
    hot: true,
    compress: true,
    historyApiFallback: true,
    inline: true,
    port: 8080
  }
  module.exports.devtool = 'source-map'
  module.exports.debug = true
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ])
}



