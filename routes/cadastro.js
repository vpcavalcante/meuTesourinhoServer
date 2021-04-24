const express = require('express');
const router = express.Router();
const controller = require('../controllers/cadastro')
/* GET cadastro. */
router.get('/', controller.cadastro);

module.exports = router;
