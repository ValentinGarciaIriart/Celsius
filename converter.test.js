const { convertToFarhenheit, getRandomColor } = require('./converter');

describe('convertToFarhenheit', () => {
    test('Converts 0 Celsius to 32 Fahrenheit', () => {
        expect(convertToFarhenheit(0)).toBe(32);
    });

    test('Converts -40 Celsius to -40 Fahrenheit', () => {
        expect(convertToFarhenheit(-40)).toBe(-40);
    });
});

describe('getRandomColor', () => {
    test('Returns a color from the list', () => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
        expect(colors).toContain(getRandomColor());
    });
});
