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



app.use('/', router);
app.use('/css',getCss);
app.use('/images',getImages);
app.use('/JavaScript',getJS);
//app.use(express.static(__dirname + '/css'));
app.listen(port);
console.log('Servidor Http iniciado!');

