<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Formulario 3</title>
	<style>
		body{background-color: #264673; box-sizing: border-box; font-family: Arial;}

		form{
			background-color: white;
			padding: 10px;
			margin: 100px auto;
			width: 450px;
		}

		input[type=text], input[type=password]{
			padding: 10px;
			width: 380px;
		}
		input[type="submit"]{
			border: 0;
			background-color: #ED8824;
			padding: 10px 20px;
		}

		.error{
			background-color: #FF9185;
			font-size: 12px;
			padding: 10px;
		}
		.correcto{
			background-color: #A0DEA7;
			font-size: 12px;
			padding: 10px;
		}
		.date{
			background-color: #264673;
			padding: 10px 0px;
			margin: 0px auto;
			width: 450px;
			text-align: center;
			color: white;
		}
	</style>
</head>
<body>
	<form action="formulario.php" method="POST">
		<p>
			<?php
			include("menu1.php");
			?>
		</p>
		<br><br>

		<?php
			$nombre = "";
			$password = "";
			$email = "";
			$pais = "";
			$nivel = "";
			$areas = array();

			if (isset($_POST['nombre'])) {
				$nombre = $_POST['nombre'];
				$password = $_POST['password'];
				$email = $_POST['email'];
				$pais = $_POST['pais'];

			if (isset($_POST['nivel'])) {
				$nivel = $_POST['nivel'];
			}
			else{
				$nivel = "";
			}
			if (isset($_POST['areas'])) {
				$areas = $_POST['areas'];
			}
			else{
				$areas = [];
			}

				$campos = array();

				if ($nombre == "") {
					array_push($campos, "Ingrese un nombre");
				}
				if ($password == "" || strlen($password) > 6) {
					array_push($campos, "Insgrese una contraseña con al menos 6 caracteres");
				}
				if ($email == "" || strpos($email, "@") === false) {
					array_push($campos, "Ingrese una dirección de mail valida");
				}
				if ($pais == "" ){
					array_push($campos, "Selecciona un pais de la lista");
				}
				if ($nivel == "") {
					array_push($campos, "Seleccione un nivel de estudios");
				}
				if ($areas == "" || count($areas)<2) {
					array_push($campos, "Elija al menos 2 areas de interes");
				}
				if (count($campos)>0) {
					echo "<div class='error'>";
					for ($i=0; $i < count($campos); $i++) { 
						echo "<li>" . $campos[$i] . "</li>";
					}
				}
				else {
					echo "<div class='correcto'> Datos correctos";
				}
				echo "</div>";
			}
		?>
		<p>
		Nombre:<br/>
		<input type="text" name="nombre" value="<?php echo $nombre; ?>">
		</p>

		<p>
		Password:<br/>
		<input type="password" name="password" value="<?php echo $password; ?>">
		</p>

		<p>
		Correo electrónico:<br/>
		<input type="text" name="email" value="<?php echo $email; ?>">
		</p>

		<p>
			País de origen: <br>
		<select name="pais" id="">
			<option value=""> Selecciona un país </option>
			<option value="ar" <?php if($pais == "ar") echo "selected" ?>> Argentína </option>
			<option value="cl" <?php if($pais == "cl") echo "selected" ?>> Chile </option>
			<option value="es" <?php if($pais == "es") echo "selected" ?>> España </option>
			<option value="mx" <?php if($pais == "mx") echo "selected" ?>> Mexico </option>
			<option value="py" <?php if($pais == "py") echo "selected" ?>> Paraguay </option>
			<option value="uy" <?php if($pais == "uy") echo "selected" ?>> Uruguay </option>
			<option value="vz" <?php if($pais == "vz") echo "selected" ?>> Venezuela </option>
		</select>
		</p>

		<p>
			Nivel de estudios: <br>
			<input type="radio" name="nivel" value="primaria" <?php if($nivel == "primaria") echo "checked" ?>> Primaria
			<input type="radio" name="nivel" value="secundaria" <?php if($nivel == "secundaria") echo "checked" ?>> Secundaria
			<input type="radio" name="nivel" value="universidad" <?php if($nivel == "universidad") echo "checked" ?>> Universidad
		</p>

		<p>
			Areas de interes: <br>
			<input type="checkbox" name="areas[]" value="programación" <?php if(in_array("programación", $areas)) echo "checked" ?>> Programación <br>
			<input type="checkbox" name="areas[]" value="multimedia" <?php if(in_array("multimedia", $areas)) echo "checked" ?>> Diseño multimedia <br>
			<input type="checkbox" name="areas[]" value="electronica" <?php if(in_array("electronica", $areas)) echo "checked" ?>> Electrónica <br>
			<input type="checkbox" name="areas[]" value="hardware" <?php if(in_array("hardware", $areas)) echo "checked" ?>> Hardware <br>
		</p>

		<p><input type="submit" value="Enviar datos"></p> 

		<p>
			<?php
			echo "<div class = 'date'>";
			echo "Fecha: " . date("d/m/y") . "<br>";
			echo "Hora: " . date("h:i a");
			?>
		</p>
	</form>
</body>
</html>