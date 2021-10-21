
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



console.log(' \n3.FUNCION DE FECHA: forma corta(ECMA 6): Retornar un objeto literal \n (PERSONA 3 y 4) \n ');


const crearPersona3 = (nombre, apellido) =>  {
    return {
        nombre,
        apellido 
    }
};
//Nota con la variable, trae propiedad y valir en la variable.
const persona3 = crearPersona3('Esma', 'buel');

console.log(persona3);                  // {nombre: 'Esma', apellido: 'buel'}

const crearPersona4 = (nombre, apellido) => ({nombre, apellido});

const persona4 = crearPersona4('nombrePersona4', 'apePersona4');

console.log(persona4);                  // {nombre: 'nombrePersona4', apellido: 'apePersona4'}



console.log(' \n4. IMPRIMIR ARGUMENTOS   \n ');


function imprimirArgumentos() {
    console.log( arguments );
}

imprimirArgumentos(10, 20, false, 'Esneider', 1.67);  // Arguments(5) [10, 20, false, 'Esneider', 1.67, callee: ƒ, Symbol(Symbol.iterator): ƒ]

const argumentos = (edad, ...arg ) => {
    console.log({arg});
    console.log( edad, arg );
}
// Nota: despues del parametro "Rest" no debe venir otro argumento

argumentos(24, 2, 3, true, 'Esneider', true );      // {edad: 24, arg: Array(5)}
                                                    // 24 (5) [2, 3, true, 'Esneider', true]


console.log(' \n5. COLOCARLE PROPIEDADES(Const o Variables) AL VALOR DE LOS ARGUMENTOS  \n ');

const imprimirArgumentos2 = (edad, ...arg) =>{
    //console.log( edad, arg);                             // 24 (4) [true, false, 'Esneider', true ó / 'hola']
    return arg; // Nota, retorna un objeto
}
//Nota: no se puede agregar ningun parametro despues de ...arg pero si antes aunque tomara valor por ejemplo edad
const argumentos2 = imprimirArgumentos2(24, true, false, 'Esneider', true)

console.log( { argumentos2 });                                                    // {argumentos2: Array(4)}  (clic) --> argumentos2: (4) [true, false, 'Esneider', true]
console.log( argumentos2[0], argumentos2[1], argumentos2[2], argumentos2[3]);     //true false 'Esneider' true
//Nota: No imprime la edad porque ya la sustrajo 

//1. Colocar propieda 
const vivo     =  argumentos2[0];
const casado   =  argumentos2[1];
console.log({vivo, casado});                             // {vivo: true, casado: 'Esneider'}}

console.log('otra forma seria...');
const [casado1, vivo2, nombre, saludo] = imprimirArgumentos2(24, true, false, 'Esneider', 'Hola');
console.log({ casado1, vivo2, nombre, saludo });         // {casado: true, vivo: false, nombre: 'Esneider', saludo: 'Hola'}
console.log(  casado1, vivo2, nombre, saludo  );         // true false 'Esneider' 'Hola'
console.log([ casado1, vivo2, nombre, saludo ]);         // (4) [true, false, 'Esneider', 'Hola']



console.log(' \n6. Imprimir solo propieda pero ahora en objeto \n ');

const crearPersona5 = ( nombre, apellido) => {
    return {
        nombre,
        apellido
    }
}

const {apellido} = crearPersona5('nombrePersona5', 'apellidoPersona5');
console.log({ apellido });               // {apellido: 'apellidoPersona5'}

//Cambiarle el nombre a la variable
console.log('Cambiarle el nombre a la variable: ');
const {apellido: nuevoApellido} = crearPersona5('NuevoNombrePerona5', 'NuevoApellidoPersona5');
console.log({nuevoApellido});            // {nuevoApellido: 'NuevoApellidoPersona5'}


console.log(' \n7. DESESTRUCTURACION DE ARGUMENTOS con Objetos Literales  \n ');


let tony = {

    nombre: 'Tony Stark',
    codName: 'Ironman',
    vivo: true,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    mision: {
        viaje: 'salvar planeta tierra'
    }
    
};

const imprimirPropiedades = ( personaje ) => {

    console.log('nombre: ', personaje.nombre );
    console.log('codName: ', personaje.codName );
    console.log('vivo: ', personaje.vivo );
    console.log('edad: ', personaje.edad );
    console.log('trajes: ', personaje.trajes );

}

imprimirPropiedades( tony );    // nombre:  Tony Stark
                                // codName:  Ironman
                                // vivo:  true
                                // edad:  40
                                // trajes:  (3) ['Mark I', 'Mark V', 'Hulkbuster']
          

//2. Desestructuracion de Argumentos
console.log('Desestructuracion de argumentos: ');
const imprimirPropiedadesVariables = ({nombre, codName, vivo, edad, trajes, mision}) => {
    console.log({nombre});
    console.log({codName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
    console.log({mision});
}

imprimirPropiedadesVariables( tony );   // {nombre: 'Tony Stark'}
                                        // {codName: 'Ironman'}
                                        // {vivo: true}
                                        // {edad: 40}
                                        // {trajes: Array(3)}

// La edad no viene
console.log('Sin Edad: ');

let tonyClone = {

    nombre: 'Tony Stark',
    codName: 'Ironman',
    vivo: true,
    //edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
    
};

const imprimirPropiedVarSinEdad = ( { nombre, codName, vivo, edad = 15 , trajes } ) => {

    //edad = edad || 0; // se hacia antes
    console.log( {nombre} );
    console.log( {codName} );
    console.log( {vivo} );
    console.log( {edad} );
    console.log( {trajes} );

}
imprimirPropiedVarSinEdad( tonyClone );