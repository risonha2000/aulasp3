const sequelize = require('sequelize');
const Disciplina = require('./disciplina.model');
const db = require('../config/database');

var Aluno = db.define('aluno', {
    id: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    nome: sequelize.STRING,
    email: sequelize.STRING,
    morada: sequelize.STRING,
    telefone: sequelize.BIGINT,
}, {
    timestamps: false,
    tableName: 'aluno'
});
//Aluno.hasOne(Disciplina, {foreignKey: 'id'}); //relação de um-para-um

module.exports = Aluno;