const reverseString = require('../reverse-string');

test('should reverse normal strings', () => {
  expect(reverseString("reverse")).toBe("esrever");
});

test('should accept other input type, accept them as strings and rever them', () => {
    expect(reverseString(1234567)).toBe("7654321");
});

test('should accept zero-length string', () => {
    expect(reverseString("")).toBe("");
});


  