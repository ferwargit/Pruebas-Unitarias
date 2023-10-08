const subtract = require('./subtract');

test('Restar correctamente 2 numeros', () => {
    // Lo que se espera que suceda
    expect(subtract(1, 2)).toBe(-1);
});