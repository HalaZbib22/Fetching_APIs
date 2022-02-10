<?php

$x = $_GET["x"];
$y = $_GET["y"];
$array = [ "result" => 2 * $x + $y % 2];
echo json_encode($array);

?>


