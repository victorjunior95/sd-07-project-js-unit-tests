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
  let result = 0;
  const div = array.length;
  for (let index = 0; index < div; index += 1) {
    if (typeof (array[index]) === 'string') {
      return undefined;
    }
  }
  if (div !== 0) {
    for (let key = 0; key < array.length; key += 1) {
      result += array[key];
    }
  } else {
    return undefined;
  }
  const output = Math.round(result / div);
  return output;
};
module.exports = average;
