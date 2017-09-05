'use strict'
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LocationsSchema = new Schema ({
	city: String,
	info: String
});

export default mongoose.model('Location', LocationsSchema);