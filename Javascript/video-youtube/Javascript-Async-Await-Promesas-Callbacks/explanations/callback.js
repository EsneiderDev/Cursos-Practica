
function requestHandler( req, res ){
    //Vamos aconsultar un modelo de datos llamado user, encontremos el ID
    // En Node.JS se maneja de manera ascincrona            
    User.findById(req.userId, function(err, user){ // funcion que es otro parametro lo que hace es esperar por la respuesta
        if (err) {
            res.send(err);
        }else{
            // Supongamos que tenemos otro modelo de datos
                        // En la base de datos busca todas las tareas que le pertenecen 
                        // a este usuario
                                        // Esta consulta va a tomar tiempo, lo manejamos
                                        // a travez de una function 
            Tast.findById(user.tasksId, function(err, tasks){  
                if ( err ) {
                    return res.send( err );
                } else {
                    tasks.completed = true;
                    tasks.save(function (err) { // save al ser proceso de la bd que tendria que ejecutarse
                        if(err){                  //tambien comaria tiempo, seria otra operacion
                            return res.send(e);
                        }else{
                            res-send('Task Completed');
                        }
                    })
                }
            })
        }
    })
}
//Nota: El callBack; esto es dificil de mantener en una app real para esto se usan las promesas


