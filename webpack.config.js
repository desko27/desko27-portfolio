var path = require('path');

module.exports = {
  context: path.resolve('src/client/scripts'),
  entry: ['./entry.js'],
  output: {
    path: path.resolve('src/client/dist'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'src/client/dist'
  },

  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?sourceMap!autoprefixer-loader!sass-loader?sourceMap'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
}