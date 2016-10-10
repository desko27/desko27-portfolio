var path = require('path');

module.exports = {
  context: path.resolve('src/client/scripts'),
  entry: ['./entry.js'],
  output: {
    path: path.resolve('src/client/public/dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'src/client/public'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
}