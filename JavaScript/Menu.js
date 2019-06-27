  function CloseAll() {
    var x = document.getElementById("ContainerLogin");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
	var x = document.getElementById("ContainerCadastro");
	if (x.style.display === "block") {
		x.style.display = "none";
	}
    var x = document.getElementById("HeaderLogin");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    var x = document.getElementById("Login");
    x.style.height = "39%";
    var x = document.getElementById("frmBusca");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    var x = document.getElementById("HeaderBusca");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    var x = document.getElementById("Busca");
    x.style.height = "39%";

    var x = document.getElementById("txtContato");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    var x = document.getElementById("Contato");
    x.style.height = "39%";
  }

function ShowLogin() {
	var x = document.getElementById("ContainerLogin");
	var y = document.getElementById("ContainerCadastro");
	if (x.style.display === "none" && y.style.display == "none") {
	  x.style.display = "block";
	}
  var x = document.getElementById("HeaderLogin");
	if (x.style.display === "block") {
	  x.style.display = "none";
	}
	var x = document.getElementById("Login");
	x.style.height = "64%";
  }

function ShowCadastro() {
	var x = document.getElementById("ContainerLogin");
	x.style.display="none";

	var x = document.getElementById("ContainerCadastro");
	if (x.style.display === "none") {
	  x.style.display = "block";
	}
  var x = document.getElementById("ShowCadastr");
	if (x.style.display === "block") {
	  x.style.display = "none";
	}
  var x = document.getElementById("Login");
	//x.style.height = "74%";
}

function CloseCadastro() {
	var x = document.getElementById("ContainerLogin");
	if (x.style.display === "block") {
	  x.style.display = "none"
	}
	var x = document.getElementById("ContainerCadastro");
	if (x.style.display === "block") {
	  x.style.display = "none";
	}
}

function ShowBusca() {
	var x = document.getElementById("frmBusca");
	if (x.style.display === "none") {
	  x.style.display = "block";
	}
  var x = document.getElementById("HeaderBusca");
	if (x.style.display === "block") {
	  x.style.display = "none";
	}
	var x = document.getElementById("Busca");
	x.style.height = "64%";
  }

    function ShowContato() {
      var x = document.getElementById("txtContato");
      if (x.style.display === "none") {
        x.style.display = "block";
      }

      var x = document.getElementById("Contato");
      x.style.height = "64%";
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