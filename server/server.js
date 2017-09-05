import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

const app = express();
const router = express.Router();

// get reference to the client build directory
const staticFiles = express.static(path.join(__dirname, '../../client/build'));

// pass the static files (react app) to the express app. 
app.use(staticFiles);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


router.get('/', (req,res) => {
	res.json({message: 'hi! this is root.'});
});

router.get('/cities',(req,res) => {
	const cities = [
		{name: 'Tokyo', honbasho: 'January, May, September'},
		{name: 'Osaka', honbasho: 'March'},
		{name: 'Nagoya', honbasho: 'July'},
		{name: 'Fukuoka', honbasho: 'November'}
	];
	res.json(cities);
});

app.use(router);
app.use('/*', staticFiles);
app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), () => {
	console.log(`Server listening on ${app.get('port')}`);
});

