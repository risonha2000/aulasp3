const Aluno = require('../models/aluno.model');
const sequelize = require('../config/database');

const controllers = {};

//função do endpoint /alunos
controllers.aluno_list = async (req, res) => {
    const dados = await Aluno.findAll()
        .then(function(dados) {
            return dados;
        })
        .catch(error => {
            return 'Erro no pedido de dados ao servidor ('+ error +')';
        });
    
    res.json({
        'success': true,
        'dados': dados
    });
}

controllers.aluno_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await Aluno.findAll({ where: { id: id }})
        .then(function(dados) {
            return dados;
        })
        .catch(error => {
            return 'Erro no pedido de dados ao servidor ('+ error +')';
        });

    res.json({
        'success': true,
        'dados': dados
    });
}

controllers.aluno_create = async (req, res) => {
    const { nome, email, morada, telefone } = req.body;
    const dados = await Aluno.create({
            'nome': nome,
            'email': email,
            'morada': morada,
            'telefone': telefone
        })
        .then(function(dados) {
            return dados;
        })
        .catch(error => {
            return 'Erro no pedido de dados ao servidor ('+ error +')';
        });

    res.status(201).json({
        'success': true,
        'dados': dados
    });
}

controllers.aluno_update = async (req, res) => {
    const {id} = req.params;
    const { nome, email, morada, telefone } = req.body;
    const dados = await Aluno.update({
            'nome': nome,
            'email': email,
            'morada': morada,
            'telefone': telefone
        }, {
            'where': { 'id': id }
        })
        .then(function(dados) {
            return dados;
        })
        .catch(error => {
            return 'Erro no pedido de dados ao servidor ('+ error +')';
        });

    res.json({
        'success': true,
        'dados': dados
    });
}

controllers.aluno_delete = async (req, res) => {
    const {id} = req.params;
    const dados = await Aluno.destroy({ where: { id: id } });

    res.status(204).json({
        'success': true,
        'dados': dados
    });
}

module.exports = controllers;