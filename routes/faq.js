var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('faq');
});

router.post ("/", function (req,res) {
  console.log (req.body)
}); 

module.exports = router;
