const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('.mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.get('/', (req, res) =>{
    const dados = [
        {nome: 'Helena', idade: 10}, 
        {nome: 'Luis', idade: 40}
    ];

    res.render('index',{
        titulo: 'Minha primeira app', 
        nome: 'Juan Perez', 
        dados: dados
    });
});

app.listen(3002, () =>{
    console.log('Servidor iniciado...');
});
