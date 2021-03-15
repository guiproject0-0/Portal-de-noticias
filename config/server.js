var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');


var index= express();
index.set('view engine', 'ejs');
index.set('views', './app/views');

index.use(express.static('./app/public'));
index.use(bodyParser.urlencoded({extended: true}));


consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controller')
	.into(index);

module.exports = index;
