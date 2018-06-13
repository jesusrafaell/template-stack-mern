import express from 'express';
import indexRoute from './routes/index';

import './config/connectDB.js';

const app = express();

app.set('port', process.env.PORT || 5000);
//webpack compiler

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api', indexRoute);

//Listening
app.listen(app.get('port'), () => 
	console.log(`Listening on port: ${app.get('port')}`)
);
