// Neste formato traz apenas os objetos especificados
const { obterPessoas } = require('./service');

/*
  Desestruturação

  const item = {
    nome: 'Pedro,
    idade: 33
  }

  const { nome } = item;
  console.log(nome);
*/

Array.prototype.meuFilter = function(callback) {
  const lista = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);

    if(!result) continue;
    lista.push(item);
  }

  return lista;
}

async function main()
{
  try {
    const {
      results
    } = await obterPessoas('a');

    /*const familiaLars = results.filter(function(item) {
      // por padrão precisa retornar um booleano
      //para informar se deve manter ou remover da lista
      // true > mantem
      // false > remove da lista
      // não encontrou = -1
      // encontrou = posicaoNoArray

      const result = item.name.toLowerCase().indexOf(`lars`) !== -1;

      return result;
    });
    */

    const familiaLars = results.meuFilter((item, index, list) => {
      console.log(`index: ${index}`, list.length)
      return item.name.toLowerCase().indexOf(`lars`) !== -1;
    })

    const names = familiaLars.map(pessoa => pessoa.name);
    console.log(names);
  } catch (error) {
    console.error('DEU RUIM ', error)
  }
}

main();