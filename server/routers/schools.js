const express = require('express');

const schoolsController = require('../controllers/schoolsController.js');

const router = express.Router();

router.get('/', schoolsController.get);

module.exports = router;
