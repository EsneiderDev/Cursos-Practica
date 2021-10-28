

const elMayor = (a, b) => ( a > b) ? a : b;

console.log( elMayor(3,5) );                // 5

const tieneMenbresia = ( mienbro ) => (mienbro) ? '2 Dólares' : '10 Dólares';

console.log(tieneMenbresia(true) ) ;        // 2 Dólares
console.log(tieneMenbresia(false) ) ;       // 10 Dólares

// El operador ternario es muy utilizado cuando queremos hacer arreglo u objetos
//  con una operacion implicita dentro de su creacion

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (()=> 'Nick Fyry')(),
    elMayor(10,15)
];

console.log( amigosArr );           // (5) ['Peter', 'Tony', 'Dr. Strange', 'Loki', 'Nick Fyry', 15]


const nota = 65; 
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C' : 'F';

console.log( {nota, grado} );       // {nota: 65, grado: 'F'}

