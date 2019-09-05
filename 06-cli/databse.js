// Módulos necessários
const {
  readFile
} = require('fs');
const {
  promisify
} = require('util');

// Usando promisifi para tratar a abertura do arquivo
const readFileAsync = promisify(readFile);

// Abrindo um arquivo json (exemplo)
//const dadosJson = require('./database.js');

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json';
  }
  async obterDadosArquivo(){
    // abrindo um arquivo texto qualquer
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8');
    return JSON.parse(arquivo.toString())
  }
  escreverArquivo(){
    return false;
  }
  async listar(id) {
    const dados = await this.obterDadosArquivo();
    const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true ));

    return dadosFiltrados;
  }
}

module.exports = new Database;