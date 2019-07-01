function loadPageContrato()
{
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    idLocador = unescape(temp[1]);
    var temp = parameters[1].split("=");
    idContrato = unescape(temp[1]);
    $.post("http://localhost:8080/loadContrato",{"idContrato":idContrato},
        function(data, status){
            if(data[0] != null && status=="success")
            {
                if(idLocador == data[0]['idUsuario'])
                {
                    $('#nomeLocador').text(data[0]['nome']);
                    $('#cpfLocador').text(data[0]['cpf']);
                    $('#rgLocador').text(data[0]['RG'])
                    $('#nomeLocatario').text(data[1]['nome']);
                    $('#cpfLocatario').text(data[1]['cpf']);
                    $('#rgLocatario').text(data[1]['RG'])
                }
                else
                {
                    $('#nomeLocador').text(data[1]['nome']);
                    $('#cpfLocador').text(data[1]['cpf']);
                    $('#rgLocador').text(data[1]['RG'])
                    $('#nomeLocatario').text(data[0]['nome']);
                    $('#cpfLocatario').text(data[0]['cpf']);
                    $('#rgLocatario').text(data[0]['RG'])
                }


                $('#metodoPagamento').text((data[0]['metodoPagamento']==0)?"cartão de crédito" : "boleto bancário");
                var dtInicio = new Date(data[0]['dataInicio']);
                $('#dataInicio').text(dtInicio.getDate()+1+"/"+dtInicio.getMonth()+1+"/"+dtInicio.getFullYear());
                var dtFim = new Date(data[0]['dataFim']);
                $('#dataFim').text(dtFim.getDate()+1+"/"+dtFim.getMonth()+1+"/"+dtFim.getFullYear());
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