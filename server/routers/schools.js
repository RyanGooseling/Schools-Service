const express = require('express');

const schoolsController = require('../controllers/schoolsController.js');

const router = express.Router();

router.get('/:id/schools', schoolsController.get);

module.exports = router;
