const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack(config, options) {
    // Further custom configuration here
    return config
  }
})
