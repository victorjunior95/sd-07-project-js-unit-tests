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
  let resultado = 0
  let verificação = 0
  for (let numro = 0; numro < array.length; numro+= 1) {
    if (typeof(array[numero]) == "number") {
      verificação += 1
    }
  }
  if (verificação == array.length) {
    for (let numero = 0; numero < array.length; numero += 1) {
      resultado += array[numero];
    }
    return Math.round(resultado /= 2);
  }
  else {
    return undefined;
  }
};

module.exports = average;
