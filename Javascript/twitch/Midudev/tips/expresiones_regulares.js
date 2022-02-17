// const arr = [1,2,3,4,5]
// // arr.reduce((total, num) => total + num, 0)

// // scope
// // map. filter, reduce
// // variables y funciones
// // loops
 
// const mensaje = 'Hola, soy @esneider'
// const pattern = /esneider/g
// pattern.test(mensaje); // true
// pattern.lastIndex = 0; // si colocal esto el de abajo cambia a true
// pattern.test(mensaje); // false
// // favorita 
// mensaje.match(pattern) != null
// mensaje.match(pattern) != null
// mensaje.match(pattern) != null

Math.random().toString(36).slice(2);
crypto.randomUUID()

var kvArray = [{clave:1, valor:10},
               {clave:2, valor:20},
               {clave:3, valor: 30}];

var reformattedArray = kvArray.map(function(obj){
   var rObj = {};
   rObj[obj.clave] = obj.valor;
   return rObj;
});

console.log(reformattedArray);






const adversario = 'Thanos'
let loki = ''

switch (adversario ){
    case 'Iron-Man':
        loki = 'Magneto'
        break
    case 'Hulk':
        loki = 'Thanos'
        break
    case 'Thor':
        loki = 'Thanos'
        break
    default: 
        loki = 'Loki'
        break   
}


