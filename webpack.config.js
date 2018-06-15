const webpack = require( 'webpack');
const liveReloadPlugin = require ('webpack-livereload-plugin');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		publicPath: '/client',
		path: `${__dirname}/client`
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loager']

			}

		]
	},
	resolve: {
		modules: [
			`${__dirname}/node_modules`
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new liveReloadPlugin()
	],
	devServer: {
		contentBase: './client',
		hot: true
	}
}
