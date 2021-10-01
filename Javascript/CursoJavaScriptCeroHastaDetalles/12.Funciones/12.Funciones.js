/* var a = 40

primeraFuncion();

function primeraFuncion() { 
    console.log( a );
}*/

/* var a = 40;
function primeraFuncion() { 
    console.log( a );
}
primeraFuncion();
 */

/* function primeraFuncion() {
}

var a = primeraFuncion();

console.log( a ); */  // Undefined

function primeraFuncion() { console.log("Invocada"); }

var miFuncion = primeraFuncion;  // miFuncion => ƒ primeraFuncion() { console.log("Invocada"); }

miFuncion(); // Invocada