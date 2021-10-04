console.log('----------VALORES PRIMITIVOS POR PARAMETRO--------------');
/* function imprimir( nombre) {
    console.log( nombre );
}

imprimir("Esneider");   */
// Nota: mandar variable anonima

/* function imprimir( nombre, apellido) {
    console.log( nombre + " " + apellido );
}

imprimir("Esneider"); // Esneider undefined
imprimir("Juan", "Fernando") // Juan Fernando  */

/* 
function imprimir( nombre, apellido) {

    // if(apellido === undefined)
    // {
    //     apellido = 'xxx';
    // }

    apellido = apellido || "xxx";
    
    console.log( nombre + " " + apellido );
} */

//imprimir("Esneider"); //  Uncaught ReferenceError: apellido is not defined
//imprimir("Juan", "Fernando") //  Uncaught ReferenceError: apellido is not defined

// PODEMOS MANDAR OBJETOS ANONIMOS
console.log('----------UNA OBJETO POR PARAMETRO--------------');

function imprimirObj( persona ) { 
    console.log( persona ); // {nombre: 'Manuel', apellido: 'Hoz'}
    console.log( persona.nombre + " " + persona.apellido); // Manuel Hoz
}

console.log('-- objeto Anonimas --');
imprimirObj( {
    nombre: "Manuel",
    apellido: "Hoz"
} ); 
// Objeto anonimo

function imprimirObjDos( persona ) { 
    console.log( 'persona: ', persona ); // {nombre: 'Esneider', apellido: 'Buelvas'}
    console.log('nombre: '+ persona.nombre + " apellido: " + persona.apellido); // Manuel Hoz

    persona.nombre = "Andres";
}


var obj = {
    nombre: "Esneider",
    apellido: "Buelvas"
}

console.log('-- objeto No Anonimas --');
imprimirObjDos(obj);

console.log( obj.nombre ); // Andres
console.log( obj ); // {nombre: 'Andres', apellido: 'Buelvas'}


console.log('----------UNA FUNCION POR PARAMETRO--------------');


function imprimir2( fn ) { 

    console.log( fn );
    fn(); //Funcion anonima
}

var persona2 = {
    nombre: "Juan",
    apellido: "Duglas"
}

console.log('-- funcion Anonimas --');
imprimir2( function () { 
    console.log("Argumento Funcion anonima");
});


console.log('-- funcion No Anonimas --');
var miFuncion = function () {
    console.log("Argumento Funcion no anonima");
}

miFuncion(); // Argumento Funcion no anonima

imprimir2(miFuncion);