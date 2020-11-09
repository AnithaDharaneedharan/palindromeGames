const { getTopFiveEntriesOfPalinDrome } = require('../services/getTopScores');

const getScores = async (req, res) => {
  try {
    var topEntries = getTopFiveEntriesOfPalinDrome();
    res.json(topEntries);
  } catch (error) {
    res
      .status(500)
      .send({ error: 'An unexpected error occurred. Internal Server Error.' });
    throw error;
  }
};

module.exports = { getScores };
