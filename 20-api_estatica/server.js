const http = require('http');

const pedidos = [
    {'nome': 'sopa', 'quantidade': 2, 'status': 'servido', 'mesa': 5},
    {'nome': 'corte de carne', 'quantidade': 2, 'status': 'processo', 'mesa': 4},
    {'nome': 'sopa', 'quantidade': 1, 'status': 'pago', 'mesa': 3},
    {'nome': 'salada', 'quantidade': 1, 'status': 'pago', 'mesa': 5},
    {'nome': 'massa', 'quantidade': 4, 'status': 'em processo', 'mesa': 1},
];

http.createServer((req, res) =>{
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(JSON.stringify(pedidos));
    }else if(req.url == '/pedidos-processo'){
        pedidosEmProcesso(res);
    }else if(req.url == '/pedidos-sopa'){
        pedidosPorNome('sopa', res);
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Não encontrada a requisição requerida','latin1');
    }
    
}).listen(3000);

console.log('servidor iniciado...');


const pedidosEmProcesso = (res) =>{
    const arrayRes = pedidos.filter(item =>{
        return item.status == 'em processo';
    });

    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify(arrayRes));
}

const pedidosPorNome = (nome, res) =>{
    const arrayRes = pedidos.filter(item =>{
        return item.nome == nome;
    });

    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify(arrayRes));
}