const {
  deepEqual,
  ok
} = require('assert');

const database = require('./databse');

const DEFULTA_ITEM_CADASTRADO = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}

describe('Site de manipulação de herois', () => {
  it('deve pesquisar um heroi, usando arquivos', async () => {
    const expected = DEFULTA_ITEM_CADASTRADO;
    const [resultado] = await database.listar(expected.id); //pega primeira posição do array ou ,1 para posição
    deepEqual(resultado, expected); //completamente igual

  })
  /*it('deve cadastrar um heroi, usando arquivos', async () => {
    const expected = DEFULTA_ITEM_CADASTRADO;
    //
    ok(null, expected);

  })*/
})