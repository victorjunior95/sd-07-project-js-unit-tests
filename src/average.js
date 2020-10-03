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

const average = (valores) => {
  let soma = 0;
  for (let index = 0; index < valores.length; index += 1) {
    if (isNaN(valores[i])) {
      return undefined;
    } else if (valores.length === 0) {
      return undefined;
    }
    soma += valores[i];
  }

  let media = soma / valores.length;
  media = Math.round(media);
  return media;
};

const array = [4, 7];
console.log(average(array));

module.exports = average;
