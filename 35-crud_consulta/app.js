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

app.post('/add', (req, res) =>{
    const todo = new Todo({text: req.body.text, completed: false});

    todo.save()
    .then(doc =>{
        console.log('Dado inserido com sucesso!', doc);
        //res.redirect('/');
        res.json({response: 'success'});
    })
    .catch(err =>{
        console.log('Erro ao inserir ', err.message);
        res.status(400).json({response: 'failed'});
    });
});

app.get('/getall', (req, res) =>{
    Todo.find({},'text completed')
    .then(doc =>{
        res.json({response: 'success', data: doc});
    })
    .catch(err =>{
        console.log('Erro ao consultar elementos!', err.message);
        res.status(400).json({response: 'failed'});
    });
});

app.listen(3000, () =>{
    console.log('servidor listo...');
});