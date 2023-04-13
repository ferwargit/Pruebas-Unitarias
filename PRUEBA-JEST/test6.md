# Test 6

Modifica solo la funcion suma:

function suma(a, b) {
    return a + b;
}

Para que el siguiente test sea exitoso:

// 6.-Tests that the function can handle cases where one or both inputs are undefined or null. tags: [other possible issue]
    it("test_suma_handles_undefined_or_null_inputs", () => {
        expect(suma(undefined, 5)).toBeNaN();
        expect(suma(null, 10)).toBeNaN();
        expect(suma(undefined, undefined)).toBeNaN();
    });

Para hacer que la función 'suma' pueda manejar casos en los que uno o ambos parámetros sean undefined o null, puedes agregar una validación para verificar si los parámetros son válidos antes de realizar la suma. Puedes usar el operador ternario para verificar si los valores son undefined o null y, en caso afirmativo, devolver NaN. Aquí está el código modificado:

function suma(a, b) {
return (a === undefined || a === null || b === undefined || b === null) ? NaN : a + b;
}

Con esta modificación, la función suma manejará correctamente los casos en los que uno o ambos parámetros sean undefined o null.
