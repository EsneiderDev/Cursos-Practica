console.log('------------ For --------------------------');
//arreglo_numero = [10, 20, 30, 40, 50];

/* console.log(arreglo_numero[0]);
console.log(arreglo_numero.length); */
/* 
for (let i = 0; i < arreglo_numero.length; i++) {

    const element = arreglo_numero[i];
    console.log(element);
}
 */
console.log('\n------------ ForEach ---------------------\n');

/* 
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));   // [ '0', '1', '2' ]
console.log(Object.values(arr)); // [ 'a', 'b', 'c' ] */

colores = ["Rojo", "azul", "negro"];

//1 forma

console.log('ForEach 1: \n');

colores.forEach( elemento => {
    console.log(elemento);
});

console.log('\n ForEach 1.2: \n');

colores.forEach( (color, index) => {
    console.log(index +=" => "+color);
});

//2 forma 
console.log('\n ForEach 2.1: \n');

colores.forEach( function (colores, index) {
    console.log(`${index} => ${colores}`);
});

console.log('\n ForEach 2.2: \n');

colores.forEach( function (colores, index) {
    console.log(`indice: ${index}` +" => "+colores);
});

console.log('\n ForEach 2.2: mostrar primera letra de cada elemento del vector\n');

colores.forEach( function (colores, index) {
    console.log(`indice: ${index}` +" => "+colores[0]); // tomar primera letra
});

 
console.log('\n------------ Map ---------------------\n');
//3 forma

dias = [
    {nro:1, dia:'LUNES', mes:'ENERO'},
    {nro:2, dia:'MARTES', mes:'ENERO'},
    {nro:3, dia:'MIERCOLES', mes:'ENERO'},
    {nro:4, dia:'JUEVES', mes:'ENERO'},
    {nro:5, dia:'VIERNES', mes:'ENERO'}
];

dias.map(function(dias) {
    console.log(dias.nro+" => "+dias.dia+" => "+dias.mes);
});
