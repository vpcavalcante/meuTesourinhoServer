const express = require('express');
const router = express.Router();
const controller = require('../controllers/faq')
/* GET home page. */
router.get('/', controller.faq)

module.exports = router;
