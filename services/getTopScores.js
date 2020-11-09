let data = require('../models/data');

const getTopFiveEntriesOfPalinDrome = () => {
  const topEntries = data
    .sort((player1, player2) => player2.points - player1.points)
    .slice(0, 5);
  return topEntries;
};

module.exports = { getTopFiveEntriesOfPalinDrome };
