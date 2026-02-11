import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";

const firstMultiplyInput = document.querySelector("#primer-numero-multiplicar");
const secondMultiplyInput = document.querySelector("#segundo-numero-multiplicar");
const multiplyButton = document.querySelector("#multiplicar-button");
const multiplyResultDiv = document.querySelector("#resultado-multiplicacion-div");
const formMultiplicar = document.querySelector("#multiplicar-form");

if (formMultiplicar) {
  formMultiplicar.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstNumber = Number.parseInt(firstMultiplyInput.value);
    const secondNumber = Number.parseInt(secondMultiplyInput.value);

    multiplyResultDiv.innerHTML = multiplicar(firstNumber, secondNumber);
  });
}
});
