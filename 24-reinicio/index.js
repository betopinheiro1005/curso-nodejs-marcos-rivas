const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200, {'content-type': 'text/html'});

    res.end(`
    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Website de tutoriais</h1>
    <h3>Tutoriais de desenvolvimento web</h3>
    <h3>Bem-vindo ao meu site!</h3>
</body>
</html>
    `);
}).listen(3000);

console.log('Servidor iniciado...');