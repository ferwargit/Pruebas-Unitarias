const cloneArray = require('./cloneArray');

test('clonar correctamente la matriz', () => {
    const array = [1, 2, 3];
    // Lo que se espera que suceda
    expect(cloneArray(array)).toStrictEqual(array);
});