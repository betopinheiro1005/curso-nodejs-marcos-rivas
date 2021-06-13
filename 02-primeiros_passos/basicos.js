var nome = 'Roberto'
var path = require('path')

console.log(nome)

var a = 5;
var b = 10;

soma = a + b;
produto = a * b;

console.log('Soma: ' + soma);
console.log(`Produto: ${produto}`);

// Variáveis globais

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
