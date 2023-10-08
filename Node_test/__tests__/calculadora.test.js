// https://www.youtube.com/watch?v=A-5b6IPdLA0

import test from"node:test";
import assert from "node:assert/strict";

// Otra forma de importar para commonJS
// require("node:test");   // Importa la librería de testeo

// Otra forma de utilizar test
// import { describe, it } from "node:test";

// De esta manera podemos utilzar bloques de test
// describe("mi coleccion" , () => {

//     describe("coleccion 1", () => {
//         it("caso 1", () => {

//         });
//         it("caso 2", () => {

//         });
//     });

//     describe("coleccion 2", () => {
//         it("caso 1", () => {

//         });
//         it("caso 2", () => {

//         });
//     });   
// });

// Funcion para codificar los tests, tendra 2 parametros, el 1ro el nombre del test y el 2do una función anonima que definira un callback
// test("un test", () => {
//     // Funcion para validar los test, tendra 2 parametros, el 1ro el valor a validar y el 2do el valor esperado
    
// }); // Inicializa el testeo

// test("dos test", () => {
//     // Funcion para validar los test, tendra 2 parametros, el 1ro el valor a validar y el 2do el valor esperado
    
// }); // Inicializa el testeo

function suma(a, b) {
    return a + b;
}

test("suma de 2 numeros", () => {
    const resultado = suma(2, 3);
    const esperado = 5;
    assert.equal(resultado, esperado);
});

// La funcion ok sirve para comparar valores si son verdaderos
test("otros assert", () => {
    assert.ok(2 + 2 === 4);
});