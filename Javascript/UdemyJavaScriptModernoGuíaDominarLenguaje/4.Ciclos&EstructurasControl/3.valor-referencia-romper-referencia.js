
let a = 10;
let b = a;
a = 30; 

console.log({a, b});        // {a: 30, b: 10}

let  juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre = 'Ana'; 
console.log( {juan, ana} );   // {juan: {…}, ana: {…}}
                                // ana: {nombre: 'Ana'}
                                // juan: {nombre: 'Ana'}
const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre( peter );

console.log({peter, tony}); //{peter: {…}, tony: {…}} (clic)
                                // peter: {nombre: 'Tony'}
                                // tony: {nombre: 'Tony'}

console.log(' \n COPIA DE UN OBJETO \n ');
console.log('Incorrecta:');
let  carlos0 = {nombre: 'Carlos0'};
let jhon0 = {juan};
//NOTA: solo coloca el objeto dentro de otro
jhon0.nombre = 'Jhon0'; 
console.log( {carlos0, jhon0} );  // {carlos0: {…}, jhon0: {…}}
                                    // carlos0: {nombre: 'Carlos0'}
                                    // jhon0: {juan: {…}, nombre: 'Jhon0'}

let  carlos = {nombre: 'Carlos'};
let jhon = {...juan};
//NOTA: se le llama operador "Spread"
jhon.nombre = 'Jhon'; 

console.log( {carlos, jhon} );      // {carlos: {…}, jhon: {…}}
                                        // carlos: {nombre: 'Carlos'}
                                        // jhon: {nombre: 'Jhon'}

const cambiarNombre2 = ({ ...persona2 }) => {
    persona2.nombre = 'Jairo';
    return persona2 ;
}

let luis = {nombre: 'Luis'};
let jairo = cambiarNombre2( luis );

console.log({ luis, jairo }); // {luis: {…}, jairo: {…}} (clic)
                                // jairo: {nombre: 'Jairo'}
                                // luis: {nombre: 'Luis'}