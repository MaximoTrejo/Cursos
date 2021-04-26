var ingreso = parseInt(prompt ("Ingresa un numero"));
if(ingreso<= 0){
	var invalido = alert("El número ingresado es invalido, debe ser mayor a 0");
}else{
var resultado =document.getElementById('resultado')
	resultado.innerHTML= '<P>El resultado con el sin iva es '+ ingreso+'</P>'
}
function iva(){
  	var resultIva = (ingreso*21/100)
  	var resultadoIva =document.getElementById('resultadoIva')
	resultadoIva.innerHTML= '<P>El resultado con el sin iva es '+ resultIva +'</P>'
}