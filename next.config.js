const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')

const nextConfig = {
  target: 'serverless',
}

module.exports = withPlugins([withSvgr], nextConfig)
