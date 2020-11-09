const { submitEntry } = require('../controllers/submitEntry.controller');
const { check } = require('express-validator');
const express = require('express');
const router = express.Router();

router.post(
  '',
  [check('name').isLength({ min: 2 }), check('word').isLength({ min: 2 })],
  submitEntry
);

module.exports = router;
