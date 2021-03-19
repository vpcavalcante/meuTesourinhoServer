const express = require('express');
const router = express.Router();
const controller = require('../controllers/dashboard')
/* GET dashboard. */
router.get('/', controller.dashboard);

module.exports = router;



