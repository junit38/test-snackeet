// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')


const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
	{
		webpack: (config) => {
			config.node = {
				fs: 'empty'
			}
			// config.plugins.push(new LodashModuleReplacementPlugin())
			return config
		},
		async redirects () {
			return [{
				source: '/favicon.ico',
				destination: '/static/favicon.ico',
				permanent: true
			}]
		},
		poweredByHeader: false,
		async headers () {
			return [
				{
					source: '/:id*',
					headers: [
						{
							key: 'Content-Security-Policy',
							value: 'frame-src *'
						}
					]
				}
			]
		}
	}
)
