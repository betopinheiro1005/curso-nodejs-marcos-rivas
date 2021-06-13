const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

// conexão com o banco de dados
mongoose.connect('mongodb://dev:dev@localhost:27017/todos', {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', () =>{
    console.log('Conectado a base de dados!');
});

connection.on('error', (err) =>{
    console.log('Erro ao se conectar a base de dados: ', err);
});

//modelo
const Todo = mongoose.model('Todo', {text: String, completed: Boolean});

app.get('/', (req, res) => {
    res.json({response: 'success'});
});

app.listen(3000, () =>{
    console.log('servidor listo...');
});