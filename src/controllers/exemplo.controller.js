const aluno = require('../models/exemplo.model');
const sequelize = require('../config/database');
//sequelize.sync();

const controller = {};
controller.test = (req, res) => {
    const data = {
        name: 'Pedro Lopes',
        age: 20,
        city: 'Coimbra'
    };
    console.log("Envio de dados do controlador EXEMPLO.");
    res.json(data);
};

controller.testdata = async(req, res) => {
    const response = await sequelize.sync().then(function() {
        const data = aluno.findAll();
        return data;
    })
    .catch(err => {
        return err;
    });
    res.json(response);
};

controller.list = async(req, res) => {
    const data = await aluno.findAll();
    res.json(data);
}

module.exports = controller;