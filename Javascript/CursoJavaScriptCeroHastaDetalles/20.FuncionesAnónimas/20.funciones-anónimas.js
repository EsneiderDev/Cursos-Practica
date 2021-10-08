
// Las funciones anonimas sirven para mantener nuestro codigo encapsulado y que no sea manipulado por otras seciones de nuestro proframa
/* var a = 10;

console.log( a );

function cambiarA() {
    a = 20;
}

cambiarA();

console.log( a ); */

// Funcion anomuna
( function name(params) {
    var a = 10;

    console.log( a );

    function cambiarA() {
        a = 20;
    }

    cambiarA();

    console.log( a );
})();