<?php

/**
 * 
 * 
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

final class Schnauzer extends Dog
{
    public function __construct()
    {
        $this->breed = 'Schnauzer';
    }
} 
// NOTA: no se puede heredar mas de una clase con el final al final

/*
// Es una mala practica
class AnotherDog extends Schnauzer // PHP Fatal error:  Class AnotherDog may not inherit from final class (Schnauzer) in 
{

} */


$instDog = new Dog;
$instDog->sayMyName();