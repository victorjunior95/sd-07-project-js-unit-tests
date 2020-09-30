/* Função average. */
const average = (array) => {
  let med = 0;
  let sum = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) === 'string') {
      return undefined;
    }
    sum += array[index];
  }
  med = Math.round(sum / array.length);
  return med;
};
console.log(average([2, 3]));

/* Função vqv */
const vqv = (nome, idade) => {
  if (nome === undefined || idade === undefined) {
    return undefined;
  }
  return `'Oi meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!'`;
};

console.log(vqv('Marcelo', 34));

/* Função productDetails
 */

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
console.log(productDetails('Alcool gel', 'Máscara')[1].details.productId);
