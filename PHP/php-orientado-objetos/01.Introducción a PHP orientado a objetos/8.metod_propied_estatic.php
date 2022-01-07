<?php

/**
 * NOTA:  
 * 
 *  - $this esta haciendo referencia a la clase en si y el objeto 
 *  - self esta haciendo referencia a la definicion de la clase  
 *  
*/

class DBStatic
{
    public static $db_user = 'ebuelvas';
    public static $db_password = '12345678';
    public static $db_database_name = 'PHP_OO_DB';

    public static function connect()
    {
        echo "Conectado con: " . self::$db_user . ": " .self::$db_password . ": " . self::$db_database_name;  
    }
}

class BaseProfile extends DBStatic
{
    protected $connection_data = 'Conexion DB';

    protected function connect2DB()
    {
        echo $this->connection_data;
    }

    public function __construct()
    {
        // $this->connect2DB();
        self::connect();
    }
}

class MiPerfil extends BaseProfile
{
    public $name;
    public $last_name;

    // PHP Fatal error:  Uncaught Error: Call to private method BaseProfile::connect2DB() from scope MiPerfil 
    public function __construct()
    {
        //$this->connect2DB(); // Para corregir el error cambiamos el metodo de privado a protegido ""
        //self::connect();
    }

    public function getEmail()
    {
       return $this->email;
    }

    public function setEmail($dato)
    {
        //Reglas para la asignacion de nuestro correo
        $this->email = $dato;
    }

    public static function message()
    {
        echo "mensaje";
    }
}

/* 
echo "\n ";
echo DBStatic::$db_user;
echo "\n ";
echo DBStatic::$db_password;
echo "\n ";
echo DBStatic::$db_database_name;
echo "\n ";
echo "\n ";

//*  console: 
//*  ebuelvas
//*  12345678
//*  PHP_OO_DB

echo DBStatic::connect();           // Conectado con: ebuelvas: 12345678: PHP_OO_DB
echo "\n "; 
*/

// $instMiProfile = new MiPerfil;   // Conectado con: ebuelvas: 12345678: PHP_OO_DB

$instBaseProfile = new BaseProfile; // Conectado con: ebuelvas: 12345678: PHP_OO_DB

/* 
* Puedo trarar un metodo de una forma que no sea estatica 
*/
echo " \n ";
MiPerfil::message();
echo " \n ";
/* 
 Conectado con: ebuelvas: 12345678: PHP_OO_DB 
 mensaje 
*/