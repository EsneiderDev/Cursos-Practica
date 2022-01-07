<?php namespace mx\bistro;

class BaseProfile extends Config 
{
    protected $connection_data = 'Conexion DB';
    protected function connect2DB()
    {
        echo " Conectando a BD de ". self::ENVIRONMENT;
    }

    public function __construct()
    {
        $this->connect2DB();
    }
}