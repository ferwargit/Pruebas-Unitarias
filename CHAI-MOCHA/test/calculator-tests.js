var chai = require("chai");
// 1er test
var assert = chai.assert;
// 2do test y 3er test
var should = chai.should();
var expect = chai.expect;

// Importamos el calculator para poder usar sus funciones
var calculator = require("../calculator");

// 1er test
describe("Testing assert function: ", function () {
  describe("Check addTest Function", function () {
    it("Check the returned value using : assert.equal(value, value): ", function () {
      result = calculator.addTest(1, 1);
      assert.equal(result, 2);
    });
  });
});

// 2do test
describe("Testing should function: ", function () {
  describe("Check addTest Function", function () {
    it("Check the returned value using : result.should.be.equal(value): ", function () {
      result = calculator.addTest(1, 1);
      result.should.be.equal(2);
    });
  });
});

// 3er test
describe("Testing expect function: ", function () {
  describe("Check addTest Function", function () {
    it("Check the returned value using : expect(result).to.be.a(value);: ", function () {
      result = calculator.addTest(1, 1);
      expect(result).to.equal(2);
    });
  });
});
