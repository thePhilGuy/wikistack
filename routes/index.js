var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Browse my Wikistack' });
});

router.get('/about_us', function(req, res, next) {
	res.render('about_us', {});
});

router.get('/new_page', function(req, res, next) {
	res.render('new_page', { title: 'Add Page'});
})

module.exports = router;
