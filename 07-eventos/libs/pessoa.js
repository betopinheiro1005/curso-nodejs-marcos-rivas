const eventEmitter = require('events').EventEmitter;
const util = require('util');

var Pessoa = function(nome){
    this.nome = nome;
}

util.inherits(Pessoa, eventEmitter);

module.exports = Pessoa;
