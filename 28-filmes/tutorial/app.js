const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', (req, res) =>{
    
    res.setHeader('Content-type', 'text/html');
    res.sendFile('./public/index.html');
})
 
app.get('/get-filmes', (req, res) =>{
    const file = fs.readFileSync('./filmes.json', 'UTF-8');
    console.log(file);
    
    res.setHeader('Content-type', 'text/json');
    res.send(file);
});

app.post('/new', (req, res) =>{
    res.setHeader('Content-type', 'text/plain');
    const nome = req.body.nome;
    const rating = req.body.rating;

    // abrir arquivo
    let file = fs.readFileSync('./filmes.json', 'UTF-8');

    // converte-lo em um array
    const json = JSON.parse(file);

    // inserir um novo elemento
    json.filmes.push({"nome": nome, "rating": parseInt(rating)});

    // gravar json no arquivo
    file = fs.writeFileSync('./filmes.json', JSON.stringify(json));

    res.send('Dados gravados com sucesso!');
    
});

app.listen(3001, () =>{
    console.log('Servidor iniciado...');
});
