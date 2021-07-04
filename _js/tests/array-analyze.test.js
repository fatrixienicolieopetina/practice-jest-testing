const analyze = require("../analyze");
const object = analyze([1,8,3,4,2,6]);

test("should return correct average", () => {
    expect(object.average).toEqual(4);
});

test("should return correct min", () => {
    expect(object.min).toEqual(1);
});

test("should return correct max", () => {
    expect(object.max).toEqual(8);
});

test("should return correct array length", () => {
    expect(object.length).toEqual(6);
});

test("should throw an error message if array contents are not numbers", () => {
    expect(() => analyze([1,"eight",3,4,2,6])).toThrow("invalid input");
});

test("should throw an error if array is empty", () => {
    expect(() => analyze([])).toThrow("array is empty");
});


test("should throw an error if input in undefined", () => {
    expect(() => analyze()).toThrow("invalid input");
});