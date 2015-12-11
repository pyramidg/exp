var express = require('express');
var router = express.Router();

//  /* GET home page. */
//router.get('/', function(req, res, next) {
//res.render('index', { title: 'Express' });
//});

// alert('Hello world!');

router.get('/', function(req, res) {
	res.render('index', {
	title: 'My App!',
	age: 333
  });
});
module.exports = router;
