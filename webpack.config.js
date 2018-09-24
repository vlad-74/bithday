var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './front/js/main.js',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader",
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/bundle.css')
  ]
};
