const sum = require('../main/sum');
const hello = require('../main/hello');
const Clazz = require('../main/classUsage');

test('1 + 2 は 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('5 + 8 は 13', () => {
    expect(sum(5, 8)).toBe(13);
});

test('-30 + -21 は -51', () => {
    expect(sum(-30, -21)).toBe(-51);
});

test('-77 + 7 は -70', () => {
    expect(sum(-77, 7)).toBe(-70);
});

test('', () => {
    let clazz = new Clazz(1, 2);
    expect(clazz.value).toBe(3);
}) 