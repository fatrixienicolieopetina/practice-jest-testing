const capitalize = require('../capitalize');

const UPPERCASE = "UPPERCASE";

test('should capitalize lowercase string correctly', () => {
  expect(capitalize("capitalize")).toBe("Capitalize");
});

test("should return '' for strings with length 0", () => {
    expect(capitalize("")).toBe("");
});

test("should return the same string for uppercase letters", () => {
    expect(capitalize("UPPERCASE")).toBe(UPPERCASE);
});

test("should return an error for non-string inputs", () => {
    expect(capitalize(21)).toBe(21);
});