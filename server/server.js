import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import Location from './model/locations';

const app = express();
const router = express.Router();

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
mongoURI = mongoURI + '/learn-mern';
console.log('mongo connection: ', mongoURI);
mongoose.connect(mongoURI);

// get reference to the client build directory
const staticFiles = express.static(path.join(__dirname, '../../client/build'));

// pass the static files (react app) to the express app. 
app.use(staticFiles);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


router.get('/', (req,res) => {
	res.json({message: 'hi! this is root.'});
});

router.route('/locations')
	.get(function(req,res) {
		Location.find(function(err, locations) {
			if (err)
				res.send(err);
			res.json(locations);
		});
	})
	.post(function(req, res) {
		var location = new Location();
		location.city = req.body.city;
		location.info = req.body.info;
		location.save(function(err) {
			if (err)
				res.send(err);
			res.json({message: 'location successfully added!'});
		});
	});

app.use(router);
app.use('/*', staticFiles);
app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), () => {
	console.log(`Server listening on ${app.get('port')}`);
});

