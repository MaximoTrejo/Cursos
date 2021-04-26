var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

var numero = parseInt(prompt('Ingrese un número entre 0 y 25:'));
var letra = prompt('Ingrese una letra:');

if(numero < 0 || numero > 25) {
	alert('Tu numero no es válido.');
} else {
	
	var letraCalculada = letras[numero];
	letra = letra.toUpperCase();

	if(letra == letraCalculada) {
		alert('Ha Ganado.');
	} else {
		alert('Ha perdido.');
	}

}