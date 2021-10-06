 

// Variables de tipo primitivo siempre se pasan por valor
var a = 10;
var b = a;

console.log('a: ', a);
console.log('b: ', b);

a = 20;

console.log(a); 

console.log('a: ', a);
console.log('b: ', b);

var c = {
    nombre: "Esneider"
}

var d = c; 

console.log(c);
console.log(d);

c.nombre = "Juan";

console.log(c);
console.log(d);

d.nombre = "Manuel";

console.log(c);
console.log(d);




