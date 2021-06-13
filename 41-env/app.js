if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const app = require('http').createServer((req, res) => res.send('Hello World!'));
const PORT = process.env.PORT || 3000;

console.log(process.env.TOKEN);

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
