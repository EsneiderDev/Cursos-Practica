
// Link https://youtu.be/DyfX6ZWVky4


// ¿Qué es un Polyfill??
// Es una funcionalidad que deberia de traer el navegador pero por un tema de implementación carece de esta caracteristica el navegador por lo,
// por lo tanto el polyfill es el fragmento de codigo que suple esa carencia. Para ti como desarrollador es totalmente transparente pero puedes utilizar ese cogigo como si estudiera.    


Array.prototype.customMap = function (callback) {
    let result = []

    for (let index = 0; index < this.length; index++) {
        const el = callback();
    }
}

[1, 2, 3].customMap(n => n* 2)