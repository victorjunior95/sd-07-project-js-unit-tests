/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  const newArray = [];
  let sum = 0;
    for (let index = 0; index < array.length; index += 1) {
    if (typeof (array) !== 'number' || array === []) {
      return undefined;
    }
    newArray.push(Math.round(array[index]));
  } for (let j = 0; j < newArray.length; j += 1) {
    sum += newArray[j];
  }
  return (sum / newArray.length);
};

module.exports = average;
