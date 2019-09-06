// Módulos necessários
const {
  readFile,
  writeFile
} = require('fs');
const {
  promisify
} = require('util');

// Usando promisifi para tratar a abertura do arquivo
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

// Abrindo um arquivo json (exemplo)
//const dadosJson = require('./database.js');

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json';
  }
  async obterDadosArquivo(){
    // abrindo um arquivo texto qualquer
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8');
    return JSON.parse(arquivo.toString());
  }
  
  async escreverArquivo(dados){
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados));
    return true;
  }
  async cadastrar(heroi){
    const dados = await this.obterDadosArquivo();
    const id = heroi.id <= 2 ? heroi.id : Date.now();

    /*
      {
        nome: Pedro,
        poder: nada
      }

      {
        id: 1
      }

      {
        nome: Pedro,
        poder: nada,
        id: 1
      }
    */

    // Concatendo dois objetos
    const heroiComId = {
      id,
      ...heroi
    }

    // Concatenando dados do aquivo com os dados do novo heroi
    const dadosFinal = {
      ...dados,
      heroiComId
    }
    return await this.escreverArquivo(dadosFinal);

  }
  async listar(id) {
    const dados = await this.obterDadosArquivo();
    const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true ));

    return dadosFiltrados;
  }
}

module.exports = new Database;