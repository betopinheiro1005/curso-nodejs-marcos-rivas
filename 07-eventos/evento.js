const pessoa = require('./libs/pessoa');

let pablo = new pessoa('Pablo');

pablo.on('fala', (message) => {
    console.log(`${pablo.nome}: ${message}`);
});

pablo.emit('fala', 'Hoje será um grande dia!');
