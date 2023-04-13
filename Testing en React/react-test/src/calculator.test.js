// Mas moderno

// import { Calculator } from "./Calculator";

// describe("Calculator", () => {

//   test("should add two numbers", () => {

//     const result = Calculator.add(1, 2);
//     expect(result).toBe(3);

//   });

// })

// **************************************



// *******************************************

const Calculator = require("./Calculator");

describe("Calculator", () => {

  test("should add two numbers", () => {

    const result = Calculator.add(1, 2);
    expect(result).toBe(3);

  });

})