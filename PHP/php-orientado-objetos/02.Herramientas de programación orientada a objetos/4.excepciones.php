<?php

/**
 *  Manejo de errores: Los errores debemos colocarlo del mas especifico 
 *  al mas generico, por ejemplo la clase hija DBException el 'catch' y despues 
 *  el 'catch' de la clase Exception porque es la clase padre. 
 */



/* try{
   throw new Exception('No hay archivos de configuración');
}catch(Exception $e){
   echo "Hubo un error: ".$e->getMessage() . " \n";
}finally{
    echo "Cerrando la BD";
} 
*/

class DBException extends Exception {}

class Main
{
    public function __construct()
    {
        try{
            //throw new DBException("No hay conexion ");
            throw new Exception("No hay espacio en memoria ");
        }catch(DBException $e){
            echo "Error especifico: ". $e->getMessage() . " \n ";
        }catch(Exception $e){
            echo "Error generico: ". $e->getMessage() . " \n ";
        }
    }
}

$main = new main;