
//1. Forma tradicional
console.log(' \n1.Forma tradicional: Retornar un objeto literal \n ');
function crearPersona( nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona('Esneider', 'Buelvas'); 

console.log( persona );                // {nombre: 'Esneider', apellido: 'Buelvas'}

console.log(' \n2.Forma tradicional actual ECMAS 6: Retornar un objeto literal \n ');

function crearPersona2( nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

const persona2 = crearPersona2('Esneider', 'Buelvas'); 

console.log( persona2 );                // {nombre: 'Esneider', apellido: 'Buelvas'}

console.log(' \n2.Funcion corta ECMAS 6: Retornar un objeto literal \n ');

const crearPersona3 = (nombre, apellido) => ({nombre, apellido});

const persona3 = crearPersona3('Manuel', 'Olivo');

console.log(persona3);                  // {nombre: 'Manuel', apellido: 'Olivo'}

console.log(' \n3. Imprimir Argumentos  \n ');

function imprimirArgumentos() {
    console.log( arguments );
}
imprimirArgumentos(10, 20, false, 'Esneider', 1.67);  // Arguments(5) [10, 20, false, 'Esneider', 1.67, callee: ƒ, Symbol(Symbol.iterator): ƒ]

const argumentos = ( edad, ...arg ) => {
    console.log( {edad, arg });
    console.log( edad, arg);
}
// Nota: despues del parametro rest no debe venir otro argumento

argumentos(24, 2, 3, true, 'Esneider', true );      // {edad: 24, arg: Array(5)}
                                                    // 24 (5) [2, 3, true, 'Esneider', true]
console.log(' \n3. Colocar propiedades al valor de los argumentos \n ');
const imprimirArgumentos2 = ( edad, ...arg ) => {
   return arg;
}

/*
const argumentos2 = imprimirArgumentos2(24, true, false, 'Esneider', true)
 
const vivo     =  argumentos2[0];
const casado   =  argumentos2[2];
console.log({vivo, casado});                         // {vivo: true, casado: 'Esneider'}e}

console.log( { argumentos2 });                       // {argumentos2: Array(4)}
//Nota: No imprime la edad porque ya la sustrajo

*/
console.log(' \n otra forma seria...');
const [casado, vivo, nombre, saludo] = imprimirArgumentos2(24, true, false, 'Esneider', 'Hola')

console.log({ casado, vivo, nombre, saludo });        // {casado: true, vivo: false, nombre: 'Esneider', saludo: 'Hola'}

console.log(' \n Imprimir solo propieda pero ahora en objeto \n ');

const {apellido} = crearPersona('Esneider', 'Buelvas');
const {apellido: nuevoApellido} = crearPersona('Esneider', 'Buelvas');

console.log({ apellido });               // {apellido: 'Buelvas'}
console.log({nuevoApellido});            // {nuevoApellido: 'Buelvas'}

let tony = {

    nombre: 'Tony Stark',
    codName: 'Ironman',
    vivo: true,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
    
};

const imprimirPropiedades = ( personaje ) => {

    console.log(personaje.nombre );
    console.log(personaje.codeName );
    console.log(personaje.vivo );
    console.log(personaje.edad );
    console.log(personaje.trajes );

}

imprimirPropiedades( tony );    /* 
                                Tony Stark
                                undefined
                                true
                                40
                                (3) ['Mark I', 'Mark V', 'Hulkbuster']
                                */