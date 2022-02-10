<?php

function Palindrome($string){ 
    if (strrev($string) == $string){ 
        $answer = "Palindrome"; 
    }
    else{
        $answer = "Not Palindrome";
    }
    $array = ["string" => $string , "Is" => $answer];
    echo json_encode($array);
} 

$string = $_GET['string'];
Palindrome($string);

?>