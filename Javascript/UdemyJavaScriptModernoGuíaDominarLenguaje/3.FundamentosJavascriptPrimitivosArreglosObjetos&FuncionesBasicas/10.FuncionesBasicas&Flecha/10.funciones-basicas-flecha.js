// funcion explicita
function saludar(nombre) {      
    console.log( arguments );    // Arguments(4) ['Esneider', 40, true, 'Colombia', callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log('Hola '+nombre);
}

// var saludar = 123;            // Uncaught TypeError: saludar is not a function
//let saludar = 123;             // Uncaught SyntaxError: Identifier 'saludar' has already been declared
            

// Funcion anonima
const saludar2 = function (nombre) {  
    console.log(`Hola ${nombre}`);
}
saludar('Esneider', 40, true, 'Colombia')                 // Hola Esneider
saludar2('Manuel');                                       // Hola Manuel
// Nota: como es una constante no hay manera de que esa variable funcion sea reutilizado.


console.log(' \n Funcion de flecha: \n ');
const saludarFlacha = nombre => {
    console.log('Hola '+ nombre);
}

saludarFlacha('Esneider');                              // Hola Esneider



