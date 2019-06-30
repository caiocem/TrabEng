
module.exports = database = 
{
  testConnection : function()
  {
    const mysql      = require('mysql');
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'root',
      password : 'toor',
      database : 'Ksa'
    });

    connection.connect(function(err){
      if(err) return console.log(err);
      console.log('conectou com o banco!');
    })
  },
  
  execQuery : function execQuery(sqlQry,res)
  {
    const mysql      = require('mysql');
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'root',
      password : 'toor',
      database : 'Ksa'
    });

    connection.query(sqlQry, function(error, results, fields)
    {
      if(error) 
        res.json(error);
      else
      {
        console.log(results);
        res.json(results);
      }
        
      connection.end();
    });
  },
  insertCliente : function insertRow(sqlQry,res)
  {
    const mysql      = require('mysql');
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'root',
      password : 'toor',
      database : 'Ksa'
    });

    connection.query(sqlQry, function(error, results, fields)
    {
      if(error) return console.log(error);
      console.log('adicionou registros!');
      conn.end();//fecha a conexão
    });

  }
}
  

  