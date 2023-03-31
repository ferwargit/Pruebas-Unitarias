// exports.addTest = function suma(a, b) {
//   return a + b;
// }
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Ambos argumentos deben ser números");
  }
  return a + b;
}

module.exports = suma;

// Cuando se define una función o variable en un archivo de JavaScript, por defecto esa función o variable está limitada al alcance (scope) de ese archivo. Sin embargo, a veces queremos que esa función o variable esté disponible en otros archivos de JavaScript. Para hacer esto, podemos utilizar la palabra clave "exports" en Node.js.

// En el código que proporcionaste, la función "suma" se define como una propiedad del objeto "exports". Al hacer esto, la función "suma" se convierte en una propiedad pública del módulo actual, lo que significa que otras partes del programa pueden acceder a ella.

// Por lo tanto, si otro archivo de JavaScript requiere este archivo (usando la función "require"), también tendrá acceso a la función "suma" a través de la propiedad "addTest" del objeto exports.
