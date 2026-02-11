// src/multiplicador.test.js
import multiplicar from "./multiplicador";

describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});