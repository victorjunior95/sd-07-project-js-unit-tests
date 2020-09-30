/*
  A função numbers recebe um array (tamanho variável),
  retornando true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false
*/

const numbers = (myArray) => {
  const arrayReference = myArray;
  if (typeof myArray[0] !== 'number') return false;

  for (let number in arrayReference) {
    if (typeof arrayReference[number] !== 'number') return false;
  }

  return true;
};

console.log(numbers([]));

module.exports = numbers;
