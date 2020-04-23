const express = require('express');
const router = express.Router();

router.get('/', function(request, response) {
    //response.send('Rota para a raiz do projeto em NodeJS');
    let dados = {'name':'Pedro Silva'};
    response.render('index', dados);
});

router.get('/sobre', function(req, res) {
    res.sendFile(__dirname+'/../views/sobre.html');
});

router.get('/dados', function(req, res) {
    var valor = req.query.id;
    res.send("[GET] O valor recebido foi "+valor);
});

router.post('/dadosp', function(req, res) {
    var valor = req.body.id;
    res.send("[POST] O valor recebido foi "+valor);
});

module.exports = router;