const {
  deepEqual,
  ok
} = require('assert');

const database = require('./database');

const DEFAULT_ITEM_CADASTRADO = { nome: 'Flash', poder: 'speed', id: 1 };

describe('Site de manipulação de herois', () => {
  it('deve pesquisar um heroi, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRADO;
    const [resultado] = await database.listar(expected.id); //pega primeira posição do array ou ,1 para posição
    deepEqual(resultado, expected); //completamente igual

  })
  it('deve cadastrar um heroi, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRADO;
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRADO); //pega primeira posição do array ou ,1 para posição
    const [atual] = await database.listar(DEFAULT_ITEM_CADASTRADO.id);
    deepEqual(atual, expected);
  })
})