const express = require('express');
const port = 3000;
const app = express();

const pedidos = [
    {'nome': 'sopa', 'quantidade': 2, 'status': 'servido', 'mesa': 5},
    {'nome': 'corte de carne', 'quantidade': 2, 'status': 'processo', 'mesa': 4},
    {'nome': 'sopa', 'quantidade': 1, 'status': 'pago', 'mesa': 3},
    {'nome': 'salada', 'quantidade': 1, 'status': 'pago', 'mesa': 5},
    {'nome': 'massa', 'quantidade': 4, 'status': 'em processo', 'mesa': 1},
];

app.get('/', (req, res) =>{
    res.send('Olá a todos!');
});

app.get('/home', (req, res) =>{
    res.send('Página inicial');
});

app.get('/pedidos-em-processo', (req, res) =>{
    pedidosEmProcesso(res);
});

app.get('/pedidos-por-nome/:nome', (req, res) =>{
    pedidosPorNome(req.params.nome,res);
});

app.listen(port, () =>{
    console.log(`Servidor iniciado na porta ${port}`);
});

const pedidosEmProcesso = (res) =>{
    const arrayRes = pedidos.filter(item =>{
        return item.status == 'em processo';
    });
    res.json(arrayRes);
}

const pedidosPorNome = (nome, res) =>{
    const arrayRes = pedidos.filter(item =>{
        return item.nome == nome;
    });
    res.json(arrayRes);
}