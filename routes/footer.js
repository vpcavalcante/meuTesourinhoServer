const express = require('express');
const router = express.Router();
const controller = require('../controllers/footer')
/* GET home page. */
router.get('/', controller.footer)

router.post ("/", function (req,res) {
  console.log (req.body)
}); 

module.exports = router;
