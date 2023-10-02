<?php

class Coche{
    
    // Atributos
    public $modelo;
    public $color;
    public $velocidad;

    /**
     * @param $modelo
     * @param $color
     * @param $velocidad
     */
    public function __construct($modelo, $color, $velocidad)
    {
        $this->modelo = $modelo;
        $this->color = $color;
        $this->velocidad = $velocidad;
    }

    /**
     * @return mixed
     */
    public function getModelo()
    {
        return $this->modelo;
    }

    /**
     * @param mixed $modelo
     */
    public function setModelo($modelo)
    {
        $this->modelo = $modelo;
    }

    /**
     * @return mixed
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * @param mixed $color
     */
    public function setColor($color)
    {
        $this->color = $color;
    }

    /**
     * @return mixed
     */
    public function getVelocidad()
    {
        return $this->velocidad;
    }

    /**
     * @param mixed $velocidad
     */
    public function setVelocidad($velocidad) 
    {
        $this->velocidad = $velocidad;
    }

    public function mostrarInfo(){
        $info = "<h1>Informacion del coche:<h1>";
        $info .= "Modelo: ".$this->getModelo();
        $info .= "<h1>Color: <h1>".$this->getColor();
        $info .= "<h1><h1>".$this->getVelocidad();
        return $info;
    }

}

$carro1 = new Coche("BMW","rojo", 2);

echo $carro1->mostrarInfo();