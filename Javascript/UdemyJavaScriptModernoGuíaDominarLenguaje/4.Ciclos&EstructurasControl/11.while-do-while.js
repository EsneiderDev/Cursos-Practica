

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;
console.error(' \nWhile\n ');
/* 
while ( i < carros.length ) {
    console.log( carros[i] );
    i++;
}   // Ford
    // Mazda
    // Honda
    // Toyot
*/
// Nota: mejor deberia la condicion siempre ser verdadera
// condidedados falsos : null, undefined y false

console.warn('Si quiero para el ciclo');
while ( carros[i] ) {
    if ( i === 1) {
        break;
    }
    console.log( carros[i] );
    i++;
}   // Ford

console.warn('Si quiero seguir desde un nodo especifico');

while( carros[i] ){
    if ( i === 1) {
        i++;
        continue;
    }

    console.log(carros[i]);
    i++;
}  // Honda
   // Toyota

console.error(' \n Do While\n ');
let j = 0;
do {
    console.log( carros[j] );
    j++;
} while (carros[j]);   // carros en la posición 4 da undefines que es considerado un false 
                       // console.log(carros[4]); // undefined
    // Ford
    // Mazda
    // Honda
    // Toyota