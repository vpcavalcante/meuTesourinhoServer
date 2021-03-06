var express = require('express');
var router = express.Router();

/* GET page faq contato. */
router.get('/', function(req, res, next) {
  res.render('faqContato');
});

module.exports = router;
