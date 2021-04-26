
 $(window).load(function() {
    $('.flexslider').flexslider({
    	touch: true,
    	pauseOnAction: false,
    	pauseOnHover: false,
    });
  });







function mostrarLista(lista) {
	var elemento = document.getElementById(lista)
	if (elemento.style.display=='none') {
	elemento.style.display='block'
    }else{
    	elemento.style.display='none'
    }
}


var principal = document.getElementById('principal')
principal.style.height='100%'
principal.style.margin='auto'

var logo = document.getElementById('logo')
logo.innerHTML='<h1> Desarollo de JavaScript</h1>'
logo.style.fontSize ='18px'
logo.style.fontFamily='"century gothic"'
logo.style.color='white'


var articulo = document.getElementById('articulo')
articulo.innerHTML='<h2>Respuestas</h2>'
articulo.style.height='100px'
articulo.style.marginTop='30px'




var semititulo =document.getElementsByTagName('h2')
semititulo[0].style.height='20px'
semititulo[0].style.marginTop='35px'
semititulo[0].style.fontFamily='"century gothic"'
semititulo[0].style.fontSize='30px'


var respuestas =["border","height","title","p","color","h1","font-family","p","a","b"]
var primerPregunta = document.getElementById('pregunta1')
primerPregunta.style.height='auto'
primerPregunta.style.overflow='hidden'
var pregunta1 = prompt("¿Cual es la etiqueta para poner un borde?                                           Opciones: Border - Height")
pregunta1=pregunta1.toLowerCase()
if (pregunta1==respuestas[0]) {
primerPregunta.innerHTML='<h4> 1-¿Cual es la etiqueta para poner un borde?</h4><p>  •Su respuesta fue correcta</p>'
primerPregunta.style.color ='green'
}
if (pregunta1==respuestas[1]) {
primerPregunta.innerHTML='<h4> 1-¿Cual es la etiqueta para poner un borde?</h4><p> •Su respuesta fue incorrecta la etiqueta es Border </p>'
primerPregunta.style.color ='red'
}
if (pregunta1 == '') {
primerPregunta.innerHTML='<h4> 1-¿Cual es la etiqueta para poner un borde?</h4><p> •No respuestondiste nada . La respuesta correcta es Border</p>'
primerPregunta.style.color ='red'
}


var segundaPregunta = document.getElementById('pregunta2')
segundaPregunta.style.height='auto'
segundaPregunta.style.overflow='hidden'
var pregunta2 = prompt("¿Con que etiqueta podes escribir un titulo?        Opciones:  Title - p ")
pregunta2=pregunta2.toLowerCase()
if (pregunta2==respuestas[2]) {
segundaPregunta.innerHTML='<h4> 2-¿Con que etiqueta podes escribir un titulo?</h4><p> •Tu respuesta es correcta</p>'
segundaPregunta.style.color ='green'
}
if (pregunta2==respuestas[3]) {
segundaPregunta.innerHTML='<h4> 2-¿Con que etiqueta podes escribir un titulo?</h4><p> •Tu respuesta es incorrecta la etiqueta correcta es title</p>'
segundaPregunta.style.color ='red'
}
if (pregunta2=='') {
segundaPregunta.innerHTML='<h4> 2-¿Con que etiqueta podes escribir un titulo?</h4><p> •No respuestondiste nada . La respuesta correcta es title</p>'
segundaPregunta.style.color ='red'
}








var tercerPregunta = document.getElementById('pregunta3')
tercerPregunta.style.height='auto'
tercerPregunta.style.overflow='hidden'
var pregunta3 = prompt("¿Con que etiqueta podes cambiar de color a las letras?                Opciones: Color - H1")
pregunta3=pregunta3.toLowerCase()
if (pregunta3==respuestas[4]) {
tercerPregunta.innerHTML='<h4> 3-¿Con que etiqueta podes cambiar de color a las letras?</h4><p> •Tu respuesta es correcta</p>'
tercerPregunta.style.color ='green'
}
if (pregunta3==respuestas[5]) {
tercerPregunta.innerHTML='<h4> 3-¿Con que etiqueta podes cambiar de color a las letras?</h4><p> •Tu respuesta es incorrecta . La etiqueta correcta es Color</p>'
tercerPregunta.style.color ='red'
}
if (pregunta3=='') {
tercerPregunta.innerHTML='<h4> 3-¿Con que etiqueta podes cambiar de color a las letras?</h4><p> •No respuestondiste nada . La respuesta correcta es Color</p>'
tercerPregunta.style.color ='red'
}





var cuartaPregunta = document.getElementById('pregunta4')
cuartaPregunta.style.height='auto'
cuartaPregunta.style.overflow='hidden'
var pregunta4 = prompt("¿Con que etiqueta puedo cambiar el tipo de tipografia?                       Opciones: A)font-family - B)p ")
pregunta4=pregunta4.toLowerCase()
if (pregunta4==respuestas[6]) {
cuartaPregunta.innerHTML='<h4> 4-¿Con que etiqueta puedo cambiar el tipo de tipografia?</h4><p> •Tu respuesta es correcta</p>'
cuartaPregunta.style.color ='green'
}
if (pregunta4==respuestas[7]) {
cuartaPregunta.innerHTML='<h4> 4-¿Con que etiqueta puedo cambiar el tipo de tipografia?</h4><p> •Tu respuesta es incorrecta . La etiqueta correcta es font-family</p>'
cuartaPregunta.style.color ='red'
}
if (pregunta4=='') {
cuartaPregunta.innerHTML='<h4> 4-¿Con que etiqueta puedo cambiar el tipo de tipografia?</h4><p> •No respuestondiste nada . La respuesta correcta es font-family</p>'
cuartaPregunta.style.color ='red'
}
pregunta4=pregunta4.toLowerCase()



var quintaPregunta = document.getElementById('pregunta5')
quintaPregunta.style.height='auto'
quintaPregunta.style.overflow='hidden'
var pregunta5 = prompt("¿Con que etiqueta puedo cambiar el tamaño de la letra?                           Opciones: a)h6 - b)font-size")
pregunta5=pregunta5.toLowerCase()
if (pregunta5==respuestas[8]) {
quintaPregunta.innerHTML='<h4> 5-¿Con que etiqueta puedo cambiar el tamaño de la letra?</h4><p> •Tu respuesta es incorrecta . La etiqueta correcta es font-size</p>'
quintaPregunta.style.color ='red'
}
if (pregunta5==respuestas[9]) {
quintaPregunta.innerHTML='<h4> 5-¿Con que etiqueta puedo cambiar el tamaño de la letra?</h4><p> •Tu respuesta es correcta</p>'
quintaPregunta.style.color ='green'
}
if (pregunta5=='') {
quintaPregunta.innerHTML='<h4> 5-¿Con que etiqueta puedo cambiar el tamaño de la letra?</h4><p> •No respuestondiste nada . La respuesta correcta es font-size</p>'
quintaPregunta.style.color ='red'
}


var footer = document.getElementById('footer')
footer.innerHTML ='<h4>Desarrollo de JabaScript -JS 6/9/2020-</h4>'