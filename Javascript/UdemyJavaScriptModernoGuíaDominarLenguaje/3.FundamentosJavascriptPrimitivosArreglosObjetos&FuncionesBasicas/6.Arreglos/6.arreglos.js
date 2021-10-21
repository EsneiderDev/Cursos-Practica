// FORMAS DE DEFINIR EL ARREGLO
/* 
//No es muy comun
const arr = new Array(10);
console.log( {arr} );    // {arr: Array(10)} 
console.log(  arr  );    // (10) [vacío × 10] 

const arr2 =  Array[10]; // undefined
console.log(   arr2  );  // {arr2: undefined}
console.log( { arr2 });

const arr3 = [];
console.log(  arr3  );   // []
console.log( {arr3} );   // {arr3: Array(0)}
*/



let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log( videoJuegos );     // (3) ['Mario 3', 'Megaman', 'Chrono Trigger']

console.log('---Imprimir primera posicion ---');
console.log(videoJuegos[0]);


let arregloCosas = [
    true,
    123,
    'Esneider',
    1+2,
    function() { },
    ()=>{},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ]]
];

console.log( arregloCosas );  //(7) [true, 123, 'Esneider', 3, ƒ, ƒ, {…}]
                                    // 0: true
                                    // 1: 123
                                    // 2: "Esneider"
                                    // 3: 3
                                    // 4: ƒ ()
                                    // 5: ()=>{}
                                    // 6: {a: 1}
                                    // length: 7
console.log( arregloCosas[2]); // Esneider

console.log( arregloCosas[7][3]); // Dr. Light

console.log( arregloCosas[7][4][1]); // Woodman