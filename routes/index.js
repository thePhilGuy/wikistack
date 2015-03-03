var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Page.find(function (err, data) {
  	if (err) {
  		console.log("Error: " + err);
  		res.respond(500, "Internal Error");
  	}
  	else res.render('index', { title: 'Browse my Wikistack', docs: data});
  });
});

router.get('/about_us', function(req, res, next) {
	res.render('about_us', {});
});

router.get('/wiki/:url_name', function(req, res, next) {
	var url = req.params.url_name;
	models.Page.find({url_name: url}, function (err, data) {
		if (err) {
	  		console.log("Error: " + err);
	  		res.respond(500, "Internal Error");
	  	}
	  	else {
	  		var page = data[0];
	  		res.render('show', { doc: page});
	  	}
	})
});


module.exports = router;
