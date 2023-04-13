// function suma(a, b) {
//     // Test 3 y 7



//         if (isNaN(Number(a)) || isNaN(Number(b))) {
//         // Si uno de los argumentos no es numérico, concatenamos los argumentos y devolvemos el resultado como una cadena.
//         return "" + a + b;
//         } else if (a === undefined || a === null || b === undefined || b === null) {
//         // Test 6: De lo contrario, sumamos los argumentos y devolvemos el resultado numérico.
//         return NaN;
//         } else {

//         // De lo contrario, sumamos los argumentos y devolvemos el resultado numérico.
//         return Number(a) + Number(b);
//         }
        



    // else {
    // // Test 6
    // return (a === undefined || a === null || b === undefined || b === null) ? NaN : a + b;
    // }
    // }



    // function suma(a, b) {

    //     if (isNaN(Number(a)) || isNaN(Number(b))) {
    //     // Test 3 y 7: Si uno de los argumentos no es numérico, concatenamos los argumentos y devolvemos el resultado como una cadena.
    //     return "" + a + b;
    //     } else {
    //     // Test 6: De lo contrario, sumamos los argumentos y devolvemos el resultado numérico.
    //     return (a === undefined || a === null || b === undefined || b === null) ? NaN : Number(a) + Number(b);
    //     }
    //     }



    // function suma(a, b) {
    //     if (typeof a !== "number" || typeof b !== "number") {
    //     return NaN;
    //     }
        
    //     if (!Number.isSafeInteger(a + b)) {
    //     return a + b;
    //     }
        
    //     return a + b;
    //     }





    // Para hacer que la función "suma" cumpla con el test "test_suma_handles_non_numeric_inputs", se puede modificar la función de la siguiente manera:

// function suma(a, b) {
// if ((typeof a !== "number" && typeof a !== "string") || (typeof b !== "number" && typeof b !== "string")) {
// return NaN;
// }

// if (!Number.isSafeInteger(a + b)) {
// return a + b;
// }

// return a.toString() + b.toString();
// }

// En la modificación, se agregó una condición para verificar si ambos valores de entrada son cadenas de texto. En este caso, la función devuelve la concatenación de ambas cadenas en lugar de la suma. Además, se cambió la primera validación para permitir cadenas de texto como entrada.

// Con estos cambios, la función "suma" debería cumplir con el test "test_suma_handles_non_numeric_inputs" y las validaciones previas que ya tenía la función.

function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      if (typeof a === "string" && !isNaN(Number(a))) {
        a = Number(a);
      } else if (typeof b === "string" && !isNaN(Number(b))) {
        b = Number(b);
      } else {
        return a.toString() + b.toString();
      }
    }
  
    if (!Number.isSafeInteger(a + b)) {
      return a + b;
    }
  
    return a + b;
  }
  





module.exports = suma;