import mongoose from 'mongoose';

const URL = 'mongodb://localhost/temple-api';

mongoose.connect(URL, null, (err) => {
	if(err) return console.log('Error db Connection');
	console.log(`Mongoose Connect in ${URL}`);
});
