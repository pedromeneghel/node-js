const service = require('./service');

// criando meu próprio array map
Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = [];
  for(let indice = 0; indice <= this.length -1; indice++) {
    const resultado = callback(this[indice], indice);
    novoArrayMapeado.push(resultado);
  }

  return novoArrayMapeado;
}

async function main() {
  try {
    const results = await service.obterPessoas('a');
    //const names = [];

    // FOR EACH
    /*console.time('foreach');
    results.results.forEach(item => {
      names.push(item.name);
    });
    console.timeEnd('foreach');*/

    //console.time('map');
    /*results.results.map((pessoa) => {
      names.push(pessoa.name);
    })*/
    /*const names = results.results.map(pessoa => pessoa.name);
    console.timeEnd('map');*/

    const names = results.results.meuMap(function(pessoa, indice){
      return `${indice}-${pessoa.name}`;
    })

    console.log('names', names);
  }
  catch {
    console.error(`DEU RUIM: `, error)
  }
}
main();