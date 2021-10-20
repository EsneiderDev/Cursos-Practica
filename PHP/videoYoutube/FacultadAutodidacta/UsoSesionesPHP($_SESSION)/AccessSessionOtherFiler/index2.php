
<?php

session_start();

// echo $_SESSION['firstSession'];  // Mi Primera Session

echo '<pre>';
//session_destroy(); // en este archivo si se destruye la session por completo
print_r($_SESSION['miSession']); //Array ( [nombre] => Esneider [edad] => 24 [pais] => Colombia )
                    
                // muentra cuendo se destruye la seccion en index.html
                    //Undefined array key "miSession" 
?>