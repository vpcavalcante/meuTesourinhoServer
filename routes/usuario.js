const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario')
/* GET usuario. */
router.get('/', controller.usuario);

module.exports = router;
