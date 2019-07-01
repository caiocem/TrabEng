class Usuario {
    constructor(nome,email,imagem,cpf,documento,selfie,statusConta,senha) {
        this.nome = nome
        this.email = email
        this.imagem = imagem
        this.cpf = cpf
        this.documento = documento
        this.selfie = selfie
        this.statusConta = statusConta
        this.senha = senha
        this.imoveis = new List();
        this.contratos = new List();
        this.idUsuario = 1;
    }
    solicitarLocacao(imovel,data) {
        dataAtual = new Date();
        if(data > dataAtual) {
            dataFim_ = data;
            dataFim_.setFullYear(data.getFullYear()+1);
            novoContrato = new Contrato(imovel.valor,data,dataFim_,0,0,this.idUsuario,imovel.idImovel);
            this.contratos.push(novoContrato);
            conteudo = this.nome + " est\xE1 interessado(a) no seu im\xF3vel " + imovel.nome + ".";
            notificacaoParaLocador = new Notificacao(conteudo,dataAtual,imovel.idUsuario);
        }
    }
    alterarDataInicio(contrato_,data) {
        if(contrato_.status>=0 && contrato_.status<=2) {
            contrato_.dataInicio = data;
            contrato_.status = 0;
            conteudo = this.nome + " alterou a data de in\xEDcio do aluguel do im\xF3vel " + imoveis[contrato_.idImovel].nome + " para " + data + ".";
            const dataAtual = new Date();
            notificacaoParaLocatario = new Notificacao(conteudo,dataAtual,contrato_.idUsuario);
            notificacaoParaLocador = new Notificacao(conteudo,dataAtual,imoveis[contrato_.idImovel].idUsuario);
        }
    }
    alterarValor(contrato_,valor) {
        if(contrato_.status>=0 && contrato_.status<=2) {
            contrato_.valor = valor;
            contrato_.status = 0;
            conteudo = this.nome + " alterou o valor mensal do aluguel do im\xF3vel " + imoveis[contrato_.idImovel].nome + " para " + valor + ".";
            const dataAtual = new Date();
            notificacaoParaLocatario = new Notificacao(conteudo,dataAtual,contrato_.idUsuario);
            notificacaoParaLocador = new Notificacao(conteudo,dataAtual,imoveis[contrato_.idImovel].idUsuario);
        }
    }
    aprovaContratoLocador(contrato_) {
        if(contrato_.status==0) {
            contrato_.status = 2;
            conteudo = this.nome + " aprovou o contrato do aluguel do im\xF3vel " + imoveis[contrato_.idImovel].nome + ".";
            const dataAtual = new Date();
            notificacaoParaLocatario = new Notificacao(conteudo,dataAtual,contrato_.idUsuario);
        } else if(contrato_.status==1) {
            contrato_.status = 3;
            conteudo = this.nome + " aprovou o contrato do aluguel do im\xF3vel " + imoveis[contrato_.idImovel].nome + ".\nComo ambas as partes aprovaram o contrato, este ser\xE1 iniciado no dia " + contrato_.dataInicio + ", a n\xE3o ser que ocorram outras altera\xE7\xF5es.";
            const dataAtual = new Date();
            notificacaoParaLocatario = new Notificacao(conteudo,dataAtual,contrato_.idUsuario);
        }
    }
    aprovaContratoLocatario(contrato_) {
        if(contrato_.status==0) {
            contrato_.status = 1;
            conteudo = this.nome + " aprovou o contrato do aluguel do im\xF3vel " + imoveis[contrato_.idImovel].nome + ".";
            const dataAtual = new Date();
            notificacaoParaLocador = new Notificacao(conteudo,dataAtual,imoveis[contrato_.idImovel].idUsuario);
        } else if(contrato_.status==2) {
            contrato_.status = 3;
            conteudo = this.nome + " aprovou o contrato do aluguel do im\xF3vel " + imoveis[contrato_.idImovel].nome + ".\nComo ambas as partes aprovaram o contrato, este ser\xE1 iniciado no dia " + contrato_.dataInicio + ", a n\xE3o ser que ocorram outras altera\xE7\xF5es.";
            const dataAtual = new Date();
            notificacaoParaLocador = new Notificacao(conteudo,dataAtual,imoveis[contrato_.idImovel].idUsuario);
        }
    }
    definirFormaPagamento(contrato_,formaPagamento) {
        if(contrato_.status==3) {
            contrato_.status=4;
            contrato_.metodoPagamento = formaPagamento;
        }
    }
    consultarImoveis(descricao="", localizacao="", comodos=new List(), valor=0.0, codigo="") {
        var resposta = new List(imoveis);
        resposta = resposta.filter(elem.descricao.includes(descricao));
        resposta = resposta.filter(elem.localizacao.includes(localizacao));
        // resposta = resposta.filter(elem.comodos.includes(comodos));
        resposta = resposta.filter(elem.valor <= valor);
        resposta = resposta.filter(elem.codigo.includes(codigo));
    }
    reprovaContratoLocador(contrato_) {
        if(contrato_.status==2) {
            contrato_.status = 0;
            conteudo = this.nome + " reprovou o contrato do aluguel do im\xF3vel " + imoveis[contrato_.idImovel].nome + ".";
            const dataAtual = new Date();
            notificacaoParaLocatario = new Notificacao(conteudo,dataAtual,contrato_.idUsuario);
        } else if(contrato_.status==3) {
            contrato_.status = 1;
            conteudo = this.nome + " reprovou o contrato do aluguel do im\xF3vel " + imoveis[contrato_.idImovel].nome + ".";
            const dataAtual = new Date();
            notificacaoParaLocatario = new Notificacao(conteudo,dataAtual,contrato_.idUsuario);
        }
    }
    reprovaContratoLocatario(contrato_) {
        if(contrato_.status==1) {
            contrato_.status = 0;
            conteudo = this.nome + " reprovou o contrato do aluguel do im\xF3vel " + imoveis[contrato_.idImovel].nome + ".";
            const dataAtual = new Date();
            notificacaoParaLocador = new Notificacao(conteudo,dataAtual,imoveis[contrato_.idImovel].idUsuario);
        } else if(contrato_.status==3) {
            contrato_.status = 2;
            conteudo = this.nome + " reprovou o contrato do aluguel do im\xF3vel " + imoveis[contrato_.idImovel].nome + ".";
            const dataAtual = new Date();
            notificacaoParaLocador = new Notificacao(conteudo,dataAtual,imoveis[contrato_.idImovel].idUsuario);
        }
    }
    cadastrarImovel(titulo,descricao,valor,imagem,localizacao,comodos,informacoesExtras="") {
        codigo = 'aaaaaaaaaaaaa';
        novoImovel = new Imovel(titulo,descricao,valor,imagem,localizacao,comodos,informacoesExtras,codigo);
        this.imoveis.push(novoImovel);
    }
    removerImovel(seraRemovido) {
        this.imoveis.delete(seraRemovido);
    }
}

class Notificacao {
    constructor(conteudo,dataDaMensagem,idUsuario) {
        this.conteudo = conteudo
        this.dataDaMensagem = dataDaMensagem
        this.idUsuario = idUsuario
        // this.idNotificacao
    }
    // enviarNotificacao() {

    // }
}

class Imovel {
    constructor(titulo,descricao,valor,imagem,localizacao,comodos,informacoesExtras,codigo) {
        this.titulo = titulo
        this.descricao = descricao
        this.valor = valor
        this.imagem = imagem
        this.localizacao = localizacao
        this.comodos = comodos
        this.informacoesExtras = informacoesExtras
        this.codigo = codigo
        this.idImovel = 1;
    }

}

class Contrato {
    constructor(valor,dataInicio,dataFim,status,metodoPagamento,idUsuario,idImovel) {
        this.valor = valor
        this.dataInicio = dataInicio
        this.dataFim = dataFim
        this.status = status
        this.metodoPagamento = metodoPagamento
        this.codigo = codigo
        this.idUsuario = idUsuario
        this.idImovel = idImovel
        // this.idContrato = 
    }
    notificaçãoVencimentoAluguel() {
        const dataAtual = new Date();
        diasAteVencimento = dataInicio.getDay() - dataAtual.getDay();
        if(diasAteVencimento==2 && this.status>=6 && this.status<=8) {
            conteudo = "Seu alugel vencer\xE1 daqui a 2 dias.";
            vencimentoAluguel = new Notificacao(conteudo,dataAtual,this.idUsuario);
        }
    }
    notificaçãoVencimentoContrato() {
        const dataAtual = new Date();
        if(dataAtual.getMonth()==this.dataFim.getMonth() && dataAtual.getFullYear() == this.dataFim.getFullYear()) {
            diasAteVencimento = dataFim.getDay() - dataAtual.getDay();
            if(diasAteVencimento==7 && this.status>=5 && this.status<=8) {
                conteudo = "Seu contrato do im\xF3vel " + imoveis[this.idImovel].nome + " vencer\xE1 daqui a 7 dias.";
                vencimentoAluguel = new Notificacao(conteudo,dataAtual,this.idUsuario);
            }
        }
    }
}


// \xE1 - á
// \xED - í
// \xF3 - ó
// ã - \xE3
// õ - \xF5
// ç	\xE7


class Controladora {
    constructor(){
        if(! Controladora.instance)
            Controladora.instance = this;

        return Controladora.instance;
    }
    teste()
    {
        alert("Instancia alocada!");
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
                    sessionStorage.setItem("cpf",data[0]['cpf']);
                    document.location.href = "http://localhost:8080/user?id="+data[0]['idUsuario'];
                }
                else
                    alert("Não conseguimos achar seu usuário ou seu cadastro ainda não foi aprovado"
                +"\nCaso você seja um usuário já aprovado, tente logar novamente. Se o problema persistir entre em contato conosco(mais informações em Contato).");
            }
            else
            {
                alert("Não conseguimos achar seu usuário ou seu cadastro ainda não foi aprovado"
                +"\nCaso você seja um usuário já aprovado, tente logar novamente. Se o problema persistir entre em contato conosco(mais informações em Contato).");
            }
        });
    }
    solicitaAluguel(requerimento)
    {
        $.post("http://localhost:8080/cadContrato",requerimento,
        function(data, status){
            if(data != null && status=="success")
            {
                $.post("http://localhost:8080/cadLocatarioContrato",requerimento,
                function(data1, status){
                    if(data1 != null && status=="success")
                    {
                        $.post("http://localhost:8080/cadLocadorContrato",requerimento,
                        function(data2, status){
                            if(data2 != null && status=="success")
                            {
                                $.post("http://localhost:8080/cadImovelContrato",requerimento,
                                function(data3, status){
                                    if(data3 != null && status=="success")
                                    {
                                        alert("Requerimento realizado com sucesso!");
                                        off(1);
                                    }
                                }); 
                            }
                        }); 
                    }
                }); 
            }
        }); 
    }

    aprovaContrato(Contrato,Usuario,decisao)
    {
        $.post("http://localhost:8080/aprovaContrato",{'idUsuario':Usuario, 'idContrato':Contrato,'decisao':decisao},
        function(data, status){
            if(data != null && status=="success")
            {
                $.post("http://localhost:8080/setStatusContrato",{'idContrato':Contrato,'decisao':decisao},
                function(data, status){
                    if(data != null && status=="success")
                    {
                        alert("Sua decisão sobre o contrato foi submetida com sucesso!");
                        var div = "#msg"+Contrato;
                        $(div).remove();
                    }
                });
            }
        });
    }
} 

var instance = new Controladora();

function DateToMysqlDate(date,addYear)
{
    return date.getFullYear()+addYear+"-"+parseInt((date.getMonth()+1)/10)+""+(date.getMonth()+1)%10+"-"+parseInt((date.getDate()+1)/10)+""+(date.getDate()+1)%10
}

function PreviaContrato()
{
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    codigo = unescape(temp[1]);
    requerimento = {"codigo" : codigo};
    $.post("http://localhost:8080/pesqImovel",requerimento,
        function(data, status){
            if(data[0] != null && status=="success")
            {
                var texto = "na Rua "+data[0]['rua']+", Nº "+data[0]['numero'];
                if(data[0]['complemento'])
                    texto+=", Complemento "+data[0]['complemento'];
                texto +=", Bairro "+data[0]['bairro']+" na cidade de "+data[0]['cidade'];
                texto +=", CEP "+data[0]['CEP']+", "+data[0]['pais']; 
                $('#enderecoImovel').text(texto);
                $('#valor').text("R$ "+data[0]['valor']);
            }
    }); 

}



function loadContrato(idContrato)
{
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    user = unescape(temp[1]);
    url = "http://localhost:8080/Contrato?user="+user+"&idContrato="+idContrato;
    window.open(url);
}

function aprovaContrato(idContrato,decisao)
{
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    user = unescape(temp[1]);
    var r;
    if(decisao == true)
        r = confirm("Deseja realmente aprovar este contrato?");
    else
        r = confirm("Deseja realmente desaprovar este contrato?");
        
    if (r == true) {
        instance.aprovaContrato(idContrato,user,decisao);
    }
}

$(document).ready(function(){

    $("#btnLogin").click(function(){
        
        email = $('#fieldEmail').val();
        senha = $('#fieldSenha').val();
        instance.recuperaUsuario(email,senha);
    }); 

    $("#btnBuscar").click(function(){
        var parameters = location.search.substring(1).split("&");
        var temp = parameters[0].split("=");
        user = unescape(temp[1]);
        document.location.href = "http://localhost:8080/busca?user="+user;
    });

    $("#btnAlerta").click(function(){
        var parameters = location.search.substring(1).split("&");
        var temp = parameters[0].split("=");
        user = unescape(temp[1]);
        
        $.post("http://localhost:8080/getNotificacaoContrato",{'idUsuario':user},
        function(data, status){
            if(data[0] != null && status=="success")
            {
                notificacao = "";
                for(i=0;    data[i] != null; i++)
                {
                    notificacao+="<div id='msg"+data[i]['idContrato']+"' value='"+data[i]['idContrato']+"'>";
                    notificacao+="<p><p class='PinLine' > Alerta : </p> <p class='PinLine' id='DescriptAlert'> Contrato pendente </p><p></p>";
                    notificacao+="<p class='PinLine' id='DescriptAlert'> Imóvel:";
                    notificacao+="Rua "+data[i]['rua']+", nº "+data[i]['numero']+", Bairro "+data[i]['bairro']+", na cidade de "+data[i]['cidade'];
                    notificacao+="</p><p></p>";
                    notificacao+="<button type='button' class='btnLogin3' style='margin-left:30%' onclick='loadContrato("+data[i]['idContrato']+")'> Ver contrato </button>";
                    notificacao+="<button type='button' class='btnLogin3' style='margin-left:30%' onclick='aprovaContrato("+data[i]['idContrato']+",true)'> Aprovar contrato </button>";
                    notificacao+="<button type='button' class='btnLogin3' style='margin-left:30%' onclick='aprovaContrato("+data[i]['idContrato']+",false)'> Desaprovar contrato </button>";
                    notificacao+="</div>";
                }
                $('#divAlerta').html(notificacao);
            }
        });
    });
    
    $("#btnContrato").click(function(){
        codigo = "M45T3R5W0RD";
        url = "http://localhost:8080/previaContrato?codigo="+codigo;
        window.open(url);
    });

    $("#icoImoveis").click(function(){
        var parameters = location.search.substring(1).split("&");
        var temp = parameters[0].split("=");
        user = unescape(temp[1]);
        document.location.href = "http://localhost:8080/perfil?user="+user;
    });

    $("#btnRequereAluguel").click(function(){
        var parameters = location.search.substring(1).split("&");
        var temp = parameters[0].split("=");
        idLocatario = unescape(temp[1]);
        cpfLocatario = sessionStorage.getItem('cpf');
        codigo = "M45T3R5W0RD";
        var valor = 50;
        var dataInicio = $("#dataInicio").val()
        var inicio = new Date(dataInicio);
        var dataFim = DateToMysqlDate(inicio,1);
        var metodoPagamento = parseInt($('#metodoPagamento').val());
        alert(dataFim);
        alert(metodoPagamento);
        var locatario;
        var imovel;

        //0 == pendente 1 == aceito , 2 == não aceito
        var requerimento = {
            "cpf" : cpfLocatario, 
            "codigo" : codigo,
            "valor" : valor,
            "dataInicio" : dataInicio,
            "dataFim" : dataFim,
            "metodoPagamento" : metodoPagamento
        }
        instance.solicitaAluguel(requerimento);
    });
});






