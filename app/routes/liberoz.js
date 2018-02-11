var express = require('express');
var router = express.Router();

/* GET liberoz page. */
router.get('/', function(req, res, next) {
  res.render('liberoz', { title: 'What is Liber Oz' });
});

module.exports = router;
