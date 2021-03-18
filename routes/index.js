const express = require('express');
const router = express.Router();
const controller = require('../controllers/index')
/* GET dashboard. */
router.get('/', controller.index);

module.exports = router;