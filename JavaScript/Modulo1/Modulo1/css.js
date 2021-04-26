var principal = document.getElementById('principal')
principal.style.height='1300px'
principal.style.border='0px solid #000'
principal.style.margin='auto'

var logo = document.getElementById('logo')
logo.innerHTML='<h1> Desarollo de JavaScript</h1>'
logo.style.height='100px'
logo.style.border='0px solid #000'
logo.style.float ='left'
logo.style.fontFamily='century gothic'

var articulo = document.getElementById('articulo')
articulo.innerHTML='<h2>Respuestas</h2>'
articulo.style.height='auto'
articulo.style.overflow='hidden'
articulo.style.marginTop='30px'


var slide = document.getElementById('slide')
slide.innerHTML='<img src="img/fondocss.jpg" width="1200" height="500 ">'
slide.style.marginTop='-5px'
slide.style.height='500px'




var semititulo =document.getElementsByTagName('h2')
semititulo[0].style.height='20px'
semititulo[0].style.marginTop='35px'
semititulo[0].style.fontFamily='"century gothic"'
semititulo[0].style.fontSize='30px'


var respuestas =["border","height","title","p","color","h1","font-family","p","h6","font-size"]
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
primerPregunta.innerHTML='<h4>¿Cual es la etiqueta para poner un borde?</h4><p> •No respuestondiste nada . La respuesta correcta es Border</p>'
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
var pregunta5 = prompt("¿Con que etiqueta puedo cambiar el tamaño de la letra?                           Opciones: h6 - font-size")
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
quintaPregunta.innerHTML='<h4> 5-¿Que es aire?</h4><p> •No respuestondiste nada . La respuesta correcta es font-size</p>'
quintaPregunta.style.color ='red'
}


var footer = document.getElementById('footer')
footer.innerHTML ='<p>Desarrollo de JabaScript -JS 6/9/2020-<br>Para mas contenido <a href="https://campus.utnba.centrodeelearning.com/"> aqui</a></p>'