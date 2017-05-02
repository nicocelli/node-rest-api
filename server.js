var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),

//Declaração dos modelos para o mondoDB
Table = require('./api/models/TableModel'),
User = require('./api/models/UserModel'),
Service = require('./api/models/ServiceModel'),
Connection = require('./api/models/ConnectionModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Declaração das rotas da API
var tableRoute = require('./api/routes/TableRoutes');
var userRoute = require('./api/routes/UserRoutes');
var serviceRoute = require('./api/routes/ServiceRoutes');
var connectionRoute = require('./api/routes/ConnectionRoutes');

tableRoute(app);
userRoute(app);
serviceRoute(app);
connectionRoute(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' não foi encontrado.'})
});

app.listen(port);

console.log('API iniciada na porta ' + port);