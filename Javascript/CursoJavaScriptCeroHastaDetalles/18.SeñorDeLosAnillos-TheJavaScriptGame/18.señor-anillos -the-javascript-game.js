function Jugadores(nombre) 
{
    this.nombre = nombre;
    this.pv     = 100; // puntos de vida
    this.sp     = 100; // magis o special poin

    this.curar = function ( jugadorObjetivo ) {  

        while(jugadorObjetivo.pv > 1){
            if(this.pv == 0 ){
                console.error(this.nombre+" esta muerto, no puede pasar puntos de vida");
                this.estado( jugadorObjetivo );
            }else{
                if ( this.sp >= 40 ) {
                    this.sp -= 40; // this Hace referencia a gandalf
                    jugadorObjetivo.pv += 20;

                }else{
                    console.info( this.nombre + " no tiene sp"); 
                    this.estado( jugadorObjetivo );  
                }
            }
        }
        console.error('El gudado no puede resusitar');
        this.estado( jugadorObjetivo );  
    }

    this.tirarFlcha = function ( jugadorObjetivo ) {  
        if ( jugadorObjetivo.pv > 0 && this.pv > 0) {
            if ( jugadorObjetivo.pv > 40 ) {
                jugadorObjetivo.pv -= 40;
            }else{
                jugadorObjetivo.pv = 0;
                console.error( jugadorObjetivo.nombre + " murio");
            }
        }else{
            console.error("el jugador "+ this.nombre + "ha muerto" )
        }
        this.estado (jugadorObjetivo );
    }

    this.estado = function ( jugadorObjetivo ) {  
        console.log( this );
        console.info( jugadorObjetivo );
    }

    this.revivir = function ( jugadorObjetivo )
    {
        if(this.pv == 100  || this.sp > 50){
            jugadorObjetivo.pv += 100;
            console.log('El jugador '+ jugadorObjetivo.nombre+ ' ha sido revicido ');
            this.estado (jugadorObjetivo );
        }   
    }

}

var gandalf = new Jugadores("Gandalf");
var legolas = new Jugadores("Legolas");

console.log( gandalf );
console.log( legolas );

/* gandalf.curar( legolas );

legolas.tirarFlcha( gandalf ); */
