/**
 * 2C = Two od Clubs    (Tréboles)
 * 2D = Two od Diaminds (Tréboles)
 * 2H = Two od Hearts   (Corazon)
 * 2S = Two od Speads   (Espasdas)
 */

console.log(' \n7. CREAR BARAJA DE CARTAS \n ');
let barajas = [];

let letras = [
    'C',
    'D',
    'H',
    'S'
]

let letrasNumericas = [
    'J',
    'Q',
    'K',
    'A'
]

const crearBaraja = () => {

    for (let i = 2;   i <= 10 ; i++) {
        for (let letra of letras) {
            barajas.push(i + letra)
            
        } 
    }
    
    for (let letra of letras) {
        for (const letraNumerica of letrasNumericas) {
            barajas.push(letraNumerica + letra )
        }
        
    }
    //console.log( barajas );
    barajas = _.shuffle(barajas);
    console.log( barajas );
    return barajas;
}

crearBaraja();

// esta funcion me permite tomar una carta
console.log(' \n8. PEDIR CARTA \n ');

const pedirCarta = () => {

    if ( barajas.length == 0) {
        throw 'No hay mas varajas en en el mazo';
    }

    const carta = barajas.pop();
    console.log( carta ); 
    console.log( barajas );
    return carta;
    
}

//barajas = [];       // juego.js:53 Uncaught No hay mas varajas en en el mazo
/* for (let index = 0; index < 53; index++) {
    pedirCarta();
}  console.log( barajas );
*/

console.log(' \n 9. VALOR DE LA CARTA \n ');
// 9. VALOR DE CADA CARTA.
/* 
const valorCarta = ( carta ) => {
    const valor = carta[0];
    console.log({valor});
} 
valorCarta('2D');       // {valor: '2'}
// Nota: En JavaScript tosod los string se pueden trabajar como un arreglo 
// Nota: No es recomendable para este caso porque solo da el valor de la 
//       primera posicion, si fuera un 10 trajera 1
*/

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1  );
    console.log( valor );
    let puntos = 0;
    if ( isNaN( valor )) {
        console.log('No es un numero');
    }else{
        console.log('Es un numero');
        puntos = valor;
    }
    console.log( puntos * 1 + 5);  
}

// Nota: Cero "0" como morado es un numero y cuando es gris es un string 

valorCarta( '5D' ); // 0
// Nota: como el valor de la 5D es 5  + 5 es 55, lo computa, porque es un string














/* 


let matriz = [[1,2,3],
              [4,5,6],
              [7,8,9]
];

for (let x = 0; x < matriz.length ; x++) {
    for ( y=0;y<matriz[x].length;y++) {
        const element = matriz[x][y];
    }
}
 */