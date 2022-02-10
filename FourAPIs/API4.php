<?php

function PasswordCheck($string){ 
    if ( (strlen($string) >= 8 ) && ( preg_match('/[A-Za-z]/', $string) ) && ( preg_match('/[0-9]/', $string)) ){ 
        $hashed = hash('sha256', $string);
        $array = ["password" => $hashed, "boolean" => "True"];
        echo json_encode($array);
    }
    else{
        $array = ["boolean" => "False"];
        echo json_encode($array);
    }
} 

$string = $_GET['string'];
PasswordCheck($string);

?>