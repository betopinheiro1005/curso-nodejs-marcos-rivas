// renomear arquivos de forma assíncrona

const fs = require('fs');

fs.rename('./config.txt', './prova.txt', (err) => {
    if(err){
        throw(err);
    }

    console.log('O arquivo foi renomeado com sucesso!');
})