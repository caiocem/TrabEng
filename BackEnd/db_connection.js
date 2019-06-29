
module.exports = database = {
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'toor',
  database : 'ksa'
},
{
  testConnection : function ()
  {
    const mysql      = require('mysql');
    const connection = mysql.createConnection(database);

    connection.connect(function(err){
      if(err) return console.log(err);
      console.log('conectou!');
    })
  },
  
  execQuery : function execQuery(sqlQry,res)
  {
    const mysql      = require('mysql');
    const connection = mysql.createConnection(database);

    connection.query(sqlQry, function(error, results, fields)
    {
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
    });
  },
  insertCliente : function insertRow(sqlQry,res)
  {
    const mysql      = require('mysql');
    const connection = mysql.createConnection(database);

    connection.query(sqlQry, function(error, results, fields)
    {
      if(error) return console.log(error);
      console.log('adicionou registros!');
      conn.end();//fecha a conexão
    });

  }
}
  

  