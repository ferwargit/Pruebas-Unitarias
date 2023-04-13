import Suma from "./Suma";

describe("Test de la funcion Suma", () => {
  // test("should add two numbers", () => {
  //   // const result = Suma(1, 2);
  //   // expect(result).toBe(3);

  //   expect(Suma(1, 2)).toBe(3);
  // });

  // Tests that the function returns the correct sum of two positive integers.
  test("test_happy_path", () => {
    expect(Suma(2, 3)).toBe(5);
    expect(Suma(0, 0)).toBe(0);
    expect(Suma(100, 200)).toBe(300);
  });

    // Tests that the function correctly adds negative numbers. 
    it("test_negative_numbers", () => {
      expect(Suma(-2, -3)).toBe(-5);
      expect(Suma(-10, 5)).toBe(-5);
      expect(Suma(10, -5)).toBe(5);
  });

    // Tests that the function correctly adds decimal numbers.  
    it("test_decimal_numbers", () => {
      expect(Suma(0.1, 0.2)).toBeCloseTo(0.3);
      expect(Suma(1.5, 2.5)).toBeCloseTo(4);
      expect(Suma(0.3, 0.7)).toBeCloseTo(1);
  });

    // Tests that the function throws an error when one or both inputs are not numbers.  
    it("test_input_validation", () => {
      expect(() => Suma("a", 2)).toThrow();
      expect(() => Suma(1, "b")).toThrow();
      expect(() => Suma("c", "d")).toThrow();
  });

    // Tests that the function can handle large numbers without significant performance issues.  
    it("test_performance", () => {
      let a = 0;
      let b = 0;
      for (let i = 0; i < 1000000; i++) {
          a += i;
          b += i + 1;
      }
      expect(Suma(a, b)).toBeCloseTo((a + b));
  });

    // Esta prueba asegura que cuando se intenta sumar dos valores no numéricos, la función Suma arroja una excepción en lugar de producir un resultado incorrecto o no deseado.
    it("test_edge_case", () => {
      expect(() => Suma(NaN, NaN)).toThrow();
  });

    // Tests that Suma(0, 0) returns 0.  
    it("test_happy_path_zero_suma", () => {
      expect(Suma(0, 0)).toBe(0);
  });

});
