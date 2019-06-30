class Controladora {
    constructor(){
        if(! Controladora.instance)
            Controladora.instance = this;

        return Controladora.instance;
    }
    teste()
    {
        alert("OK");
    }
    recuperaUsuario(email, senha)
    {
        var dados = {"Email" : email, "Senha" : senha };
        $.post("http://localhost:8080/login",dados,
        function(data, status){
            if(data[0] != null)
            {
                if(data[0]['email'] == email && data[0]['senha']==senha)
                {
                    document.location.href = "http://localhost:8080/user?id="+data[0]['idUsuario'];
                }
                else
                    alert("Não conseguimos achar seu usuário ou seu cadastro ainda não foi aprovado"
                +"\nCaso você seja um usuário já aprovado, tente logar novamente. Se o problema persistir entre em contato conosco(mais informações em Contato).");
                alert("Data: " + data[0]['nome']+ "\nStatus: " + status);
            }
            else
            {
                alert("Não conseguimos achar seu usuário ou seu cadastro ainda não foi aprovado"
                +"\nCaso você seja um usuário já aprovado, tente logar novamente. Se o problema persistir entre em contato conosco(mais informações em Contato).");
            }
        });
    }
} 

var instance = new Controladora();
idUserLoc = 1; //Link
idUserProp = 2; //Ganondorf
$(document).ready(function(){
    $("#btnLogin").click(function(){
        instance.teste();
        
        email = $('#fieldEmail').val();
        senha = $('#fieldSenha').val();
        instance.recuperaUsuario(email,senha);
    }); 
});

$(document).ready(function(){
    $("#btnBuscar").click(function(){
        var parameters = location.search.substring(1).split("&");
        var temp = parameters[0].split("=");
        user = unescape(temp[1]);
        document.location.href = "http://localhost:8080/busca?user="+user;
    }); 
});


