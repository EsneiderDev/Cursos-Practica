<?php
/**
 * NOTA: cuando heredamos los metodos y atributos de la clase 
 *       BaseProfile a MiPersil solo los vuelve accesible en esa sola clase
 *       con "protected" 
 */
class BaseProfile
{
    protected $connection_data = 'Conexion DB';

    protected function connect2DB()
    {
        echo $this->connection_data;
    }

    public function __construct()
    {
        $this->connect2DB();
    }
}

class MiPerfil extends BaseProfile
{
    public $name;
    public $last_name;

    // PHP Fatal error:  Uncaught Error: Call to private method BaseProfile::connect2DB() from scope MiPerfil 
    public function __construct()
    {
        $this->connect2DB(); // Para corregir el error cambiamos el metodo de privado a protegido ""
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
}


// $instBase = new BaseProfile;

$instProfile = new MiPerfil();

// $instProfile->connect2DB(); // Fatal error:  Uncaught Error: Call to protected method BaseProfile::connect2DB() from global scope in C:

