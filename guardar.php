<?php
include("conex.php");
$link=Conectarse();

$email=$_GET["email"];
$comentario=$_GET["comentario"];
$tipo=$_GET["tipop"];



mysqli_query($link, "INSERT INTO usuarios (email,comentario,tipo) VALUES ('$email','$comentario','$tipo')");



  $result6 = mysqli_query($link,"Select * from usuarios");



while($versi6 = mysqli_fetch_array($result6)){

echo 'Email: '.$versi6["email"].'<br>';


}

?>