


/* function createGodZilla ( color, weight = 200, sound, powers ){ 

    console.log('Color de piel ' +  color, ', peso de ' + weight, powers);
}
// createGodZilla ( 'blue', 200 );

// La funcion va evolucionando 

createGodZilla ( 'blue', undefined, ['lighting'] ) */

// Con el parametro sound estamos rompiendo el contraro de la funcion

// SOLUCION: Parametros nombrados

function createGodZilla ( {color, weight = 200, sound, powers} ){ 

    console.log('Color de piel: ' +  color,'peso de: ' + weight,' poderes: ' + powers, ' sound: '+  sound);
}

const godzillaParams = { 
    color: 'blue',
    sound: 'GROARR',
    powers: ['lighting', 'nuclear bomb'] 
}

createGodZilla( godzillaParams );

