 // Antes
 const user = {}
 let name;
 if( user!= null && user.name!=null){
 	name = user.name;
 }else{
 	name = "Nombre por defecto";
 }
 
// Ahora
const name2 = user?.name ?? "Nombre por defecto"

/* 
user!= null  --> Nota: Es un diferente, pero no es extricto, hay un error aun en los libros de Javascript,    en gente que sabe JavaScript que tiene mal esta concepción
que la igualda estricta "==" cambiar los tipos automáticamente --> NO ES VERDAD, LO QUE TIENE ES UN ALGORITMO MUY COMPLEJO QUE ALGUNAS VECES CAMBIA LOS TIPOS Y ALGUNAS VECES NO, esto depende de lo que este comparando.  Miremos los ejemplos de abajo
*/
const a = null;
a == null // true
a == undefined // true
a == '' // false

if(!a) console.log('entro')
 /* ========================================OTRA HOJA==================================================*/
// DIFERENTE 
// ?? --> NULLISH COALECING OPERATOR (Si es) --> null o undefined
// ||. --> OR LOGICAL OPERATOR (si es) --> falsy puede ser (null, undefined, 0, '', false)
const user3 = {name:''} 

const name3 = user3?.name ?? "Nombre 3"  
// esto es dintindo a: 
const otherName = user3?.name || "Otro Nombre"

console.log({name3, otherName})

