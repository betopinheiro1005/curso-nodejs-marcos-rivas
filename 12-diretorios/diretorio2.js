// criando diretório de forma assíncrona

const fs = require('fs');

if (fs.existsSync('css')) {
    console.log('O diretório já existe!');
} else {
    console.log('O diretório não existe!')
    // criando o diretório
    fs.mkdir('css', function (err) {
        if(err){
            throw(err);
        }
        console.log('Diretório criado com sucesso!');
    });
}


