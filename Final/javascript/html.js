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

var respuestas=["header","h1","p","h4","title","body","button","width","img","label"]
var primerPregunta = document.getElementById('pregunta1')
primerPregunta.style.height='auto'
primerPregunta.style.overflow='hidden'
var pregunta1 = prompt("¿Cuel es la etiqueta para hacer una barra de navegacion?                       Opciones: Header - h1")
pregunta1=pregunta1.toLowerCase()
if (pregunta1==respuestas[0]) {
primerPregunta.innerHTML='<h4> 1-¿Cuel es la etiqueta para hacer una barra de navegacion?</h4><p>  •Su respuesta fue correcta</p>'
primerPregunta.style.color ='green'
}
if (pregunta1==respuestas[1]) {
primerPregunta.innerHTML='<h4> 1-¿Cuel es la etiqueta para hacer una barra de navegacion?</h4><p> •Su respuesta fue incorrecta . La etiqueta correcta es Header</p>'
primerPregunta.style.color ='red'
}
if (pregunta1=='') {
primerPregunta.innerHTML='<h4> 1-¿Cuel es la etiqueta para hacer una barra de navegacion?</h4><p> •No respuestondiste nada .La respuesta correcta es Header</p>'
primerPregunta.style.color ='red'
}


var segundaPregunta = document.getElementById('pregunta2')
segundaPregunta.style.height='auto'
segundaPregunta.style.overflow='hidden'
var pregunta2 = prompt("¿Cuel es la etiqueta para escribir un parrafo?                              Opciones:  p - H4")
pregunta2=pregunta2.toLowerCase()
if (pregunta2==respuestas[2]) {
segundaPregunta.innerHTML='<h4> 2-¿Cuel es la etiqueta para escribir un parrafo?</h4><p> •Tu respuesta es correcta</p>'
segundaPregunta.style.color ='green'
}
if (pregunta2==respuestas[3]) {
segundaPregunta.innerHTML='<h4> 2-¿Cuel es la etiqueta para escribir un parrafo?</h4><p> •Tu respuesta es incorrecta . La etiqueta correcta es p </p>'
segundaPregunta.style.color ='red'
}
if (pregunta2=='') {
segundaPregunta.innerHTML='<h4> 2-¿Cuel es la etiqueta para escribir un parrafo??</h4><p> •No respuestondiste nada . La respuesta correcta es p </p>'
segundaPregunta.style.color ='red'
}









var tercerPregunta = document.getElementById('pregunta3')
tercerPregunta.style.height='auto'
tercerPregunta.style.overflow='hidden'
var pregunta3 = prompt("¿Como se llama la etiqueta que le da cuerpo al documento?                      Opcional: title - body")
pregunta3=pregunta3.toLowerCase()
if (pregunta3==respuestas[4]) {
tercerPregunta.innerHTML='<h4> 3-¿Como se llama la etiqueta que le da cuerpo al documento?</h4><p> •Tu respuesta es incorrecta . El nombre de la etiqueta es Body</p>'
tercerPregunta.style.color ='red'
}
if (pregunta3==respuestas[5]) {
tercerPregunta.innerHTML='<h4> 3-¿Con que comando poder escrivir un titulo?</h4><p> •Tu respuesta es correcta</p>'
tercerPregunta.style.color ='green'
}
if (pregunta3=='') {
tercerPregunta.innerHTML='<h4> 3-¿Como se llama la etiqueta que le da cuerpo al documento?</h4><p> •No respuestondiste nada . La respuesta correcta es Body</p>'
tercerPregunta.style.color ='red'
}





var cuartaPregunta = document.getElementById('pregunta4')
cuartaPregunta.style.height='auto'
cuartaPregunta.style.overflow='hidden'
var pregunta4 = prompt("¿Como se llama la etiqueta para definir un boton ?                      Opciones: button - width")
pregunta4=pregunta4.toLowerCase()
if (pregunta4==respuestas[6]) {
cuartaPregunta.innerHTML='<h4> 4-¿Como se llama la etiqueta para definir un boton ?</h4><p> •Tu respuesta es correcta</p>'
cuartaPregunta.style.color ='green'
}
if (pregunta4==respuestas[7]) {
cuartaPregunta.innerHTML='<h4> 4-¿Como se llama la etiqueta para definir un boton ?</h4><p> •Tu respuesta es incorrecta . El nombre de la etiqueta es button</p>'
cuartaPregunta.style.color ='red'
}
if (pregunta4=='') {
cuartaPregunta.innerHTML='<h4> 4-¿Como se llama la etiqueta para definir un boton ?</h4><p> •No respuestondiste nada . La respuesta correcta es button</p>'
cuartaPregunta.style.color ='red'
}



var quintaPregunta = document.getElementById('pregunta5')
quintaPregunta.style.height='auto'
quintaPregunta.style.overflow='hidden'
var pregunta5 = prompt("¿Cual es la etiqueta para definir una imagen?                                      Opciones: img - label")
pregunta5=pregunta5.toLowerCase()
if (pregunta5==respuestas[8]) {
quintaPregunta.innerHTML='<h4> 5-¿Cual es la etiqueta para definir una imagen?</h4><p> •Tu respuesta es correcta</p>'
quintaPregunta.style.color ='green'
}
if (pregunta5==respuestas[9]) {
quintaPregunta.innerHTML='<h4> 5-¿Cual es la etiqueta para definir una imagen?</h4><p> •Tu respuesta es incorrecta . El nombre de la etiqueta es img</p>'
quintaPregunta.style.color ='red'
}
if (pregunta5=='') {
quintaPregunta.innerHTML='<h4> 5-¿Cual es la etiqueta para definir una imagen?</h4><p> •No respuestondiste nada . La respuesta correcta es img</p>'
quintaPregunta.style.color ='red'
}

var footer = document.getElementById('footer')
footer.innerHTML ='<h4>Desarrollo de JabaScript -JS 6/9/2020-</h4>'