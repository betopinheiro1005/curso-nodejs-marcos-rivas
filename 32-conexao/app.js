const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// conexão com o banco de dados
mongoose.connect('mongodb://dev:dev@localhost:27017/todos', {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', () =>{
    console.log('Conectado a base de dados!');
});

connection.on('error', (err) =>{
    console.log('Erro ao se conectar a base de dados: ', err);
});

app.get('/', (req, res) => {
    res.json({response: 'success'});
});

app.listen(3000, () =>{
    console.log('servidor listo...');
});