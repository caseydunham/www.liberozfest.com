var express = require('express');
var router = express.Router();

/* GET schedule page. */
router.get('/', function(req, res, next) {
  res.render('schedule', { title: 'Schedule' });
});

module.exports = router;
