



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

var logo = document.getElementById('logo')
logo.innerHTML='<h1> Desarollo de JavaScript</h1>'
logo.style.fontSize ='18px'
logo.style.fontFamily='"century gothic"'
logo.style.color='white'

var footer = document.getElementById('footer')
footer.innerHTML ='<h4>Desarrollo de JabaScript -JS 6/9/2020-</h4>'