var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get("/BuscaIcon.png",(req,res)=>{
    var img = "../images/BuscaIcon.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/ContatoIcon.png",(req,res)=>{
    var img = "../images/ContatoIcon.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/ContratoInvalido.png",(req,res)=>{
    var img = "../images/ContratoInvalido.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/ContratoValido.png",(req,res)=>{
    var img = "../images/ContratoValido.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/FotoCasa.png",(req,res)=>{
    var img = "../images/FotoCasa.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/img1.png",(req,res)=>{
    var img = "../images/img1.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/img2.png",(req,res)=>{
    var img = "../images/img2.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/img2.jpg",(req,res)=>{
    var img = "../images/img2.jpg";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
});

router.get("/img3.png",(req,res)=>{
    var img = "../images/img3.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/Layer8.png",(req,res)=>{
    var img = "../images/Layer8.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/logadoIcon.png",(req,res)=>{
    var img = "../images/logadoIcon.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/loginIcon.png",(req,res)=>{
    var img = "../images/loginIcon.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/logoIcon.png",(req,res)=>{
    var img = "../images/logoIcon.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/ok.png",(req,res)=>{
    var img = "../images/ok.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/x.png",(req,res)=>{
    var img = "../images/x.png";
    fs.readFile(img, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

module.exports = router;