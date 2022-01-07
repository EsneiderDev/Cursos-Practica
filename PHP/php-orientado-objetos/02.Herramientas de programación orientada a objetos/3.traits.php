<?php


/**
 * En php no hay herencia multiple o al menos no directamente
 * para evitar problemas en ultilizarlos hacks para lograr la herencia multiple
 * hay otros mecanismo para compartir funcionalidades entre clases en primera
 * instacias no relacionadas, para ellos contamos con los "Traits"
 */

trait myUtilities
{
    public function sayMyName()
    {
        echo " Mi nombre es " . $this->name . "\n ";
    }
}

abstract class Animal 
{
    abstract public function makeSound();

    public function run()
    {
        echo "Corriendo \n ";
    }
}

class Dog extends Animal
{
    use myUtilities;
    public $name = "Firulait";
    public function makeSound()
    {
        echo "\n Guau \n ";
    }
}

class Cat extends Animal
{
    use myUtilities;
    public $name = "Tom";
    public function makeSound()
    {
        echo "Miau \n ";
    }
}

// interfaces
interface iDB
{
    public function connect();
}

// PHP Fatal error:  Class MySql contains 1 abstract method and must
// therefore be declared abstract or implement the remaining methods (iDB::connect) in
class MySql implements iDB
{
    use myUtilities;
    public $name = "MysSQL vers ...";
    public function connect()
    {
        echo "Conectando con MySQl \n ";
    }
}

class Oracle implements iDB
{
    use myUtilities;
    public $name = "Oracle vers ...";
    public function connect()
    {
        echo "Conectando con Oracle \n ";
    }
}

$instDog = new Dog;
$instCat = new Cat;

$instDog->sayMyName(); // Mi nombre es
$instCat->sayMyName();

$instMySql = new MySql;
$instOracle = new Oracle;

$instMySql->sayMyName();
$instOracle->sayMyName();