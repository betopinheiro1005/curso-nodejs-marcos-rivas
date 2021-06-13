var readline = require('readline');
var util = require('util');

var rl = readline.createInterface(process.stdin, process.stdout);

var pessoa = {
    nome: '',
    comentarios: []
};

rl.question('Qual é o seu nome? ', (resposta) => {
    pessoa.nome = resposta;

    rl.setPrompt('Deixe um comentário: ');
    rl.prompt();
});

rl.on('line', (input) =>{
    if(input.trim() === 'sair'){
        var message = util.format("Seu nome é %s. Seus comentários: %j", pessoa.nome, pessoa.comentarios);
        console.log(message);
        process.exit();
    }

    pessoa.comentarios.push(input.trim()); 

    rl.setPrompt('Deixe um comentário: ');
    rl.prompt();
});