/*
    0-obter um usuário
    1-preciso obter o número de telefone de um usuário a partir de seu id
    2-obter o endereço do usuário pelo id
*/

/* MODELO CALLBACK */
/*
function obterUsuario(callback) {
    setTimeout(function(){
        return callback(null, {
            id: 1,
            nome: 'Pedro',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function(){
        return callback(null, {
            numero: '996615875',
            ddd: '11',
            idUsuario: 1
        })
    }, 2000)
}

function obterEndereco(idUsuario,  callback) {
    setTimeout(function(){
        return callback(null, {
            rua: 'Rua teste',
            numero: 's/n'
        })
    }, 2000)
}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario);

}
obterUsuario(function resolverUsuario(erro, usuario){
    if(erro) {
        console.error('DEU RUIM em USUARIO', erro)
        return;
    }
    obterTelefone(usuario.id, function reolverTelefone(erro1, telefone) {
        if(erro1){
            console.error('DEU RUIM em TELEFONE', erro1)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco){
            if(erro2){
                console.error('DEU RUIM em ENDEREÇO', erro2)
                return;
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua}, ${endereco.numero},
                Telefone: (${telefone.ddd}) - ${telefone.numero}
            `)
        })
    })
});
*/
/*
// importamos o módulo interno do node para tratar promise
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
    // quando dr algum problema -> reject(erro)
    // quando sucesso - resolve
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function(){
            //return reject(new Error('DEU RUIM DE VERDADE'));
            return resolve({
                id: 1,
                nome: 'Pedro',
                dataNascimento: new Date()
            })
        }, 1000);
    })   
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            return resolve({
                numero: '996615875',
                ddd: '11',
                idUsuario: 1
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario,  callback) {
    setTimeout(function(){
        return callback(null, {
            rua: 'Rua teste',
            numero: 's/n'
        })
    }, 2000)
}

const usuarioPromise = obterUsuario();
// para manipular o sucesso usamos a função .then
// para aminupular erros, usamos o .catch
// conceito de pipe: usuario->telefone
usuarioPromise
    .then(function(usuario) {
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return{
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
        })
    })
    .then(function(resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id);
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        });
    })
    .then(function(resultado){
        console.log(`
        Nome: ${resultado.usuario.nome},
        Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero},
        Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.numero}
        `)
    })
    .catch(function(error){
        console.error('DEU RUIM', error)
    })
*/


/*
    1º passo adicionar a palavra async -> automaticamente retornará uma promisse
*/

function obterUsuario() {
    // quando dr algum problema -> reject(erro)
    // quando sucesso - resolve
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function(){
            //return reject(new Error('DEU RUIM DE VERDADE'));
            return resolve({
                id: 1,
                nome: 'Pedro',
                dataNascimento: new Date()
            })
        }, 1000);
    })   
}


function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            return resolve({
                numero: '996615875',
                ddd: '11',
                idUsuario: 1
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            return resolve({
                rua: 'Rua teste',
                numero: 's/n'
            })
        }, 2000)
    })
}

main();

async function main() {
    try {
        console.time('medida-promise');
        const usuario = await obterUsuario();
        //const telefone = await obterTelefone(usuario.id);
        //const endereco = await obterEndereco(usuario.id);

        //roda em segundo plano
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ])

        const telefone = resultado[0];
        const endereco = resultado[1];

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.numero},
            Endereço: ${endereco.rua}
        `)
        console.timeEnd('medida-promise')
    }
    catch {
        console.error('DEU RUIM', error);
    }
}