var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Qual é o seu nome? ', (resposta) => {
    console.log(`Olá, ${resposta}!`);
    process.exit();
});