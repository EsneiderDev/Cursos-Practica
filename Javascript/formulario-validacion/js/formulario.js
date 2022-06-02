const formulario = document.getElementById('formulario');          // podemos acceder a los formularios y lo trae como u
const inputs     = document.querySelectorAll('#formulario input'); // devuelve un array de todo los input
const labels     = document.querySelectorAll('#formulario label');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// Para validar todos los campos antes de enviar
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

// Para comprobrar el nombre del input 
const validarFormulario = (e) => {
    /* console.log(e.target.name); */  // cuando demos click o tec
    switch ( e.target.name ) {
        case "usuario":
                validarCampo(expresiones.usuario, e.target, e.target.name );
            break;
        case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre' );
            break;
        case "password":
                validarCampo(expresiones.password, e.target, 'password' );
                validarPassword();
            break;
        case "password2":
                validarPassword();
            break;
        case "correo":
                validarCampo(expresiones.correo, e.target, 'correo' );
            break;
        case "telefono":
                validarCampo(expresiones.telefono, e.target, 'telefono' );
            break;
        default:
            console.log("No hay validacion para el campo");
            break;
    }  
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test( input.value )){         
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
	    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;  // campos
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarPassword = () => {
    var password1 = document.getElementById('password');
    var password2 = document.getElementById('password2');

    if(password1.value != password2.value){
        document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
	    document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
        document.querySelector('#grupo__password2 i').classList.remove('fa-check-circle');
        document.querySelector('#grupo__password2 i').classList.add('fa-times-circle');
        document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['password'] = false;
    }else{
        document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
	    document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo__password2 i').classList.remove('fa-times-circle');
        document.querySelector('#grupo__password2 i').classList.add('fa-check-circle');
        document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}

//Cuendo el usuario escriba y de un clic afuera
inputs.forEach( (input) => {
    input.addEventListener('keyup', validarFormulario );
    input.addEventListener('blur', validarFormulario );
});

/* inputs.forEach( (input) => {
    // console.log(input);
    // console.log(input.name);

    input.addEventListener('keyup', () => {
        console.log('escribiendo...'); 
    });
}); */

formulario.addEventListener('submit', ( e ) => { 
    console.log( form.target );
    e.preventDefault(); // Anula el evento para no enviar el formulario sin nada

    const terminos = document.getElementById('terminos');
    if (campos.usuario && campos.nombre && campos.telefono && campos.correo && campos.password && terminos.checked ) {
        formulario.reset();
 
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

        setTimeout( () => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach( (icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
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


