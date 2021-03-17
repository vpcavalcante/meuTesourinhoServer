const express = require('express');
const router = express.Router();
const controller = require('../controllers/contato')

/* GET home page. */
router.get('/', controller.contato)

module.exports = router;
