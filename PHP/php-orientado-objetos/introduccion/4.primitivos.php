<?php

class Pet{
    public $nombreMascota = 'Firulais';
    public $añosPerros    =  4;
}

class Person
{
    public $age;
    public $name;
    public $firstname;
    private $money_in_wallet;
    private $todos; 
    private $married;

    public function run()
    {
        echo 'estoy corriendo';
    }

    public function walk()
    {
        echo 'Estoy caminando';
    }

    public function greet( Person $other_person )
    {
        echo "Hola, ".$other_person->nombre." ";
    }

    public function __construct($name)
    {
        $this->nombre  = $name;
    }

    public function adopt( Pet $instance_pet )
    {
        echo 'Hey adopté a '.$instance_pet->nombreMascota." tiene ".$instance_pet->añosPerros. " años";
    }
  
}


$persona1 = new Person("Esneider");
$persona2 = new Person("Manuel");

$mascota1 = new Pet();
/*error porque tiene que pasar ub objeto de tipo perona */
//  $persona1->greet('Sergio');          //--> PHP Fatal error: Uncaught TypeError: Person::greet(): Argument #1 ($other_person) must be of type Person, string given

$persona1->greet($persona2);            // Hola, Manuel

//      $persona2->adopt($persona1);    //--> Fatal error: Uncaught TypeError: Person::adopt(): Argument #1 ($instance_pet) must be of type Pet, Person given, called in
                                        //--> Error fatal: Uncaught TypeError: Person :: adopt (): Argument # 1 ($ instance_pet) debe ser de tipo Mascota,

$persona2->adopt($mascota1);             // Hola, Manuel Hey adopté a Firulais.

?>