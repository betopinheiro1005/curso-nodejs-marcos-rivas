// Processos stdout e stdin

// process.stdout.write("Olá mundo!\n");

var perguntas = ['Qual é o seu nome? ',
                 'Qual é a sua idade? ',
                 'Qual é a sua linguagem de programação favorita? '];

var respostas = [];

function pergunta(i){
    process.stdout.write(perguntas[i]);
};

process.stdin.on('data', function(data){
    respostas.push(data.toString().trim());

    if(respostas.length < perguntas.length){
        pergunta(respostas.length);
    } else {
        process.exit();
    }
});

pergunta(0);
