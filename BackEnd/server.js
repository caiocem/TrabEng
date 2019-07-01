const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
var getCss = require('./css.js');
var getImages = require('./images.js');
var getJS = require('./JavaScript.js');
var db = require('./db_connection.js');

var index = '../Menu.html';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const router = express.Router();

//Get Index
router.get('/', (req, res) => {
  fs.readFile(index, function(err, data) {
    //carrega index
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});
router.post('/', (req, res) => res.json({ message: 'Funcionando!' }));

router.get('/user', (req, res) => {
  var page = "../MenuLogado.html";
  fs.readFile(page, function(err, data) {
    //carrega index
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

router.get('/busca', (req, res) => {
  var page = "../BuscaResul.html";
  fs.readFile(page, function(err, data) {
    //carrega index
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

router.get('/previaContrato',(req,res) =>
{
  var page = "previaContrato.html";
  fs.readFile(page, function(err, data) {
    //carrega index
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

router.get('/Contrato',(req,res) =>
{
  var page = "templateContrato.html";
  fs.readFile(page, function(err, data) {
    //carrega index
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

router.get('/perfil',(req,res) =>
{
  var page = "../Perfil.html";
  fs.readFile(page, function(err, data) {
    //carrega index
    res.writeHead(200, "Content-Type", "text/html; charset=utf-8");
    res.write(data);
    res.end();
  });
});

//Login
router.post('/login',(req,res) =>
{
  var email = req.body.Email;
  var senha = req.body.Senha;
  var filter = " WHERE email='"+email +"' AND senha='"+senha+"'";
  //res.json({"CodCliente" : "teste"});
  //db.testConnection();
  db.execQuery("SELECT * FROM Usuario"+filter,res);
  console.log("email: "+email+"\nsenha: "+senha);
});

router.post('/pesqUsuario',(req,res) =>
{
  var cpf = req.body.cpf;
  var filter = " WHERE cpf='"+cpf +"'";
  //res.json({"CodCliente" : "teste"});
  //db.testConnection();
  db.execQuery("SELECT * FROM Usuario"+filter,res);
});

router.post('/pesqImovel',(req,res) =>
{
  var codigo = req.body.codigo;
  var filter = " WHERE codigo='"+codigo +"'";
  //res.json({"CodCliente" : "teste"});
  //db.testConnection();
  db.execQuery("SELECT * FROM Imovel"+filter,res);
});


router.post('/getNotificacaoContrato',(req,res) =>
{
  var idLocador = req.body.idUsuario;
  var sql="select c.idContrato,i.*,lp.aprovaContrato from Contrato c inner join locatario_pertence lp on c.idContrato = lp.Contrato_idContrato";
  sql+= " inner join Imovel_possui_Contrato ic on ic.Contrato_idContrato=c.idContrato";
  sql+= " inner join Imovel i on ic.Imovel_idImovel = i.idImovel";
  sql+= " where lp.Usuario_idUsuario="+idLocador+" and lp.aprovaContrato is null;";
  //res.json({"CodCliente" : "teste"});
  //db.testConnection();
  console.log(sql);
  db.execQuery(sql,res);
});


router.post('/cadContrato',(req,res) =>
{
  var cpf = req.body.cpf;
  var codigo = req.body.codigo;
  var valor = req.body.valor;
  var dataInicio = req.body.dataInicio;
  var dataFim = req.body.dataFim;
  var metodoPagamento = req.body.metodoPagamento;
  console.log("chegou no metodo");
  var sql = "";
  sql+=" INSERT INTO `Ksa`.`Contrato` (`valor`, `dataInicio`, `dataFim`, `status`, `metodoPagamento`)";
  sql+=" VALUES ("+valor+", '"+dataInicio+"', '"+dataFim+"', "+0+", "+metodoPagamento+"); ";
  //console.log(sql);
  db.execQuery(sql,res);
  
});

router.post('/cadLocatarioContrato',(req,res) =>
{
  var cpf = req.body.cpf;
  var codigo = req.body.codigo;
  var valor = req.body.valor;
  var dataInicio = req.body.dataInicio;
  var dataFim = req.body.dataFim;
  var metodoPagamento = req.body.metodoPagamento;
  console.log("chegou no metodo");
  var sql = "";
  sql+="INSERT INTO `Ksa`.`locatario_pertence` (`Usuario_idUsuario`, `Contrato_idContrato`, `aprovaContrato`)";
  sql+="SELECT u.idUsuario,max(c.idContrato),"+true+" from Usuario u, Contrato c where cpf='"+cpf+"';";
  //console.log(sql);
  db.execQuery(sql,res);
  
});

router.post('/cadImovelContrato',(req,res) =>
{
  var cpf = req.body.cpf;
  var codigo = req.body.codigo;
  var valor = req.body.valor;
  var dataInicio = req.body.dataInicio;
  var dataFim = req.body.dataFim;
  var metodoPagamento = req.body.metodoPagamento;
  console.log("chegou no metodo");
  var sql = "";
  sql+="INSERT INTO `Ksa`.`Imovel_possui_Contrato` (`Imovel_idImovel`, `Contrato_idContrato`)";
  sql+=" SELECT i.idImovel,max(c.idContrato) from Imovel i, Contrato c where i.codigo='"+codigo+"' group by i.idImovel;";
  console.log(sql);
  db.execQuery(sql,res);
  
});

router.post('/aprovaContrato',(req,res) =>
{
  var idUsuario = req.body.idUsuario;
  var idContrato = req.body.idContrato;
  var decisao = req.body.decisao;
  console.log("chegou no metodo");
  var sql = "";
  sql += "update locatario_pertence set aprovaContrato = "+decisao;
  sql +=" where Usuario_idUsuario="+idUsuario+" and Contrato_idContrato="+idContrato+";"
  console.log(sql);
  db.execQuery(sql,res);
  
});

router.post('/setStatusContrato',(req,res) =>
{
  var idContrato = req.body.idContrato;
  var decisao = req.body.decisao;
  var status = 0;
  if(decisao == true)
    status = 5;
  else
    status = 1;
  console.log("chegou no metodo");
  var sql = "";
  sql += "update Contrato set status = "+status;
  sql +=" where idContrato="+idContrato+";"
  console.log(sql);
  db.execQuery(sql,res);
  
});

router.post('/loadContrato',(req,res) =>
{
  var idContrato = req.body.idContrato;
  var sql = "select c.*,i.*,u.* from Contrato c inner join locatario_pertence lp on c.idContrato = lp.Contrato_idContrato";
  sql += " inner join Imovel_possui_Contrato ic on ic.Contrato_idContrato=c.idContrato";
  sql +=" inner join Imovel i on ic.Imovel_idImovel = i.idImovel";
  sql +=" inner join Usuario u on u.idUsuario = lp.Usuario_idUsuario";
  sql +=" where c.idContrato="+idContrato+";";
  console.log(sql);
  db.execQuery(sql,res);
  
});

router.post('/cadLocadorContrato',(req,res) =>
{
  var cpf = req.body.cpf;
  var codigo = req.body.codigo;
  var valor = req.body.valor;
  var dataInicio = req.body.dataInicio;
  var dataFim = req.body.dataFim;
  var metodoPagamento = req.body.metodoPagamento;
  console.log("chegou no metodo");
  var sql = "";
  sql+="INSERT INTO `Ksa`.`locatario_pertence` (`Usuario_idUsuario`, `Contrato_idContrato`, `aprovaContrato`)";
  sql+="SELECT u.idUsuario,max(c.idContrato),"+null+" from Usuario u";
  sql+=" inner join Usuario_possui_Imovel upm on u.idUsuario = upm.Usuario_idUsuario";
  sql+=" inner join Imovel i on upm.Imovel_idImovel=i.idImovel, Contrato c"
  sql+=" where i.codigo='"+codigo+"'";
  sql+=" group by u.idUsuario;"
  //console.log(sql);
  db.execQuery(sql,res);
});

app.use('/', router);
app.use('/css',getCss);
app.use('/images',getImages);
app.use('/JavaScript',getJS);
//app.use(express.static(__dirname + '/css'));
app.listen(port);
console.log('Servidor Http iniciado!');

