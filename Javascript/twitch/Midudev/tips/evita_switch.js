



// const adversario = 'Iron-Man'
// let loki = ''

/* if (adversario === 'Iron-Man'){
    loki = 'Magneto'
}else if( adversario === 'Hulk'){
    loki = 'Thanos'
}else if(adversario === 'Thor'){
    loki = 'Odin'
}else{
    loki = 'loki'
}
*/

/* switch (adversario){ // <-- Este adversario lo utilizamos como hast, como indice para nuestro objeto, podemos recuperar el v
    case 'Iron-Man': //     , podemos recuperar el valor que necesitamos
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
} */


// SOLUCION: Utilizando un objeto, utilizando una estructura de datos que es el hashtable javascript

const adversario = 'Iron-Man'
// let loki = ''  // <-- Ya no necesitamos la variable global

const LOKI_DISFRACES = {
    'Iron-Man' : 'Magneto',
    Thor       : 'Odin',
    Hulk       : 'Thanos'
}

const LOKI_DEFAULT_DISFRACES = 'loki'

const loki = LOKI_DISFRACES[adversario] || LOKI_DEFAULT_DISFRACES 

console.log(loki)


// Con metodos

/* 
const adversario = 'Iron-Man'
//let loki = ''  // <-- Ya no necesitamos la variable global

const LOKI_DISFRACES = {
    'Iron-Man' : () => 'Magneto',
    Thor       : () => 'Odin',
    Hulk       : () => 'Thanos',
    Lobezno    : () => 'Magneto'
}

const LOKI_DEFAULT_DISFRAZ = 'loki'

const loki = LOKI_DISFRACES[adversario] 
    ?  LOKI_DISFRACES[adversario]()
    :  LOKI_DEFAULT_DISFRAZ

console.log(loki); // Magneto
*/