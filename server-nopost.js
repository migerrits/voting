var express = require('express');
var dapp = express();
var path = require('path');
var bodyParser = require('body-parser');
var RubixAPI = require('./lib/RubixAPI.js');

dapp.set('views', __dirname + '/public/html');
dapp.set('view engine', 'ejs');
dapp.engine('html', require('ejs').renderFile);
dapp.use(bodyParser.json());
dapp.use(bodyParser.urlencoded({extended:false}));


dapp.get('/', function (req, res) {
	res.render("login.html");
	//res.send('Rubix Dapp Stack!');
});

dapp.get('/index', function (req, res) {
	res.render("index.html");
});

dapp.get('/sharholder', function (req, res) {
	res.render("shareholder.html");
});

dapp.get('/corporate', function (req, res) {
	res.render("corporate.html");
});

dapp.get('/split', function (req, res) {
	res.render("split.html");
});


dapp.use(express.static(path.join(__dirname, (process.env.LITE === 'true' ? './../dist-lite' : '/public'))));

dapp.listen(3000, function () {
	console.log('Dapp is listening on port 3000.');
});

