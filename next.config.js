const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack(config, options) {
    if (options.dev) {
      config.module.rules.push({
        test: [/\.js$/, /\.jsx$/],
        loader: 'eslint-loader',
      });
    }
    return config
  },
  sassLoaderOptions: {
    includePaths: ['node_modules']
  }
})
