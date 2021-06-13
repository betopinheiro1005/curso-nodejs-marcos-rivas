// leitura de forma síncrona

var fs = require('fs');

var files = fs.readdirSync('./');
console.log(files);

var arquivo = fs.readFileSync('./arquivo.txt', 'utf8');
console.log('Conteúdo do arquivo...');
console.log(arquivo);
