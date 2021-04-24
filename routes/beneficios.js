const express = require('express');
const router = express.Router();
const controller = require('../controllers/beneficios')
/* GET beneficios. */
router.get('/', controller.beneficios);

module.exports = router;