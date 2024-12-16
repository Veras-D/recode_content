const express = require('express');
const router = express.Router();
const equationController = require('../controllers/equationController');

router.get('/', equationController.getAllEquations);
router.post('/solve', equationController.solveEquation);

module.exports = router;