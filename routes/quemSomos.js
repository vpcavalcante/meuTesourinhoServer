const express = require('express');
const router = express.Router();
const controller = require('../controllers/quemSomos')
/* GET quemSomos. */
router.get('/', controller.quemSomos);

module.exports = router;