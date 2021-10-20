/* let arr = new Array[10]; */ 
let arr = [5, 4, 3, 2, 1];

console.log( arr );     // (5) [5, 4, 3, 2, 1]
  
console.log(' ----  arrelo con un valor undefined ------ ');
console.log( arr[0], arr[4], arr[5]);   // 5 1 undefined

console.log('---- Mostarlo al revés ------');

arr.reverse();
console.log( arr );     // (5) [1, 2, 3, 4, 5]

console.log('--- Recorre con Map y mostrar cuadrado de cada elemento ---');
arr = arr.map( function (elemen) {
    return elemen *= elemen;
});

console.log( arr  ); // (5) [1, 4, 9, 16, 25]

console.log('---- Map raiz cuadrada de cada elemento ------');

var roots = arr.map( Math.sqrt );
console.log( roots );  //(5) [1, 2, 3, 4, 5]

console.log('----- Join devuelve otro arreglo ------');

arr = roots.join();
console.log( arr ); // 1,2,3,4,5

