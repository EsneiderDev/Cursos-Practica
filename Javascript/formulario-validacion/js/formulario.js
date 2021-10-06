
const formulario = document.getElementById('formulario');          // podemos acceder a los formularios y lo trae como u
const inputs     = document.querySelectorAll('#formulario input'); // devuelve un array de todo los input
const labels     = document.querySelectorAll('#formulario label' );

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


// Para comprobrar el nombre del input 
const validarFormulario = (e) => {
    /* console.log(e.target.name); */ // cuando demos click o tec

    switch ( e.target.name ) {
        case "usuario":
            /* console.log('Funciona en el nombre de '+ e.target.name ); */
            if(!expresiones.usuario.test( e.target.name )){
                console.log( expresiones.usuario.test( e.target.name ));    // console => expresiones.usuario.test("#") --> false
            }else{
                console.log('false');
            }
            break;
        case "nombre":
            
            break;
        case "password":
            
            break;
        case "password2":
            
            break;
        case "correo":
            
            break;
        case "telefono":
            
            break;
        default:
            console.log("Esta sin definir");
            break;
    }
    
}

inputs.forEach( (input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => { 
    e.preventDefault(); // Anula el evento para no enviar el formulario sin nada
});







 
function preventDef(event) {
    event.preventDefault();
}

/*  
function agregarManipulacion() {
    document.getElementById("checkbox").addEventListener("click", 
    preventDef, false);
    alert('No se puede manipular')
}
  
function removerManipulacion() {
    document.getElementById("checkbox").removeEventListener("click",
    preventDef, false);
    alert('Se puede manipular')
}  
  


function simulateClick() {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,
    0, 0, 0, 0, 0, false, false, false, false, 0, null);
  var cb = document.getElementById("checkbox"); 
  var canceled = !cb.dispatchEvent(evt);
  if(canceled) {
    // A handler called preventDefault
    alert("canceled");
  } else {
    // None of the handlers called preventDefault
    alert("not canceled");
  }
}
 */


