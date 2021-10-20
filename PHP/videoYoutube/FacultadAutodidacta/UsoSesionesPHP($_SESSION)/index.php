<?php

session_start();

/* $_SESSION['firstSession'] = 'Mi Primera Session';

echo $_SESSION['firstSession']; // Mi Primera Session */
/* 
$_SESSION['miSession'] = Array();
$_SESSION['miSession'][0] = "Datos";
$_SESSION['miSession'][1] = 2020;

echo $_SESSION['miSession'][0]; // Datos
// echo $_SESSION['miSession'][5]; // Warning: Undefined array key 

print_r($_SESSION['miSession']); // Array ( [0] => Datos [1] => 2020 )
*/

echo "---------- Array Asociativo -------- </br>";

$_SESSION['miSession'] = Array();
$_SESSION['miSession']['nombre'] = "Esneider";
$_SESSION['miSession']['edad'] = 24;
$_SESSION['miSession']['pais'] = "Colombia";

echo $_SESSION['miSession']['edad'];

echo '<pre>';
print_r($_SESSION['miSession']);

echo "---------- Borrar Session -------- </br>";

/* unset($_SESSION['miSession']);
echo '<pre>';
print_r($_SESSION['miSession']); */ // Warning:  Undefined array key "miSession"

echo "---------- Destruir Session -------- </br>";

// session_destroy(); // Si le colocas el sessio_destroy en el otro archivo no sirve la variable
echo '<pre>';
print_r($_SESSION['miSession']);


echo '----------- el arroja ningun error ----------';
/* unset($_SESSION['miSession']); */
echo '<pre>';

// session_destroy();
/*
print_r(@$_SESSION['miSession'].'No lanza el error');
print_r($_SESSION['miSession'].'Si lanza el error');
*/

print_r($_SESSION['miSession']);









?>