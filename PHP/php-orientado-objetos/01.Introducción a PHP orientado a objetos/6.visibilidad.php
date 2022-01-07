<?php

class MiPerfil
{
    private $email = 'e@correo.com';
    public $name;
    public $last_name;

    public function __construct()
    {
        
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

$instMiPerfil = new MiPerfil();

echo $instMiPerfil->name = "Esneider \n";

//No se puede acceder porque es propiedad privada
//$instMiPerfil->email = "Esneider@gmail.com \n";
//echo $instMiPerfil->email; // --> PHP Fatal error:  Uncaught Error: Cannot access private property

echo $email = $instMiPerfil->getEmail();



?>