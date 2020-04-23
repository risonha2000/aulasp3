const express = require('express');
const router = express.Router();

//importar o controlador
const alunoController = require('../controllers/aluno.controller');

//endpoints da API
router.get('/alunos', alunoController.aluno_list);
router.get('/aluno/:id', alunoController.aluno_detail);
router.post('/aluno', alunoController.aluno_create);
router.put('/aluno/:id', alunoController.aluno_update);
router.delete('/aluno/:id', alunoController.aluno_delete);

module.exports = router;