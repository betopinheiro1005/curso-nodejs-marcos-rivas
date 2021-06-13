// mover arquivos de forma assíncrona

const fs = require('fs');

fs.rename('./prova.txt', './src/prova.txt', (err) => {
    if(err){
        throw(err);
    }

    console.log('O arquivo foi movido com sucesso!');
})