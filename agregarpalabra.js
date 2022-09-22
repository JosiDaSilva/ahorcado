var botonJugar = document.querySelector("#crear-jugar"); 
 var palabra = document.querySelector("#creando-palabra"); 
  
 var palabra_final; 
 palabra.value = ""; 
  
 botonJugar.addEventListener("click", function(){ 
     console.log(palabra.value.toUpperCase()); 
     if(tiene8(palabra.value)){ 
         palabra_final = palabra.value.toUpperCase(); 
         start(palabra_final); 
         palabra.value = ""; 
     }else{ 
         alert("Ingrese una Palabra de 8 letras..!"); 
     } 
 }); 
  
 function tiene8(palabra){ 
     if(palabra.length == 8){ 
         return true; 
     }else{ 
         return false; 
     } 
 }

// ARCHIVO1.JS
let palabras = ['CASA','PERRO','GATO','ELEFANTE'];
// guardamos el array en localStorage con stringify
localStorage.setItem('palabras', JSON.stringify(palabras))


// ARCHIVO2.JS
function agregarPalabra(){
    let dato = document.getElementById('texto').value.toUpperCase();
    // Obtenemos el array localStorage de palabras y lo convertimos en objeto con parse
    let palabrasLocal = JSON.parse(localStorage.getItem("palabras"));
    // Agregamos el nuevo al array
    palabrasLocal.push(dato);
    // Lo pasamos por stringify para que se guarde como array
    let palabrasLocalNew = JSON.stringify(palabrasLocal);
    // Mostramos un alert para ver que todo este bien
    alert(palabrasLocalNew);
    // Guardamos el nuevo array
    localStorage.setItem('palabras', palabrasLocalNew);
}
