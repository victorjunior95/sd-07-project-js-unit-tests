/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Rvtorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arr) => {
  let sum = 0;

  if (arr.length === 0) { return undefined; }
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'number') {
      return undefined;
    }
    sum = arr[i] + sum;
  }
  return Math.trunc(sum / (arr.length));
};

// const average = (arr) => {
//      // add your implementation here
//      let sum = 0;
//      let media = 0;
//      let arrString = []
//      if (arr.length == 0) {
//        return undefined;
//      } else {
//       for (let i = 0; i < arr.length; i += 1) {
//         if (typeof arr[i] !== 'number') {
//           return undefined;
//         } else {
//           sum =+ arr[i];
//         }
//       }
//       return Math.round(sum / (arr.length));
//      };
// };
// //      for (let i = 0; i < arr.length; i += 1) {
//       if (typeof arr[i] !== 'number') {
//         arrString.push(arr[i])
//       } else {
//         cont  =+ array[i];
//       }
//     }
//     media = cont / arr.length
//     if (arrString.length == 0) {
//       return cont;
//     } else {
//      return undefined;
//     }
// };
// const average = (array) => {
//   let sum = 0;
//   if (array.length === 0) { return undefined; }
//   for (let index = 0; index < array.length; index += 1) {
//     if (typeof array[index] !== 'number') {
//       return undefined;
//     }
//     sum = array[index] + sum;
//   }
//   return Math.round(sum / (array.length));
// };
