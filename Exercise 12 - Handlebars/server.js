'use strict';


// Command: node server.js
// Url: http://localhost:8080/home
var express = require('express'),
	exphbs = require('./index'); // "express-handlebars"

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const people = [
	{ name: 'John Dou' },
	{ name: 'David Gore' },
	{ name: 'Olivia Fletch' },
];
app.get('/home', function (req, res) {
	res.render('home', {
		content: 'This is my best friends list',
		people: people,
	});
});

app.listen(8080, function () {
	console.log('express-handlebars example server listening on: 8080');
});