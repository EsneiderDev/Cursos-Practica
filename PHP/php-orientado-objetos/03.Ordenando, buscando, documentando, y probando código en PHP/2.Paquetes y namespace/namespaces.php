<?php
require_once('MyClass.php');

use MyNamespace\MyClass;

class Main
{
    public $posts;

    public function __construct()
    {
        $this->posts = new MyClass;
    }
}

$app = new Main;

$app->posts->greet();  // Hola Hola