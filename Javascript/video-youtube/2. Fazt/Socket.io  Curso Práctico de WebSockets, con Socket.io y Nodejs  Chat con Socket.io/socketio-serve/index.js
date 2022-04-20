/**
 * ? npm init yet
 * ? npm i(install) express
 * ? npm i(install) express socket.io
 * ! npm i nodemon -D (Dependencia de desarrollo: va ha colocarlo en otra sesion llamada des dependecies: decirle, este modulo no es importante para el proyecto )
 * ! npm install -g npm-check-updates Actualizar dependencias.
 */
const path = require('path');   // modulo de express para poder trabajar con las rutas, poder unir directorios. 
const express = require('express');
const app = express();
const PORT = process.env.PORT;
// setting 
app.set('port', PORT || 3000);

// ##NUEVO##-----------------------------------
/**
 * @description Muestra el puerto donde se ha iniciado la aplicación
 */
const showPort = () => `Escuchando por *:${PORT}`;

// ##NUEVO## Definición de constantes y variables para la gestión del chat
let users = [];
let who = null;
const chats = [];
const MAX_FILE_SIZE_MB = 0.3;
const MAX_FILE_LENGTH = 17;
const MIME_TYPE = [
    'image/gif',
    'image/jpeg',
    'image/png'
];
const LITERAL = {
    fileNotAllowed: `el fichero que intentas subir no esta permitido. Los tipos permitifos son los siguientes<br>[${MIME_TYPE.join(', ')}]</br>`,
    maxSize: `El fichero no puede tener un tamaño superior a <br>${MAX_FILE_SIZE_MB} MB</br> y/o no debe exceder de <b>${MAX_FILE_LENGTH}<b/> caracteres`,
}
//##FIN NUEVO##-----------------------------------

// static files
/* console.log(__dirname + ''); //* C:\Users\Desarrollador4\Desktop\socketio-serve
                                //* server on port 3000
                               */
//console.log( path.join(__dirname, 'public'));
// Nota: con path se va a encargar si es windows o es linux

app.use(express.static( path.join(__dirname, 'public') ));
//Nota: Modulo de express para poder enviar archivos estaticos como la carpeta public


// start the server
const server = app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});

// Websocket
const SocketIO = require('socket.io');
const io = SocketIO(server);
// Nota: SocketIO.listen necesita un servidor inicializado, por eso la variable server

io.on('connection', ( socket ) => { 
    console.log('new connection', socket.id);
    
    socket.on('chat:message', (data) => { 
        io.sockets.emit('chat:message', data);
        console.log(data);
    });

    socket.on('chat:typing', (data) => {
        //console.log(data);
        socket.broadcast.emit('chat:typing', data);
    });

});












/**
 *  PS C:\Users\Desarrollador4\Desktop\socketio-serve> npm run development NOTA: siempre debe ir en run antes del development, 
 *                                                                                comandos distintos a start
                                                                                
> socketio-serve@1.0.0 development
> nodemon index.js

[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Hello worls
[nodemon] clean exit - waiting for changes before restart 

############


navegador -> http://localhost:3000/socket.io/socket.io.js






*/