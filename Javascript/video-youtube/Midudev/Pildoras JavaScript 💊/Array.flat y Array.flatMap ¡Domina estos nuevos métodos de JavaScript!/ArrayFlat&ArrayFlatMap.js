// link: https://www.youtube.com/watch?v=em_Vh7ZGrnw&ab_channel=midulive

/* Quiero filtrar los numeros que son pares y los demas los quiero multiplicar por 2 */
let arr1 = [1,2,3,4,5,6].map( n  => n * 2 ) 
console.log( arr1 ) // [ 2, 4, 6, 8, 10, 12 ]

let arr2 =  [1,2,3,4,5,6].filter( n => n % 2 !== 0 )
                         .map( n  => n * 2 ) 
console.log( arr2 ) // [ 2, 6, 10 ]


let arr3 = [1,2,3,4,5,6].map( n  => n % 2 === 0 ? false : n * 2  )
                        .filter(Boolean)
console.log( arr3 ) // [ 2, 6, 10 ]

// Flat lo que hace es aplanar un array
let arr4 = [1,2,3,[4,5,[6,7,[8,9]]]].flat( Infinity /* 3 */) // El Argumento en el metodo flat son los niveles que vas aplanar
console.log( arr4 ) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// Puede usarse para el manejo de Cookie, puede ser un ejemplo.
// Nota: Puedes usar el numero Infynity de Javascript 

let arr5 = [1,2,3,4,5,6].flatMap( n => n % 2 === 0 ? [] : n * 2 )
console.log( arr5 ) // [ 2, 6, 10 ]
// Aplana el array vario de la primera condicion, lo elimina y la segunda condicion lo multiplica por 2
// Nota: Hay que entender que lo que mapeas ( n => n % 2 === 0 ? [] : n * 2 ) lo aplanas

let arr6 = [1,2,3,4,5,[6,7]].flatMap( n => n % 2 === 0 ? [] : n * 2 )
console.log( arr6 ) // [ 2, 6, 10, NaN ]

// Solución con flat
let arr7 = [1,2,3,4,5,[6,7]].flat()
                            .flatMap( n => n % 2 === 0 ? [] : n * 2 )
console.log( arr7 ) // [ 2, 6, 10, 14 ]