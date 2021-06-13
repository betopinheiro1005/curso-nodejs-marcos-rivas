// console.log(process.argv);

function param(p){
    var index = process.argv.indexOf(p);
    return process.argv[index + 1];
};

var nome = param('--nome');
var idade = param('--idade');

console.log(`Teu nome é ${nome}. Você tem ${idade} anos de idade.`);