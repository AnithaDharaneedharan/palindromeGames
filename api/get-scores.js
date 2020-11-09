const express = require('express');
const router = express.Router();
const { getScores } = require('../controllers/getScores.controller');


// Get request end point to get top 5 high scores
router.get('', getScores);


module.exports = router;
