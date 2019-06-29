var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/BuscaResul.js',(req,res) =>{
    var JS_Script = "../JavaScript/BuscaResul.js";
    fs.readFile(JS_Script, function(err, data) {
      res.writeHead(200, {'Content-Type':'application/javascript'});
      res.write(data);
      res.end();
    });
});

router.get('/jquery-3.4.1.min.js',(req,res) =>{
    var JS_Script = "../JavaScript/jquery-3.4.1.min.js";
    fs.readFile(JS_Script, function(err, data) {
      res.writeHead(200, {'Content-Type':'application/javascript'});
      res.write(data);
      res.end();
    });
});

router.get('/Menu.js',(req,res) =>{
    var JS_Script = "../JavaScript/Menu.js";
    fs.readFile(JS_Script, function(err, data) {
      res.writeHead(200, {'Content-Type':'application/javascript'});
      res.write(data);
      res.end();
    });
});

router.get('/MenuLogado.js',(req,res) =>{
    var JS_Script = "../JavaScript/MenuLogado.js";
    fs.readFile(JS_Script, function(err, data) {
      res.writeHead(200, {'Content-Type':'application/javascript'});
      res.write(data);
      res.end();
    });
});

router.get('/Perfil.js',(req,res) =>{
    var JS_Script = "../JavaScript/Perfil.js";
    fs.readFile(JS_Script, function(err, data) {
      res.writeHead(200, {'Content-Type':'application/javascript'});
      res.write(data);
      res.end();
    });
});

module.exports = router;