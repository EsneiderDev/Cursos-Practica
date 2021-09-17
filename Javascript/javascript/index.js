arreglo_numero = [10, 20, 30, 40, 50];


/* console.log(arreglo_numero[0]);
console.log(arreglo_numero.length); */

for (let i = 0; i < arreglo_numero.length; i++) {

    const element = arreglo_numero[i];
    console.log(element);
}

console.log('------------ ForEach ---------------------');

/* 
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2'] */

colores = ["Rojo", "azul", "negro"];

//1 forma
/* colores.forEach(elemento => {
    console.log(elemento);
}); */

//2 forma
colores.forEach( function (colores, index) {
    /* console.log(`${index} => ${colores}`); */
   /*  console.log(index +=" => "+colores) */
});

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