import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NameSchema = new Schema({
	name: {type: String, require: true, minlength: 2, maxlength:50}
});

export default mongoose.model('Name', NameSchema);
