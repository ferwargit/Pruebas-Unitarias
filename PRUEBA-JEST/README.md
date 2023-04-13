# JEST

1.-Abro terminal en la carpeta del proyecto [PRUEBA-JEST].
Ejecuto:

``npm init -y``

["test": "jest"] y ejecutamos luego npm test

2.-Incorporamos jest como una dependencia de desarrollo

``npm i --save-dev jest``

3.-Creamos el archivo [suma.js] y dentro la funcion suma que vamos testear

```javascript
function suma(a, b) {
  return a + b;
}
```

4.-Hacemos click y generamos los tests con la extension y lo guardamos en un archivo que llamammos [suma.test.js]

Ejecutamos

npx jest / npm test

["test": "echo \"Error: no test specified\" && exit 1"]
