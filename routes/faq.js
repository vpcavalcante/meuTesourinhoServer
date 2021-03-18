const express = require('express');
const router = express.Router();
const controller = require('../controllers/faq')
/* GET home page. */
router.get('/', controller.faq)

router.post ("/", function (req,res) {
  console.log (req.body)
}); 

module.exports = router;
