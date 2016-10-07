var devConfig = require('./webpack.config.js');

function updateLoader(loaders, test, updateLoaderCallback) {
  for (var i in loaders) {
    if (String(loaders[i].test) == String(test)) {
      updateLoaderCallback(loaders[i]);
      break;
    }
  }
}

// remove source maps for production build
updateLoader(
  devConfig.module.loaders,
  /\.scss$/,
  function(loaderObject) {
    loaderObject.loader = loaderObject.loader.replace(/\?sourceMap/g, '');
  }
);

module.exports = devConfig;