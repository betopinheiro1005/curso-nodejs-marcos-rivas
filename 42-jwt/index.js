const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
})

app.get('/login', (req, res) => {
	res.send(`<html>
		<head>
			<title>Login</title>
		</head>
		<body>
			<form method="POST" action="/auth">
				Nome de usuário: <input type="text" name="text"><br />
				Senha: <input type="password" name="password"><br />
				<input type="submit" value="Iniciar sessão"/>
			</form>
		</body>
	</html>`);
});

app.get('/api', validateToken, (req, res) => {
	res.json({
		username: req.user,
		tuits: [
			{
				id: 1,
				text: 'Este é meu primeiro tuit',
				username: 'vidamrr'
			},
			{
				id: 2,
				text: 'A melhor linguagem é HTML',
				username: 'patinho_feliz'
			}
		]
	});
});

app.post('/auth', (req, res) => {
	const {username, password} = req.body;

	// consultar BD e validar que existem tanto username como password
	const user = {username: username};
	const accessToken = generateAccessToken(user);

	res.header('authorization', accessToken).json({
		message: 'Usuário autenticado!',
		token: accessToken
	});
});

function generateAccessToken(user){
	return jwt.sign(user, process.env.SECRET, {expiresIn: '50m'});
}

function validateToken(req, res, next){
	const accessToken = req.headers['authorization'] || req.query.accesstoken;

	if(!accessToken) res.send('Access denied');

		jwt.verify(accessToken, process.env.SECRET, (err, user) => {
			if(err){
				res.send('Access denied, token expired or incorrect');
			}else{
				req.user = user;
				next();
			}
		});
	}

app.listen(3000, () => {
	console.log('Servidor iniciado...');
});
