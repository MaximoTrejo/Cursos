var principal = document.getElementById('principal')
principal.style.height='1300px'
principal.style.border='0px solid #000'
principal.style.margin='auto'

var nombre = prompt("Escriba su nombre")

var bienvenido =document.getElementById('bienvenido')
bienvenido.innerHTML='<p> • Bienvenid@  '+ nombre + ' esta es la integradora del Modulo 1 de  Maximo Trejo , la pagina te invita a infromarte sobre HTML ,CSS y JavaScrips para poder responder las preguntas que se encuentran en las otras secciones </p>'
bienvenido.style.height='auto'
bienvenido.style.overflow='hidden'
bienvenido.style.border='0px solid #000'

var parrafos =document.getElementsByTagName('p')
parrafos[0].style.fontFamily='"century gothic"'
parrafos[0].style.color='#4a9ff6'

var logo = document.getElementById('logo')
logo.innerHTML='<h1> Desarollo de JavaScript</h1>'
logo.style.height='100px'
logo.style.border='0px solid #000'
logo.style.float ='left'
logo.style.fontFamily='"century gothic"'

var slide = document.getElementById('slide')
slide.innerHTML='<img src="img/slide.jpg" width="1200" height="500 ">'
slide.style.marginTop='-5px'
slide.style.height='500px'

var info =document.getElementById('info')
info.innerHTML='<section class= "izq"><p><img src="img/html.png" align="left" width="150"><h2>HTML</h2></p>El lenguaje de marcado de hipertexto ( HTML ) es el lenguaje de marcado estándar para documentos diseñados para mostrarse en un navegador web . Puede ser asistido por tecnologías tales como hojas de estilo en cascada (CSS) y lenguajes de programación como JavaScript .Los navegadores web reciben documentos HTML de un servidor web o del almacenamiento local y convierten los documentos en páginas web multimedia. HTML describe la estructura de una página web de forma semántica y originalmente incluía señales para la apariencia del documento. HTML puede incrustar programas escritos en un lenguaje de secuencias de comandos como JavaScript , lo que afecta el comportamiento y el contenido de las páginas web. La inclusión de CSS define la apariencia y el diseño del contenido.<br><br>   •Barra de navegación : Header<br>   •Parrafo: p<br>   •Cuerpo del documento:Body<br>   •Boton : Button<br>   •Imagen: img</section><section class="izq"><img src="img/css.png" align="left" width="150"><h2>CSS</h2>Hojas de estilo en cascada ( CSS ) es un lenguaje de hojas de estilo que se utiliza para describir la presentación de un documento escrito en un lenguaje de marcado como HTML . CSS es una tecnología fundamental de la World Wide Web , junto con HTML y JavaScript . CSS está diseñado para permitir la separación de la presentación y el contenido, incluidos el diseño , los colores y las fuentes . Esta separación puede mejorar la accesibilidad del contenido , proporcionar más flexibilidad y control en la especificación de las características de la presentación, permitir que varias páginas web compartan el formato especificando el CSS relevante en un archivo .css .<br><br>  •Borde : border<br>   •Titulo: Title<br>   •Color a las letras: Color<br>   •Cambiar el tipo de tipografia: Font-family<br>   •Cambiar el tamaño de la letra : Font-size</section><section class="izq"><img src="img/java.png" align="left" width="150"><h2>JavaScript</h2>JavaScript, es un lenguaje de programación de páginas web de lado del cliente, esto significa, que cuando estamos viendo una página que utiliza JavaScript, hemos descargado el código a nuestro navegador y nuestro navegador lo está ejecutando de acuerdo con las acciones realizadas en la página. Actualmente es una pieza fundamental en el desarrollo de aplicaciones web y es usado por las grandes compañías como Google, Yahoo, Microsoft, etc y se ha convertido en una herramienta tan poderosa, que su conocimiento es uno de los puntos más valorados en las búsquedas laborales de desarrolladores web.<br><br>   • Caja de texto en la que podemos introducir contenido y muestra dos botones ,Aceptar y Cancelar : Prompt<br>   • Declarar una variable: var<br>   •Forma correcta de nombrar a una variable : primerVariable<br>   •Averiguar la longitud de un vector: Length<br>  •Ordenar alfabeticamnete un array : Sort</section>'
info.style.height='auto'
info.style.overflow='hidden'

var footer = document.getElementById('footer')
footer.innerHTML ='<p>Desarrollo de JabaScript -JS 6/9/2020-<br>Para mas contenido <a href="https://campus.utnba.centrodeelearning.com/"> aqui</a></p>'
footer.style.marginTop='50px'