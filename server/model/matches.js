'use strict'
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MatchesSchema = new Schema ({
	bashoId: { type: Schema.Types.ObjectId, ref: 'Basho', required: true },
	dayNumber: {type: Number, min: 1, max: 15, required: true},
	matchNumber: {type: Number, min: 1, required: true},
	eastId: { type: Schema.Types.ObjectId, ref: 'Rikishi' },
	westId: { type: Schema.Types.ObjectId, ref: 'Rikishi' },
	winner: { type: Schema.Types.ObjectId, ref: 'Rikishi' },
	isTieBreaker: {type: Boolean, default: false}
});

export default mongoose.model('Match', MatchesSchema);