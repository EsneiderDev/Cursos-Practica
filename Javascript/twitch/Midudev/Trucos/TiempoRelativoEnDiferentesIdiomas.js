
/* ======================================================================
	 TIEMPO RELATIVO EN DIFERENTES IDIOMAS ...sin dependencias y desde cero
   ====================================================================== */

        /*Creamos una constante con todas las unidades de tiempo en segundos*/
        const DATE_UNITS = {
          day:  86400,
          hour:  3600,
          minutes: 60,
          second:   1
        }
        
        /* Crear una funcion que nos devuelva los segundos de diferencia entre
           un timestamp y el tiempo actual. */ 
        const getSecondsDiff = timestamp => (Date.now() - timestamp) / 100
        
        /* Una función que recibelos segundos que han pasado y determin qué 
           unidad y medida necesita para representar mejor el timpo */
        const getUnitAndValueDate = (secondsElapsed) => {
          const entries = Object.entries(DATE_UNITS)
          
          for(const [unit, secondsInUnit] of entries){
            const match = secondsElapsed >= secondsInUnit || unit === 'second'
            if(match){
              const value = Math.floor( secondsElapsed / secondsInUnit ) * -1;
              return { value, unit }
            }
          }
        }
        
        /* Finalmente, la función principal.
            Le pasamos el timestamp y el idioma que queremos. ¡Y ya está! */
        const timeAgo = (timestamp, locate) => {
          const rtf = new Intl.RelativeTimeFormat(locate) // <-- Esto es parte en la plataforma web
          
          const secondsElapsed = getSecondsDiff(timestamp)
          const { value, unit } = getUnitAndValueDate(secondsElapsed); // <-- aqui usamos las dos fun que	 
          return rtf.format( value, unit )														 //     creamos 
        }
        
        console.log( timeAgo(1645114088929) );
        // --> hace 160 días
        console.log( timeAgo(1645114088929, 'en'));
        // --> 160 days ago

        /* ¿Qué es el tiempo timestamp? 
            Es un entero que representa el número de milisegundos que han pasado desde el 1 de 
          Enero de 1970 y sirve para representar fechas
        */
        // Date.now() devuelve un timestamp
        // que representa el momento actual
        console.log('timestamps: ' + Date.now());
        // --> 1645111958063
        
        // Puedes usarlos para inicializar Date
        new Date(1645111853038)
        // --> 2022-02-17T15:30:53.038Z
