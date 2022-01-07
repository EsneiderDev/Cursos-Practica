<?php

/**
 * NOTA:  

 *  
*/

class Config
{
    /* const DB_USER_NAME     = 'ebuelvas';
    const DB_USER_PASSWORD = '12345678';
    const DB_DATABASE_NAME = 'midb'; */
    const ENVIRONMENT = 'development';
}

class BaseProfile extends Config 
{
    protected $connection_data = 'Conexion DB';
    protected function connect2DB()
    {
        if( 'production' == self::ENVIRONMENT ){
            echo 'Conectando a produccion';
        }
        if( 'development' == self::ENVIRONMENT ){
            echo 'Conectando a desarrollo';
        }
        if( 'staging' == self::ENVIRONMENT ){
            echo 'Conectando a staging';
        }
        
        // echo $this->connection_data;
    }

    public function __construct()
    {
        $this->connect2DB();
    }
}

class MiPerfil extends BaseProfile
{
    const DOMAIN_NAME = 'esneideredsocial.com';
    private $email = 'bernardo@correo.com';
    public $name;
    public $last_name;

    public function __construct()
    {
        // echo 'Conectando a '.self::DB_DATABASE_NAME;
        $this->connect2DB();
        //echo self::DOMAIN_NAME;
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

// MiPerfil::DOMAIN_NAME = 'otrodominio'; // PHP Parse error:  syntax error, unexpected token "="

// echo MiPerfil::DOMAIN_NAME; //  esneideredsocial.com

$instMiPerfil = new MiPerfil;  // (echo 'Conectando a '.self::DB_DATABASE_NAME;) Conectando a midb
                               // 


