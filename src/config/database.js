const sequelize = require('sequelize');
const ligacao = new sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = ligacao;