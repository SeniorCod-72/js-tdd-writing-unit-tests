// Your code here
export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
      points += /[aeiou]/i.test(char) ? 1 : 2;
    }
    return points;
  }
  // src/__tests__/utils.test.js

// Example utility function to be tested (if you have one)
const addNumbers = (a, b) => a + b;

describe('Utility Functions', () => {
  test('addNumbers should add two numbers correctly', () => {
    expect(addNumbers(1, 2)).toBe(3);  // Test that adding 1 + 2 equals 3
  });
});
