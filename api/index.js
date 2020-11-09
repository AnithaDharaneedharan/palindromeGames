const express = require('express');
const router = express.Router();
const getScores = require('./get-scores');
const submitEntry = require('./submit-entry');


router.use('/api/getScores', getScores);
router.use('/api/submitEntry', submitEntry);



module.exports = router;