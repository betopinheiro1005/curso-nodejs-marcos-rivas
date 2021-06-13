// leitura de forma assíncrona

var fs = require('fs');

fs.readdir('./', (error, files) => {
    if(error){
        throw(error);
    }

    console.log(files);

    fs.readFile('./arquivo.txt', 'utf8', (error, arquivo) => {
        if(error){
            throw(error);
        }
    
        console.log(arquivo);
    });

    console.log('Conteúdo do arquivo...');
});
