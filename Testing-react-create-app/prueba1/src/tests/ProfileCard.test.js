// Tengo que importar la funcion para poder utilizarla en los test
import { titleCase } from '../components/ProfileCard';
// import  titleCase  from '../components/ProfileCard';

describe('Todos los tests dentro del componente ProfileCard', () => {

  // Test para la funcion titleCase
  describe('Test para la funcion titleCase', () => {
    // Quiero saber si la funcion me devuelve un tipo de dato 'string'
    test('Debe retornar un string', () => {
      // Llamamos a la funcion titleCase y le pasamos un string
      const result = titleCase('hola mundo');
      // Esperamos que el resultado sea un string
      // Con typeof del result vemos que tipo de dato nos esta devolviendo
      expect(typeof result).toBe('string');
    }),

    // Quiero saber si la funcion me devuelve un string con la primera letra en mayuscula de cada palabra
    test('Debe retornar un string con la primera letra en mayuscula de cada palabra', () => {
      // Llamamos a la funcion titleCase y le pasamos un string
      const result = titleCase('en un lugar de la mancha');
      // Esperamos que el resultado sea: 'En Un Lugar De La Mancha'
      expect(result).toBe('En Un Lugar De La Mancha');
    }),

    // Quiero saber si la funcion me devuelve un string vacio si le pasamos un string vacio
    test('Debe retornar un string vacio si le pasamos un string vacio', () => {
      // Llamamos a la funcion titleCase y le pasamos un string vacio
      // const result = titleCase('');
      // Esperamos que el resultado sea un string vacio
      // expect(result).toBe('');
      
      // Otra forma de hacerlo
      expect(titleCase('')).toBe('');

    })
    
  })
})