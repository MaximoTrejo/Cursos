<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Formularios2</title>
	<style>
		body{background-color: #4b4b4b; box-sizing: border-box; font-family: Arial;}

		form{
			background-color: white;
			padding: 10px;
			margin: 100px auto;
			width: 400px;
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
			background-color: #ff3838;
			font-size: 12px;
			padding: 10px;
		}
		.correcto{
			background-color: #A0DEA7;
			font-size: 12px;
			padding: 10px;
		}
	</style>
</head>
<body>
	<form action="#" method="POST">
	<?php
		$nombre = "";
		$password = "";
		$email = "";
		$pais = "";
		$nivel = "";

		if(isset($_POST['nombre']))
		{
			$nombre = $_POST['nombre'];
			$password = $_POST['password'];
			$email = $_POST['email'];
			$pais = $_POST['pais'];

			if(isset($_POST['nivel'])){
				$nivel = $_POST['nivel'];
			}
			else{
				$nivel = "";
			}


			$campos = array();

			if($nombre == "")
			{
				array_push($campos, "Ingrese un nombre");
			}
			if($password == "" || strlen($password) <6)
			{
				array_push($campos, "Ingrese una contraseña valida, debe tener como minimo 6 caracteres");
			}
			if($email == "" || strpos($email, "@") === false)
			{
				array_push($campos, "Ingrese un mail valido");
			}
			if($pais == "")
			{
				array_push($campos, "Selecione un país");
			}
			if($nivel == "")
			{
				array_push($campos, "Selecione un nivel de estudio");
			}


			if(count($campos)>0)
			{
				echo "<div class='error'>";
				for ($i=0; $i < count($campos); $i++)
				{
					echo "<li>". $campos[$i] . "</li>";
				}
			}
			else
			{
				echo "<div class='correcto'>
						Datos correcto";
			}
			echo "</div>";
		}
	?>
		<p>
			Nombre:<br/>
			<input type="text" name="nombre" value="<?php echo $nombre;?>">
		</p>

		<p>
			Password:<br/>
			<input type="password" name="password" value ="<?php echo $password; ?>">
		</p>

		<p>
			Correo electrónico:<br/>
			<input type="text" name="email" value ="<?php echo $email; ?>">
		</p>

		<p>
			Pais de origen:<br/>
			<select name="pais" id="">
			<option value="">Seleciona un país </option>

			<option value="ar"<?php if($pais == "ar")
					echo "selected"?>> Argentina </option>
			<option value="cl"<?php if($pais == "cl")
					echo "selected"?>> Chile </option>
			<option value="es"<?php if($pais == "es")
					echo "selected"?>> España </option>
			<option value="mx"<?php if($pais == "mx")
					echo "selected"?>> México </option>
			<option value="py"<?php if($pais == "py")
					echo "selected"?>> Paraguay </option>
			<option value="uy"<?php if($pais == "uy")
					echo "selected"?>> Uruguay </option>
			<option value="vz"<?php if($pais == "vz")
					echo "selected"?>> Venezuela </option>
			</select>
		</p>

		<p>
			Nivel de estudio:<br/>
			<input type="radio" name="nivel" value="Primaria"
			<?php if($nivel == "Primaria") echo "checked" ?>>
				Primaria

			<input type="radio" name="nivel" value="Secundaria"
			<?php if($nivel == "Secundaria") echo "checked" ?>>
			Secundaria

			<input type="radio" name="nivel" value="Universidad"
			<?php if($nivel == "Universidad") echo "checked" ?>> 
			Universidad

		</p>

		<p><input type="submit" value="enviar datos"></p> 
	</form>
</body>
</html>