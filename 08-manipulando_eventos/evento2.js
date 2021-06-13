 const eventEmitter = require('events').EventEmitter

 var Pessoa = function (nome){
    this.nome = nome;
 };

 let pessoa = new Pessoa('Bob');
 console.log(`Me chamo ${pessoa.nome}`);