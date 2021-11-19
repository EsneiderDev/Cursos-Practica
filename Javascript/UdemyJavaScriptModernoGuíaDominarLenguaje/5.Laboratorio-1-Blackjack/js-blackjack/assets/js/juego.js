/**
 * 2C = Two od Clubs    (Tréboles)
 * 2D = Two od Diaminds (Tréboles)
 * 2H = Two od Hearts   (Corazon)
 * 2S = Two od Speads   (Espasdas)
 */

console.log(' \n7. CREAR BARAJA DE CARTAS \n ');
let barajas = [];

let letras = ['C','D','H','S'];
let letrasNumericas = ['J','Q','K','A'];

const btnPedir = document.querySelector('#btnPedir');
// console.log( btnPedir ); // <button id="btnPedir" class="btn btn-primary" type="button">Pedir carta</button>

/*YO: let bntPedir2 = document.getElementById('#btnPedir');
console.log( btnPedir );
*/
// ------------- BOTON DETENER --- 

const btnDetener = document.querySelector('#btnDetener');
//console.log(btnDetener);


let puntosJugador = 0,
    puntosComputadora = 0;

const divCartasJugador = document.querySelector('#jugador-cartas');
console.log( divCartasJugador ); 

const divCartaComputadora = document.querySelector('#computadora-cartas');
console.log( divCartaComputadora );

const puntosHTML = document.querySelectorAll('small');
console.log( divCartasJugador );

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
    /* console.log( carta );  */
    //console.log( barajas );
    return carta;
    
}

//barajas = [];       // juego.js:53 Uncaught No hay mas varajas en en el mazo
/* for (let index = 0; index < 53; index++) {
    pedirCarta();
}  console.log( barajas );
*/

console.log(' \n 9. VALOR DE CADA CARTA \n ');

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

/* const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1  );
    let puntos = 0;
    if ( isNaN( valor )) {
         puntos  = ( valor === 'A' ) ? 11: 
                   ( valor === 'J' ) ? 11:
                   ( valor === 'Q' ) ? 12:
                   ( valor === 'K' ) ? 13:
                   valor * 1 
    }else{
        console.log('Es un numero');
        puntos = valor;
    }
    console.log( puntos * 1 + 5);   // Solucion es multiplicarlo por 1, es comun y sumarle la carta
}

// Nota: Cero "0" como morado es un numero y cuando es gris es un string 

valorCarta( '5D' ); // 0
// Nota: como el valor de la 5D es 5  + 5 es 55, lo computa, porque es un string
 */

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1  );
    return ( isNaN( valor ) ) ?
           ( valor === 'A' ) ? 11 : 10
           : valor * 1;
}

const valor = valorCarta( pedirCarta() ); // 0
//console.log( valor );


console.log(' \n 10. INTROCUCCIÓN AL DOM Y SU MANIPULACIÓN \n ');

// Console => document  -->   >#document


// Console => document.querySelector('button'); --> <button class="btn btn-danger" type="button">Nuevo Juego</button>
                                                // (Clic derecho) -> Borrar elemento 
//NOTA: Elige el primer elemento, en este caso el primer boton.


// Consolr => document.querySelectorAll('button') --> NodeList(3) [button.btn.btn-danger, button.btn.btn-primary, button.btn.btn-primary]
                                                // (Clic derecho) -> Borrar elemento   
// NOTA: Elige todos los elementos, en este caso todos los botones.


// Console => document.querySelector('img').src --> 'http://127.0.0.1:5500/Javascript/UdemyJavaScriptModernoGu%C3%ADaDominarLenguaje/5.Laboratorio-1-Blackjack/js-blackjack/assets/cartas/2C.png'

// EL VIDEO SE QUEDA EN EL MINUTO 8:12

console.log(' \n 11. MANIPULACIÓN DEL DOM: Segunda Parte \n ');

// Ejercicio: Crear un boton de forma dinamica.

// Console => const divBotones = document.querySelector('#divBotones') --> undefined
// Console => divBotones --> <div id="divBotones" class="row py-2">

// Console => document.createElement('button'); --> <button></button>
// NOTA: no tengo una referencia al botton nada mas lo creo en memoria


// Console => const botonNuevo = document.createElement('button'); --> undefined
// Console => botonNuevo --> <button></button>


// Console => divBotones.append( botonNuevo ); --> undefined

// Console => botonNuevo.innerText = 'Destruir el mundo' --> 'Destruir el mundo'

// Console => botonNuevo.classList.add('btn') --> undefined
//            botonNuevo.classList.add('btn-success') --> undefined


// Console => const input = document.createElement('input'); --> undefined
//            document.body.append( input )  --> undefined
//            input.classList.add('form-control') --> undefined
//            input.placeholder = 'Hola Mundo' --> "Hola Mundo"



console.log(' \n 12. EVENTO CLIC - Pedir Carta \n ');


/* //---------- Eventos btnPedir
btnPedir.addEventListener('click', () => {  
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta );

    puntosHTML[0].innerText = puntosJugador;
    

});
 */
console.log(' \n 14. Turno de la computadora, 14.\n ');

const turnoComputadora = ( puntosMinimos ) => {

    do{
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;

        //<img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement( 'img' );
        imgCarta.className = 'carta';
        imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
        divCartaComputadora.append( imgCarta );

        if (puntosMinimos < 21) {
            break;
        }

    }while( (puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21 ));
    
} 

console.log(' \n 13. Crear una carta en el HTML \n ');

//---------- Eventos btnPedir
btnPedir.addEventListener('click', () => {  
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta );

    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement( 'img' );
    imgCarta.className = 'carta';
    imgCarta.src = `assets/cartas/${carta}.png`;
    divCartasJugador.append(imgCarta);
    
    if (puntosJugador > 21) {
        console.warn('Lo siento, pero perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );

    }else if(puntosJugador === 21 ){
        console.warn('21, genial' );
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }

});


// turnoComputadora( 21 );


btnDetener.addEventListener('click', () => { 
    btnPedir.disabled = 'true';
    btnDetener.disabled = 'true';

    turnoComputadora( puntosJugador );
});






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