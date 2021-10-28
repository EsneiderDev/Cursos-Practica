/* 
  Tabla: NOT            Tabla:OR                   Tabla:AND  
    a	y             a	    b	    y           a    	b      	y
    0	1             0	    0	    0           0    	0      	0
    1	0             0	    1	    1           0    	1      	0
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

console.error('NOT O LA NEGACION\n ');

console.log('true  :',  true  );        // true
console.log('!true :',  !true );        // false
console.log('!!true :', !!true );       // true

console.log( !regresaFalse());          // Regresa false
                                        // true

console.log( !regresaTrue());           // Regresa true
                                        // false
console.log('F() && T()', regresaFalse() && regresaTrue());     // false
// SI con AND(&& -) ya regreso barrio y encontro un falso, da falso
console.log('F() || T()', regresaFalse() || regresaTrue());     // 
// SI con OR(|| +) ya barrio y encontro verdader, da verdadero

regresaFalse() && regresaTrue()         //Regresa false
console.log(' OR ');    
console.log(true || true  ); // true
console.log( false || 0   ); // 0
console.log( false || ""  ); // ''
console.log( false || NaN ); // NaN

console.log( regresaTrue() || regresaFalse() );
console.log('Cuatro condiciones:', true && true && true && true);   // false
console.log('Cuatro condiciones:', false || false || false || true); // true
console.log( 'Algo' && regresaTrue() && NaN );                      // Algo


console.warn( 'OR(suma): si todos los valores son FALSO: 0 \n ');
// false si todo los dos son falsos
console.log( a = false || false );           // false
console.log( b = false || true  );           // true
console.log( c = true  || false );           // true
console.log( d = true  || true  );           // true

console.warn('AND(Resta): si todos los valores son VERDADERO: 1 \n ');
// true si todos dos son verdaderos
console.log( w = true  && true  );           // true
console.log( x = true  && false );           // false
console.log( y = false && true  );           // false
console.log( z = false && false );           // false


console.log(' \nComprobacion\n ');
console.log('sunma: false || false = false ');
console.log(Boolean( a + a ));              // false
console.log(Boolean( a + b ));              // true
console.log(         a | a  );              // 0
console.log('resta: true || true = true');
console.log(Boolean( a - b ));              // true
console.log(Boolean( b - b ));              // false
console.log(         a & b  );              // 1 



/*

//SUMA(+)
o1  =  true  || true          // t || t returns true
o2  =  false || true          // f || t returns true
o3  =  true  || false         // t || f returns true
o4  =  false || (3 == 4)      // f || f returns false
o5  =  'Cat' || 'Dog'         // t || t returns "Cat"
o6  =  false || 'Cat'         // f || t returns "Cat"
o7  =  'Cat' || false         // t || f returns "Cat"
o8  =  ''    || false         // f || f returns false
o9  =  false || ''            // f || f returns ""
o10 =  false || varObject    // f || object returns varObject
*/
console.error(' \n \nSOLUCION INQUIETUDES\n \n ');
console.warn('\nOR');
o8  =  ''    || false         // f || f returns false
o9  =  false || ''            // f || f returns ''

console.log( o8, o9 );

var a = false;
var b = 0;
var c = "";
// Solo por Valor no por tipo
console.log( a == b ); // true
console.log( b == c ); // true
console.log( a == c ); // true

/* 

//RESTA(-)
a1  =  true && true;      // t && t devuelve true
a2  =  true && false;     // t && f devuelve false
a3  =  false && true;     // f && t devuelve false
a4  =  false && (3 == 4); // f && f devuelve false
a5  =  'Cat' && 'Dog';    // t && t devuelve Dog
a6  =  false && 'Cat';    // f && t devuelve false
a7  =  'Cat' && false;    // t && f devuelve false
*/

console.warn(' \nAND');

a4  =  NaN && false;        // f && f devuelve false
console.log('a4:', a4 );    // NaN
// Nota: NaN se especifica que nunca será igual a nada
console.log(Boolean(NaN));  // false
console.log(Boolean(true)); // true

x = new Boolean(NaN);
//console.log('valor x:', x);
if(x){
        console.log('Se ejecuto'); // Se ejecuto
}


console.log('Solucion - NaN direrencias: misterio');
console.log( typeof NaN );   // Number

console.log( NaN == null );  // false
console.log( NaN == false ); // false
console.log( NaN == NaN );   // false



console.log(' \n OPERANDO CON OPERADORES BINAIO\n');
// 
var foo = 'Hello World'; // Truthly value -> string
var bar = 'Silence'; // Truthly value -> string
var result  = ( foo || bar );
var result2 = ( 0 || bar );

console.log(result);           // Hello World 
console.log(result2);          // Silence
console.log( result, result2); // Hello World Silence

let foo2 = false;
let bar2 = NaN;

var resultado = ( foo2 || bar2 );       // NaN de bar2
var resultado2 = (bar2 || foo2 );       // 


