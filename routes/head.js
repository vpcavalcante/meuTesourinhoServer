const express = require('express');
const router = express.Router();
const controller = require('../controllers/head')
/* GET home page. */
router.get('/', controller.head)

router.post ("/", function (req,res) {
  console.log (req.body)
}); 

module.exports = router;
