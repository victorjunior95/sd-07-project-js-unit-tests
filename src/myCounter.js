/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  var myArray = [];
  const counter2 = 2
  const counter3 = 3
  for (var counter1 = 0; counter1 <= 3; counter1 += 1) {
    myArray.push(counter1);
    myArray.push(counter2);
    myArray.push(counter3);
  }
  return myArray;
};

module.exports = myCounter;
