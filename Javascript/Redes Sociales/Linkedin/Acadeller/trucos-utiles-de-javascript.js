// == 1. IF PRESENCE SHORTHAND
let esUnaFruta = true
let estaActivo = false
//
if(esUnaFruta == true)  console.log('Es una fruta');
if(estaActivo == false) console.log('No esta activo');
//
if(esUnaFruta)  console.log('Es una fruta');
if(!estaActivo) console.log('No esta activo');

// == 2. PASAR PARÁMETROS POR OBJETOS == 
function areaRectangulo({ largo, ancho}){
    console.log( largo * ancho);
}

let rectangulo = {
    largo: 20,
    ancho: 10
}
areaRectangulo(rectangulo);

// == 4. DESTRUCTURACIÓN DE OBJETOS ==
const empresa = {
    empleados: 30,
    jefe: "pepe",
    productos: ["chicles", "aceitunas"]
}

const {empleados,jefe } = empresa
const { 0: producto1, 1: producto2 } = empresa.productos

console.log( empleados );
console.log( jefe );
console.log( producto1 );
console.log( producto2 );

// 5. OPERADOR SPREAD (...)
const numeros = [10, 20, 30]
console.log([...numeros, 40, 50]);

const persona  = {
    nombre: "Ana",
    casada: false
}
console.log({...persona, casada: true, edad: 40});