/* 
function identificador(param) {
    console.log(typeof param);
}

function Persona() {

}

var esneider = new Persona();


//------ Tipo objeto
identificador(esneider);            // object 

//----- Tipo Funcion 
identificador( function (){} );     // function

*/

/* 
function identificador2 ( param ) {
    if ( typeof param == "function") {
        param();
    }if(typeof param == "object"){
        console.log( typeof param.nombre );
    }else{
        console.log( typeof param );
    }
    
}

function Persona() {
    this.nombre     = 'Esneider';
    this.apellido   = 'Buelvas'
    this.edad       = 24;
}

var esneider = new Persona();

// Tipo objeto
identificador2(esneider);        // object 

// Tipo Funcion
identificador2( function (){console.log('Es una funcion')} ); // function

//numeric
identificador2(2);
*/

function identificador3 ( param ) {

    console.log( typeof param );
    console.log(param instanceof Persona3);
    console.log(param.nombre);
}

function Persona3() {
    this.nombre     = 'Esneider';
    this.edad       = 24;
}

var manuel = new Persona3();

// Tipo objeto
identificador3(manuel);         // true
