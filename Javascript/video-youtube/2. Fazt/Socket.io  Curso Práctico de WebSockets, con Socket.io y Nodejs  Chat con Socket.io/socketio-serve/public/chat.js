const socket = io(); // io tenemos que colocar el dominio ej: io('http:/example.com) pero reconoce por defecto el nuestro 
//Nota: esa variable "socket" a ogroso modo es el codigo del frontEnd que podra mandar los eventos al servidor

let message = document.getElementById('message')
let username = document.getElementById('username')
let btn = document.getElementById('send')
let output = document.getElementById('output')
let chat_history = document.getElementById('chat-history');
let chat_feedback = document.getElementById('chat-feedback');
let actions = document.getElementById('actions')
let load = actions.childNodes[1];
/* let chat_history = chat.childNodes[0]; */

console.log(chat_history );
var hoy = new Date();

function mostrar(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementsByClassName('img').src = reader.result;
      }
    }
}


btn.addEventListener('click', function () {  
    socket.emit('chat:message', {
        username: username.value,
        message: message.value,
        date: hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()
    })
    //console.log(username.value,message.value);
});




message.addEventListener('keypress', function () {
    socket.emit('chat:typing', username.value);
    load.classList.add("loading");
});



socket.on('chat:message', function (data) { 
    sessionStorage.setItem('nombre', data.username);
    let nombre = sessionStorage.getItem('nombre');
    //console.log(data);
    actions.innerHTML = ' ';
    chat_feedback.innerHTML = '';
    load.classList.remove("loading");
    chat_history.innerHTML += ` <div class="chat-message clearfix">
                                    <img id="img2"  width="32" height="32" />    
                                    <div class="chat-message-content clearfix">
                                        <span class="chat-time">${data.date}</span>
                                        <h5>${nombre}</h5>
                                        <p>${data.message}</p>
                                    </div> 
                                </div> 
                                <hr>`;
    output.innerHTML += `<p>
        <strong> ${data.username}</strong>: ${data.message}<br><small>${data.date}</small>
    </p> `;
});

socket.on('chat:typing', function (data) {
    actions.innerHTML = `<p><em>${data} is typing <b class="animate__animated animate__backInRight"><em>.</em>...</b></em></p>`;
    chat_feedback.innerHTML = `<p><em>${data} is typing <b class="animate__animated animate__backInRight"><em>.</em>...</b></em></p>`;
});



/* function myFunction() {
    message.value = message.value.toUpperCase();
} */

