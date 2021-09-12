const path = require('path')

// override webpack config
module.exports = {
	webpack: function (config, env) {
		config.resolve = {
			...config.resolve,
			alias: {
				components: path.resolve(__dirname, './src/components'),
				config: path.resolve(__dirname, './src/config'),
				images: path.resolve(__dirname, './src/images'),
				pages: path.resolve(__dirname, './src/pages'),
				src: path.resolve(__dirname, './src'),
				styles: path.resolve(__dirname, './src/styles'),
				types: path.resolve(__dirname, './src/types'),
				utils: path.resolve(__dirname, './src/utils'),
			},
			extensions: ['.ts', '.tsx', '.js', '.scss'],
		}

		return config
	},
}
