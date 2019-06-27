    function ShowAlugar(){
        document.getElementById("frmAlugar").style.display = "block";
    }
    function off() {
        document.getElementById("frmAlugar").style.display = "none";
    }

  function ShowOver(numDiv){
    if (numDiv==1)
      document.getElementById("frmAlugar").style.display = "block";
    if(numDiv==2)
      document.getElementById("FotosCasa").style.display = "block"; 
    if(numDiv==3)
      document.getElementById("divContataUser").style.display = "block"; 
    
        
  }
  function off(numDiv) {
    if(numDiv==1)
      document.getElementById("frmAlugar").style.display = "none";
    if(numDiv==2)
      document.getElementById("FotosCasa").style.display = "none";
    if(numDiv==3)
      document.getElementById("divContataUser").style.display = "none"; 
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

  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }