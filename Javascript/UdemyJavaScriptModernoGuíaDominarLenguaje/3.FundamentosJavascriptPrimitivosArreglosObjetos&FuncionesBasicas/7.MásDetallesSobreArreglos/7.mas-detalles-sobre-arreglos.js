// Propiedades: variable dentro del arreglo
// Metodos: Funciones internas de los arreglos predefinidos por el proto al instante de definirse la funcion
let juegos   = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log( 'Largo: ', juegos.length ); // Largo:  4

console.log('--Tomas prime valor y ultumo--');

let primero  = juegos[0];
let ultimo   = juegos[juegos.length - 1];
console.log( primero, ultimo );     //Zelda Chrono


console.log('-- Recorrer con forEach -- ');

juegos.forEach( (Element, index, arreglo) => {
    // console.log(index, Element, arreglo);   // 0 'Zelda' (4) ['Zelda', 'Mario', 'Metroid', 'Chrono']
    console.log({index, Element, arreglo}); // {index: 0, Element: 'Zelda', arreglo: Array(4)}
});

console.log('-- Agregar un nuevo juego al final --');

let nuevaLongitud = juegos.push('F-Zero');
console.log( {nuevaLongitud, juegos} );  // {nuevaLongitud: 5, juegos: Array(5)}

console.log('-- Agregar un nuevo juego al inicio --');

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});   // {nuevaLongitud: 6, juegos: Array(6)}

console.log('-- Borror ultimo juego --');

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});    // {juegoBorrado: 'F-Zero', juegos: Array(5)} (clic)--> juegos: (3) ['Fire Emblem', 'Metroid', 'Chrono']

console.log('-- Borror apartir de una posición --');

let pos = 1;

console.log('original:');
console.log(juegos);    // (5) ['Fire Emblem', 'Zelda', 'Mario', 'Metroid', 'Chrono']

console.log('Borrado:');
let juegosBorrados = juegos.splice( pos, 2 );
console.log({ juegosBorrados, juegos });  // {{juegosBorrados: Array(2), juegos: Array(3)}


console.log('-- Buscar numero de indice con indexof');
let indexJuego = juegos.indexOf('Metroid');
let indexJuego2 = juegos.indexOf('mArio 3');
//Nota: case sensitive, distingue entre mayusculas y minusculas. 

console.log({ indexJuego });  // {indexJuego: 1} 
console.log({ indexJuego2 }); // {indexJuego2: -1}
// Nota: devuelve "-1" porque 0 es la primera posicion del elemento y 1 es la segunda.  
