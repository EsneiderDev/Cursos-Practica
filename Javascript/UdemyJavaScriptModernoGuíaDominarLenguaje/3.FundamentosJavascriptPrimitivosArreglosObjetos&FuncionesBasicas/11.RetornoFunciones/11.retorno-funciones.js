function saludar( nombre ) {      
    // console.log( arguments );    // Arguments(4) ['Esneider', 40, true, 'Colombia', callee: ƒ, Symbol(Symbol.iterator): ƒ]
    // console.log('Hola '+nombre);
    return [1, 2, 3, 4, 5];

    // Nunca se va a retornar
    console.log('Soy el codigo que esta despues del return');
}

const saludar2 = function (nombre) {  
    console.log(`Hola ${nombre}`);
}

const saludarFlacha2 = (nombre) => {
    console.log('Hola '+ nombre);
}


const retornoDeSaludar = saludar('Esneider', 40, true, 'Colombia')                
console.log({retornoDeSaludar});                          // {retornoDeSaludar: 10}

console.log(saludar());                                   // (5) [1, 2, 3, 4, 5]

/* 
saludar2('Manuel');                                       // Hola Manuel
saludarFlacha2('Esneider');                              // Hola Esneider

 */

function sumar(a, b){
    return a + b;
}
console.log(sumar(2, 3));                               // 5

const sumar2 = (a,b) => a + b; 

console.log( sumar2(5,3) );                             // 8

function getAleatoreo() {
    return Math.random();
}

let getAleatoreo2 = () =>  Math.random()+10;


console.log('Aleatorio 1: ', getAleatoreo() );
console.log('Aleatorio 2: ', getAleatoreo2() );