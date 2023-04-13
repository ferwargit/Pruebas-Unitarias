# Test 7

Modifica solo la funcion suma:

function suma(a, b) {

    // 6.-Test that the function can handle non-numeric inputs.
    return (a === undefined || a === null || b === undefined || b === null) ? NaN : a + b;
}

Para que los 2 siguientes tests sea exitoso:

// 3.-Tests that the function can handle non-numeric inputs. tags: [general behavior]
    it("test_suma_handles_non_numeric_inputs", () => {
        expect(suma("2", 3)).toBe("23");
        expect(suma("hello", "world")).toBe("helloworld");
        expect(suma(null, undefined)).toBeNaN();
    });

Y este tambien:

// 7.-Tests that the function returns nan when one input is a string. tags: [edge case]
    it("test_one_input_string", () => {
        expect(suma("hello", 5)).toBe(NaN);
        expect(suma(10, "world")).toBe(NaN);
    });

La función suma debe ser modificada para que pueda manejar entradas no numéricas. Para ello, podemos agregar una comprobación adicional en la función que verifique si los argumentos de entrada son números o no. Si alguno de los argumentos no es numérico, simplemente concatenamos los argumentos y devolvemos el resultado como una cadena. De lo contrario, sumamos los argumentos y devolvemos el resultado numérico.

Aquí está la función modificada:

function suma(a, b) {
if (isNaN(Number(a)) || isNaN(Number(b))) {
// Si uno de los argumentos no es numérico, concatenamos los argumentos y devolvemos el resultado como una cadena.
return "" + a + b;
} else {
// De lo contrario, sumamos los argumentos y devolvemos el resultado numérico.
return Number(a) + Number(b);
}
}

Con esta modificación, las pruebas 3 y 7 deberían ser exitosas.

Aquí está la función suma ajustada que mantiene las validaciones para los tests 3, 6 y 7:

function suma(a, b) {

if (isNaN(Number(a)) || isNaN(Number(b))) {
// Test 3 y 7: Si uno de los argumentos no es numérico, concatenamos los argumentos y devolvemos el resultado como una cadena.
return "" + a + b;
} else {
// Test 6: De lo contrario, sumamos los argumentos y devolvemos el resultado numérico.
return (a === undefined || a === null || b === undefined || b === null) ? NaN : Number(a) + Number(b);
}
}

Esta función ajustada primero verifica si alguno de los argumentos no es numérico y si es así, devuelve la concatenación de los argumentos como una cadena. De lo contrario, verifica si alguno de los argumentos es nulo o indefinido y si es así, devuelve NaN. Si ambos argumentos son numéricos y no son nulos o indefinidos, suma los argumentos y devuelve el resultado numérico. De esta manera, los tests 3, 6 y 7 deben ser exitosos.



it("test_suma_handles_non_numeric_inputs", () => {
        // expect(suma("2", 3)).toBe("23");
        // expect(suma("hello", "world")).toBe("helloworld");
        expect(suma(null, undefined)).toBeNaN();
    });

Manteniendo las validaciones que tiene la funcion summa:

function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
      return NaN;
  }

  if (!Number.isSafeInteger(a + b)) {
      return a + b;
  }
  return a + b;
}

Como se puede modificar para que se cumpla el siguiente test:

it("test_suma_handles_non_numeric_inputs", () => {
        expect(suma("2", 3)).toBe("23");
        expect(suma("hello", "world")).toBe("helloworld");
        expect(suma(null, undefined)).toBeNaN();
    });


Manteniendo las validaciones de la funcion suma como modificar la funcion suma:

function suma(a, b) {
        if (typeof a !== "number" || typeof b !== "number") {
        return NaN;
        }
        
        if (!Number.isSafeInteger(a + b)) {
        return a + b;
        }
        
        return a + b;
        }

De tal forma que pase exitoso el siguiente test: 

t("test_suma_handles_non_numeric_inputs", () => {
        expect(suma("2", 3)).toBe("23");
        expect(suma("hello", "world")).toBe("helloworld");
        expect(suma(null, undefined)).toBeNaN();
    });

En donde si a es un string y ese string es un numero y b es un numero, este es concatenado con a en un string y viceversa: expect(suma("2", 3)).toBe("23"); y si a y b son dos string son concatenados: expect(suma("hello", "world")).toBe("helloworld");