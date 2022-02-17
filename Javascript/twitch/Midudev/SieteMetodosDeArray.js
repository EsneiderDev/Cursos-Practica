

// Transformar cadena de numeros multiplicado por 2
let arr = [1,2,3].map(n => n * 2)
console.log( arr );

// Filtrar la comida que no sea carnivora
let arr2 = ['melocoton', 'apio', 'carne'].filter(n => n !== 'carne');
console.log( arr2 );

// Encuentra y devuelve la gallina
let arr3 = ['🦖','🐫','🐔'].find(n => n === '🐔');
console.log( arr3 );

// ¡Rellena el array de dinero
let arr4 = ['','',''].fill('💸');
console.log( arr4 );

// ¿Todos están en bien?
let arr5 = ['✔','❌','✔','✔'].every(n => n === '✔');
console.log( arr5 );

// ¿Hay algún mal? 
let arr6 = ['✔','❌','✔','✔'].some(n => n === '❌');
console.log( arr6 );


// Proximamente Nuevo Metodo de Array #8
/* const nums = [0 ,1 ,2 ,3 ,4 ,5 ]; */

// Agrupa elementos de array en onjetos
// En este caso, en pares o impares
/**
 *  nums.grupBy(x => x % 2 === 0 ? 'even' : 'odd' );
 */ 

// { even: [0, 2, 4], odd: [1, 3, 5} }

// ¡Tambien podrás transformarlo en un Map!
/**
 * const odd   = { odd: true }
 * const even  = { even: true }
 * Array.grupByToMap( x => x % 2 === 0 ? even : odd )
 *  
 */
// Map { {odd: true}: [1, 3, 5], {even: true}: [2, 4]}