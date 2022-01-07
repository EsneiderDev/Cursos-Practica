<?php 

/**
 *      CONVERSION DE OBJETOS A CADENAS
 * 
 */

class Person
{
    private $name;
    private $last_name;

    public function __construct( $name, $last_name )
    {
        $this->name = $name;
        $this->last_name = $last_name;
    }

    public function __toString()    
    {
        return $this->name . " " . $this->last_name; // Esneider Buelvas
    }
}

$esneider = new Person("Esneider", "Buelvas");

echo $esneider; // PHP Fatal error:  Uncaught Error: Object of class Person could not be converted to string in
