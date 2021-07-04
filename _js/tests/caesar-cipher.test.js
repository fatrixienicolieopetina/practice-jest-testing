const caesar = require("../caesar-cipher");

test("works with single letters", () => {
    expect(caesar('A', 1)).toEqual('B');
});

test('works with words and keeps the case', function() {
    expect(caesar('Aaa', 1)).toEqual('Bbb');
});
2
test('works with phrases', function() {
    expect(caesar('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
});

test('works with negative shift', function() {
    expect(caesar('Mjqqt, Btwqi!', -5)).toEqual('Hello, World!');
});

test('wraps', function() {
    expect(caesar('Z', 1)).toEqual('A');
});

test('works with large shift factors', function() {
    expect(caesar('Hello, World!', 75)).toEqual('Ebiil, Tloia!');
});

test('works with large negative shift factors', function() {
    expect(caesar('Hello, World!', -29)).toEqual('Ebiil, Tloia!');
});