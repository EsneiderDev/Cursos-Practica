<?php


/**
 * Necesitamos liberar recuros o tomar una accion en especifico 
 *  al ya no encontrar una referencia a un objeto.
 * Si queremos especificar que hacer en ese momento podemos podemos 
 *  utilizar el destructor. 
 * El comstructor se ejecuta al momento de instanciar una clase
 * El metodo de destructor se ejecuta al ya no encontrar una referencia adicional
 *   de una ininstancia
 */


class Indestructible
{
    public function __construct ()
    {
        print "Clase creada \n";
        $this->name = "Indestructible";
    }

    public function __destruct()
    {
        print "Destruyendo a " . $this->name . "\n";
    }
}

$instIndestructible = new Indestructible;

unset($instIndestructible);

for ($i=0; $i < 50 ; $i++)
{ 
    echo "{$i} \n";
    if($i >= 30)
    {
        exit();
    }

}

/* Clase creada 
0 
1 
2 
3 
4 
Destruyendo a Indestructible */

