// validar, criar e/ou escrever em um arquivo (de forma assíncrona)

const fs = require('fs');

const arquivo = 'prova.txt';

const conteudo = 'Este é o conteúdo de um texto';
const textoAdicional = "\nAqui foi adicionada uma nova linha de código!";

escrever();

function escrever(){
    fs.access(arquivo, fs.constants.F_OK, (err) => {
        if(err){
            console.log('O arquivo não existe!');

            // criar e escrever em um arquivo (de forma assíncrona)
            fs.writeFile(arquivo, conteudo, (err) =>{
                if(err){
                    throw('Ocorreu um erro ao escrever no arquivo!');
                } else {
                    console.log('O arquivo foi criado e foi feita uma escrita no arquivo!');
                }
            });
        } else {
            console.log('O arquivo existe!');

            // escrever uma linha no final do arquivo (de forma assíncrona)
            fs.appendFile(arquivo, textoAdicional, (err) => {
                console.log('Foi acrescentada uma nova linha no final do arquivo!');
            });
        }
    })
}