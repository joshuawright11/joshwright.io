var http = require("http");
var url = require("url");
var path = require('path');

var express = require("express");
var app = new express();

app.use(express.static(path.join(__dirname + '/public')));
app.engine('.html', require('ejs').renderFile);

function start(route, handlers) {
	app.use(require("./router").route);
	app.listen(8888);
}

exports.start = start;