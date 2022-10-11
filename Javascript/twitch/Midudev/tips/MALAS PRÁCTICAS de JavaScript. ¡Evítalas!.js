
// ❌ A la hora de crear objetos y arrays en javascript no utilices los constructores
const object = new Object();
const array = new Array(); 
// ✅ En cambio usa 
const object2 = {};
const array2 = [];


// ❌ A la hora de crear variables
var a = '';
// ✅  usa
let b ='';
const c = '';

// ❌ No uses ni abuses de las funciones inpuras: "Son aquella que cada vez que las llamas puede devolverte algo diferente porque depende de cosas externas".
const STOP_WORDS = ['a', 'and', 'the'];
let inputSearch = 'The new Iphone o';
const slugify = () => inputSearch
        .split(' ')
        .map(n => n.toLowerCase())
        .filter( n => !STOP_WORDS.includes( n ))
        .join('-');

slugify()
// ✅ Mucho mejor si usas una funcion pura y parametrizable
const slugify_2 = ({ input, stopWords }) => {
    return input.split(' ')
                .map(n => n.toLowerCase())
                .filter( n => !stopWords.includes(n))
                .join('-');
}

// ❌ No uses los comentarios para explicar el codigo
// La variable a es la edad, revisamos
// que sea mayor a 18
if( a > 18 ){
    // si es mayor a 18, entonces
    // Entramos aquí
}
// ✅ Los tienes que usar para explicar el porque
// [JIRA-3618]: Los usuarios menores de 18
// son redirigidos a la página de acceso
// hasta que habilitemos los filtros
if( age > 18 ){ //#... }

// ❌ A la hora de hacer conversion de tipos evita utilizar estos operadores 
const number = 0;
const string = '7';
!!number; //false
+string; //7
number + ''; // '0'
// ✅ queda mas claro usando si utilizas el metodo del tipo de datos
Boolean(number); // false
Number(string);  // 7
String(number); // '0'

// ❌ No utilices un if para devolver luego un boleano
if( num > 0 && num % 2 === 0){
    return true
}else{
    return false
}
// ✅ Es mas facil utilizar la condicion y devolverla directamente
return num > 0 && num % 2 === 0


// ❌ Evita utilizar string y numeros que no saben de donde aparecen
if ( age > 18 )
const  isConf = confId === 1;
return productType === 'swk';
// ✅ Aunque queda mas largo es mucho mejor que utilices constantes para estos valores
const AGE_ADULTHOOD = 18
const CONF_ID = 1
const SOFTWARE_KEYS_TYPE_ID = 'swk'

if( age > AGE_ADULTHOOD){}
const isConf_2 = confId_2 === CONF_ID;
return productType === SOFTWARE_KEYS_TYPE_ID;

