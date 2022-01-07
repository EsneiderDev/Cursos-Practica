<?php
class Person
{
    public $age;
    public $name = 'Diana';

    public function run()
    {
        echo 'estoy corriendo';
    }

    public function walk()
    {
        echo 'Estoy caminando';
    }

    public function greet(  $other_person_name )
    {
        echo $this->name. ' saluda a '.$other_person_name;
    }

    public function __construct()
    {
        echo "Estoy siendo creado ". rand(1, 99) ."\n";
        /* $this->nombre = $name;
        $this->edad = $age; */
    }
}

for ($i=0; $i < 5; $i++) { 
    /* echo ($i+1)." ";
    $person = new Person('Esneider', 24); */
}

$persona1 = new Person();
$persona1->run();
$persona1->walk();
$persona1->greet('Nancy');



?>