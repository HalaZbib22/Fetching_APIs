<?php

function PasswordCheck($string){ 
    if ( (strlen($string) >= 8 ) && ( preg_match('/[A-Za-z]/', $string) ) && ( preg_match('/[0-9]/', $string)) ){ 
        $hashed = hash('sha256', $string);
        $array = ["password" => $hashed];
        echo json_encode($array);
    }
    else{
        $message = "TOO WEAK!";
        echo ($message);
    }
} 

$string = $_GET['string'];
PasswordCheck($string);

?>