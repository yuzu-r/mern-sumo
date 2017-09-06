'use strict'
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BashosSchema = new Schema ({
	city: String,
	startDate: Date
});

export default mongoose.model('Basho', BashosSchema);