<?php
 
class Person
{
    public $age;
    public $name;

    public function run($velocidad)
    {
        $cal = $velocidad * 2;
        return $this->name.' esta corriendo a '.$cal.' km/h';
    } 

    public function __construct($na, $ag)
    {
        $this->name = $na;  
        $this->age = $ag; 
        echo "estoy siendo creado";  /* Dato interesante: siempre se va a mandar a llamar el metodo contruc */
    }

}
/* for ($i=0; $i < 5; $i++) { 
    echo "\n";
    $persona = new Person(null, null);

} */



$persona1 = new Person('Esneider', 24);
echo $persona1->nombre;
echo ", Como estas? ";
echo $persona1->run(91);

echo "\n -------------- \n ";

$var1 = "Manuel";
$var2 = 23;
$persona2 = new Person($var1, $var2);
echo $persona2->nombre.' con '.$persona2->edad.' años ';
echo $persona2->run(23);

echo "\n -------------- \n ";

$persona3 = new Person('Juan', 44);

echo $persona3->nombre.' con '.$persona3->edad. ' años '.$persona3->run(77);

?>

