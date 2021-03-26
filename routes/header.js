const express = require('express');
const router = express.Router();
const controller = require('../controllers/header')
/* GET home page. */
router.get('/', controller.header)

router.post ("/", function (req,res) {
  console.log (req.body)
}); 

module.exports = router;
