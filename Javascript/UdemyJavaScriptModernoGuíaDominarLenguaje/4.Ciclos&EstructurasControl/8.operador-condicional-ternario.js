/**  
  *Dias de semana abrimos a las 11,
  * pero los fines de semanas abrimos a las 9
  * /

*/
// Entrar a un sitio web, para consultar si está abierto hoy

const dia = 1; // Domingo
const horaActual = 10;

let horaApertura; 
let mensaje;   // Esta abierto, Está cerrado, hoy abrimos a las XX

// if (dia == 0 || dia === 6) {
if ([0,6].includes(dia)) {
    console.log('Fin de semana');
    horaApertura = 9;
}else{
    console.log('Es una dia de semana');
    horaApertura = 11;
}


if ( horaActual >= horaApertura) {
    mensaje = 'Está abierto';
}else{
    mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({ horaApertura, mensaje});  // {horaApertura: 11, mensaje: 'Está cerrado, hoy abrimos a las 11'}


console.log(' \nCON OPERADOR TERNARIO ');

/*  
eva = 1 || 6 == dia ? 'Fin de semana': 'Es un dia de la semana';

console.log(eva);
*/

const dia2 = 3;
const horaActual2 = 7;

horaApertura = ( [0,6].includes(dia) ) ? 9 : 8;

mensaje  = horaActual2 >= horaApertura ? 'Esta abierto' : `Esta cerrado, la hora de apertura es a las ${horaApertura}`;


console.log({horaActual2, horaApertura, mensaje });     // {horaApertura: 8, mensaje: 'Esta cerrado, la hora de apertura es a las 8'}