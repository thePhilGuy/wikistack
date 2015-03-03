var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BROWSE MY WIKISTACK' });
});

router.get('/about_us', function(req, res, next) {
	res.render('about_us', {});
});

module.exports = router;
