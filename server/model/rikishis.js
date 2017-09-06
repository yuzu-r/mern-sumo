'use strict'
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RikishisSchema = new Schema ({
	name: {type: String, required: true, unique: true},
	kanji: String
	/*
	rankHistory: 	[
									{
										rank: {type: String, 
														required: true, 
														enum: ['Maegashira', 'Komusubi',
																	'Sekiwake','Ozeki','Yokozuna']
													},
										rankStartDate: {type: Date, required: true},
										rankEndDate: {type: Date}										
									}
								]	
	*/
});
// a static  is defined for the model
// a method is defined for a document	
/*
RikishisSchema.methods.getCurrentRank = function(cb) {
  let recent = this.rankHistory.reduce(function(max,current) {
  	console.log(max.startDate,current.startDate);
  	return max.startDate > current.startDate ? max : current; 
  });
  return recent.rank;
}
*/
// to be coded: given a date, return the rikishi's rank (method)

export default mongoose.model('Rikishi', RikishisSchema);