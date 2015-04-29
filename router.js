var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
	res.render('home.html');
});

router.get("/contact", function(req, res, next){
	res.render('contact.html');
});

router.get("/projects", function(req, res, next){
	res.render('projects.html');
});

router.get("/travel", function(req, res, next){
	res.render('travel.html');
});

router.get('*', function(req, res){
	res.writeHead(404, {"Content-Type":"text/plain"});
	res.write("404 Not found");
	res.end();
});

exports.route = router;