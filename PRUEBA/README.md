# PRUEBA UNITARIA

1.-Abrimos la terminal en la carpeta del proyecto [PRUEBA] e iniciamos el proyecto bajo el control de npm:

``npm init --yes`` (Con yes evitamos las preguntas)

Obtenemos el package.json

2.-Instalación Mocha de forma global:

``npm i -g mocha``

3.-Instalación Chai:

``npm i chai``

4.-Para ejecutar nuestras pruebas unitarias en Visual Studio Code, necesitamos instalar la extensión "Mocha Test Explorer". Puedes hacerlo abriendo Visual Studio Code y seleccionando la pestaña de "Extensiones". Luego, busca "Mocha Test Explorer" e instálala.

5.-Dentro de la carpeta [PRUEBA] creamos el archivo *suma.js* y dentro la funcion suma que vamos a testear. Tenemos que exportarla.

```javascript
function suma(a, b) {
  return a + b;
}

module.exports = suma;
```

6.-Creamos una carpeta que se llame [test].
Aqui van todas nuestras pruebas.
Para generar los test usando la extension CodiumAI
Hacemos click en Generate

![Generate test](/PRUEBA/generate.jpg)
![Save file](/PRUEBA/save.jpg)

Se generan los tests y los guardamos en la carpeta de [test]con el nombre [suma-test.js]

7.-Vemos que los test generados hacen uso de ``expect``.
Dentro de [suma-test.js] incorporamos:

```javascript
var chai = require("chai");

var expect = chai.expect;

const suma = require('../suma');
```

8.-Ahora vamos a crear el comando que nos permitira ejecutar los tests. Vamos al **package.json** y copiamos en test:

Si instalo mocha de manera global

``"test": "mocha --reporter spec"``

9.-* Y luego en la terminal ejecutamos:

``npm test``
