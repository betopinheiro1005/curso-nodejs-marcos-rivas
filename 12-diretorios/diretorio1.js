// criar diretório de forma síncrona

const fs = require('fs');

// validar se existe um diretório

if(fs.existsSync('img')){
    console.log('O diretório já existe!');
} else {
    console.log('O diretório não existe!');
    // criando o diretório
    fs.mkdirSync('img');
    console.log('Dretório criado com sucesso');
}
