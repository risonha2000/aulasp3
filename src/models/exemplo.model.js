const sequelize = require('sequelize');
const db = require('../config/database');

var Aluno = db.define('aluno', {
    id: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    },
    nome: sequelize.STRING,
    email: sequelize.STRING,
    morada: sequelize.STRING,
    telefone: sequelize.BIGINT
}, {
    timestamps:false,
    tableName: 'aluno'
});

module.exports = Aluno;