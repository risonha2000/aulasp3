const sequelize = require('sequelize');
const Aluno = require('./aluno.model');
const db = require('../config/database');

var Disciplina = db.define('disciplina', {
    id: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    nome: sequelize.STRING,
}, {
    timestamps: true,
    tableName: 'disciplina'
});

module.exports = Disciplina;