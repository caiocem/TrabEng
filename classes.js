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
        // this.idUsuario = 
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
    pedidoDeExtensaoDeContrato(contrato_) {

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
    constructor(titulo,descricao,valor,imagem,localizacao,comodos,informacoesExtres,codigo) {
        this.titulo = titulo
        this.descricao = descricao
        this.valor = valor
        this.imagem = imagem
        this.localizacao = localizacao
        this.comodos = comodos
        this.informacoesExtres = informacoesExtres
        this.codigo = codigo
        // this.idImovel = 
    }

}

class Contrato {
    constructor(valor,dataInicio,dataFim,status,metodoPagamento,codigo,idUsuario,idImovel) {
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