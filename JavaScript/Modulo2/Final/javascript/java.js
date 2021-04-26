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
articulo.style.marginTop='25px'


var semititulo =document.getElementsByTagName('h2')
semititulo[0].style.height='20px'
semititulo[0].style.marginTop='35px'
semititulo[0].style.fontFamily='"century gothic"'
semititulo[0].style.fontSize='30px'



var respuestas =["prompt","title","var","p","a","b","length","for","sort","slice"]
var primerPregunta = document.getElementById('pregunta1')
primerPregunta.style.height='auto'
primerPregunta.style.overflow='hidden'
var pregunta1 = prompt("Caja de texto en la que podemos introducir contenido y muestra dos botones ,Aceptar y Cancelar                                                               Opciones:  Prompt - Title ")
pregunta1=pregunta1.toLowerCase()
if (pregunta1==respuestas[0]) {
primerPregunta.innerHTML='<h4> 1-Caja de texto en la que podemos introducir contenido y muestra dos botones ,Aceptar y Cancelar</h4><p>  •Su respuesta fue correcta</p>'
primerPregunta.style.color ='green'
}
if (pregunta1==respuestas[1]) {
primerPregunta.innerHTML='<h4> 1-Caja de texto en la que podemos introducir contenido y muestra dos botones ,Aceptar y Cancelar</h4><p> •Su respuesta fue incorrecta . La respuesta correcta es prompt () .Esta comando muestra una caja de texto en la que el usuario puede introducir contenidos. También muestra dos botones, Aceptar y Cancelar. </p>'
primerPregunta.style.color ='red'
}
if (pregunta1=='') {
primerPregunta.innerHTML='<h4> 1-Caja de texto en la que podemos introducir contenido y muestra dos botones ,Aceptar y Cancelar</h4><p> •No respuestondiste nada . La respuesta correcta es prompt () .Esta comando muestra una caja de texto en la que el usuario puede introducir contenidos. También muestra dos botones, Aceptar y Cancelar.</p>'
primerPregunta.style.color ='red'
}


var segundaPregunta = document.getElementById('pregunta2')
segundaPregunta.style.height='auto'
segundaPregunta.style.overflow='hidden'
var pregunta2 = prompt("¿Con que comando podes declarar una variable?                                                      Opciones:  Var - p ")
pregunta2=pregunta2.toLowerCase()
if (pregunta2==respuestas[2]) {
segundaPregunta.innerHTML='<h4> 2-¿Con que comando podes declarar una variable?</h4><p> •Tu respuesta es correcta</p>'
segundaPregunta.style.color ='green'
}
if (pregunta2==respuestas[3]) {
segundaPregunta.innerHTML='<h4> 2-¿Con que comando podes declarar una variable?</h4><p> •Tu respuesta es incorrecta porque aunque en Javascript no es estrictamente necesario declarar una variable antes de utilizarla debemos declarar la nueva variable haciendo uso de la palabra reservada “var”</p>'
segundaPregunta.style.color ='red'
}
if (pregunta2=='') {
segundaPregunta.innerHTML='<h4> 2-¿Con que comando podes declarar una variable?</h4><p> •No respuestondiste nada . La respuesta correcta es que para declarar una variable antes de utilizarla debemos declarar la nueva variable haciendo uso de la palabra reservada “var”</p>'
segundaPregunta.style.color ='red'
}









var tercerPregunta = document.getElementById('pregunta3')
tercerPregunta.style.height='auto'
tercerPregunta.style.overflow='hidden'
var pregunta3 = prompt("¿Como es la forma correcta de nombrar a una variable?             A)1variable  B)primerVariable")
pregunta3=pregunta3.toLowerCase()
if (pregunta3==respuestas[5]) {
tercerPregunta.innerHTML='<h4> 3-¿Como es la forma correcta de nombrar a una variable?</h4><p> •Tu respuesta es correcta</p>'
tercerPregunta.style.color ='green'
}
if (pregunta3==respuestas[4]) {
tercerPregunta.innerHTML='<h4> 3-¿Como es la forma correcta de nombrar a una variable?</h4><p> •Tu respuesta es incorrecta porque no podemos declarar una variable que comience con un número</p>'
tercerPregunta.style.color ='red'
}
if (pregunta3=='') {
tercerPregunta.innerHTML='<h4> 3-¿Como es la forma correcta de nombrar a una variable?</h4><p> •No respuestondiste nada . La respuesta correcta es primerVariable porque no podemos declarar una variable que comience con un número</p>'
tercerPregunta.style.color ='red'
}





var cuartaPregunta = document.getElementById('pregunta4')
cuartaPregunta.style.height='auto'
cuartaPregunta.style.overflow='hidden'
var pregunta4 = prompt("Comando utilizado para averiguar la longitud de un vector              Opciones: Length - For ")
pregunta4=pregunta4.toLowerCase()
if (pregunta4==respuestas[6]) {
cuartaPregunta.innerHTML='<h4> 4-Comando utilizado para averiguar la longitud de un vector</h4><p> •Tu respuesta es correcta</p>'
cuartaPregunta.style.color ='green'
}
if (pregunta4==respuestas[7]) {
cuartaPregunta.innerHTML='<h4> 4-Comando utilizado para averiguar la longitud de un vector</h4><p> •Tu respuesta es incorrecta porque podemos averiguar la longitud de un vector (cuantos elementos contiene) exactamente de la misma manera que determinas la longitud (en caracteres) de una cadenau . Utilizando la propiedad length.</p>'
cuartaPregunta.style.color ='red'
}
if (pregunta4=='') {
cuartaPregunta.innerHTML='<h4> 4-Comando utilizado para averiguar la longitud de un vector</h4><p> •No respuestondiste nada . La respuesta correcta es que podemos averiguar la longitud de un vector (cuantos elementos contiene) exactamente de la misma manera que determinas la longitud (en caracteres) de una cadena . Utilizando la propiedad length.</p>'
cuartaPregunta.style.color ='red'
}




var quintaPregunta = document.getElementById('pregunta5')
quintaPregunta.style.height='auto'
quintaPregunta.style.overflow='hidden'
var pregunta5 = prompt("Comando para ordenar alfabeticamnete un array                              Opciones:  Sort - Slice ")
pregunta5=pregunta5.toLowerCase()
if (pregunta5==respuestas[8]) {
quintaPregunta.innerHTML='<h4> 4-Comando para ordenar alfabeticamnete un array</h4><p> •Tu respuesta es correcta</p>'
quintaPregunta.style.color ='green'
}
if (pregunta5==respuestas[9]) {
quintaPregunta.innerHTML='<h4> 5-Comando para ordenar alfabeticamnete un array</h4><p> •Tu respuesta es incorrecta porque el método Sort es muy útil cuando tenemos un array con elementos string, pues estos serán ordenados alfabéticamente.</p>'
quintaPregunta.style.color ='red'
}
if (pregunta5=='') {
quintaPregunta.innerHTML='<h4> 5-Comando para ordenar alfabeticamnete un array</h4><p> •No respuestondiste nada . La respuesta correcta es Sort este método es muy útil cuando tengamos un array con elementos string, pues estos serán ordenados alfabéticamente.</p>'
quintaPregunta.style.color ='red'
}

var footer = document.getElementById('footer')
footer.innerHTML ='<h4>Desarrollo de JabaScript -JS 6/9/2020-</h4>'