# Testing con - npx create-react-app

* 1.-Ubicado en la carpeta voy al terminal y ejecuto:

``npx create-react-app prueba1``

* 2.-Una vez creado el proyecto prueba1 ejecuto:

``cd prueba1``

* 3.-Ejecuto para verificar que todo este bien:

``npm start``

* 4.-Me ubico en la carpeta src y creo una carpeta components
* 5.-Dentro de ella creo un componente ProfileCard.jsx
* 6.-Dentro de la carpeta src creo una carpeta test donde voy a ir metiendo todas las pruebas y paso el archivo App.test.js dentro de esa carpeta
* 7.-Dentro de la carpeta test creo el archivo ProfileCard.test.js sobre el cual voy hacer las pruebas del componente
* 8.-Creo las pruebas dentro del archivo ProfileCard.test.js
* 9.-Para instalar Jest, primero debes asegurarte de que tienes npm instalado en tu sistema. Luego, debes ejecutar el siguiente comando en la terminal:

``npm install --save-dev jest``

******** No HACE FALTA *** pero por las dudas

* 9.1 -Una vez que Jest esté instalado, debes asegurarte de que esté configurado correctamente en tu aplicación. Para hacer esto, debes crear un archivo de configuración de Jest en la raíz de tu proyecto. Puedes nombrarlo jest.config.js y agregar lo siguiente:

module.exports = {
  testEnvironment: 'jsdom',
};

********

* 10.-En el archivo package.json actualizo en la seccion scripts

"test": "react-scripts test"

por

"test": "jest"

Una vez que hayas hecho esto, puedes ejecutar tus pruebas escribiendo npm test en la terminal. Jest buscará automáticamente tus pruebas en la carpeta __tests__ o en archivos que terminen con .test.js.

* 11.-Ejecuto las pruebas con el comando:

npm test

* 12.-Para instalar @babel/preset-react en tu proyecto, debes seguir los siguientes pasos:

Abre la terminal de tu ordenador y ubícate en el directorio de tu proyecto.

Ejecuta el siguiente comando para instalar @babel/preset-react y guardar la dependencia en el archivo package.json:

``npm install --save-dev @babel/preset-react
``

Asegúrate de tener la dependencia @babel/core instalada. Si no la tienes, ejecuta el siguiente comando:

``npm install --save-dev @babel/core
``

Crea un archivo .babelrc en la raíz de tu proyecto y agrega lo siguiente:

``{
  "presets": ["@babel/preset-react"]
}
``

Además, es posible que deba agregar @babel/plugin-transform-modules-commonjs a la sección 'plugins' de su configuración de Babel para habilitar la compatibilidad con ESM:

"plugins": ["@babel/plugin-transform-modules-commonjs"]

El archivo de configuracion .babelrc queda

``{
  "presets": [
    ["@babel/preset-env", { "targets": { "node": "current" } }],
    "@babel/preset-react"
  ],
  "plugins": ["@babel/plugin-transform-modules-commonjs"]
}``

Tenemos que instalar tambien 

npm install --save-dev @babel/plugin-transform-modules-commonjs

