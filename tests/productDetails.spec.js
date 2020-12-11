/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO: 
    // Para realizar alguns criterios deste exercicio, consultei o repositorio do colega Yogor Fonseca, quem foi minha dupla no projeto do bloco 6.
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(typeof productDetails(), 'object'); // Why when we expect typeof === array it didn`t work?
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('alcool em gel', 'mascara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('alcool em gel', 'mascara')[0], 'object');
    assert.deepStrictEqual(typeof productDetails('alcool em gel', 'mascara')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('alcool em gel', 'mascara')[0], productDetails('alcool em gel', 'mascara')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(productDetails('alcool em gel', 'mascara')[0].details.productId.slice(-3), '123');
    assert.strictEqual(productDetails('alcool em gel', 'mascara')[2].details.productId.slice(-3), '123');
  });
});
