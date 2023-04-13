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
