const palindrome = require('../controllers/submitEntry.controller');

describe('submitEntry', () => {
  test('should return the test score', () => {
    expect(palindrome.getPalindromeScore('pop')).toBe(3);
    expect(palindrome.getPalindromeScore('poo')).toBe(0);
    expect(
      palindrome.getPalindromeScore('Eva, Can I Stab Bats In A Cave')
    ).toBe(22);
  });

  test('should store array of objects in data', () => {
    const palindromeFunction = palindrome.storePalindromeScore('anitha', 'madam', 5);
    expect(palindromeFunction).toHaveLength(1);
    expect(palindromeFunction).toEqual([{name:'anitha', word:'madam',points:5}]);
  });
});
