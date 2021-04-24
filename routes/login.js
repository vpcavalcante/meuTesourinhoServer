const express = require('express');
const router = express.Router();
const controller = require('../controllers/login')

/* GET home page. */
router.get('/', controller.viewLogin)
router.post('/', controller.formLogin)

module.exports = router;
