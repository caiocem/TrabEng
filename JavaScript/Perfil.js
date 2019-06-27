    function ShowPerfil(numDiv){
      CloseDiv(numDiv);
      if (numDiv == 1 && document.getElementById("divDados").style.display == "none")
        document.getElementById("divDados").style.display = "block";
      if (numDiv == 2 && document.getElementById("divAlerta").style.display == "none")
        document.getElementById("divAlerta").style.display = "block";
      if (numDiv == 3 && document.getElementById("divContrato").style.display == "none")
        document.getElementById("divContrato").style.display = "block";
      if (numDiv == 4 && document.getElementById("divImoveis").style.display == "none")
        document.getElementById("divImoveis").style.display = "block";
      if (numDiv == 5 && document.getElementById("divAvaliacao").style.display == "none")
        document.getElementById("divAvaliacao").style.display = "block";
    }  

    function CloseDiv(numDivStay) {
      if (numDivStay != 1 && document.getElementById("divDados").style.display == "block")
        document.getElementById("divDados").style.display = "none";
      if (numDivStay != 2 && document.getElementById("divAlerta").style.display == "block")
        document.getElementById("divAlerta").style.display = "none";
      if (numDivStay != 3 && document.getElementById("divContrato").style.display == "block")
        document.getElementById("divContrato").style.display = "none";
      if (numDivStay != 4 && document.getElementById("divImoveis").style.display == "block")
        document.getElementById("divImoveis").style.display = "none";
      if (numDivStay != 5 && document.getElementById("divAvaliacao").style.display == "block")
        document.getElementById("divAvaliacao").style.display = "none";
    }

  function DeletaNot(id){
    var notific = id;
    notific.parentNode.removeChild(notific);
  }

  function SliderNota(val, id) {
    if (id == "Nota"){
      document.getElementById("NotaNum").innerHTML = val; 
    }
    if (id == "Quarto"){
      document.getElementById("QuartoNum").innerHTML = val; 
    }
    if (id == "Preco"){
      document.getElementById("PrecoValor").innerHTML = val; 
    }
    if (id == "Suite"){
      document.getElementById("SuiteNum").innerHTML = val; 
    }
  }

  function ShowOver(numDiv){
    if (numDiv==1)
      document.getElementById("frmMudarDados").style.display = "block";
    if(numDiv==2)
      document.getElementById("frmQuebrarContrato").style.display = "block";
    if(numDiv==3)
      document.getElementById("frmCadastroImovel").style.display = "block";
    if(numDiv==4)
      document.getElementById("frmAvaliar").style.display = "block";
    if(numDiv==5)
      document.getElementById("divMensagem").style.display = "block";
    
        
  }
  function off(numDiv) {
    if(numDiv==1)
      document.getElementById("frmMudarDados").style.display = "none";
    if(numDiv==2)
      document.getElementById("frmQuebrarContrato").style.display = "none";
    if(numDiv==3)
      document.getElementById("frmCadastroImovel").style.display = "none";
    if(numDiv==4)
      document.getElementById("frmAvaliar").style.display = "none";
    if(numDiv==5)
      document.getElementById("divMensagem").style.display = "none";
  }

  function SliderNota(val, id) {
    if (id == "Nota"){
      document.getElementById("NotaNum").innerHTML = val; 
    }
    if (id == "Quarto"){
      document.getElementById("QuartoNum").innerHTML = val; 
    }
    if (id == "Preco"){
      document.getElementById("PrecoValor").innerHTML = val; 
    }
    if (id == "Suite"){
      document.getElementById("SuiteNum").innerHTML = val; 
    }
  }

  function EscolheAvaliar() {
    if (document.getElementById("AvaliaUsuario").checked == true)
      document.getElementById("CampoImovel").style.display == "none"
    if (document.getElementById("AvaliaUsuario").checked == false)
      document.getElementById("CampoImovel").style.display == "block"

    if (document.getElementById("AvaliaImovel").checked == true)
      document.getElementById("CampoUsuario").style.display == "none"
    if (document.getElementById("AvaliaImovel").checked == false)
      document.getElementById("CampoUsuario").style.display == "block"

  }