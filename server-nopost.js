var express = require('express');
var bodyparser = require('body-parser');
var dapp = express();
var path = require('path');
var bodyParser = require('body-parser');
var RubixAPI = require('./lib/RubixAPI.js');

dapp.set('views', __dirname + '/public');

dapp.set('view engine', 'ejs');
dapp.engine('html', require('ejs').renderFile);
dapp.use(bodyParser.json());
dapp.use(bodyParser.urlencoded({extended:false}));

// ------------------------------------------------
// new for handling database
var application_root = __dirname;

var databaseUrl = __dirname + "/db/user.db"; 
var Datastore = require('nedb');
db = {};
db.users = new Datastore({ filename: databaseUrl, autoload: true }); // to autoload datastore

// Config
//dapp.configure(function () {
  //dapp.use(bodyParser());
  //dapp.use(express.methodOverride());
  //dapp.use(dapp.router);
  dapp.use(express.static(path.join(application_root, "/public")));
  //dapp.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
//});

// API service
dapp.get('/api', function (req, res) {
  res.send('Our Sample API is up...');
});

// Test service
dapp.get('/getangularusers', function (req, res) {
	//res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Origin", "http://54.165.159.172/");
	res.header("Access-Control-Allow-Methods", "GET, POST");
		// The above 2 lines are required for Cross Domain Communication(Allowing the methods that come as Cross
		// Domain Request

	db.users.find('', function(err, users) { // Query in NeDB via NeDB Module
	if( err || !users) 
		console.log("No users found");
	else 
	{
		res.writeHead(200, {'Content-Type': 'application/json'}); // Sending data via json
		str='[';
		users.forEach( function(user) {
			str = str + '{ "name" : "' + user.username + '"},' +'\n';
		});
		str = str.trim();
		str = str.substring(0,str.length-1);
		str = str + ']';
		res.end( str);
                // Prepared the jSon Array here
	}
  });
});

dapp.post('/insertangularneuser', function (req, res){
	console.log("POST: ");
	//res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Origin", "http://54.165.159.172/");
	res.header("Access-Control-Allow-Methods", "GET, POST");
		// The above 2 lines are required for Cross Domain Communication(Allowing the methods that come as Cross 
		// Domain Request

	console.log(req.body);
	console.log(req.body.mydata);
	var jsonData = JSON.parse(req.body.mydata);

	db.users.save({email: jsonData.email, password: jsonData.password, username: jsonData.username},
		function(err, saved) { // Query in NeDB via NeDB Module
			if( err || !saved ) res.end( "User not saved"); 
			else res.end( "User saved");
		});
});

// end of new code
// ------------------------------------------------
// old code
//dapp.use(express.static(path.join(__dirname, '/public')));
// ------------------------------------------------



dapp.get('/', function (req, res) {
	res.render("html/login.html");
	//res.send('Rubix Dapp Stack!');
});

dapp.get('/index', function (req, res) {
	res.render("html/index.html");
});

dapp.get('/shareholder', function (req, res) {
	res.render("html/shareholder.html");
});

dapp.get('/voting', function (req, res) {
	res.render("html/voting.html");
});

dapp.get('/corporate', function (req, res) {
	res.render("html/corporate.html");
});

dapp.get('/split', function (req, res) {
	res.render("html/split.html");
});

dapp.listen(3000, function () {
	console.log('Dapp is listening on port 3000.');
});

