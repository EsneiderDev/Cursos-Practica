
// ENCADENAMIENTO OPCIONAL
let casa = {}

casa.direccion.calle // ERROR TypeError: Cannot read properties of undefined
casa?.direccion?.calle

// SEPARADOR DE NÚMERICO
// dificil de leer
const millon = 1000000

const millonLeible = 1_000_000
console.log( millonLeible ); // 1000000

//  ASIGNACION LÓGICA NULA
let a = 'verde'
let b
a ??= 'azul'
b ??= 'azul'
console.log( a, b); // verde azul

// == MÉTODO REPLACEALL ==
let colores = 'rojo-verde-azul'

// cambiar todas las ocurrencias
let colores2 = colores.replaceAll('-', ' ')

console.log( colores2 ); // rojo verde azul
