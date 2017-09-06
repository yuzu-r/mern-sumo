import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import Basho from './model/bashos';
import Rikishi from './model/rikishis';
import FutureDate from './model/futureDates';
import Match from './model/matches';
import { ObjectId } from 'mongodb';

const app = express();
const router = express.Router();

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
mongoURI = mongoURI + '/learn-mern';
console.log('mongo connection: ', mongoURI);
mongoose.connect(mongoURI);

const staticFiles = express.static(path.join(__dirname, '../../client/build'));
// pass the static files (react app) to the express app. 
app.use(staticFiles);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router.get('/', (req,res) => {
	res.json({message: 'hi! this is root.'});
});

router.route('/bashos')
	.get(function(req,res) {
		Basho.find(function(err, bashos) {
			if (err)
				res.send(err);
			res.json(bashos);
		});
	})
	.post(function(req, res) {
		var basho = new Basho();
		basho.startDate = req.body.startDate;
		// need some date validation here??
		basho.city = req.body.city;
		console.log('in posting basho');
		console.log(req.body.startDate);
		console.log(req.body);
		// figure out the city based on the start date
		basho.save(function(err) {
			if (err)
				res.send(err);
			res.json({message: 'basho successfully added!'});
		});
	});

router.route('/bashos/:basho_id')
	.get(function(req, res) {
		console.log('getting matches for basho ', req.params.basho_id);
		Match
			.find({bashoId: req.params.basho_id}).
			sort({dayNumber:1, matchNumber: 1}).
			populate('eastId').
			populate('westId').
			exec(function(err, matches) {
				if (err)
					res.send(err);
				res.json(matches);
			})
	})

router.route('/bashos/:basho_id/:day_id/matches')
	.post(function(req, res) {
		let match = new Match();
		console.log('in match create route');
		match.bashoId = ObjectId(req.params.basho_id);
		match.dayNumber = req.params.day_id;
		match.matchNumber = req.body.matchNumber;
		match.eastId = ObjectId(req.body.eastId);
		match.westId = ObjectId(req.body.westId);
		match.winnerId = ObjectId(req.body.winnerId);
		match.isTieBreaker = req.body.isTieBreaker;
		match.save(function(err) {
			if (err)
				res.send(err);
			res.json({message: 'match successfully created!'});
		})
	})

router.route('/rikishis')
	.get(function(req,res){
		Rikishi.find(function(err, rikishis) {
			if (err)
				res.send(err);
			res.json(rikishis);
		})
	})
	.post(function(req, res) {
		let rikishi = new Rikishi();
		rikishi.name = req.body.name;
		rikishi.kanji = req.body.kanji;
		console.log('hello from the post rikishi route!');
		rikishi.save(function(err) {
			if (err)
				res.send(err);
			res.json({message: 'rikishi successfully added!'});
		});
	});

router.route('/rikishis/:rikishi_id')
	// the get will have a detailed profile ? including match history
	.put(function(req,res) {
		Rikishi.findById(req.params.rikishi_id, function(err, rikishi) {
			if (err)
				res.send(err);
			// only update rikishi if it changed
			(req.body.name) ? rikishi.name = req.body.name : null;
			(req.body.kanji) ? rikishi.kanji = req.body.kanji : null;
			rikishi.save(function(err) {
				if (err)
					res.send(err);
				res.json({message: 'rikishi was updated'});
			});
		});		
	})
	.delete(function(req, res) {
		Rikishi.remove({_id: req.params.rikishi_id}, function(err, rikishi) {
			if (err)
				res.send(err);
			res.json({message: 'rikishi was deleted'});
		});		
	});

	router.route('/admin/dates')
		.get(function(req,res) {
			FutureDate.find(function(err, dates) {
				if (err)
					res.send(err);
				res.json(dates);
			})
		})
		.post(function(req, res) {
			let futureDate = new FutureDate();
			futureDate.startDate = req.body.startDate;
			let endDate = new Date(futureDate.startDate);
			endDate.setDate(endDate.getDate()+14);
			futureDate.endDate = endDate;
			futureDate.city = req.body.city;
			console.log('hello from the post future date route!');
			futureDate.save(function(err) {
				if (err)
					res.send(err);
				res.json({message: 'date successfully added!'});
			})
		});

	router.route('/admin/dates/latest')
		.get(function(req,res) {
			console.log('in the latest route, trying to get basho date');
				FutureDate.findCurrentBasho(function(err,response) {
				if (err)
					res.send(err);
				//console.log('response from mongoose is ',response);
				res.json(response);
			});
		});

app.use(router);
app.use('/*', staticFiles);
app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), () => {
	console.log(`Server listening on ${app.get('port')}`);
});

