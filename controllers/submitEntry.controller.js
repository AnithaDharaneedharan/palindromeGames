const { validationResult } = require('express-validator');
const { getTopFiveEntriesOfPalinDrome } = require('../services/getTopScores');
let data = require('../models/data');

const submitEntry = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { name, word } = req.body;
  const palindromeScore = getPalindromeScore(word);
  storePalindromeScore(name, word, palindromeScore);
  const topEntries = getTopFiveEntriesOfPalinDrome();
  res.json(topEntries);
};

const storePalindromeScore = (name, word, score) => {
  const obj = { name: name, word: word, points: score };
  data.push(obj);
  return data;
};

// Get palindrome score. If word or sentence is not a palindrome returns 0
const getPalindromeScore = (str) => {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  if (reverseStr === lowRegStr) {
    return lowRegStr.length;
  } else {
    return 0;
  }
};

module.exports = {
  submitEntry,
  getPalindromeScore,
  storePalindromeScore,
};
