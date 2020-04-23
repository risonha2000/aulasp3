const express = require("express");
const cors = require('cors');
const bodyParser = require("express");
const app = express();

//configurações
app.set("port", process.env.PORT || 3001);

//middleware
app.use(express.json());

//CORS (Cross-Origin Resource Sharing)
app.use(cors());

//parser
app.use(bodyParser.urlencoded({ extended: true }));

//rotas
//const rotas = require("./routes/main.route");
//app.use("/", rotas);

//outras rotas
//const exemploRotas = require('./routes/exemplo.route');
//app.use('/exemplo', exemploRotas);

//rotas API (aluno)
const alunoApi = require('./routes/aluno.route');
app.use('/api/v1', alunoApi);

//rota estática
app.use('/public', express.static('assets'));

//templating
const mustacheExpress = require('mustache-express');
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

//servidor
app.listen(app.get("port"), () => {
    console.log("Servidor iniciado na porta: " + app.get("port"));
});
