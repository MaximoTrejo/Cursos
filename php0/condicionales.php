<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Condicionales</title>
	<style>
		body{
			font-family: Arial; 
			background: #E85F79;
		}
		div{
			background: white; 
			text-align: center;
			padding: 20px; 
			margin: 0 auto;
			width: 200px;
		}
		h1{font-size: 36px;}
	</style>
</head>
<body>
	<div>
	<?php  
		$hora = 7;
		if ($hora > 6 && $hora < 12){
			echo "<h1>Buenos Dias </h1>";
		}else if ($hora >= 12 && <=18){
			echo "<h1>Buenas Tardes </h1>";
		}else {
		echo "<h1>Buenas noches</h1>";
		}
	?>
</div>
</body>
</html>