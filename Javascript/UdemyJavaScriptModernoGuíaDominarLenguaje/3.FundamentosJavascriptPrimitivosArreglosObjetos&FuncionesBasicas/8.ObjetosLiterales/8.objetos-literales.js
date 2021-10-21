// Defi: Una variable objeto con pares de valores, no es una variable con valor primitivo

let personaje = {

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

console.log(' -- Notacion de puntos: Acceder a la propiedad --');

console.log('Nombre: ', personaje.nombre );
console.log( personaje ); // {nombre: 'Tony Stark', codName: 'Ironman', vivo: true, edad: 40, coords: {…}, …}
// Nota: en el navegador esta de forma alfabetica

console.log(' \n --  Notacion de corchete: Acceder a la propiedad --');

console.log('Nombre: ', personaje['nombre']);  // Nombre:  Tony Stark
console.log('Edad: ', personaje['edad']);      // Edad:  40

console.log('\n -- Notacion de pundo: dentro de otro objeto--');

console.log('Cordenadas: ', personaje.coords);               // Cordenadas:  {lat: 34.032, lng: -118.7}
console.log('Latitud: ', personaje.coords.lat );             // Latitud:  34.032
console.log('Longitud: ', personaje.coords.lng );            // Longitud:  -118.7

console.log('N° trajes: ', personaje['trajes'].length);      // N° trajes:  3
console.log('Ultimo  trajes: ', personaje.trajes[personaje['trajes'].length - 1]); // Ultimo  trajes:  Hulkbuster

console.log(' \n-- Buscar con una constante "X":---' );
const x = 'vivo';
console.log('Vivo', personaje[x]); // Vivo true

console.log(' \n-- accediendo a propiedad con guiones y sin camelCase :---' );

console.log('Ultima pelicula: ', personaje["ultima-perlicula"]); // Ultima pelicula:  Infinity war
// Nota:  No podemos acceder de la forma personaje.ultima-pelicula porque estaria haciendo una resta


