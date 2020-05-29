const sequelize = require('sequelize');
const Aluno = require('./aluno.model');
const Disciplina = require('./disciplina.model');
const db = require('../config/database');

var AlunoDisciplina = db.define('aluno_disciplina', {
    id: {
        type: sequelize.INTEGER, primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: true,
    tableName: 'aluno_disciplina'
});
Aluno.belongsToMany(Disciplina, {through: 'aluno_disciplina'});
Disciplina.belongsToMany(Aluno, {through: 'aluno_disciplina'});

module.exports = AlunoDisciplina;