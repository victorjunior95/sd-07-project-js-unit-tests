/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
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
// console.log(productDetails('banana', 'laranja'));
// console.log(productDetails('banana', 'laranja').length);
// console.log(typeof productDetails('banana', 'laranja'));
// console.log(productDetails('banana', 'laranja')[0]);

let arrayLastNumbers0 = productDetails('banana', 'laranja')[0].details.productId.endsWith('123');
console.log(arrayLastNumbers0);

let arrayLastNumbers1 = productDetails('banana', 'laranja')[1].details.productId.endsWith('123');
console.log(arrayLastNumbers1);

module.exports = productDetails;
