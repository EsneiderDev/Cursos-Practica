
// Sin usar IF, Else o Switch, unicamente objetos.

let hoy = new Date();

let dia = hoy.getDay();

console.log( dia, hoy ); //5 Fri Oct 22 2021 10:56:15 GMT-0500 (hora de verano central)

// dia = 19;
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}
console.log( diasLetras[dia] || 'Dia no definido');


console.log(' \n2. CON OBJETOS PARA EJECUTAR PROCEDIMIENTOS\n ');

dia = 0;
const diasLetrasProcedureObj = {
    0: (nombre) => nombre + ' hoy es Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}
console.log( diasLetrasProcedureObj[dia] );                 // () => 'Domingo'
console.log( diasLetrasProcedureObj[0]('Jairo') );                 // Domingo
console.log( diasLetrasProcedureObj[1]   );                 // Lunes

//-------------------------- CON VECTORESCON PARA EJECUTAR PROCEDIMIENTOS

console.log(' \n3. CON VECTORESCON PARA EJECUTAR PROCEDIMIENTOS\n ');

dia = 1;
const diasLetrasProcedureVect = [
    'Domingo',
    (nombre = 'anonimo') => `${nombre} hoy es Lunes`,
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
];

console.log( diasLetrasProcedureVect[dia] || 'Dias no habil' );       // (nombre = 'anonimo') => `${nombre} hoy es Lunes`
// Solucion para ejecutar procedimiento
console.log( diasLetrasProcedureVect[1]('Juan') || 'Dias no habil' ); // Juan hoy es Domingo
console.log( diasLetrasProcedureVect[13] || 'Dia no habíl' );         // Dia no habíl