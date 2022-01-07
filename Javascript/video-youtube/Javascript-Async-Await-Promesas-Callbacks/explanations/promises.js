function requestHandler( req, res ){
    User.findById(req.userId, function(err, user){
        if (err) {
            res.send(err);
        }else{
            Tast.findById(user.tasksId, function(err, tasks){  
                if ( err ) {
                    return res.send( err );
                } else {
                    tasks.completed = true;
                    tasks.save(function (err) { 
                        if(err){                 
                            return res.send(e);
                        }else{
                            res.send('Task Completed');
                        }
                    })
                }
            })
        }
    })
    // whatever code
}

const user = await User.findById(req.userId); 

//NOTA: Las promesas evitan el callback hell()

function requestHandler( req, res ) {
    User.findById(req.userId)
        .then(function (user) {  
            return Tasks.findById(user.tasksId);
        })
        .then(function (tasks) {  
            tasks.completed = true;
            return tasks.save();
        })
        .then(function () {  
           res.send('Tasks completed'); 
        })
        .catch(function (errores) {  
           res.send(errores);
        })
}


