# Testing en React.js: Guía Práctica y Herramientas Esenciales (Jest, Testing Library, Cypress)

[Testing en React.js](https://www.youtube.com/watch?v=bTGil8qPmXo)

Por que es importante el Testing

1.-CALIDAD
2.-PREVENCION DE ERRORES
3.-AHORRO DE TIEMPO Y RECURSOS
4.-FACILITA EL MANTENIMIENTO
5.-SATISFACCION DEL USUARIO FINAL
6.-CONFIANZA EN EL EQUIPO DE DESARROLLO

## Testing Unitario

Son la base de la pirámide del Testing.
Jest - Framework de Testing
  Facilidad de uso
  Velocidad
  Simplicidad
  Configuracion minima
  Snapshot Testing
  Coverage o Cobertura de Pruebas
  mocky - Simulacion de funciones y módulos
Vitest - Unit-test-framework

## Test de Integracion

Verificar que los componentes funcionan correctamente
cuando interactuen entre si.
React Testing Library
Se pueden hacer queries a los componentes de React
Simula la interaccion del Usuario
Facil integracion con Jest

## Test End-to-End

Verifica que el funcionamiento de la aplicacion es el que se espera.
cypress.io
@playwright/test

## Para ejecutar los test

Una vez creado el proyecto, me ubico en la carpeta del proyecto: creo una carpeta con el nombre de tests y alli guardo todos los archivos de las pruebas con la extension .test.js.

Para que las pruebas unitarias puedan ser encontradas por el comando "npm test" es necesario que se ubiquen dentro de la carpeta "src" y tengan un nombre que comience con "test" o termine con ".spec.js" o ".test.js".

Además, asegúrate de haber instalado las dependencias necesarias para realizar pruebas unitarias en tu proyecto, como Jest. Para hacerlo, ejecuta el siguiente comando:

npm install jest --save-dev

Luego, verifica que en el archivo "package.json" se haya añadido la siguiente línea en la sección "scripts":

"test": "jest"

Finalmente, ejecuta el comando "npm test" y deberían correrse tus pruebas unitarias ubicadas en la carpeta "tests" dentro de la carpeta "src".

npm test

[Video](https://www.youtube.com/watch?v=tgWBQZNCOT0)

## JEST JS tutorial en español para PRINCIPIANTES | 🧑‍💻 Curso de Testing en Javascript

Si estoy en Node.js (Sin react), tengo que crear el archivo package.json
Ejecuto:

npm init -y

Me crea el archivo package.json por default
Luego ejecuto:

touch .gitignore

Y dentro del archivo .gitignore agrego:

node_modules

Luego ejecuto:

npm i jest -D

Luego en el archivo package.json dentro de la seccion "scripts" agregamos:

"test": "jest"

(npm test -- --coverage)

Para la compatibilidad con babel
npm install --save-dev babel-jest @babel/core @babel/preset-env

Creo en la carpeta del proyecto un archivo .babelrc y dentro del archivo copio

{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}

