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

function add (num1, num2) {
  return Math.round(num1 + num2)
}
function mult (num1, num2) {
  return Math.round(num1 * num2)
}
function div (num1, num2) {
  return Math.round(num1 / num2)
}
function sub (num1, num2) {
  return Math.round(num1 - num2)
}

let calculator = (num1, num2) => {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    throw new Error('São strings');
    add(add(num1, num2);
    mult();
    div();
    sub();
  }
  
};

module.exports = calculator;
