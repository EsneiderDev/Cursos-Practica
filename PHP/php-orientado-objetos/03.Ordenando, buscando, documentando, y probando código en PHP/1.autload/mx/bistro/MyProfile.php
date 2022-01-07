<?php
namespace mx\bistro;

class MiPerfil extends BaseProfile
{
    private $email = 'embu@gmail.com';
    public $name;
    public $last_name;

    public function __construct()
    {
        $this->connect2DB();
    }

    public function getEmail()
    {
       return $this->email;
    }

    public function setEmail($email)
    {
        //Reglas para la asignacion de nuestro correo
        $this->email = $email;
    }

    public static function message()
    {
        echo "mensaje";
    }
}





