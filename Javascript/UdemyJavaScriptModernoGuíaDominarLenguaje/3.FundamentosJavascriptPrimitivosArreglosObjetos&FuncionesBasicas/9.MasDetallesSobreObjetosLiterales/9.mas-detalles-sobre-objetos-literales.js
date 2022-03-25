

const personaje = {

    nombre: 'Tony Stark',
    codName: 'Ironman',
    vivo: true,
    edad: 40,
    coords:{
        lat: 34.032,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90165',
        ubicacion: 'Malibu - California'
    },
    'ultima-perlicula': 'Infinity war'
};

console.log('-- Como borrar una propiedad -- ');
/*
//No funciona 
personaje.edad = null;
console.log( personaje.edad );  // null 
*/

delete personaje.edad;
console.log(personaje); // {nombre: 'Tony Stark', codName: 'Ironman', vivo: true, coords: {…}, trajes: Array(3), …}

console.log('-- Agregar una propiedad -- ');

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log( entriesPares ); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

console.log('Esta casado', entriesPares[7][1], entriesPares[7] );

console.log('-- No se pueda cambiar el objeto --');
// Cambiamos el "let personaje a const personaje"

console.log(personaje);
// personaje = true;   //  Uncaught TypeError: Assignment to constant variable.

// Nota: "delete" sigue funcionando y la propiedad asignada "casado" tambien porque solo bloquea los tipos de asignacion
//       como por ejemplo: "personaje = {} " esto daria error 

console.log('-- Bloquear el objeto --');

Object.freeze( personaje );

personaje.dinero = 10000000;
personaje.casado = false;

console.log(personaje.dinero, personaje); // undefined {nombre: 'Tony Stark', codName: 'Ironman', vivo: true, coords: {…}, trajes: Array(3), …}
console.log(personaje.casado);            // true

console.log('\n--Propiedades dentro de propiedades se puede modificar');
// Nota: el Object.freeze solo congele las propiedades pero no las que estan dentro de ellas
personaje.coords.lat = 10;                // 10
console.log('Latitud: ', personaje.coords.lat);
console.log('Solucion: ');

const propiedades  = Object.getOwnPropertyNames( personaje );
const valores      = Object.values( personaje );
console.log(propiedades);  // (8) ['nombre', 'codName', 'vivo', 'coords', 'trajes', 'direccion', 'ultima-perlicula', 'casado']
console.log( valores );    // (8) ['Tony Stark', 'Ironman', true, {…}, Array(3), {…}, 'Infinity war', true]


array