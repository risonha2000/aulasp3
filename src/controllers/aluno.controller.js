const Aluno = require("../models/aluno.model");
const Disciplina = require("../models/disciplina.model");
const AlunoDisciplina = require("../models/aluno_disciplina.model");
const sequelize = require("../config/database");

const controllers = {};
sequelize.sync();

//função do endpoint /alunos
controllers.aluno_list = async (req, res) => {
  //opção 1) retorna todos os alunos incluindo as disciplinas e respetiva relação
  const dados = await Aluno.findAll({include: [Disciplina]})
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados dos alunos.",
      });
    });
    
    /*********************************************************************************************
     * opção 2) retorna todas as disciplinas incluindo os respetivos alunos e sua relação
        const dados = await Disciplina.findAll({include: [Aluno]})
          .then(function (dados) {
            return dados;
          })
          .catch((error) => {
            res.status(500).send({
              message: error.message || "Ocorreu um erro ao carregar os dados das disciplinas.",
            });
          });
    *********************************************************************************************/

    /*********************************************************************************************
     * opção 3) retorna os dados da relação de acordo com a clásula WHERE definida
        const dados = await AlunoDisciplina.findAll({ where: { alunoId: 1,
                                                               disciplinaId: 1
                                                             }
        })
        .then(function (dados) {
          return dados;
        })
        .catch((error) => {
          res.status(500).send({
            message: error.message || "Ocorreu um erro ao carregar os dados dos alunos.",
          });
        });
    *********************************************************************************************/

  console.log(dados);
  res.json({
    success: true,
    dados: dados,
  });
};

controllers.aluno_detail = async (req, res) => {
  const { id } = req.params;
  const dados = await Aluno.findAll({ where: { id: id } })
    .then(function (dados) {
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao carregar os dados do aluno.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.aluno_create = async (req, res) => {
  const { nome, email, morada, telefone } = req.body;
  const dados = await Aluno.create({
    nome: nome,
    email: email,
    morada: morada,
    telefone: telefone,
  })
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar criar o aluno.",
      });
    });

  res.status(201).json({
    success: true,
    dados: dados,
  });
};

controllers.aluno_update = async (req, res) => {
  const { id } = req.params;
  const { nome, email, morada, telefone } = req.body;
  const dados = await Aluno.update(
    {
      nome: nome,
      email: email,
      morada: morada,
      telefone: telefone,
    },
    {
      where: { id: id },
    }
  )
    .then(function (dados) {
      console.log(dados);
      return dados;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao tentar atualiza os dados do aluno.",
      });
    });

  res.json({
    success: true,
    dados: dados,
  });
};

controllers.aluno_delete = async (req, res) => {
  const { id } = req.params;
  const dados = await Aluno.destroy({ where: { id: id } }).catch((error) => {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao tentar remover o aluno.",
    });
  });

  res.status(204).json({
    success: true,
    dados: dados,
  });
};

module.exports = controllers;
