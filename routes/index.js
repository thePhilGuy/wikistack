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


module.exports = router;
