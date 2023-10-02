<?php
class BaseClass {
   function __construct() {
       print "1. En el constructor BaseClass \n ";
	print "<br>";
   }
}

class SubClass extends BaseClass {
   function __construct() {
       parent::__construct();
       print "En el constructor SubClass\n";
       print "<br>";
   }
}

class OtherSubClass extends BaseClass {
    // heredando el constructor BaseClass
}

// 1. En el constructor BaseClass
$obj = new BaseClass();

// 1. En el constructor BaseClass
// En el constructor SubClass
$obj = new SubClass();

//1. En el constructor BaseClass
$obj = new OtherSubClass();
?>