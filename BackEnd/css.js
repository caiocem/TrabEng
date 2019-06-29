var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get("/Layer1.png",(req,res)=>{
    var logo = "../css/Layer1.png";
    fs.readFile(logo, function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
});

router.get("/StyleSheetBuscaResul.css",(req,res)=>{
    var cssFile = "../css/StyleSheetBuscaResul.css";
    fs.readFile(cssFile,function(err,data){
      res.writeHead(200, {'Content-Type':'text/css'});
      res.write(data);
      res.end();
    });
});
  
router.get("/StyleSheetBuscaResul.css",(req,res)=>{
    var cssFile = "../css/StyleSheetBuscaResul.css";
    fs.readFile(cssFile,function(err,data){
        res.writeHead(200, {'Content-Type':'text/css'});
        res.write(data);
        res.end();
    });
});

router.get("/StyleSheetMenu.css",(req,res)=>{
    var cssFile = "../css/StyleSheetMenu.css";
    fs.readFile(cssFile,function(err,data){
        res.writeHead(200, {'Content-Type':'text/css'});
        res.write(data);
        res.end();
    });
});

router.get("/StyleSheetMenuLogado.css",(req,res)=>{
    var cssFile = "../css/StyleSheetMenuLogado.css";
    fs.readFile(cssFile,function(err,data){
        res.writeHead(200, {'Content-Type':'text/css'});
        res.write(data);
        res.end();
    });
});

router.get("/StyleSheetPerfil.css",(req,res)=>{
    var cssFile = "../css/StyleSheetPerfil.css";
    fs.readFile(cssFile,function(err,data){
        res.writeHead(200, {'Content-Type':'text/css'});
        res.write(data);
        res.end();
    });
});
module.exports = router;