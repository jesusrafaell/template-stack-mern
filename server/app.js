import express from 'express';
import indexRoute from './routes/index';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import path from 'path';

import './config/connectDB.js';

const app = express();
const compiler = webpack(webpackConfig);

//Port
app.set('port', process.env.PORT || 5000);

//Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Webpack
app.use(webpackDevMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	filename: 'bundle.js',	
	stats: {
		color: true
	},
	historyApiFallback: true	
}));
app.use(webpackHotMiddleware(compiler, {
	log: console.log
}));

//routes
app.use('/api', indexRoute);

//static files
app.use(express.static(path.resolve(__dirname, '../client')));

//Listening
app.listen(app.get('port'), () => 
	console.log(`Listening on port: ${app.get('port')}`)
);
