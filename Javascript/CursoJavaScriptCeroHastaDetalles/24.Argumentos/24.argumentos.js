/* 
// PROTOTIPOS(def): Son porpiedades y metodos que son heredadas por ser un tipo de datos
// Nota: Tambien hay prototips para las funciones 
function miFuncion() {
    console.log( arguments );
}

// Console => miFuncion.prototype   // {constructor: ƒ}
                                    // constructor: ƒ miFuncion()
                                    // arguments: null
                                    // caller: null
                                    // length: 0
                                    // name: "miFuncion"
                                    // prototype: {constructor: ƒ}
                                    // [[FunctionLocation]]: 24.argumentos.js:3
                                    // [[Prototype]]: ƒ ()
                                        // apply: ƒ apply()
                                        // arguments: (…)   --> NOTA: Toda funcion tiene argumentos
                                        // ...
                                    // [[Scopes]]: Scopes[1]
                                    // [[Prototype]]: Object

console.log( miFuncion() ); // Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
                                // callee: ƒ miFuncion()
                                // length: 0
                                // Symbol(Symbol.iterator): ƒ values()
                                // [[Prototype]]: Object
                                
miFuncion(); //  Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]

*/
console.log('------------ variable arguments fuera del contexto---------');
/* 
var arguments = 10;

function miFuncion2() {
    console.log(arguments);    
}

miFuncion2(); // Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ] (click) [[Prototype]]: Object --> (clic) --> constructor: ƒ Object() --> arguments: (…) ...
//Nota: Se  crea un prototipo y el contexto, y dentro esta la variable argumentos. No imprimio 10 por no hce parte del contexto

*/

console.log('------------ Pasar argumentos ---------');

function miFuncion3(a, b, c, d) {   // no hace referencia de las variables
    console.log(arguments);   
    console.log( arguments.callee.name ); // 4
    console.log( arguments.callee.length ); // 4
    console.log( arguments.callee.prototype ); // 4
}

miFuncion3(10);  // Arguments [10 ...

// Nota: hace referencia a los argumentos de la invocacion

console.log('------------ si no tuviera parametros ---------');

function miFuncion4() {  
    console.log(arguments); 
}

miFuncion4(10, 20, 30, 40, {esneder: 'nombre'});  // Arguments(5) [10, 20, 30, 40, {…}, callee: ƒ, Symbol(Symbol.iterator): ƒ]


console.log('------------ si no tuviera parametros ---------');

function miFuncion5(a, b, c, d) { 
    console.log(a + b + c + d); 
}

miFuncion5(10, 20, 30, 40);  // 100
miFuncion5(10, 20, 30, {esneder: 'nombre'});  // 60[object Object]
miFuncion5(10, 20, 30); // NaN (Not-A-Number ó "No es Un Número")

console.log('------------ si imprimo los parametros ---------');

function miFuncion6(a, b, c, d) { 
    console.log(a , b , c , d);
}

miFuncion6(10, 20, 30, 40);                   // 10 20 30 40
miFuncion6(10, 20, 30, {esneder: 'nombre'});  // 10 20 30 {esneder: 'nombre'}
miFuncion6(10, 20, 30);                       // 10 20 30 undefined


function miFuncion7(a, b, c, d) {
    console.log( 30 + undefined );
}

miFuncion7();                                 // NaN

console.log('------------- parametros extrictos ---------');

function miFuncion8(a, b, c, d) { 
    if(arguments.length != 4){
        console.log('La funcion necesita 4 parametros');
        return;
    }else{
        console.log('La suma es: ' + a + b + c + d); 
    }
}

miFuncion8(); // La funcion necesita 4 parametros
miFuncion8(10, 20, 30, 40) // La suma es: 10203040