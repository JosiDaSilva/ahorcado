
   let palabras = [ "PROGRAMAR", "DESARROLLO", "VENTISCA", "COLECCION", "INFORME", "INTERINO", "DENTRIFICO", "TERROR", "MONOTONO", "LLUVIA", "ESBELTO", "CAMALEON", "MUERTO"]
  
       
  
  
  
  
  var $html = {
    arbol: document.getElementById('arbol'),
    Correcto: document.querySelector('.Correcto'),
    incorrecto: document.querySelector('.incorrecto')
  }
  
  function dibujar(juego) {
    // Actualizar la imagen del arbol
    var $elem
    $elem = $html.arbol
  
    var estado = juego.estado
    if (estado === 8) {
      estado = juego.previo
    }
    $elem.src="img/0" + estado + '.svg'
  
    // Creamos las letras adivinadas
    var palabra = juego.palabra
    var Correcto = juego.Correcto
    $elem = $html.Correcto
    // borramos los elementos anteriores
    $elem.innerHTML = ''
    for (let letra of palabra) {
      let $span = document.createElement('span')
      let $txt = document.createTextNode('')
      if (Correcto.has(letra)) {
        $txt.nodeValue = letra
      }
      $span.setAttribute('class', 'letra adivinada')
      $span.appendChild($txt)
      $elem.appendChild($span)
    }
  
    // Creamos las letras erradas
    var incorrecto = juego.incorrecto
    $elem = $html.incorrecto
    // Borramos los elementos anteriores
    $elem.innerHTML = ''
    for (let letra of incorrecto) {
      let $span = document.createElement('span')
      let $txt = document.createTextNode(letra)
      $span.setAttribute('class', 'letra errada')
      $span.appendChild($txt)
      $elem.appendChild($span)
    }
  }
  
  function adivinar(juego, letra) {
    var estado = juego.estado
    // Si ya se ha perdido, o ganado, no hay que hacer nada
    if (estado === 1 || estado === 8) {
      return
    }
  
    var Correcto = juego.Correcto
    var incorrecto = juego.incorrecto
    // Si ya hemos Correcto o incorrecto la letra, no hay que hacer nada
    if (Correcto.has(letra) || incorrecto.has(letra)) {
      return
    }
  
    var palabra = juego.palabra
    var letras = juego.letras
    // Si es letra de la palbra
    if (letras.has(letra)) {
      // agregamos a la lista de letras adivinadas
      Correcto.add(letra)
      // actualizamos las letras restantes
      juego.restante--
  
      // Si ya se ha ganado, debemos indicarlo
      if (juego.restante === 0) {
        juego.previo = juego.estado
        juego.estado =  8
      }
    } else {
      // Si no es letra de la palabra, acercamos al arbol un paso más de su ahorca
      juego.estado--
      // Agregamos la letra, a la lista de letras erradas
      incorrecto.add(letra)
    }
  }
  
  document.onkeydown = function adivinarLetra(e) {
    var letra = e.key
    letra = letra.toUpperCase()
    if (/[^A-ZÑ]/.test(letra)) {
      return
    }
    adivinar(juego, letra)
    var estado = juego.estado
    if (estado === 8 && !finalizado) {
      setTimeout(alertaGanado, 0)
      finalizado = true
    }else if (estado === 1 && !finalizado) {
      let palabra = juego.palabra
      let fn = alertaPerdido.bind(undefined, palabra)
      setTimeout(fn, 0)
      finalizado = true
    }
    dibujar(juego);
  }
  
  window.nuevoJuego = function nuevoJuego() {
    var palabra = palabraAleatoria()
    juego = {}
    juego.palabra = palabra
    juego.estado = 7
    juego.Correcto = new Set()
    juego.incorrecto = new Set()
    finalizado = false
  
    var letras = new Set()
    for (let letra of palabra) {
      letras.add(letra)
    }
    juego.letras = letras
    juego.restante = letras.size
  
    dibujar(juego)
    console.log(juego)
  }
  
  function palabraAleatoria() {
    var index = [Math.floor(Math.random() * palabras.length)]
    return palabras[index]
  }
  
  function alertaGanado() {
    alert('Felicidades, ganaste!')
  }
  
  function alertaPerdido(palabra) {
    alert('Perdiste, la palabra era: ' + palabra)
  }
   
    const openModal = document.querySelector(".agregar");
    const pantalla = document.querySelector(".hombre-ahorcado")
    const modal = document.querySelector(".modal");
    const cerrarModal = document.querySelector(".close");
    openModal.addEventListener("click", (e)=>{
      e.preventDefault();
    modal.classList.add("modal--show");
    pantalla.classList.add("pointer");
    document.onkeydown = null;
    });
    function agregarPalabra(){ 
     let dato = document.getElementById('Texto').value.toUpperCase(); 
     let palabrasLocal = JSON.parse(localStorage.getItem("palabras")); 
     palabrasLocal.push(dato); 
     let palabrasLocalNew = JSON.stringify(palabrasLocal); 
     alert(palabrasLocalNew); 
     localStorage.setItem('palabras', palabrasLocalNew); 
  
     location.href = "index.html";   
     
 } 
  
  
 
       
      alert('La nueva palabra es' + nuevaPalabra);
     modal.classList.remove("modal--show");
  }
    
  
     cerrarModal.addEventListener("click", (e)=>{
      e.preventDefault();
    modal.classList.remove("modal--show");
    });
    
   
  
  nuevoJuego()
  

  
