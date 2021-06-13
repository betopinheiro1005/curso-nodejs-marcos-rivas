const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', urlencodedParser, (req, res) =>{
    /* let url = req.url;
    url = url.substring(url.indexOf('?') + 1);

    const params = url.split('&');
    let text = '';
    
    params.forEach(param => {
        let object = param.split('=');
        text += object[0] + ' : ' + object[1] + '<br/>'; 
    }); */
    res.send(`<h1>Teus dados são: <br/>
    Nome: ${req.query.nome} <br/>
    Sobrenome: ${req.query.sobrenome} </h1>`);
    console.log(req.query);
});

app.listen(3000, () =>{
    console.log('Servidor iniciado...');
});