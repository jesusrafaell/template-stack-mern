import express from 'express';
import indexRoute from './routes/index';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import path from 'path';

import './config/connectDB.js';

const app = express();
const compiler = webpack(webpackConfig);

app.set('port', process.env.PORT || 5000);
//webpack compiler

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api', indexRoute);

//static files
app.use(express.static(path.resolve(__dirname, '../client')));

//Listening
app.listen(app.get('port'), () => 
	console.log(`Listening on port: ${app.get('port')}`)
);
