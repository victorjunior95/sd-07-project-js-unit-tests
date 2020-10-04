const assert = require('assert');
const numbers = require('../src/numbers');

describe('#numbers', () => {
  it('should return an array and return if it has only numbers or not', () => {
    assert.deepStrictEqual(numbers([1, 2, 3, 4, 5]), true);
    assert.deepStrictEqual(numbers([1, 2, '3', 4, 5]), true);
    assert.deepStrictEqual(numbers([1, 'a', 3]), true);
    assert.deepStrictEqual(numbers(' '), true);
  });
});
