// validar, criar e/ou escrever em um arquivo (de forma síncrona)

const fs = require('fs');

const arquivo = 'prova.txt';

const conteudo = 'Este é o conteúdo de um texto';
const textoAdicional = "\nAqui foi adicionada uma nova linha de código!";

escrever();

function escrever(){
    if(fs.existsSync(arquivo)){
        console.log('O arquivo existe!');

        // escrever uma linha no final do arquivo (de forma síncrona)
        fs.appendFileSync(arquivo, textoAdicional);
        console.log('Foi acrescentada uma nova linha no final do arquivo!');
    } else {
        console.log('O arquivo não existe!');

        // criar e escrever em um arquivo (de forma síncrona)
        fs.writeFileSync(arquivo, conteudo);
        console.log('O arquivo foi criado e foi feita uma escrita no arquivo!');
    }
}
