// Array de String
const nombres = ["Daniel", "Ana", "Carlos"]
nombres.sort();
console.log( nombres ); // [ 'Ana', 'Carlos', 'Daniel' ]

nombres.reverse();
console.log( nombres ); // [ 'Daniel', 'Carlos', 'Ana' ]


// Array de numeros
const numeros = [40, 100, 1, 5, 25, 10]
numeros.sort( ( a, b) => a - b )
console.log( numeros ); // [ 1, 5, 10, 25, 40, 100 ]

const numeros2 = [40, 100, 1, 5, 25, 10]
numeros2.sort( ( a, b ) => { return b - a } )
console.log( numeros2 );


// Array de Objetos
const usuarios = [
    { nombre: 'Javier', apellido: 'Fernandez' },
    { nombre: 'Maria', apellido: 'Jimenez' },
    { nombre: 'Carmen', apellido: 'Alvarez' },
]

usuarios.sort( ( a, b ) => { return a.nombre.localeCompare( b.nombre) })
console.log( usuarios );
/* 
[
    { nombre: 'Carmen', apellido: 'Alvarez' },
    { nombre: 'Javier', apellido: 'Fernandez' },
    { nombre: 'Maria', apellido: 'Jimenez' }
] 
*/