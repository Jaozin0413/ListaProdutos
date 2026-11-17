const express = require('express');

const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(express.static('public'));

const produtos = [
    {id: 1, nome: 'Caderno', preco: 15.9},
    {id: 2, nome: 'Caneta', preco: 2.5},
    {id: 3, nome: 'Mochila', preco: 120}
];

app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

app.post('/api/produtos', (req, res) =>{
    const { nome, preco } = req.body;


    if(!nome || !preco){
        return res.status(400).json({erro: 'Informe nome e preco'});
    }

    const novo = { id: produtos.lenght + 1, nome: nome, preco: Number (preco)};
    produtos.push(novo);
    res.status(201).json(novo);
});

app.listen(PORTA, () =>{
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
});