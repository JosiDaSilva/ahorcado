;(function(){

  var palabras = [ 'PROGRAMAR', 'DESARROLLO', 'VENTISCA', 'COLECCION', 'INFORME', 'INTERINO', 'DENTRIFICO', 'TERROR', 'MONOTONO', 'LLUVIA', 'ESBELTO', 'CAMALEON', 'MUERTO']
  // variable para guardar configuración 
var juego = null 
// para no enviar nuevas alertas
var finalizado = false
var $html = {
  arbol: document.getElementById("arbol"),
 Correcto: document.querySelector(".Correcto"),
 incorrecto: document.querySelector(".incorrecto")

}
function cargar(juego) {
  //cambio de imagen 
  var $elem
$elem= $html.arbol
var estado = juego.estado
if (estado === 7){
estado = juego.estadoPrevio 
}
$elem.src = "./img/0" + estado + ".svg"
// Letras adivinada
var palabra = juego.palabra 
var Correcto  = juego.Correcto
$elem = $html.Correcto
$elemm.innerHTML = ""
for (let letra of palabra){
  $span = document.createElement("span")
  $txt = document.createTextNode("")
  if (correcto.indexOf(letra)>=0) {
  $txt.nodeValue = letra 
  }
  $span.setAttribute("class","letra adivinada")
  $span.appendchild($txt)
  $elem.appendChild($span)
}
var incorrecto = juego.incorrecto
$elem = $html.incorrecto
$elem.innerHTML=""
for (let letra of incorrecto) {
 let  $span = document.createElement("span")
 let  $txt = document.createTextNode(letra)
 $span.setAttribute("class","letra incorrecta" )
  $span.appendChild(txt)
  $elem.appendChild($span)
}
}
function adivinar(juego,letra){
  var estado = juego.estado
  if (estado === 1 || estado === 8){
    return
  }
  var Correcto = juego.Correcto
  var incorrecto = juego.incorrecto
  if (Correcto.indexOf(letra)>=0|| incorrecto.indexOf(letra) >=0){
    return 
  }
  var palabra = juego.palabra
  if (palabra.indexOf(letra)>=0) {
    let ganado = true 
    // ver si llegamos al estado ganad
    for (let l of palabra) {
      if (adivinado.indexOf(l) <0 && l !== letra){
      ganado = false
      juego.estadoPrevio = juego.estado
      break
      }
    }
    // si ya se ha ganado lo indicamos 
    if (ganado) {
      juego.estado =8
    }
    // agregamos la letra a las adivinada
    Correcto.push(letra)
  }
  else {
// si no incluye la letra
juego.estado--
// agregamos la letra a la lista de errores

incorrecto.push(letra)
  }
}
window.onkeypress = function adivinarLetra(e) {
  var letra = e.key
  letra = letra.toUpperCase()
  if (/[A-ZÑ]/.test(letra)){
    return
  }
  adivinar(juego, letra)
  var estado = juego.estado
  if (estado === 8 && !finalizado){
    setTimeout(alertaGanado, 500)
    finalizado = true 
  } else if (estado ===1 && !finalizado ){
 let palabra = juego.palabra
 let fn = alertaPerdido.bind(undefined, palabra)
 setTimeout (fn, 500)
 finalizado = true 
  }
  cargar(juego)
}
window.nuevoJuego = function nuevoJuego(){
var palabra = palabraAleatoria()
juego = {}
juego.estado = 7
juego.Correcto = []
juego.incorrecto = []
finalizado = true 
cargar(juego)
}
function palabraAleatoria(){
  var index = ~~(Math.random() * palabras.length)
  return palabras[index]
}
function alertaGanado(){
  alert("Felicidades, ganaste!")
}
function alertaPerdido(palabra){
  alert("Lo siento, perdiste . la palabra era: " + palabra)
}
nuevoJuego() 
}())
