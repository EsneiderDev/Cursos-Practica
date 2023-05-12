/* export //No es un modulo todavia */const MESSAGE_TYPE = Object.freeze({
    ERROR: Symbol(),
    WARNING: Symbol(),
    INFO: Symbol()
})

function printMessage(type) {
    if ( type === MESSAGE_TYPE.ERROR ) {
        console.log('Se ha producido un error');
    } else if ( type === MESSAGE_TYPE.WARNING ) {
        console.log('Esto es una advertencia');
    } else if ( type === MESSAGE_TYPE.INFO ) {
        console.log('Esto es información');
    } else {
        console.log('Mensaje no reconocido');
    }
}

printMessage( MESSAGE_TYPE.ERROR )

//MESSAGE_TYPE.ERROR = 'pepito' //Cannot assign to read only property 'ERROR' of object '#<Object>'