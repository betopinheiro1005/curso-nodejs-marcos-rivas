// deletando um arquivo de forma síncrona

const fs = require('fs');

fs.unlinkSync('./src/prova.txt');
console.log('O arquivo foi excluído!');
