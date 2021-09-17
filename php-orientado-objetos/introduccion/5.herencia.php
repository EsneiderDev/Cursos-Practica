<?php # inheritance
class Animal
{
    public $name = "nameParent";
    public $sound_type = 'hago el ruido';

    public function run()
    {
        echo ' Yo corro ';
    }

    public function walk()
    {
        echo ' Yo camino ';
    }

    public function __construct()
    {
        echo ' Ha nacido un animal '; 
    }
    public function getSound()
    {
        echo ' yo '.$this->sound_type;
    }
}

class Dog extends Animal
{
    public  $sound_type = 'ladro';
    
    public function __construct()
    {
        parent::__construct();
        echo ' Ha nacido un Perro '; 

    }
}

class Cat extends Animal
{
    public $sound_type = 'maullo';

    public function __construct()
    {
        parent::__construct();          
        echo ' Ha nacido un gato '; 
    }
}


$perro = new Dog('Firulay');         // Ha nacido un animal  Ha nacido un Perro  Yo corro  yo ladro
$perro->run();
$perro->getSound();
echo "\n ";
$gato = new Cat('Tom');          // Ha nacido un animal  Ha nacido un gato  Yo corro  yo maullo
$gato->run();
$gato->getSound();


// Dato interesante: Si no instanciamos la los constructores de las clases hijas se dispara el constructor del padre


?>