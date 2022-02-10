<?php

$before = $_GET['string'];
$after = str_replace(' ', '', $before);
$array = ["before" => $before , "after" => $after];
echo json_encode($array);

?>