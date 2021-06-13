// modulo util

var util = require('util');

util.log("Hello world!");

var nome = "Marcos";
var idade = 25;

var texto = util.format("Olá %s! Sua idade é %d anos", nome, idade);
console.log(texto);