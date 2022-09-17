if(document.getElementById("addWord")){
  var modal = document.getElementById("modal");
  var button = document.getElementById("addWord");
  var span = document.getElementByClassName("close");
  var section = document.getElementsByTagName("section");
  button.onclick  function() {
  modal.estilos.display= "block";
  section.estilos.position = "static";
  section.estilos.height = "80%";
  section.estilos.overflow = "hidden";
  }
  span.onclick = function(){
  modal.estilos.display= "none";
  container.estilos.position = "inherit";
  container.estilos.height = "auto";
  container.estilos.overflow = "visible";
  }
  }
