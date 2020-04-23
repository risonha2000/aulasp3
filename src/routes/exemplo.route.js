const express = require('express');
const router = express.Router();

//importa os controladores
const exemploController = require('../controllers/exemplo.controller');
/*router.get('/teste', exemploController.test);*/

router.get('/exemplo', (req, res) => {
    res.json({status: 'Rota executada...'});
});

router.get('/testdata', exemploController.testdata);
router.get('/list', exemploController.list);
module.exports = router;