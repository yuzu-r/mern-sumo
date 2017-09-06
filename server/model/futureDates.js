'use strict'
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const FutureDatesSchema = new Schema ({
	city: String,
	startDate: Date,
	endDate: Date
});

FutureDatesSchema.statics.findCurrentBasho = function(callback) {
  console.log('mongo is finding the current basho');
  // first see if there is a basho in progress:
  let today = new Date();
  let response = {};
  let that = this;
  this.find({startDate: {$lte: today}, endDate: {$gte: today}}, function(err, current) {
  	if (current.length > 0) {
  		// figure out what day of the current basho is today
  		let dayNumber = Math.floor((today - current[0].startDate) / 86400000) + 1;
  		callback(null, {inProgress: true, matchDay: dayNumber, basho: current[0]});
  	}
  	else {
  		// look for the basho closest to today (in the future)
  		let query=that.find({startDate: {$gte: today}}).limit(1).sort({startDate: 1});
  		query.exec(function(err, futureOne){
  			if (err)
  				response = {message: 'error'};
  			callback(null, {inProgress: false, matchDay: 0, basho: futureOne});
  		});
  		};
  	}
  )
};

/*
Cannot use a virtual for end date, because they are not queryable
Instead I am calculating during the create.
*/

export default mongoose.model('FutureDate', FutureDatesSchema);