var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('new_page', { title: 'Add Page'});
});

router.post('/submit', function(req, res, next) {
	var models = require('../models/');

	var title = req.body.title;
	var body = req.body.content;
	console.log(title + " " + body);
	var generateUrlName = function(title) {
	  if (typeof title != "undefined" && title !== "") {
	    // Removes all non-alphanumeric characters from name
	    // And make spaces underscore
	    return title.replace(/\s/ig,"_").replace(/\W/ig,"");
	  } else {
	    // Generates random 5 letter string
	    return Math.random().toString(36).substring(2,7);
	  }
	};

	var p = new models.Page({"title": title, "body": body, "url_name": generateUrlName(title)});
	p.save();
	res.redirect('/');

})

module.exports = router;
