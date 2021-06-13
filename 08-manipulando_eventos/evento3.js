const eventEmitter = require('events').EventEmitter
const util = require('util');

var Pessoa = function (nome){
   this.nome = nome;
};

util.inherits(Pessoa, eventEmitter);

let pessoa = new Pessoa('Bob');

// console.log(`Me chamo ${pessoa.nome}`);

pessoa.on('falar', (message) => {
    console.log(`${pessoa.nome}: ${message}`);
});

pessoa.emit('falar', 'Hoje é um grande dia!');