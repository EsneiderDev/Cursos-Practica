<?php
/**
 * - Las clases ABSTRACTAS son un tipo especial de clases que no pueden ser instanciadas
 *   pero que define estructuras y que puede definir funcionalida.
 * - Cada metodo definido como abstracto debera estar definido en la clase que lo implementa.
 * - Ademas una clase que tenga un metodo abstracto debe considerarse y declararse como 
 *   abstracta.
 * - Las interfaces son similares a las clases abstractas pero con la diferencia que en las 
 *   interfaces no se puede definir nada de funcionalidad.
 */

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
    public function makeSound()
    {
        echo "\n Guau \n ";
    }
}

class Cat extends Animal
{
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
    public function connect()
    {
        echo "Conectando con MySQl \n ";
    }
}

class Oracle implements iDB
{
    public function connect()
    {
        echo "Conectando con Oracle \n ";
    }
}

$instDog = new Dog;
$instCat = new Cat;
$instDog->makeSound(); // Guau
$instDog->run();
$instCat->makeSound(); // Miau
$instCat->run();


$isntMySQL  = new MySQL;
$instOracle = new Oracle;

$isntMySQL->connect(); // Conectando con MySQl
$instOracle->connect();


