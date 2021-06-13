const _ = require('underscore');

const lista = [
    {'id': 1, 'nome': 'Marcos', 'idade': 27},
    {'id': 2, 'nome': 'Regina', 'idade': 26},
    {'id': 3, 'nome': 'Bruno', 'idade': 22}
];

const res = _.findWhere(lista, {'idade': 22});

console.log(res);