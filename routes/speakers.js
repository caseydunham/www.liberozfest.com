var express = require('express');
var router = express.Router();

/* GET speakers page. */
router.get('/', function(req, res, next) {
  res.render('speakers', { title: 'Speakers' });
});

module.exports = router;
