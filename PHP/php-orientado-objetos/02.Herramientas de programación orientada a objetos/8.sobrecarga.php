<?php 
/**
 * La sobre carga o overloading 
 * En php la sobrecarga es distinta tanto como en Java o C# podemos definir metodos que se llaman 
 *    iguales pero que reciben argumentos de diferentes tipos y diferente numero
 *  En php la sobrecarga se refiere a la capacidad de generar metodos y atributos dinamicos
 */

class Person
{
    private $name;
    private $familyname;
    private $phone;
    private $mobile;

    public function __construct($name, $familyname, $phone, $mobile)
    {
        $this->name = $name;
        $this->familyname = $familyname;
        $this->phone = $phone;
        $this->mobile = $mobile;
    }
    
    public function __toString()
    {
        return $this->name." ".$this->familyname.", ". $this->phone." o ". $this->mobile."\n";
    }

    /* public function getName()
    {
        return $this->name . " \n";
    } */

    public function __call($name, $arguments)
    {   

        $no_method = true;
        $method_name = substr($name, 0, 3); // get
    
        if( $method_name = 'get')
        {
            $no_method = false;
            $real_name = substr(strtolower($name), 3);
            return $this->$real_name . " \n ";
        }

        if($no_method)
        {
            throw new Exception("Metodo {$name} no encontrado");
        }

    }
    // Nota: Cuando recibe la intencion de mandar a llamar una funcion que en realidad no 
    //   existe manda a llamar a "__call()" y dentro de ella podemos darle nuestra propia funcionalidad
}

$person  = new Person("Esneider", "Buelvas", "905741", "300020000");
//echo $person->name; //   PHP Fatal error:  Uncaught Error: Cannot access private property Person::$name in 
//echo $person;            //   Esneider Buel, 905741 o 3013120000       
echo $person->getName(); //         Esneider 
echo $person->getFamilyName(); //   Buelvas 
echo $person->getPhone(); //        905741
echo $person->getMobile(); //       300020000  










