const {
  deepEqual,
  ok
} = require('assert');

const DEFULTA_ITEM_CADASTRADO = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}

describe('Site de manipulação de herois', () => {
  it('deve pesquisar um heroi, usando arquivos', async () => {
    const expected = DEFULTA_ITEM_CADASTRADO;
    //
    ok(null, expected);

  })
  /*it('deve cadastrar um heroi, usando arquivos', async () => {
    const expected = DEFULTA_ITEM_CADASTRADO;
    //
    ok(null, expected);

  })*/
})