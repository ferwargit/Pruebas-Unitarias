function Suma(a, b) {
  if (isNaN(a) || isNaN(b)) {
  throw new Error("La función Suma solo acepta argumentos de tipo number");
  }
  return a + b;
  }

export default Suma;