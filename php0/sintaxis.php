<?php
	//Utiliza Xamp


	//Variables $(nombre de la variable)
	$nombre = "Maxi"
	$edad = 24;
	$mensaje = "Vivo en Lanus"

	// Mostrar variables
	echo "Soy". $nombre . "<br>";
	echo "tengo" . $edad . "años";
	echo "<br>";
	echo $mensaje;
	echo "<br>"

	//contar cantidad de caracteres
	echo strlen($mensaje)
	echo "<br>";

	//Reemplazar texto 
	echo str_replace("Vivo", "Estoy", $mensaje);
	echo "<br>";


	//Sumar
	$a = 5;
	$b = 2;

	echo $a + $b
	echo "<br>";
	//Restar
	echo $a - $b
	echo "<br>";
	//Multiplicar
	echo $a * $b
	echo "<br>";
	//Dividir 
	echo $a / $b
	echo "<br>";
	//Potencia
	echo $a ** $b
	echo "<br>";

	$resultado = $a * $b;
	echo $resultado;
	echo "<br>";

	//Comparaciones

	//igual
	var_dump($a == $b);
	echo "<br>";
	//Mayor
	var_dump($a > $b);
	echo "<br>";
	//Menor 
	var_dump($a < $b);
	echo "<br>";
	//Mayor y Menor
	var_dump($a <> $b);
	echo "<br>";
	//Mayor e igual
	var_dump($a => $b);
	echo "<br>";


?>