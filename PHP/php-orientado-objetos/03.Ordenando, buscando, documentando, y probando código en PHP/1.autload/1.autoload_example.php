<?php
require_once('1.autoload.php');

echo Config::ENVIRONMENT; // development
//$instConfig = new Config;

//var_dump($instConfig); /* object(Config)#1 (0) { } */
//$InstanceMyProfile = new \mx\bistro\MiPerfil;

echo mx\bistro\Config::ENVIRONMENT;
