var path = require('path');

module.exports = {
  context: path.resolve('src/client/scripts'),
  entry: ['./entry.js'],
  output: {
    path: path.resolve('src/client/dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
      }
    ]
  }
}