/* 
  Tabla: NOT            Tabla:OR                   Tabla:AND  
    a	y           a	    b	    y           a    	b      	y
    0	1           0	    0	    0           0    	0      	0
    1	0           0	    1	    1           0    	1      	0
                    1	    0	    1           1    	0      	0
                    1	    1	    1           1    	1      	1
*/ 

const regresaTrue = () =>  {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.log('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;


const a1 = true && 'HolaMundo';
console.log({ a1 });           // {a1: 'HolaMundo'}


const a2 = true && 'HolaMundo' && 150;
console.log({ a2 });           // {a2: 150}


const a3 = false && 'HolaMundo' && 150;
console.log({ a3 });           // {a3: false}


const a4 = 'Hola' && 'Mundo' && soyFalso && true;
// Nota: Lo mas comun es hacer asignaciones con "OR"
console.log({ a4 });           // {a4: false}

const a5 = soyFalso || 'Ya no soy false';
console.log( { a5 } );          // {a5: 'Ya no soy false'}

const a6 = soyFalso || soyNull || soyUndefined || 'Ya no soy falso de nuevo';
console.log( { a6 } );          // {a6: 'Ya no soy falso de nuevo'}

const a7 = soyFalso || soyNull || soyUndefined || 'Ya no soy falso de nuevo' || true;
console.log( { a7 } );          // {a7: 'Ya no soy falso de nuevo'}
//Nota:  no llego a ejecutarse el true porque ya encontro un valor positivo y es " 'Ya no soy falso de nuevo "

const a8 = soyFalso || soyNull || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log( { a8 });           // {a8: true}


if ( true || true || true || false) {       // Hacer algo
    console.log('Hacer algo');   
}else{
    console.log('Hacer otra cosa');
}
//Nota: No tenemos que tener mas de tres condiciones


if ( regresaFalse() && regresaTrue() && true || false || true )  {
    console.log('regreso verdadero');
}else{
    console.log('No paso y regreso falso');
}