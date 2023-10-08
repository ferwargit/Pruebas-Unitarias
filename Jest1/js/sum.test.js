const sum = require('./sum');

test('Sumar correctamente 2 numeros', () => {
    // Lo que se espera que suceda
    expect(sum(1, 2)).toBe(3);
});