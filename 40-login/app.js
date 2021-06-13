const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');
const User = require('./public/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static( path.join(__dirname, 'public')));

const mongo_uri = 'mongodb://dev:dev@localhost/todos';

mongoose.connect(mongo_uri, function(err) {
	if(err) {
		throw err;
	} else {
		console.log(`Successfully connected to ${mongo_uri}`);
	}
})

app.post('/register', (req, res) => {
  const {username, password} = req.body;
  const user = new User({username, password});
  user.save(err => {
    if(err){
      res.status(500).send('Erro ao registrar o usuário');
    } else {
      res.status(200).send('Usuário registrado com sucesso!');
    }
  });
});

app.post('/authenticate', (req, res) => {
  const {username, password} = req.body;

  User.findOne({username}, (err, user) => {
    if(err){
      res.status(500).send('Erro ao autenticar o usuário!');
    } else if(!user) {
      res.status(500).send('O usuário não existe!');
    } else {
        user.isCorrectPassword(password, (err, result) => {
          if(err){
            res.status(500).send('Erro ao autenticar o usuário!');
          } else if(result) {
            res.status(200).send('Usuário autenticado com sucesso!');
          } else {
            res.status(500).send('Usuário e/ou senha incorreta!');
          }
        });
    }
  });

});

app.listen(3000, () => {
	console.log('Server started...');
})

module.exports = app;
