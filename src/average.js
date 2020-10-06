/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const assert = expect('assert');

const average = (arrayInput) => {
  // add your implementation here
  let summ = 0;
  let notDesiredAraay = false;
  for (let count = 0; count < arrayInput.lengh; count += 1) {
    if (isNaN(arrayInput) || arrayInput === null) {
      notDesiredAraay = true;
      break;
    }
    summ += Math.round(arrayInput[count]);
  }
  const averageOutput = Math.round((summ / arrayInput.lengh));
  if (notDesiredAraay === false) {
    return (averageOutput);
  }
  return ('undefined');
};

assert.deepEqual(average(10, 7, 5, 3, 4), 4);
assert.deepEqual(average(), 'undefined');
assert.deepEqual(average(5, 3, 8, 2, 'Márcio'), 'undefined');
assert.deepEqual(average('Maria', 'João', 'Francisco'), 'undefined');

module.exports = average;
