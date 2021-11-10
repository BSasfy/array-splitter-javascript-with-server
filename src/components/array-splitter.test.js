const groupArrayElements = require('./array-splitter');

test('given the right inputs, returns a new array split to sub arrays', () => {
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 2)).toBe("[1, 2, 3] [4, 5, 6]")
});