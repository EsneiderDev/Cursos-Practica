<?php
/**
 * ? Algunas veces el copiado de un objeto no es el comportamiento que buscamos
 * ? Por ejemplo si tuvieramos un objeto que hace referencia a una ventana, lo logico 
 * ? seria que copiar dicho objeto nos diera una nueva ventana sin enbargo dependiendo 
 * ? como este implementado la ventana pudiera ser que el copiado simplemente nos regresara
 * ? la misma ventana. 
 * ! ¿Cómo podriamos crear una nueva ventana sin generar una nueva instancia? Clonado de Objeto
 * todo: NOTA: Tenemos una clase que implementa el patron de diseño singleton
 * ? Lo que hace el patron singleton es que solo exista una y solo una instancia de nuestra clase
 */
class DB
{
    private static $instance;
    public $name = '';

    public static function getInstance()
    {
        if (null == static::$instance) {
            static::$instance = new static();
        }

        return static::$instance;
    }

    protected function __construct(){}

    public function getName()
    {
        return $this->name ."\n";
    }
}

$mysql = DB::getInstance(); 

$oracle = clone $mysql;
$sql_server = clone $mysql;

$mysql->name = "MySQL";
$oracle->name = "Oracle";
$sql_server->name = "Sql server";

echo "=====================================\n";

echo $mysql->getName();
echo $oracle->getName();
echo $sql_server->getName();

echo "=====================================";