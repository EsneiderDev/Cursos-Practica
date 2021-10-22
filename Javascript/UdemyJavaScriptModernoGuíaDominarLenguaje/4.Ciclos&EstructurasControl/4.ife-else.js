

let a = 5;

if( a >= 10){       
// Nota: hay que mandar valores booleanos pero hay excepcciones: undefined, null, asignacion
    console.log('A es mayor o igual a 10'); // A es menor a dies
}else{
    console.log('A es menor a 10');         //A es menor a 10
}

console.log('Fin de programa');       // Fin de programa
 
//Asignacion de un objeto
/* 
const obj  = {};
console.log(obj);   // {}
const obj2 =  Object();
console.log(obj2);  // {}
*/

console.log(' \n ASIGNACION DE FECHA \n ');
const hoy = new Date("Friday Oct 22 2021 03:24:00 GMT-0500");
// const hoy = new Date();
console.log( hoy );                                      // Fri Oct 22 2021 03:24:00 GMT-0500 (hora de verano central)

let dia     = hoy.getDay();
let diaName = hoy.toDateString().slice(0, 3);
let mes     = hoy.getMonth();
let mesName = hoy.toDateString();
let ano     = hoy.getFullYear();

console.log( {dia, mes, ano, diaName , mesName} );       // {dia: 5, mes: 9, ano: 2021, diaName: 'Fri', mesName: 'Fri Oct 22 2021'}

if ( dia == '5'){   
    //Nota: solo compara valor y no tipo
    console.log('Es "VIERNES" y el cuerpo lo sabe'); 
                            // Es jueves
}else if( dia === 1 ){
    console.log('A trabajar, bendecido dia', diaName);
}else{ 
    console.log('El cuerpo no sabe nada');
}
/* 
    dia == 5 ? console.log('Es Viernes') :
    dia == 4 ? console.log('Es Jueves') :
    dia == 3 ? console.log('Es Miercoles') :
    dia == 2 ? console.log('Es Martes') :
    dia == 1 ? console.log('Es Lunes') : console.log('Es el dia de descanso', diaName);  

    // var status = (age >= 18) ? 'adult' : 'minor';
*/





   