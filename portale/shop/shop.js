function controllo() {
    var meseanno = document.getElementById("meseanno");
    var testo1 = document.getElementsByClassName("testo1");
    var testo2 = document.getElementsByClassName("testo2");
  
    for (var i = 0; i < testo1.length; i++) {
      if (meseanno.checked == true) {
        testo1[i].style.display = "block";
        testo2[i].style.display = "none";
      } else if (meseanno.checked == false) {
        testo1[i].style.display = "none";
        testo2[i].style.display = "block";
      }
    }
  }
  controllo();
  