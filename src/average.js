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
const assert = require('assert');

const average = (numbers) => {
  let summ = '';
  for (let count = 0; count < numbers.lenght; count += 1) {
    if (isNaN(numbers[count])) {
      summ = 'undefined';
      return (summ);
    }
    summ += math.round(numbers[count]);
  }
  return (math.round(summ / numbers.lenght));
};

assert.strictEqual(average([2, 2, 6, 2, 7, 9, 0, 2]), 4);
assert.strictEqual(average([2, 2, 6, 2, 7, 'Márcio', 0, 2]), 'undefined');
assert.strictEqual(average(['Márcio', 'João', 'José']), 'undefined');
