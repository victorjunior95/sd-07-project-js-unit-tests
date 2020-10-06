/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/
const addInter = (numberA, numberB) => Math.trunc(numberA + numberB);
const subtract = (numberA, numberB) => Math.trunc(numberA - numberB);
const division = (numberA, numberB) => Math.trunc(numberA / numberB);
const multiplication = (numberA, numberB) => Math.trunc(numberA * numberB);
const calculator = {
  add: addInter,
  sub: subtract,
  div: division,
  mult: multiplication,
};

module.exports = calculator;
